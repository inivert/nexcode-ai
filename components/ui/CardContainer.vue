<script setup lang="ts">
import { useMouseState } from "@/composables/useMouseState";
import { provide, ref } from "vue";

defineProps({
  class: String,
  containerClass: String,
});

const containerRef = ref<HTMLElement | null>(null);

const mouseState = useMouseState(); // Use the composable
provide("use3DCardMouseState", mouseState);

function handleMouseMove(e: MouseEvent) {
  if (!containerRef.value) return;
  const { left, top, width, height } = containerRef.value.getBoundingClientRect();
  const x = (e.clientX - left - width / 2) / 25;
  const y = (e.clientY - top - height / 2) / 25;
  containerRef.value.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
}

function handleMouseEnter() {
  mouseState.setMouseEntered(true);
  if (containerRef.value) {
    containerRef.value.style.transform = `scale(1.02)`;
  }
}

function handleMouseLeave() {
  if (!containerRef.value) return;
  mouseState.setMouseEntered(false);
  containerRef.value.style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
}
</script>

<template>
  <div
    :class="containerClass"
    style="perspective: 1500px"
  >
    <div
      ref="containerRef"
      :class="[
        'relative flex items-center justify-center rounded-3xl bg-gradient-to-br from-zinc-900/90 via-black/90 to-zinc-900/90 shadow-2xl transition-all duration-200 ease-out border border-white/[0.08]',
        $props.class,
      ]"
      style="transform-style: preserve-3d"
      @mouseenter="handleMouseEnter"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
    >
      <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.08] via-zinc-500/[0.08] to-white/[0.08] backdrop-blur-[2px]"></div>
      <div class="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/[0.05]"></div>
      <div class="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-white/[0.08] via-zinc-500/[0.08] to-white/[0.08] blur-[2px] -z-10"></div>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.perspective-1500 {
  perspective: 1500px;
  transform-style: preserve-3d;
}
</style> 