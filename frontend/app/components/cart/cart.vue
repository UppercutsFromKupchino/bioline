<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Ваша корзина</h1>

    <div v-if="cartStore.isEmpty" class="text-center py-12 bg-white rounded-xl shadow-sm">
      <p class="text-gray-500 text-lg mb-4">Корзина пуста</p>
      <NuxtLink to="/products" class="text-blue-600 hover:underline">
        Перейти к покупкам →
      </NuxtLink>
    </div>

    <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Список товаров -->
      <div class="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
        <CartItem 
          v-for="item in cartStore.items" 
          :key="item.product.id"
          :item="item"
          @remove="cartStore.removeItem(item.product.id)"
          @update="cartStore.updateQuantity"
        />
      </div>

      <!-- Итоговая сумма -->
      <CartSummary 
        :total-items="cartStore.totalItems"
        :total-price="cartStore.totalPrice"
        
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const cartStore = useCartStore()

useHead({
  title: 'Корзина'
})
</script>