import { API_URL } from './settings'

export default async function fetchData (url) {
  const apiURL = `${API_URL}${url}`

  const response = await fetch(apiURL)
  const data = await response.json()

  return data
}