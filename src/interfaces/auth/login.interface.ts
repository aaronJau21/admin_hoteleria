export interface ILogin {
  user: User
  token: string
}

export interface User {
  email: string
  name: string
}
