import { useEffect, useState } from 'react'
import fetchData from '../services/fetchData'

export function useFetchData (url) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchData(url)
      .then((data) => {
        setData(data)
      })
      .catch((error) => {
        setError(error)
      })
  }, [url])

  return { data, error }
}