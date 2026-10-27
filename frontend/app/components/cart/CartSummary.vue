<template>
  <div class="bg-gray-50 p-6 rounded-xl sticky top-4">
    <h3 class="text-lg font-bold mb-4">Итого</h3>
    
    <div class="space-y-2 mb-4 text-sm">
      <div class="flex justify-between">
        <span class="text-gray-600">Товары ({{ totalItems }})</span>
        <span>${{ totalPrice.toFixed(2) }}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-gray-600">Доставка</span>
        <span class="text-green-600">Бесплатно</span>
      </div>
    </div>

    <div class="border-t pt-4 mb-6">
      <div class="flex justify-between font-bold text-lg">
        <span>К оплате</span>
        <span>${{ totalPrice.toFixed(2) }}</span>
      </div>
    </div>

    <Button class="w-full" @click="$emit('checkout')">
      Оформить заказ
    </Button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  totalItems: number
  totalPrice: number
}

defineProps<Props>()
defineEmits(['checkout'])
</script>