import { CLEAR, CREATE_USER, EDIT_USER, ERROR, GET_USER, GET_USERS } from "../actions";

const initialState = {
  users: [],
  user: null,
  editUser: null,
  createUser: null,
  error: null
};

export const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.users
      }
    case GET_USER:
      return {
        ...state,
        user: action.user
      }
    case CREATE_USER:
      return {
        ...state,
        createUser: action.user
      }
    case EDIT_USER:
      return {
        ...state,
        editUser: action.user
      }
    case CLEAR:
      return {
        ...initialState
      }
    case ERROR:
      return {
        ...state,
        error: action.error
      }
    default:
      return state;
    }
  }