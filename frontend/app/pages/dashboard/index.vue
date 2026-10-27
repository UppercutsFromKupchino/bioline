<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Личный кабинет</h1>
    
    <div class="bg-white p-6 rounded-xl shadow-md">
      <p class="text-lg">Добро пожаловать, <span class="font-bold">{{ authStore.user?.name }}</span>!</p>
      <p class="text-gray-500 mt-2">Ваш email: {{ authStore.user?.email }}</p>
      
      <div class="mt-8 flex space-x-4">
        <button @click="logout" class="text-red-600 hover:underline">
          Выйти
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const authStore = useAuthStore()
const router = useRouter()

authStore.syncState()

const logout = () => {
  authStore.logout()
  router.push('/')
}

useHead({ title: 'Личный кабинет' })
</script>