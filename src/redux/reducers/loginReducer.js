import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, SUCCESS } from "../actions";

const initialState = {
  token: '',
  err: false,
  isAuth: !!localStorage.getItem('token')
};

export const loginReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.token);
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
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        isAuth: false
      }
    default:
      return state;
    }
  }

  