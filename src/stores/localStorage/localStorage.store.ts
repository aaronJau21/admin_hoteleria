import type { ILogin } from '@/interfaces'
import { defineStore } from 'pinia'

export const useLocalStorageStore = defineStore('localStorage', () => {
  const token = localStorage.getItem('token') as string
  const user = localStorage.getItem('user') as string

  function setLocal(data: ILogin) {
    localStorage.setItem('token', data.token)
    localStorage.setItem('user', JSON.stringify(data.user))
  }

  return {
    token,
    user,
    setLocal,
  }
})
