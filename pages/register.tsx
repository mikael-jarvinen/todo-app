import { Alert, Button, Container, Grid, Paper, Stack, TextField, Typography } from '@mui/material'
import { AxiosError } from 'axios'
import useRegister from 'hooks/useRegister'
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'

const Register = () => {
  const [error, setError] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const router = useRouter()

  const postRegistration = useRegister()

  const handleError = (err: unknown) => {
    if (err instanceof AxiosError) {
      setError(err?.response?.data.message)
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (password !== passwordConfirmation) {
      setError("Passwords didn't match")
      return
    }

    postRegistration.mutate(
      {
        name,
        email,
        password,
      },
      {
        onError: handleError,
        onSuccess: () => router.push('/'),
      },
    )
  }

  return (
    <Container>
      <Typography variant="h1" sx={{ textAlign: 'center', mt: '20vh', mb: '10vh' }}>
        Register
      </Typography>
      <Grid container sx={{ justifyContent: 'center' }}>
        <Grid item>
          <Paper
            component="form"
            elevation={10}
            onSubmit={handleSubmit}
            sx={{ p: 5, maxWidth: 800, display: 'flex', justifyContent: 'center' }}
          >
            <Stack spacing={2}>
              {error.length > 0 && <Alert severity="error">{error}</Alert>}
              <TextField
                required
                fullWidth
                label="Name"
                name="name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <TextField
                required
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <TextField
                required
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <TextField
                required
                fullWidth
                label="Confirm password"
                name="password_confirmation"
                type="password"
                value={passwordConfirmation}
                onChange={e => setPasswordConfirmation(e.target.value)}
              />
              <Button variant="contained" type="submit">
                Register
              </Button>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Register
