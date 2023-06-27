import {combineReducers} from 'redux';
import dataReducer from '../modules/chartData';

const rootReducer = combineReducers({
  dataReducer,
});

export default rootReducer;
