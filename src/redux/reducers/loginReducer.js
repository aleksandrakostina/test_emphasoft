import { LOGIN_FAIL, LOGIN_SUCCESS, GET_USERS} from "../actions";

const initialState = {
  token: '',
  err: '',
  auth: false
};

export const loginReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        auth: true
      };
    case LOGIN_FAIL: 
      return {
        ...state,
        err: action.err
      };
    default:
      return state;
    }
  }

  