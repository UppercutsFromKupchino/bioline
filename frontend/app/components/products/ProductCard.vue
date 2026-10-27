<template>
  <div class="relative aspect-video overflow-hidden">
    <img 
      :src="product.image" 
      :alt="product.title"
      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
    />
    <div class="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-sm font-semibold">
      Оценка: {{ product.rating }}
    </div>
  </div>

  <div class="p-4">
    <h3 class="font-bold text-lg mb-2 line-clamp-2">{{ product.title }}</h3>
    
    <div class="flex items-center justify-between">
      <span class="text-2xl font-bold text-blue-600">${{ product.price }}</span>
      <span class="text-sm text-gray-500">{{ product.reviews_count }} отзывов</span>
    </div>

    <Button 
      class="w-full mt-4" 
      @click.prevent="handleAddToCart"
    >
      В корзину
    </Button>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types'

interface Props {
  product: Product
}

const props = defineProps<Props>()
const cartStore = useCartStore()

const handleAddToCart = () => {
  cartStore.addItem(props.product)
  
  alert('Добавлено в корзину:' + props.product.title)
}
</script>