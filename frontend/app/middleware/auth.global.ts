export default defineNuxtRouteMiddleware((to) => {
  if (to.path.startsWith('/dashboard')) {
    const token = useCookie('auth_token')
    
    if (!token.value) {
      return navigateTo('/auth/login')
    }
  }
})