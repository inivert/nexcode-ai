<script setup lang="ts">
import { cn } from '@/utils'

defineProps({
  class: String,
});
</script>

<template>
  <div class="relative">
    <!-- Main card content -->
    <div
      :class="cn('relative w-full h-full p-6 rounded-3xl', $props.class)"
      style="transform-style: preserve-3d"
    >
      <div class="relative z-10 flex h-full w-full flex-col items-center justify-center">
        <slot />
      </div>
    </div>
  </div>
</template>
