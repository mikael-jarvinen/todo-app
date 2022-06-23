import { useAxios } from 'contexts/AxiosProvider'
import { useMutation } from 'react-query'

export default function useRegister() {
  const axios = useAxios()

  return useMutation(
    async (body: RegisterBody) => (await axios.post<LoginResponse>('/register', body)).data,
  )
}
