import io from 'socket.io-client';
import {eventChannel, delay} from 'redux-saga';
import {take, call, put, fork, race, cancelled} from 'redux-saga/effects';

const UPDATE_DATA = 'UPDATE_DATA';
const START_CHANNEL = 'START_CHANNEL';
const STOP_CHANNEL = 'STOP_CHANNEL';

const socketServerURL = 'http://localhost:3001';

const initialState = {
  chartData: []
};

export default (state = initialState, action) => {
  const updatedChartData = [action.payload];
  switch (action.type) {
    case UPDATE_DATA:
      return {chartData: updatedChartData};
    default:
      return state;
  }
};


// action creators for Stop and Start buttons. You can also put them into componentDidMount
export const startChannel = () => ({type: START_CHANNEL});
export const stopChannel = () => ({type: STOP_CHANNEL});

// wrapping functions for socket events (connect, disconnect, reconnect)
let socket;
const connect = () => {
  socket = io(socketServerURL);
  return new Promise((resolve) => {
    console.log('connected');
    socket.on('connect', () => {
      resolve(socket);
    });
  });
};

const disconnect = () => {
  socket = io(socketServerURL);
  return new Promise((resolve) => {
    socket.on('disconnect', () => {
      resolve(socket);
    });
  });
};

const reconnect = () => {
  socket = io(socketServerURL);
  return new Promise((resolve) => {
    socket.on('reconnect', () => {
      resolve(socket);
    });
  });
};

// This is how channel is created
const createSocketChannel = socket => eventChannel((emit) => {
  const handler = (data) => {
    emit(data);
  };
  socket.on('newChartData', handler);
  return () => {
    socket.off('newChartData', handler);
  };
});

// connection monitoring sagas
const listenDisconnectSaga = function* () {
  while (true) {
    yield call(disconnect);
  }
};

const listenConnectSaga = function* () {
  while (true) {
    yield call(reconnect);
  }
};

// Saga to switch on channel.
const listenServerSaga = function* () {
  try {
    const {timeout} = yield race({
      connected: call(connect),
      timeout: delay(2000),
    });
    const socket = yield call(connect);
    const socketChannel = yield call(createSocketChannel, socket);
    yield fork(listenDisconnectSaga);
    yield fork(listenConnectSaga);

    while (true) {
      const payload = yield take(socketChannel);
      yield put({type: UPDATE_DATA, payload});
    }
  } catch (error) {
    console.log(error);
  } finally {
    if (yield cancelled()) {
      socket.disconnect(true);
    }
  }
};

// saga listens for start and stop actions
export const startStopChannel = function* () {
  while (true) {
    yield take(START_CHANNEL);
    yield race({
      task: call(listenServerSaga),
      cancel: take(STOP_CHANNEL),
    });
  }
};



