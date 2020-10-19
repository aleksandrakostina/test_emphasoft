import { apiFetch, URL, PUT } from "./apiFetch"

export const fetchEdit = (id, user) => {
  return apiFetch(URL+`/api/v1/users/${id}/`, PUT, user)
}