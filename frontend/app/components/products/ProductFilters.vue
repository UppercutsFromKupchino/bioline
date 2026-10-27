<template>
  <div class="bg-white border border-gray-300 p-6 rounded-xl sticky top-4">
    <h3 class="font-bold text-lg mb-4">Фильтры</h3>

    <!-- текстовый поиск -->
    <CommonInput
      v-model="searchValue"
      label="Поиск"
      placeholder="Название товара..."
      class="mb-4"
      @input="handleSearchInput"
    />

    <!-- поиск по категории -->
    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-700 mb-2">Категория</label>
      
      <div v-if="isLoading" class="text-sm text-gray-500 animate-pulse">
        Загрузка категорий...
      </div>

      <select 
        v-else
        v-model="categoryValue"
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        @change="emitUpdate"
      >
        <option value="">Все категории</option>
        <option 
          v-for="cat in categories" 
          :key="cat.id" 
          :value="cat.title" 
        >
          {{ cat.title }}
        </option>
      </select>
    </div>

    <Button class="w-full" @click="resetFilters">
      Сбросить
    </Button>
  </div>
</template>

<script setup lang="ts">
const categoryValue = defineModel<string>('category')
const searchValue = defineModel<string>('search')
const emit = defineEmits(['update'])

const { categories, isLoading } = useCategories()

// дебаунс
let debounceTimer: NodeJS.Timeout | null = null
const handleSearchInput = () => {
  if (debounceTimer) {
    clearTimeout(debounceTimer)
  }

  debounceTimer = setTimeout(() => {
    emitUpdate()
  }, 500)
}

const emitUpdate = () => {
  emit('update')
}

const resetFilters = () => {
  categoryValue.value = ''
  searchValue.value = ''
  
  if (debounceTimer) clearTimeout(debounceTimer)
  
  emit('update')
}

onBeforeUnmount(() => {
  if (debounceTimer) clearTimeout(debounceTimer)
})
</script>