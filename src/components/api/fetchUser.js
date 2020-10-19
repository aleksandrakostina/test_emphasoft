const URL = 'http://emphasoft-test-assignment.herokuapp.com';
const GET = 'GET';

const fetchUser = (token, id) => {
  return fetch(URL+`/api/v1/users/${id}/`, {
    method: GET,
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    },
    }).then(response => {
      if(response.ok) {
        return response.json();
      } else {
        throw new Error();
      }
    })
  }

  export default fetchUser;