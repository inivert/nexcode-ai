<template>
  <section class="relative w-full bg-black py-24">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -left-1/4 top-1/4 h-96 w-96 rounded-full bg-pink-500/30 blur-3xl"></div>
      <div class="absolute -right-1/4 top-3/4 h-96 w-96 rounded-full bg-violet-500/30 blur-3xl"></div>
    </div>

    <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="inline-flex items-center gap-x-2 rounded-full bg-gradient-to-r from-pink-500/10 to-violet-500/10 px-4 py-1.5 text-base font-semibold leading-7 text-pink-500 ring-1 ring-inset ring-pink-500/20">
          <span class="relative flex h-3 w-3">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-500 opacity-75"></span>
            <span class="relative inline-flex h-3 w-3 rounded-full bg-pink-500"></span>
          </span>
          Powerful Features
        </h2>
        <p class="mt-6 bg-gradient-to-br from-white to-pink-200 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
          Everything you need to build better
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-300">
          Supercharge your development workflow with AI-powered tools and insights
        </p>
      </div>

      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <CardContainer v-for="(feature, index) in features" :key="feature.name" class="group">
            <CardItem>
              <CardBody class="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-8 backdrop-blur-xl transition-all duration-300 hover:border-pink-500/50 hover:bg-black/60">
                <div class="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-pink-500/20 to-violet-500/20 blur-2xl transition-all duration-500 group-hover:scale-150"></div>
                <div class="relative">
                  <div class="mb-8 flex size-16 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-violet-500 p-3 shadow-2xl shadow-pink-500/20 ring-1 ring-white/10">
                    <component :is="feature.icon" class="size-8 text-white" aria-hidden="true" />
          </div>
                  <div class="absolute -left-4 -top-4 size-16 rounded-xl bg-gradient-to-br from-pink-500 to-violet-500 opacity-30 blur-xl"></div>
                  
                  <h3 class="text-2xl font-semibold leading-7 text-white">
                    {{ feature.name }}
                  </h3>
                  <p class="mt-4 text-base leading-7 text-gray-300">{{ feature.description }}</p>
                  
                  <div class="mt-8 flex items-center gap-x-2">
                    <span class="text-sm font-medium text-pink-500">Learn more</span>
                    <svg class="size-4 text-pink-500 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.75 3.25L10.25 8L6.75 12.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
        </div>
      </div>
              </CardBody>
            </CardItem>
          </CardContainer>
        </dl>
    </div>
  </div>
  </section>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'
import CardContainer from '@/components/ui/CardContainer.vue'
import CardItem from '@/components/ui/CardItem.vue'
import CardBody from '@/components/ui/CardBody.vue'

const features = [
  {
    name: 'Export Ready Automations',
    description: 'Tell the AI your automation needs and get instant, production-ready workflows exported for n8n or Make.com. Save hours of manual setup with AI-generated automation files.',
    icon: defineComponent({
      render: () => h('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: '24',
        height: '24',
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: '2',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        class: 'lucide lucide-workflow'
      }, [
        h('rect', { width: '8', height: '8', x: '3', y: '3', rx: '2' }),
        h('path', { d: 'M7 11v4a2 2 0 0 0 2 2h4' }),
        h('rect', { width: '8', height: '8', x: '13', y: '13', rx: '2' })
      ])
    })
  },
  {
    name: 'Live Workflow Preview',
    description: 'Visualize your automation in real-time before downloading. See exactly how your workflow will function, test connections, and make adjustments on the fly.',
    icon: defineComponent({
      render: () => h('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: '24',
        height: '24',
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: '2',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        class: 'lucide lucide-git-branch-plus'
      }, [
        h('path', { d: 'M6 3v12' }),
        h('path', { d: 'M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6' }),
        h('path', { d: 'M6 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6' }),
        h('path', { d: 'M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6' }),
        h('path', { d: 'M15 9h3' }),
        h('path', { d: 'M18 6v6' })
      ])
    })
  },
  {
    name: 'Smart Templates',
    description: 'Jump-start your automation with our curated collection of starter templates, or upload your own workflow as an example to create similar automations instantly.',
    icon: defineComponent({
      render: () => h('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: '24',
        height: '24',
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: '2',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        class: 'lucide lucide-component'
      }, [
        h('path', { d: 'M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z' }),
        h('path', { d: 'M12 2l3.5 3.5L12 9 8.5 5.5 12 2Z' }),
        h('path', { d: 'M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z' }),
        h('path', { d: 'M12 15l3.5 3.5L12 22l-3.5-3.5L12 15Z' })
      ])
    })
  },
  {
    name: 'Example-Based Creation',
    description: 'Upload any existing workflow file and let our AI analyze and create similar automations tailored to your needs. Perfect for maintaining consistency across your automation suite.',
    icon: defineComponent({
      render: () => h('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: '24',
        height: '24',
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: '2',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        class: 'lucide lucide-copy-check'
      }, [
        h('path', { d: 'M8 4v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.242a2 2 0 0 0-.602-1.43L16.083 2.57A2 2 0 0 0 14.685 2H10a2 2 0 0 0-2 2Z' }),
        h('path', { d: 'M16 18v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2' }),
        h('path', { d: 'M11 13.5V7.5' }),
        h('path', { d: 'M15 13.5V7.5' })
      ])
    })
  }
]
</script> 
<style scoped>
.group:hover .group-hover\:scale-150 {
  transform: scale(1.5);
}

.lucide {
  stroke-width: 1.75;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style> 

