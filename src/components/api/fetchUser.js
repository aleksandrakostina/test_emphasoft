import { apiFetch, URL } from "./apiFetch"

export const fetchUser = (id) => {
  return apiFetch(URL+`/api/v1/users/${id}/`)
}