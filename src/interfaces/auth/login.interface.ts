export interface ILogin {
  user: IUser
  token: string
}

export interface IUser {
  email: string
  name: string
}
