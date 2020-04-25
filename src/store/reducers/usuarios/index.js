import * as CONSTANTS from '../../constants/index';

const initialState = {
  listUsuarios: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.USUARIOS.CREATE_USER: {
      return {
        ...state,
        loading: true,
      };
    }
    case CONSTANTS.USUARIOS.CREATE_USER_SUCCESS: {
      return {
        ...state,
        loading: true,
        listUsuarios: action.response.data,
      };
    }
    default: {
      return state;
    }
  }
};
