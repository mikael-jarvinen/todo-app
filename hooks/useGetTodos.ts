import { useQuery } from 'react-query'
import { useAxios } from 'contexts/AxiosProvider'

export default function useGetTodos() {
  const axios = useAxios()

  return useQuery<Todo[]>('todos', async () => (await axios.get<Todo[]>('/todos')).data)
}
