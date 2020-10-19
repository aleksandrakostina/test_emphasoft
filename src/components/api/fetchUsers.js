import { apiFetch, URL } from './apiFetch';

export const fetchUsers = () => {
  return apiFetch(URL+'/api/v1/users/');
}