<template>
  <div class="min-h-screen bg-background text-foreground">
    <!-- Navigation -->
    <nav class="border-b border-border">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <NuxtLink to="/" class="text-xl font-bold">Nexcode.dev</NuxtLink>
          <div class="hidden md:flex items-center space-x-8">
            <NuxtLink to="/features" class="text-muted-foreground hover:text-foreground">Features</NuxtLink>
            <NuxtLink to="/pricing" class="text-muted-foreground hover:text-foreground">Pricing</NuxtLink>
            <NuxtLink to="/docs" class="text-muted-foreground hover:text-foreground">Docs</NuxtLink>
            <NuxtLink to="/about" class="text-muted-foreground hover:text-foreground">About</NuxtLink>
          </div>
          <div class="flex items-center space-x-4">
            <Button variant="secondary" @click="navigateTo('/login')">Log in</Button>
            <Button @click="navigateTo('/get-started')">Get Started</Button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Page Content -->
    <slot />

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import FooterSection from '@/components/sections/FooterSection.vue'
</script> 