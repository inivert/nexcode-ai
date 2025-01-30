<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { cn } from '@/utils'

interface Props {
  delay?: number
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  delay: 0,
  class: ''
})

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, props.delay * 1000)
})
</script>

<template>
  <div
    :class="cn(
      'transition-all duration-1000',
      isVisible ? 'opacity-100 blur-none' : 'opacity-0 blur-lg',
      props.class
    )"
  >
    <slot />
  </div>
</template> 
