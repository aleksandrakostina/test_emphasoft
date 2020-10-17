const URL = 'http://emphasoft-test-assignment.herokuapp.com';
const POST = 'POST';

const getToken = (username, password) => {
  return fetch(URL+'/api-token-auth/', {
    method: POST,
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "username": username,
      "password": password
    }),
  }).then(response => {
    if(response.ok) {
      return response.json();
    } else {
      throw new Error();
    }
  })   
}

export default getToken;;