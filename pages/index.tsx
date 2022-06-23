import { Box, CircularProgress, Container, Stack, Typography } from '@mui/material'
import useGetTodos from 'hooks/useGetTodos'
import type { NextPage } from 'next'
import TodoItem from '@components/TodoItem'

const Home: NextPage = () => {
  const todosQuery = useGetTodos()

  if (todosQuery.isLoading) {
    return <CircularProgress />
  }

  return (
    <Container>
      <Box component="hgroup" sx={{ textAlign: 'center', mt: '20vh', mb: '20vh' }}>
        <Typography variant="h1">Todo app</Typography>
        <Typography variant="h3">Todo app used to test api</Typography>
      </Box>
      <main>
        <Stack spacing={2} sx={{ alignItems: 'center' }}>
          {todosQuery.data?.map(t => (
            <TodoItem key={t.id} todo={t} />
          ))}
        </Stack>
      </main>
    </Container>
  )
}

export default Home
