import type { Category } from '~/types'

export const useCategories = () => {
  const config = useRuntimeConfig()
  const apiBase = config.public.apiBase
  
  const categories = ref<Category[]>([])
  const isLoading = ref(false)

  const fetchCategories = async () => {
    isLoading.value = true
    try {
      const response = await $fetch<{ data: Category[] }>(`${apiBase}/categorieslist`)
      categories.value = response.data
    } catch (e) {
      console.error('Ошибка загрузки категорий:', e)
    } finally {
      isLoading.value = false
    }
  }

  fetchCategories()

  return {
    categories,
    isLoading
  }
}