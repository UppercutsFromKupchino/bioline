<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Каталог продуктов</h1>
    
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <aside class="lg:col-span-1">
        <ProductsProductFilters 
          v-model:category="selectedCategory" 
          v-model:search="searchQuery"
          @update="handleFilterUpdate"
        />
      </aside>

      <div class="lg:col-span-3">
        <ProductsProductList :products="products" :loading="isLoading" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const selectedCategory = ref('')
const searchQuery = ref('')

// Получаем данные и функцию для их обновления
const { products, isLoading, fetchProducts } = useProducts()

const handleFilterUpdate = () => {
  fetchProducts({
    category: selectedCategory.value || undefined,
    search: searchQuery.value || undefined
  })
}

useHead({
  title: 'Каталог товаров'
})
</script>