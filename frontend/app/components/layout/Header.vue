<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="text-2xl font-bold text-blue-600">
          Маркетплейс
        </NuxtLink>

        <nav class="hidden md:flex items-center space-x-6">
          <NuxtLink to="/products" class="text-gray-700 hover:text-blue-600 transition">
            Каталог
          </NuxtLink>
        </nav>

        <div class="flex items-center space-x-4">
          <NuxtLink to="/cart" class="relative">
            <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span 
              v-if="cartStore.totalItems > 0"
              class="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
            >
              {{ cartStore.totalItems }}
            </span>
          </NuxtLink>

          <template v-if="authStore.isAuthenticated">
            <NuxtLink to="/dashboard" class="text-gray-700 hover:text-blue-600">
              Профиль
            </NuxtLink>
          </template>
          <template v-else>
            <NuxtLink to="/auth/login" class="text-gray-700 hover:text-blue-600">
              Войти
            </NuxtLink>
          </template>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const cartStore = useCartStore()
const authStore = useAuthStore()
</script>