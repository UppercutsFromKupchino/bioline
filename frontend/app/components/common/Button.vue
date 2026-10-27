<template>
  <button
    :class="[
      'px-4 py-2 rounded-lg font-medium transition-all duration-200',
      'bg-blue-600 text-white hover:bg-blue-700',
      { 'opacity-50 cursor-not-allowed': disabled }
    ]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false
})

defineEmits(['click'])

</script>