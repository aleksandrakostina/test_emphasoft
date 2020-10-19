import { fetchCreate } from "../components/api/fetchCreate";
import { fetchEdit } from "../components/api/fetchEdit";
import { fetchToken } from "../components/api/fetchToken";
import { fetchUser } from "../components/api/fetchUser";
import { fetchUsers } from "../components/api/fetchUsers";
import { LOGIN_FAIL, LOGIN_SUCCESS, GET_USERS, LOGOUT, GET_USER, EDIT_USER, CLEAR_EDIT_USER, CREATE_USER, CLEAR_CREATE_USER } from "./actions";

export function loginSuccess(token) {
  return { type: LOGIN_SUCCESS, token };
}

export function loginFail() {
  return { type: LOGIN_FAIL };
}

export function getData(users) {
  return { type: GET_USERS, users};
}

export function logout() {
  return { type: LOGOUT };
}

export function getUser(user) {
  return { type: GET_USER, user }
}

export function editUser(user) {
  return { type: EDIT_USER, user }
}

export function clearEditUser() {
  return { type: CLEAR_EDIT_USER }
}

export function createUser(user) {
  return { type: CREATE_USER, user}
}

export function clearCreateUser() {
  return { type: CLEAR_CREATE_USER }
}

export const login = (data) => (dispatch) => {
  return fetchToken(data)
    .then(token => {
      dispatch(loginSuccess(token.token));
    })
    .catch(err => {
      dispatch(loginFail());
      alert("Can't authorizate")
    })
};

export const getUsers = () => (dispatch) => {
  return fetchUsers()
    .then(users => {
      dispatch(getData(users));      
    })
    .catch(err => {  
      dispatch(loginFail());
    })
}

export const get = (id) => (dispatch) => {
  return fetchUser(id)
    .then(user => {
      dispatch(getUser(user));      
    })
    .catch(err => {  
      console.log(err)
    })
}

export const edit = (id, user) => (dispatch) => {
  return fetchEdit(id, user)
  .then(data => {
    dispatch(editUser(data));      
  })
  .catch(err => {  
    console.log(err)
  })
}

export const create = (user) => (dispatch) => {
  return fetchCreate(user)
  .then(data => {
    dispatch(createUser(data));      
  })
  .catch(err => {  
    console.log(err)
  })
}