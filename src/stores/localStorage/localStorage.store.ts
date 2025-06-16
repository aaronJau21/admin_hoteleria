import type { ILogin, IUser } from '@/interfaces'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLocalStorageStore = defineStore('localStorage', () => {
  const token = ref<string | null>(localStorage.getItem('token'))
  const user = ref<IUser | null>(JSON.parse(localStorage.getItem('user') || 'null'))
  const authenticated = ref<boolean>(false)

  function setLocal(data: ILogin) {
    localStorage.setItem('token', data.token)
    localStorage.setItem('user', JSON.stringify(data.user))

    token.value = data.token
    user.value = data.user
    authenticated.value = true
  }

  return {
    token,
    user,
    setLocal,
  }
})
