import { apiFetch, POST, URL } from "./apiFetch"

export const fetchCreate = (user) => {
  return apiFetch(URL+`/api/v1/users/`, POST, user)
}