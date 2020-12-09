import { toast } from "react-toastify";
import { stopSubmit } from "redux-form";
import { fetchCreate, fetchDelete, fetchEdit, fetchToken, fetchUser, fetchUsers } from "./../api/apiFetch";
import { LOGIN_FAIL, LOGIN_SUCCESS, SET_USERS, LOGOUT, SET_USER, EDIT_USER, CREATE_USER, ERROR, SELECTED, 
  OPEN_EDIT_MODAL, CLOSE_EDIT_MODAL, OPEN_CREATE_MODAL, CLOSE_CREATE_MODAL, LOADING, LOADED, DELETE_USER, OPEN_DELETE_MODAL, CLOSE_DELETE_MODAL } from "./actions";

export function loginSuccess(token, user) {
  return { type: LOGIN_SUCCESS, token, user };
}

export function loginFail() {
  return { type: LOGIN_FAIL };
}

export function setUsersSuccess(users) {
  return { type: SET_USERS, users};
}

export function setUserSuccess(user) {
  return { type: SET_USER, user };
}

export function editUserSuccess(user) {
  return { type: EDIT_USER, user };
}

export function createUserSuccess(user) {
  return { type: CREATE_USER, user };
}

export function createError(error) {
  return { type: ERROR, error };
}

export function setSelected(id) {
  return { type: SELECTED, id};
}

export function openEditModal() {
  return { type: OPEN_EDIT_MODAL };
}

export function closeEditModal() {
  return { type: CLOSE_EDIT_MODAL };
}

export function openCreateModal() {
  return { type: OPEN_CREATE_MODAL };
}

export function closeCreateModal() {
  return { type: CLOSE_CREATE_MODAL };
}

export function openDeleteModal(id) {
  return { type: OPEN_DELETE_MODAL, id };
}

export function closeDeleteModal() {
  return { type: CLOSE_DELETE_MODAL };
}

export function loading() {
  return { type: LOADING };
}

export function loaded() {
  return { type: LOADED };
}

export function logout() {
  return { type: LOGOUT };
};

export function deleteUserSuccess(id) {
  return { type: DELETE_USER, id };
}

export const login = (data) => (dispatch) => {
  return fetchToken(data)
    .then(token => {
      dispatch(loginSuccess(token.token, data.username));
    })
    .catch(err => {
      dispatch(loginFail());
      dispatch(stopSubmit("authForm", {_error: "Invalid username or password. Please try again"}));
    })
};

export const getUsers = () => (dispatch) => {
  dispatch(loading());
  return fetchUsers()
    .then(users => {
      dispatch(setUsersSuccess(users));
      dispatch(loaded());
    })
    .catch(err => {
      dispatch(loaded());
      dispatch(createError(err.message));   
      toast.error(err.message);
    })
}

export const getUser = (id) => (dispatch) => {
  return fetchUser(id)
    .then(user => {
      dispatch(setUserSuccess(user));
      dispatch(openEditModal());
    })
    .catch(err => {    
      dispatch(createError(err.message));
      if(err.message.detail) {
        toast.error(err.message.detail);
      } else {
        toast.error('Error');
      }
    })
}

export const editUser = (id, user) => (dispatch) => {
  return fetchEdit(id, user)
  .then(data => {
    dispatch(editUserSuccess(data));
    dispatch(closeEditModal());
    toast.success('User updated successfully!');
  })
  .catch(err => {
    dispatch(createError(err.message));
    if(err.message.detail) {
      toast.error(err.message.detail);
    } else {
      toast.error('Error');
    }
  })
}

export const createUser = (user) => (dispatch) => {
  return fetchCreate(user)
  .then(data => {
    dispatch(createUserSuccess(data));
    dispatch(setSelected(data.id));
    dispatch(closeCreateModal());
    toast.success('User created successfully!');
  })
  .catch(err => {
    dispatch(createError(err.message));
    if(err.message.username) {
      toast.error(err.message.username[0]);
    } else {
      toast.error('Error');
    }
  })
}

export const deleteUser = (id) => (dispatch) => {
  return fetchDelete(id)
  .then(data => {
    dispatch(deleteUserSuccess(id));
    dispatch(closeDeleteModal());
    toast.success('User removed successfully!');
  })
  .catch(err => {
    dispatch(createError(err.message));
    if(err.message.detail) {
      toast.error(err.message.detail);
    } else {
      toast.error('Error');
    }
  })
}