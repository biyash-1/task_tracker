import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  // You won't store the token here because it's HTTP-only
  const user = ref(null)

  // Boolean flag to check if user is logged in based on user details
  const isLoggedIn = computed(() => user.value !== null)

  function setUser(userData) {
    user.value = userData
  }

  function logout() {
    user.value = null
    // Optionally, call an API to clear cookies on the backend
  }

  return { user, isLoggedIn, setUser, logout }
}, {
  persist: true
}


)
