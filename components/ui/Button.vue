<script setup lang="ts">
import { cn } from '@/utils';
import { computed } from 'vue';

interface Props {
  variant?: 'primary' | 'secondary' | 'ghost' | 'glass' | 'gradient'
  size?: 'sm' | 'md' | 'lg'
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  class: ''
})

const variantStyles = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
  ghost: 'hover:bg-white/10 text-white/90 hover:text-white',
  glass: 'relative bg-white/10 text-white/90 isolate overflow-hidden before:absolute before:inset-0 before:transition-colors before:duration-300 hover:before:bg-white/10 active:before:bg-white/20',
  gradient: `
    relative isolate overflow-hidden
    bg-gradient-to-r from-pink-500/80 via-violet-500/80 to-indigo-500/80
    before:absolute before:inset-0
    before:bg-gradient-to-r before:from-pink-500 before:via-violet-500 before:to-indigo-500
    before:transition-opacity before:duration-300
    hover:before:opacity-100 before:opacity-0
    after:absolute after:inset-0 after:-z-10 after:blur-xl after:opacity-50
    after:bg-gradient-to-r after:from-pink-500 after:via-violet-500 after:to-indigo-500
    text-white shadow-lg shadow-violet-500/25
    border border-white/10 hover:border-white/20
  `
}

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
}

const classes = computed(() => 
  cn(
    'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:before:bg-transparent',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20',
    variantStyles[props.variant],
    sizeStyles[props.size],
    props.class
  )
)
</script>

<template>
  <button :class="classes">
    <span class="relative z-10">
      <slot />
    </span>
  </button>
</template> 