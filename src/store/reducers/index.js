import {combineReducers} from 'redux';
import ExampleRedux from './example';
import Usuario from './usuarios';

const rootReducer = combineReducers({
  App: ExampleRedux,
  ...Usuario,
});

export default rootReducer;
