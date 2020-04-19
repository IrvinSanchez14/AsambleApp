import * as CONSTANTS from '../../constants/index';

const initialState = {
  stateExample: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.EXAMPLE_REDUX_STORE: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};
