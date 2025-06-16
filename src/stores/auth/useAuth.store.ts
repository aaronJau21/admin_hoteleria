import { defineStore } from 'pinia'
import { useLocalStorageStore } from '../localStorage/localStorage.store'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const ls = useLocalStorageStore()
  const authenticated = ref<boolean>(false)

  function isAuthenticated(): boolean {
    if (ls.token && ls.user) {
      authenticated.value = true
    } else if (!ls.token || !ls.user) {
      authenticated.value = false
    }
    return authenticated.value
  }

  return {
    isAuthenticated,
  }
})
