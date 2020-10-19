import { apiFetch, URL, POST } from "./apiFetch"

export const fetchToken = (data) => {
  return apiFetch(URL+'/api-token-auth/', POST, data, false)
}