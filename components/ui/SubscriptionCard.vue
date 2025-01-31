<script setup lang="ts">
import CardContainer from '@/components/ui/CardContainer.vue'
import CardBody from '@/components/ui/CardBody.vue'
import CardItem from '@/components/ui/CardItem.vue'
import BorderBeam from '@/components/ui/BorderBeam.vue'
import Button from '@/components/ui/Button.vue'
import { ref, computed } from 'vue'

const emit = defineEmits(['subscribe'])

const email = ref('')
const isInputFocused = ref(false)
const isSubmitting = ref(false)
const hasError = ref(false)
const touched = ref(false)

const isValidEmail = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email.value)
})

const errorMessage = computed(() => {
  if (!touched.value || !email.value) return ''
  if (!isValidEmail.value) return 'Please enter a valid email address'
  return ''
})

const handleSubmit = async () => {
  touched.value = true
  if (!isValidEmail.value) {
    hasError.value = true
    return
  }
  
  isSubmitting.value = true
  hasError.value = false
  
  try {
    emit('subscribe', email.value)
  } catch {
    hasError.value = true
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="relative flex size-fit flex-col items-center justify-center rounded-3xl">
    <CardContainer>
      <CardBody class="flex flex-col items-center justify-center p-8 space-y-6">
        <!-- Title -->
        <CardItem
          :translate-z="20"
          class="text-center"
        >
          <h3 class="text-lg font-medium text-white/90">
            Subscribe to get notified at launch and get limited special discount.
          </h3>
        <div class="mb-4" />
        </CardItem>

        <!-- Form -->
        <div class="w-full max-w-sm">
          <form class="space-y-4" @submit.prevent="handleSubmit">
            <div class="relative isolate">
              <label for="email" class="sr-only">Email address</label>
              <!-- Input Field -->
              <input 
                id="email"
                v-model="email"
                type="email" 
                name="email"
                autocomplete="email"
                required
                :aria-invalid="hasError"
                :aria-describedby="errorMessage ? 'email-error' : undefined"
                placeholder="Enter your email"
                class="relative w-full px-4 py-3 rounded-lg
                       text-white placeholder-white/40 outline-none 
                       transition-all duration-300
                       bg-white/[0.03] hover:bg-white/[0.04] focus:bg-white/[0.05]
                       border-transparent"
                :class="[
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : '',
                  hasError ? 'hover:bg-red-500/[0.02] focus:bg-red-500/[0.03]' : ''
                ]"
                :disabled="isSubmitting"
                @focus="isInputFocused = true"
                @blur="isInputFocused = false; touched = true"
              />
              
              <!-- Background Effects Container -->
              <div class="absolute inset-0 -z-10 pointer-events-none rounded-lg overflow-hidden">
                <!-- Glow Effect -->
                <div 
                  class="absolute inset-0 opacity-0 transition-opacity duration-500
                         blur-lg"
                  :class="[
                    isInputFocused ? 'opacity-100' : 'hover:opacity-100',
                    hasError ? 'bg-red-500/5' : 'bg-white/[0.03]'
                  ]"
                ></div>

                <!-- Animated Border -->
                <div 
                  class="absolute inset-0 rounded-lg transition-colors duration-200"
                  :class="[
                    hasError ? 'border border-red-500/30' : 'border border-white/10'
                  ]"
                >
                  <!-- Animated Border Highlight -->
                  <div
                    class="absolute inset-0 opacity-0 transition-opacity duration-300"
                    :class="[
                      isInputFocused ? 'opacity-100' : 'hover:opacity-100',
                      hasError 
                        ? 'border border-red-500/50' 
                        : 'border border-white/20'
                    ]"
                  ></div>
                </div>
              </div>
            </div>

            <!-- Error Message -->
            <div 
              v-if="errorMessage"
              id="email-error"
              class="text-sm text-red-400/90 transition-all duration-300"
            >
              {{ errorMessage }}
            </div>

            <!-- Submit Button -->
            <CardItem :translate-z="10">
              <Button
                type="submit"
                variant="glass"
                :disabled="isSubmitting"
                class="w-full"
              >
                <span v-if="isSubmitting" class="flex items-center justify-center gap-2">
                  <svg class="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" />
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Subscribing...
                </span>
                <span v-else>Sign Me Up!</span>
              </Button>
            </CardItem>
          </form>
        </div>
      </CardBody>
    </CardContainer>
    <BorderBeam
      :size="250"
      :duration="12"
      :delay="9"
      :border-width="2"
    />
  </div>
</template>

<style scoped>
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
  -webkit-text-fill-color: white;
  -webkit-box-shadow: 0 0 0px 1000px rgba(255, 255, 255, 0.03) inset;
  transition: background-color 5000s ease-in-out 0s;
}
</style> 