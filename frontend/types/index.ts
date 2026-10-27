export interface Product {
  id: number
  title: string
  slug: string
  price: number
  category: string
  image: string
  description: string
  rating: number
  reviews_count: number
}

export interface User {
  id: number
  name: string
  email: string
  avatar?: string
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface ApiResponse<T> {
  data: T
  meta?: {
    total: number
    page: number
    per_page: number
  }
}

export interface Category {
  id: number
  title: string
}