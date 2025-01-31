<template>
  <div class="relative min-h-screen w-full overflow-hidden bg-black">
    <Vortex
      background-color="black"
      :range-y="800"
      :particle-count="500"
      :base-hue="280"
      :base-speed="0.5"
      :range-speed="2"
      class="absolute inset-0 flex items-center justify-center"
      containerClass="absolute inset-0"
    >
      <div class="relative w-full max-w-md px-4 py-8 sm:px-6 lg:px-8">
        <CardContainer class="w-full">
          <CardBody 
            class="group relative rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-xl transition-all duration-500"
          >
            <template #outer>
              <!-- Border beams -->
              <BorderBeam 
                :size="600"
                :duration="6000"
                :border-width="1"
                color-from="#9040ff"
                color-to="#ff40bf"
                class="opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                :anchor="0"
              />
              <BorderBeam 
                :size="600"
                :duration="6000"
                :border-width="1"
                color-from="#ff40bf"
                color-to="#9040ff"
                class="opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                :anchor="50"
                :delay="3000"
              />

              <!-- Glow effects -->
              <div class="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl transition-all duration-700 group-hover:bg-violet-500/20" />
              <div class="absolute -right-32 -bottom-32 h-64 w-64 rounded-full bg-pink-500/10 blur-3xl transition-all duration-700 group-hover:bg-pink-500/20" />
            </template>

            <!-- Content -->
            <div class="relative space-y-6">
              <div class="text-center">
                <h2 class="bg-gradient-to-br from-white to-pink-200 bg-clip-text text-4xl font-bold tracking-tight text-transparent">
                  Create account
                </h2>
                <p class="mt-3 text-sm text-gray-400">
                  Already have an account?
                  <NuxtLink to="/auth/signin" class="font-medium text-pink-500 hover:text-pink-400 transition-colors duration-300">
                    Sign in
                  </NuxtLink>
                </p>
              </div>

              <form class="space-y-6" @submit.prevent="handleSignUp">
                <div class="space-y-5">
                  <div class="group/input space-y-1.5">
                    <label for="name" class="block text-sm font-medium text-gray-300">
                      Full name
                    </label>
                    <input
                      id="name"
                      v-model="name"
                      name="name"
                      type="text"
                      required
                      class="relative block w-full rounded-lg border-0 bg-white/5 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 transition-all duration-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-pink-500 group-hover/input:ring-white/20 sm:text-sm sm:leading-6"
                      placeholder="John Doe"
                    />
                  </div>

                  <div class="group/input space-y-1.5">
                    <label for="email" class="block text-sm font-medium text-gray-300">
                      Email address
                    </label>
                    <input
                      id="email"
                      v-model="email"
                      name="email"
                      type="email"
                      required
                      class="relative block w-full rounded-lg border-0 bg-white/5 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 transition-all duration-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-pink-500 group-hover/input:ring-white/20 sm:text-sm sm:leading-6"
                      placeholder="name@example.com"
                    />
                  </div>

                  <div>
                    <Button
                      type="submit"
                      variant="gradient"
                      class="w-full transition-all duration-300 hover:scale-[1.02]"
                      :loading="loading"
                    >
                      {{ loading ? 'Creating your account...' : 'Create account' }}
                    </Button>
                  </div>

                  <p class="text-center text-sm text-gray-400">
                    By signing up, you agree to our
                    <NuxtLink to="/terms" class="font-medium text-pink-500 hover:text-pink-400 transition-colors duration-300">Terms</NuxtLink>
                    and
                    <NuxtLink to="/privacy" class="font-medium text-pink-500 hover:text-pink-400 transition-colors duration-300">Privacy Policy</NuxtLink>
                  </p>
                </div>
              </form>

              <div class="relative">
                <div class="absolute inset-0 flex items-center">
                  <div class="w-full border-t border-white/10"></div>
                </div>
                <div class="relative flex justify-center text-sm">
                  <span class="bg-black px-4 text-gray-400">Or continue with</span>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <Button 
                  variant="secondary" 
                  class="w-full transition-all duration-300 hover:scale-[1.02]" 
                  @click="() => {}"
                >
                  <svg class="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Google
                </Button>
                <Button 
                  variant="secondary" 
                  class="w-full transition-all duration-300 hover:scale-[1.02]" 
                  @click="() => {}"
                >
                  <svg class="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </Button>
              </div>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </Vortex>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from '@/components/ui/Button.vue'
import Vortex from '@/components/ui/Vortex.vue'
import CardBody from '@/components/ui/CardBody.vue'
import CardContainer from '@/components/ui/CardContainer.vue'
import BorderBeam from '@/components/ui/BorderBeam.vue'
import { useNuxtApp } from '#app'

const name = ref('')
const email = ref('')
const loading = ref(false)
const { $router } = useNuxtApp()

async function handleSignUp() {
  try {
    loading.value = true
    await new Promise(resolve => setTimeout(resolve, 1000))
    $router.push('/auth/verify')
  } catch (error) {
    console.error('Sign up error:', error)
    $router.push('/auth/error')
  } finally {
    loading.value = false
  }
}
</script> 
