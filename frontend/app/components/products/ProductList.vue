<template>
  <div>
    <CommonLoader v-if="loading" />

    <div v-else-if="products.length === 0" class="text-center py-12">
      <p class="text-gray-500 text-lg">Товары не найдены</p>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProductsProductCard 
        v-for="product in products" 
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types'

interface Props {
  products: Product[]
  loading?: boolean
}

withDefaults(defineProps<Props>(), {
  loading: false
})
</script>