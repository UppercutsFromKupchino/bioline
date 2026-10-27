<template>
  <div class="flex items-center justify-between py-4 border-b border-gray-200">
    <div class="flex items-center space-x-4">
      <img :src="item.product.image" :alt="item.product.title" class="w-16 h-16 object-cover rounded-lg" />
      <div>
        <h3 class="font-semibold text-gray-800">{{ item.product.title }}</h3>
        <p class="text-sm text-gray-500">${{ item.product.price }}</p>
      </div>
    </div>

    <div class="flex items-center space-x-4">
      <div class="flex items-center border rounded-lg">
        <button @click="updateQty(-1)" class="px-3 py-1 hover:bg-gray-100">-</button>
        <span class="px-3 py-1 font-medium">{{ item.quantity }}</span>
        <button @click="updateQty(1)" class="px-3 py-1 hover:bg-gray-100">+</button>
      </div>
      
      <button @click="$emit('remove')" class="text-red-500 hover:text-red-700">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CartItem } from '~/types'

interface Props {
  item: CartItem
}

const props = defineProps<Props>()
const emit = defineEmits(['remove', 'update'])

const updateQty = (delta: number) => {
  const newQty = props.item.quantity + delta
  if (newQty > 0) {
    emit('update', props.item.product.id, newQty)
  }
}
</script>