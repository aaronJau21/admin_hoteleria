import type { LoginDto } from '@/dto'
import type { ILogin } from '@/interfaces'
import { api } from '@/lib/api/axios'

export class AuthService {
  public static async login(request: LoginDto): Promise<ILogin> {
    const url = '/auth/login'

    try {
      const { data } = await api.post<ILogin>(url, request)

      return data
    } catch (error) {
      console.log(error)
      throw new Error('Login failed')
    }
  }
}
