import {put, call, takeEvery} from 'redux-saga/effects';

import * as CONSTANTS from '../../constants';
import * as ACTIONS from '../../actions/login';
import {authClient} from '../../../services/authServices';

const login = new authClient();

export function* accesoLogin(action) {
  let acceso;
  try {
    acceso = yield call(() =>
      login.loginAuth(action.object).then((response) => response),
    );
    yield put(ACTIONS.loginAccessSuccess(acceso));
  } catch (err) {
    /*if (err.response.status === 401) {
			clearLocalStorage();
			locationPage('/');
		}*/
    yield put(ACTIONS.loginAccessFail(err));
  }
}

export function* loginAccess() {
  yield takeEvery(CONSTANTS.LOGIN.LOGIN_ACCESS, accesoLogin);
}

export default loginAccess;
