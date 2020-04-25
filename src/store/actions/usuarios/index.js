import * as CONSTANTS from '../../constants';

export const createUsuario = (object) => {
  return {
    type: CONSTANTS.USUARIOS.CREATE_USER,
    object: object,
  };
};

export const createUsuarioSuccess = (response) => {
  return {
    type: CONSTANTS.USUARIOS.CREATE_USER_SUCCESS,
    response: response,
  };
};

export const createUsuarioFail = (error) => {
  return {
    type: CONSTANTS.USUARIOS.CREATE_USER_FAIL,
    error: error,
  };
};
