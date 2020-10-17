const URL = 'http://emphasoft-test-assignment.herokuapp.com';
const GET = 'GET';

const getUsers = (token) => {
  return fetch(URL+'/api/v1/users/', {
    method: GET,
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    },
  }).then(responce => responce.json());
}

export default getUsers;;