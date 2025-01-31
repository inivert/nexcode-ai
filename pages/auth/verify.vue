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
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
          </div>
        </div>

        <h2 class="bg-gradient-to-br from-white to-pink-200 bg-clip-text text-3xl font-bold tracking-tight text-transparent">
          Check your email
        </h2>
        <p class="mt-4 text-base text-gray-400">
          A sign in link has been sent to your email address.<br />
          Click the link to complete your sign in.
        </p>

        <div class="mt-8">
          <Button variant="secondary" @click="$router.push('/auth/signin')">
            Back to Sign in
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
</script> 