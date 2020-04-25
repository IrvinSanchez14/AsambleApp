import * as CONSTANTS from '../../constants';

export const loginAccess = (object) => {
  return {
    type: CONSTANTS.LOGIN.LOGIN_ACCESS,
    object: object,
  };
};

export const loginAccessSuccess = (response) => {
  return {
    type: CONSTANTS.LOGIN.LOGIN_ACCESS_SUCCESS,
    response: response,
  };
};

export const loginAccessFail = (error) => {
  return {
    type: CONSTANTS.LOGIN.LOGIN_ACCESS_FAIL,
    error: error,
  };
};
