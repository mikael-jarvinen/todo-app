import { useAxios } from 'contexts/AxiosProvider'
import { useMutation } from 'react-query'

export default function useLogin() {
  const axios = useAxios()

  return useMutation(
    async (body: LoginBody) => (await axios.post<LoginResponse>('/login', body)).data,
    {
      onSuccess: response => {
        const token = response.token

        localStorage.setItem('token', token)

        axios.interceptors.request.use(config => {
          config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token}`,
          }
          return config
        })
      },
    },
  )
}
