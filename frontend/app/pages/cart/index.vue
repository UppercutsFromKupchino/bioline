<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Ваша корзина</h1>

    <!-- Состояние пустой корзины -->
    <div v-if="cartStore.isEmpty" class="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-100">
      <div class="mb-4 text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </div>
      <p class="text-gray-500 text-lg mb-6">Корзина пока пуста</p>
      <NuxtLink to="/products" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
        Перейти к покупкам →
      </NuxtLink>
    </div>

    <!-- Содержимое корзины -->
    <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Список товаров (левая колонка) -->
      <div class="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <CartItem 
          v-for="item in cartStore.items" 
          :key="item.product.id"
          :item="item"
          @remove="cartStore.removeItem(item.product.id)"
          @update="cartStore.updateQuantity"
        />
      </div>

      <!-- Итоговая сумма (правая колонка) -->
      <div class="lg:col-span-1">
        <CartSummary 
          :total-items="cartStore.totalItems"
          :total-price="cartStore.totalPrice"
          @checkout="goToCheckout"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const cartStore = useCartStore()

// Загружаем сохраненные данные при открытии страницы
onMounted(() => {
  cartStore.loadPersisted()
})

const goToCheckout = () => {
  alert('Переход к оформлению заказа...')
}

useHead({
  title: 'Корзина'
})
</script>