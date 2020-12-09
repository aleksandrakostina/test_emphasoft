const URL = 'https://emphasoft-test-assignment.herokuapp.com';
const POST = 'POST';
const GET = 'GET';
const PUT = 'PUT';
const DELETE = 'DELETE';

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
        if(method === DELETE) {
          return response;
        } else {
          return response.json();
        }
      } else {
        return response.json()
        .then(data => {
          if(response.ok) {
            return data;
          } else {
            return Promise.reject({status: response.status, message: data});
          }
        });
      }   
    })
}

export const fetchCreate = (user) => {
  return apiFetch(URL+`/api/v1/users/`, POST, user);
}

export const fetchEdit = (id, user) => {
  return apiFetch(URL+`/api/v1/users/${id}/`, PUT, user);
}

export const fetchToken = (data) => {
  return apiFetch(URL+'/api-token-auth/', POST, data, false);
}

export const fetchUser = (id) => {
  return apiFetch(URL+`/api/v1/users/${id}/`);
}

export const fetchUsers = () => {
  return apiFetch(URL+'/api/v1/users/');
}

export const fetchDelete = (id) => {
  return apiFetch(URL+`/api/v1/users/${id}/`, DELETE);
}