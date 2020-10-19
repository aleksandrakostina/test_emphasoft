import { CLEAR_CREATE_USER, CLEAR_EDIT_USER, CREATE_USER, EDIT_USER, GET_USER, GET_USERS } from "../actions";

const initialState = {
  users: [],
  newUser: null,
  user: null,
  editUser: null,
  createUser: null
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
    case CLEAR_EDIT_USER:
      return {
        ...state,
        editUser: null
      }
    case CLEAR_CREATE_USER:
      return {
        ...state,
        createUser: null
      }
    default:
      return state;
    }
  }