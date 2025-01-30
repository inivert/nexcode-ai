<template>
  <footer class="border-t border-border mt-20">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="font-bold text-lg mb-4">Nexcode.dev</h3>
          <p class="text-muted-foreground">Building the future of AI-powered development</p>
        </div>
        
        <div>
          <h4 class="font-semibold mb-4">Product</h4>
          <ul class="space-y-2 text-muted-foreground">
            <li><NuxtLink to="/features" class="hover:text-foreground">Features</NuxtLink></li>
            <li><NuxtLink to="/pricing" class="hover:text-foreground">Pricing</NuxtLink></li>
            <li><NuxtLink to="/docs" class="hover:text-foreground">Documentation</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold mb-4">Company</h4>
          <ul class="space-y-2 text-muted-foreground">
            <li><NuxtLink to="/about" class="hover:text-foreground">About</NuxtLink></li>
            <li><NuxtLink to="/blog" class="hover:text-foreground">Blog</NuxtLink></li>
            <li><NuxtLink to="/careers" class="hover:text-foreground">Careers</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold mb-4">Legal</h4>
          <ul class="space-y-2 text-muted-foreground">
            <li><NuxtLink to="/privacy" class="hover:text-foreground">Privacy Policy</NuxtLink></li>
            <li><NuxtLink to="/terms" class="hover:text-foreground">Terms of Service</NuxtLink></li>
          </ul>
        </div>
      </div>

      <div class="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
        <p>&copy; {{ new Date().getFullYear() }} Nexcode.dev. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// No additional setup needed
</script> 