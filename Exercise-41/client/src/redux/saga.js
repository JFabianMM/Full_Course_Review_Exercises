import {all} from 'redux-saga/effects';
import {startStopChannel} from '../modules/chartData';

export default function* rootSaga() {
  yield all([
    startStopChannel(),
  ]);
}
