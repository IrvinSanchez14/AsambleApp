import {combineReducers} from 'redux';
import ExampleRedux from './example';

const rootReducer = combineReducers({
  App: ExampleRedux,
});

export default rootReducer;
