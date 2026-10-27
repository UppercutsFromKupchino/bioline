import { defineStore } from 'pinia'
import type { User } from '~/types'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
  }),

  getters: {
    isAuthenticated: (state) => {
      // Проверяем наличие куки с токеном
      const token = useCookie('auth_token')
      return !!token.value
    }
  },

  actions: {
    login(user: User, token: string) {
      this.user = user
      
      // Сохраняем токен в куки (доступно и на клиенте, и на сервере)
      const tokenCookie = useCookie('auth_token', {
        maxAge: 60 * 60 * 24 * 7, // 7 дней
        secure: true, // Только через HTTPS
        sameSite: 'lax'
      })
      tokenCookie.value = token

      // Также сохраним данные пользователя в куки, чтобы не делать лишний запрос к API
      const userCookie = useCookie('auth_user', {
        maxAge: 60 * 60 * 24 * 7
      })
      userCookie.value = JSON.stringify(user)
      
      // Синхронизируем состояние стора
      this.syncState()
    },

    logout() {
      this.user = null
      const tokenCookie = useCookie('auth_token')
      const userCookie = useCookie('auth_user')
      
      tokenCookie.value = null
      userCookie.value = null
    },

    syncState() {
      // Эта функция восстанавливает состояние из кук
      const userCookie = useCookie('auth_user')
      if (userCookie.value) {
        try {
          this.user = JSON.parse(userCookie.value)
        } catch (e) {
          this.logout()
        }
      }
    }
  }
})