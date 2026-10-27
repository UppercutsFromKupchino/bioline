import type { Product } from '~/types'

export const useProducts = () => {
  const config = useRuntimeConfig()
  const apiBase = config.public.apiBase
  
  const products = ref<Product[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const fetchProducts = async (params?: { category?: string; search?: string }) => {
    isLoading.value = true
    error.value = null
    
    try {
      // Формируем URL с параметрами
      const url = new URL(`${apiBase}/productslist`)
      if (params?.category) url.searchParams.append('category', params.category)
      if (params?.search) url.searchParams.append('search', params.search)

      // $fetch автоматически обрабатывает JSON и ошибки
      const data = await $fetch<{ data: Product[] }>(url.toString())
      products.value = data.data
    } catch (e: any) {
      error.value = e.message || 'Ошибка при загрузке товаров'
    } finally {
      isLoading.value = false
    }
  }

  // Загружаем товары сразу при создании компосабла (удобно для SSR)
  fetchProducts()

  return {
    products,
    isLoading,
    error,
    fetchProducts // Экспортируем, чтобы можно было перезагрузить данные (например, при фильтрации)
  }
}

export const useProduct = (id: number | string) => {
  const config = useRuntimeConfig()
  const apiBase = config.public.apiBase

  const product = ref<Product | null>(null)
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const fetchProduct = async () => {
    if (!id) return
    
    isLoading.value = true
    try {
      const data = await $fetch<{ data: Product }>(`${apiBase}/products/${id}`)
      product.value = data.data
    } catch (e: any) {
      error.value = e.message || 'Товар не найден'
    } finally {
      isLoading.value = false
    }
  }

  fetchProduct()

  return {
    product,
    isLoading,
    error
  }
}