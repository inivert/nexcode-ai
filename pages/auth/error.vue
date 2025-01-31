<template>
  <div class="flex min-h-screen items-center justify-center bg-black px-4 py-12 sm:px-6 lg:px-8">
    <div class="relative w-full max-w-md space-y-8">
      <!-- Background effects -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -left-1/4 top-1/4 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl"></div>
        <div class="absolute -right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl"></div>
      </div>

      <!-- Content -->
      <div class="relative text-center">
        <div class="mb-8 flex justify-center">
          <div class="relative size-16 overflow-hidden rounded-xl bg-gradient-to-br from-pink-500 to-violet-500 p-1">
            <div class="flex size-full items-center justify-center rounded-lg bg-black">
              <svg class="size-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
            </div>
          </div>
        </div>

        <h2 class="bg-gradient-to-br from-white to-pink-200 bg-clip-text text-3xl font-bold tracking-tight text-transparent">
          Authentication Error
        </h2>
        <p class="mt-4 text-base text-gray-400">
          {{ $route.query.error || 'An error occurred during authentication.' }}
        </p>

        <div class="mt-8">
          <Button variant="gradient" @click="$router.push('/auth/signin')">
            Try Again
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
</script> 