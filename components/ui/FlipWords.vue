<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { cn } from '@/utils'

interface Props {
  words: string[]
  duration?: number
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  duration: 2000,
  class: ''
})

const currentIndex = ref(0)
const interval = ref<NodeJS.Timeout>()

onMounted(() => {
  interval.value = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % props.words.length
  }, props.duration)
})

onBeforeUnmount(() => {
  if (interval.value) {
    clearInterval(interval.value)
  }
})
</script>

<template>
  <span :class="cn('inline-block', props.class)">
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform translate-y-4 opacity-0"
      mode="out-in"
    >
      <span :key="currentIndex">{{ words[currentIndex] }}</span>
    </transition>
  </span>
</template> 
