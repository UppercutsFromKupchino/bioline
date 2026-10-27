<template>
  <div class="min-h-screen flex flex-col">
    <LayoutHeader />
    
    <main class="flex-1 container mx-auto px-4 py-8">
      <slot />
    </main>
    
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
const cartStore = useCartStore()

// Загружаем сохранённую корзину при инициализации
onMounted(() => {
  cartStore.loadPersisted()
})
</script>