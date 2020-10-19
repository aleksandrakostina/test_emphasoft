export const URL = 'http://emphasoft-test-assignment.herokuapp.com';
export const POST = 'POST';
export const GET = 'GET';
export const PUT = 'PUT';

export const apiFetch = (url, method = GET, body = {}, token = true) => {
  let obj = {
    method: method,
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
    }
  };
  if(token) {
    const TOKEN = localStorage.getItem('token');
    obj = {
      ...obj,
      headers: {
        ...obj.headers,
        'Authorization': `Token ${TOKEN}`
      }
    }
  }
  if(method !== GET) {
    obj = {
      ...obj,
      body: JSON.stringify(body),
    } 
  }
  return fetch(url, obj)
    .then(response => {
      if(response.ok) {
        return response.json();
      } else {
        throw new Error();
      }
    })
}