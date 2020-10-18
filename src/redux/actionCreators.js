import fetchToken from "../components/api/fetchToken";
import fetchUsers from "../components/api/fetchUsers";
import { LOGIN_FAIL, LOGIN_SUCCESS, GET_USERS, SUCCESS, LOGOUT } from "./actions";

export function loginSuccess(token) {
  return { type: LOGIN_SUCCESS, token };
}

export function loginFail() {
  return { type: LOGIN_FAIL };
}

export function getData(users) {
  return { type: GET_USERS, users};
}

export function success() {
  return { type: SUCCESS };
}

export function logout() {
  return { type: LOGOUT };
}

export const login = (username, password) => (dispatch) => {
  return fetchToken(username, password)
    .then(data => {
      dispatch(loginSuccess(data.token));
    })
    .catch(err => {
      dispatch(loginFail());
    })
};

export const getUsers = () => (dispatch) => {
  const token = localStorage.getItem('token');
  return fetchUsers(token)
    .then(users => {
      dispatch(getData(users));      
    })
    .catch(err => {  
      dispatch(loginFail());
    })
}