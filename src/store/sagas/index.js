import {fork} from 'redux-saga/effects';
// Imports: Redux Sagas
import UsuarioSaga from './usuarios';
import LoginSaga from './login';

export default function* rootSaga() {
  const allSagas = [UsuarioSaga, LoginSaga];
  for (let i = 0; i < allSagas.length; i += 1) {
    yield fork(allSagas[i]);
  }
}
