<template>
  <div class="max-w-md mx-auto mt-12 bg-white p-8 rounded-xl shadow-lg">
    <h1 class="text-2xl font-bold mb-6 text-center">Вход в аккаунт</h1>

    <form @submit.prevent="handleLogin" class="space-y-4">
      <Input v-model="email" label="Email" type="email" placeholder="name@example.com" required />

      <Input v-model="password" label="Пароль" type="password" placeholder="••••••••" required />

      <Button type="submit" class="w-full" :disabled="isLoading">
        {{ isLoading ? 'Вход...' : 'Войти' }}
      </Button>
    </form>

    <p class="mt-4 text-center text-sm text-gray-600">
      Нет аккаунта?
      <NuxtLink to="/auth/register" class="text-blue-600 hover:underline">Зарегистрироваться</NuxtLink>
    </p>
  </div>
</template>

<script setup lang="ts">
const email = ref('')
const password = ref('')
const isLoading = ref(false)
const authStore = useAuthStore()
const router = useRouter()

const handleLogin = async () => {
  isLoading.value = true

  // Имитация задержки сети
  await new Promise(resolve => setTimeout(resolve, 500))

  const fakeUser = {
    id: 1,
    name: 'Разработчик',
    email: email.value
  }

  // Важно: передаем токен и пользователя
  authStore.login(fakeUser, 'fake-jwt-token-123')

  isLoading.value = false
  router.push('/dashboard')
}

useHead({ title: 'Вход' })
</script>