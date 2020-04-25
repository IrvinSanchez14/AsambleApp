import * as CONSTANTS from '../../constants/index';

const initialState = {
  token: null,
  username: null,
  id: null,
  nombre: null,
  dui: null,
  login: false,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.LOGIN.LOGIN_ACCESS: {
      return {
        ...state,
        loading: true,
      };
    }
    case CONSTANTS.LOGIN.LOGIN_ACCESS_SUCCESS: {
      return {
        ...state,
        loading: false,
        login: true,
        token: action.response.data.token,
        username: action.response.data.username,
        id: action.response.data.id,
        nombre: action.response.data.nombre,
        dui: action.response.data.dui,
      };
    }
    default: {
      return state;
    }
  }
};
