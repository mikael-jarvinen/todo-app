import Axios from 'axios'
import { createContext, useContext } from 'react'

export const getAxios = () => {
  let token: undefined | null | string = undefined
  if (typeof window !== 'undefined') token = localStorage.getItem('token')

  return Axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout: 5000,
    headers: {
      accept: 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  })
}

const AxiosContext = createContext(
  Axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout: 5000,
    headers: {
      accept: 'application/json',
    },
  }),
)

export const useAxios = () => useContext(AxiosContext)

export default AxiosContext.Provider
