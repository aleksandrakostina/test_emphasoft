import { CLOSE_CREATE_MODAL, CLOSE_EDIT_MODAL, OPEN_CREATE_MODAL, OPEN_EDIT_MODAL, CREATE_USER, EDIT_USER, ERROR, SET_USER, SET_USERS, LOGOUT, SELECTED, LOADING, LOADED, DELETE_USER, OPEN_DELETE_MODAL, CLOSE_DELETE_MODAL } from "../actions";

const initialState = {
  users: [],
  user: null,
  selected: null,
  error: null,
  isOpenEditModal: false,
  isOpenCreateModal: false,
  isOpenDeleteModal: false,
  removeUser: null,
  isLoading: false
};

export const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.users
      }
    case SET_USER:
      return {
        ...state,
        user: action.user
      }
    case CREATE_USER:
      return {
        ...state,
        users: [...state.users, action.user]
      }
    case EDIT_USER:
      const newUsers = state.users.map(user => {
        if(user.id === action.user.id) {
          const newUser = {
            ...user,
            first_name: action.user.first_name,
            is_active: action.user.is_active,
            last_name: action.user.last_name,
            username: action.user.username
          };
          return newUser;
        } else {
          return user;
        }
      });
      return {
        ...state,
        user: null,
        users: newUsers,
      }
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id),
        selected: null
      }
    case ERROR:
      return {
        ...state,
        error: action.error
      }
    case LOGOUT:
      return {
        ...state,
        users: [],
        selected: null
      }
    case SELECTED:
      return {
        ...state,
        selected: action.id
      }
    case OPEN_EDIT_MODAL:
      return {
        ...state,
        isOpenEditModal: true
      }
    case CLOSE_EDIT_MODAL:
      return {
        ...state,
        isOpenEditModal: false,
        user: null
      }
    case OPEN_CREATE_MODAL:
      return {
        ...state,
        isOpenCreateModal: true
      }
    case CLOSE_CREATE_MODAL:
      return {
        ...state,
        isOpenCreateModal: false
      }
    case OPEN_DELETE_MODAL:
      return {
        ...state,
        isOpenDeleteModal: true,
        removeUser: state.users.find(user => user.id === action.id)
      }
    case CLOSE_DELETE_MODAL:
      return {
        ...state,
        isOpenDeleteModal: false,
        removeUser: null
      }
    case LOADING:
      return {
        ...state,
        isLoading: true
      }
    case LOADED:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state;
    }
  }