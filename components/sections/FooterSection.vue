<template>
  <footer class="relative w-full overflow-hidden bg-black">
    <!-- Background effects -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -left-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-pink-500/20 blur-3xl"></div>
      <div class="absolute -right-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full bg-violet-500/20 blur-3xl"></div>
        </div>

    <!-- Main footer content -->
    <div class="relative mx-auto max-w-7xl px-6 pb-12 pt-24 sm:pt-32 lg:px-8">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <!-- Brand section -->
        <div class="space-y-8">
          <div class="flex items-center space-x-3">
            <div class="relative size-10 overflow-hidden rounded-xl bg-gradient-to-br from-pink-500 to-violet-500 p-1">
              <div class="size-full rounded-lg bg-black"></div>
            </div>
            <span class="text-2xl font-bold text-white">Nexcode AI</span>
          </div>
          <p class="max-w-md text-base leading-6 text-gray-300">
            Transform your workflow automation with AI. Build smarter, faster, and more efficient processes with our cutting-edge platform.
          </p>
          <div class="flex space-x-6">
            <a href="#" class="text-gray-400 transition-colors hover:text-pink-500">
              <span class="sr-only">Twitter</span>
              <svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" class="text-gray-400 transition-colors hover:text-pink-500">
              <span class="sr-only">GitHub</span>
              <svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
              </svg>
            </a>
            <a href="#" class="text-gray-400 transition-colors hover:text-pink-500">
              <span class="sr-only">Discord</span>
              <svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Navigation sections -->
        <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div class="md:grid md:grid-cols-2 md:gap-8">
        <div>
              <h3 class="text-sm font-semibold leading-6 text-white">Product</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in ['Features', 'Templates', 'Integrations', 'Pricing']" :key="item">
                  <a href="#" class="text-sm leading-6 text-gray-300 transition-colors hover:text-pink-500">{{ item }}</a>
            </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-white">Support</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in ['Documentation', 'Guides', 'API Status', 'Contact']" :key="item">
                  <a href="#" class="text-sm leading-6 text-gray-300 transition-colors hover:text-pink-500">{{ item }}</a>
            </li>
          </ul>
        </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
        <div>
              <h3 class="text-sm font-semibold leading-6 text-white">Company</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in ['About', 'Blog', 'Partners', 'Careers']" :key="item">
                  <a href="#" class="text-sm leading-6 text-gray-300 transition-colors hover:text-pink-500">{{ item }}</a>
            </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-white">Legal</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in ['Privacy', 'Terms', 'License', 'Security']" :key="item">
                  <a href="#" class="text-sm leading-6 text-gray-300 transition-colors hover:text-pink-500">{{ item }}</a>
            </li>
          </ul>
        </div>
      </div>
        </div>
      </div>

      <!-- Newsletter -->
      <div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
        <div class="flex flex-col items-center justify-between gap-y-12 sm:flex-row">
          <div class="flex-1">
            <h3 class="text-sm font-semibold leading-6 text-white">Subscribe to our newsletter</h3>
            <p class="mt-2 text-sm leading-6 text-gray-300">Stay updated with the latest features and releases.</p>
          </div>
          <form class="relative flex w-full flex-1 sm:w-auto">
            <label for="email-address" class="sr-only">Email address</label>
            <input 
              id="email-address" 
              type="email" 
              required 
              class="min-w-0 flex-1 rounded-l-lg border-0 bg-white/5 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-500 sm:w-64 sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            >
            <Button 
              type="submit"
              variant="gradient"
              class="rounded-l-none"
            >
              Subscribe
            </Button>
          </form>
        </div>

        <!-- Copyright -->
        <p class="mt-8 text-center text-xs leading-5 text-gray-400">
          &copy; {{ new Date().getFullYear() }} Nexcode AI. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
</script>

<style scoped>
.hover\:text-pink-500:hover {
  color: rgb(236, 72, 153);
}
</style> 