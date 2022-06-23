interface Todo {
  id: string
  title: string
  body: string
  created_at: string
  updated_at: string
}

interface User {
  id: string
  created_at: string
  updated_at: string
  name: string
  email: string
}

interface RegisterBody {
  name: string
  email: string
  password: string
}

interface LoginBody {
  email: string
  password: string
}

interface LoginResponse {
  user: User
  token: string
}
