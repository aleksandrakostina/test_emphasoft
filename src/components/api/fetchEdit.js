const URL = 'http://emphasoft-test-assignment.herokuapp.com';
const PUT = 'PUT';

const fetchEdit = (token, id, user) => {
  return fetch(URL+`/api/v1/users/${id}/`, {
    method: PUT,
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

  export default fetchEdit;