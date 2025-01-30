<template>
  <div class="container mx-auto px-4 py-16">
    <div class="flex flex-col lg:flex-row gap-8">
      <!-- Sidebar -->
      <aside class="lg:w-64 flex-shrink-0">
        <nav class="space-y-1">
          <h3 class="font-semibold mb-4">Getting Started</h3>
          <a v-for="item in sidebarItems" 
             :key="item.title"
             :href="item.href"
             class="block px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent">
            {{ item.title }}
          </a>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 max-w-3xl">
        <h1 class="text-4xl font-bold mb-8">Documentation</h1>
        <div class="prose prose-invert max-w-none">
          <h2 class="text-2xl font-semibold mb-4">Getting Started with Nexcode.dev</h2>
          <p class="text-muted-foreground mb-6">
            Welcome to Nexcode.dev! This guide will help you get started with our AI-powered coding assistant.
          </p>

          <h3 class="text-xl font-semibold mb-4">Quick Start</h3>
          <ol class="space-y-4 text-muted-foreground mb-8">
            <li>
              <strong class="text-foreground">Sign Up:</strong> Create your account to get started.
            </li>
            <li>
              <strong class="text-foreground">Install:</strong> Add our extension to your favorite IDE.
            </li>
            <li>
              <strong class="text-foreground">Configure:</strong> Set up your preferences and API key.
            </li>
            <li>
              <strong class="text-foreground">Start Coding:</strong> Begin using AI-powered suggestions in your code.
            </li>
          </ol>

          <h3 class="text-xl font-semibold mb-4">Key Features</h3>
          <ul class="space-y-4 text-muted-foreground">
            <li>
              <strong class="text-foreground">Smart Code Completion:</strong> Get context-aware code suggestions.
            </li>
            <li>
              <strong class="text-foreground">Code Analysis:</strong> Receive real-time feedback and improvements.
            </li>
            <li>
              <strong class="text-foreground">Natural Language Processing:</strong> Communicate with your AI assistant naturally.
            </li>
          </ul>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
const sidebarItems = [
  { title: 'Introduction', href: '#introduction' },
  { title: 'Quick Start', href: '#quick-start' },
  { title: 'Installation', href: '#installation' },
  { title: 'Configuration', href: '#configuration' },
  { title: 'Features', href: '#features' },
  { title: 'API Reference', href: '#api-reference' },
  { title: 'Examples', href: '#examples' },
  { title: 'Troubleshooting', href: '#troubleshooting' }
]

definePageMeta({
  layout: 'default'
})
</script> 