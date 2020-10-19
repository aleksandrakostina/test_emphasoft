const URL = 'http://emphasoft-test-assignment.herokuapp.com';
const POST = 'POST';

const fetchCreate = (token, user) => {
  return fetch(URL+`/api/v1/users/`, {
    method: POST,
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    },
    body: JSON.stringify(user)
    }).then(response => {
      if(response.ok) {
        return response.json();
      } else {
        throw new Error();
      }
    })
  }

  export default fetchCreate;