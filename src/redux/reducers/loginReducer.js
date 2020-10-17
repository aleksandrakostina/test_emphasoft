import { LOGIN_FAIL, LOGIN_SUCCESS, SUCCESS } from "../actions";

const initialState = {
  token: '',
  err: false,
  isAuth: false
};

export const loginReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        err: false,
        isAuth: true
      };
    case LOGIN_FAIL: 
      return {
        ...state,
        isAuth: false,
        err: true
      };
    case SUCCESS:
      return {
        ...state,
        err: false
      }
    default:
      return state;
    }
  }

  