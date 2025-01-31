<template>
  <main class="relative min-h-screen bg-black">
    <!-- Hero Section -->
    <section class="relative h-screen">
      <HeroSection />
    </section>

    <!-- Features Section -->
    <section class="relative">
      <FeaturesSection />
    </section>

    <!-- Footer -->
    <FooterSection />
  </main>
</template>

<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import FeaturesSection from '@/components/sections/FeaturesSection.vue'
import FooterSection from '@/components/sections/FooterSection.vue'

definePageMeta({
  layout: 'default'
})
</script>

<style>
.main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
