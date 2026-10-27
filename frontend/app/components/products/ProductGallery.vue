<template>
  <div class="aspect-video bg-gray-100 rounded-xl overflow-hidden relative group">
    <img 
      :src="image" 
      :alt="alt" 
      class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  image: string
  alt: string
}
defineProps<Props>()
</script>