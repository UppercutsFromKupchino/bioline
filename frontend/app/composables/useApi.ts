export const useApi = () => {
  const config = useRuntimeConfig()
  
  // На клиенте используем публичный URL, на сервере — внутренний
  const apiBase = process.client 
    ? config.public.apiBase 
    : config.apiBase

  const fetchApi = async <T>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>> => {
    const url = `${apiBase}${endpoint}`
    
    try {
      const response = await $fetch<ApiResponse<T>>(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers
        }
      })
      
      return response
    } catch (error) {
      console.error('API Error:', error)
      throw error
    }
  }

  return {
    fetchApi
  }
}