import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from "../actions";

const initialState = {
  err: false,
  isAuth: !!localStorage.getItem('token'),
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

  