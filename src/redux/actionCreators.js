import getToken from "../components/api/getToken";
import getUsers from "../components/api/getUsers";
import { LOGIN_FAIL, LOGIN_SUCCESS, GET_USERS } from "./actions";

export function loginSuccess() {
  return { type: LOGIN_SUCCESS };
}

export function loginFail(err) {
  return { type: LOGIN_FAIL, err };
}

export function getData(users) {
  return { type: GET_USERS, users}
}

export const login = (username, password) => (dispatch) => {
  return getToken(username, password)
    .then(data => {
      console.log(data.token);
      dispatch(loginSuccess());
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', username);
    })
    .catch(err => {
      dispatch(loginFail(err));
    })
};

export const get = (token) => (dispatch) => {
  return getUsers(token)
    .then(users => {
      dispatch(getData(users))
    })
    .catch(err => {
      dispatch(loginFail(err));
    })
}