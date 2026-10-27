import { defineStore } from 'pinia'
import type { CartItem, Product } from '~/types'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
    persisted: false
  }),

  getters: {
    totalItems: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),
    totalPrice: (state) => state.items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0),
    isEmpty: (state) => state.items.length === 0
  },

  actions: {
    addItem(product: Product, quantity: number = 1) {
      const existingItem = this.items.find(item => item.product.id === product.id)
      
      if (existingItem) {
        existingItem.quantity += quantity
      } else {
        this.items.push({ product, quantity })
      }
      
      this.persist()
    },

    removeItem(productId: number) {
      this.items = this.items.filter(item => item.product.id !== productId)
      this.persist()
    },

    updateQuantity(productId: number, quantity: number) {
      const item = this.items.find(item => item.product.id === productId)
      if (item) {
        if (quantity <= 0) {
          this.removeItem(productId)
        } else {
          item.quantity = quantity
          this.persist()
        }
      }
    },

    clearCart() {
      this.items = []
      this.persist()
    },

    persist() {
      if (process.client) {
        localStorage.setItem('cart', JSON.stringify(this.items))
      }
    },

    loadPersisted() {
      if (process.client && !this.persisted) {
        const saved = localStorage.getItem('cart')
        if (saved) {
          this.items = JSON.parse(saved)
        }
        this.persisted = true
      }
    }
  }
})