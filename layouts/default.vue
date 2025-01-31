<template>
  <div class="min-h-screen bg-black">
    <!-- Navigation -->
    <nav class="border-b border-white/10">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <NuxtLink to="/" class="text-xl font-bold text-white">Nexcode AI</NuxtLink>
          <div class="hidden md:flex items-center space-x-8">
            <NuxtLink to="/features" class="text-gray-400 hover:text-white">Features</NuxtLink>
            <NuxtLink to="/pricing" class="text-gray-400 hover:text-white">Pricing</NuxtLink>
            <NuxtLink to="/docs" class="text-gray-400 hover:text-white">Docs</NuxtLink>
            <NuxtLink to="/about" class="text-gray-400 hover:text-white">About</NuxtLink>
          </div>
          <div class="flex items-center space-x-4">
            <Button variant="secondary" @click="$router.push('/auth/signin')">Sign in</Button>
            <Button variant="gradient" @click="$router.push('/auth/signup')">Get Started</Button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Page Content -->
    <slot />
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
</script>

<style>
html, body {
  background-color: black;
}
</style> 