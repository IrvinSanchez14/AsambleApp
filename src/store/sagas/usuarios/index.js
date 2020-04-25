import {put, call, takeEvery} from 'redux-saga/effects';

import * as CONSTANTS from '../../constants';
import * as ACTIONS from '../../actions/usuarios';
import {UsersCLient} from '../../../services/logicService';

const user = new UsersCLient();

export function* crearUsuarioSaga(action) {
  let usuario;
  try {
    usuario = yield call(() =>
      user.createUser(action.object).then((response) => response),
    );
    yield put(ACTIONS.createUsuarioSuccess(usuario));
  } catch (err) {
    /*if (err.response.status === 401) {
			clearLocalStorage();
			locationPage('/');
		}*/
    yield put(ACTIONS.createUsuarioFail(err));
  }
}

export function* createUsuario() {
  yield takeEvery(CONSTANTS.USUARIOS.CREATE_USER, crearUsuarioSaga);
}

export default createUsuario;
