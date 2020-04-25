import {combineReducers} from 'redux';
import ExampleRedux from './example';
import Usuario from './usuarios';
import LoginUser from './login';

const rootReducer = combineReducers({
  App: ExampleRedux,
  ...Usuario,
  Acceso: LoginUser,
});

export default rootReducer;
