<template>
  <section class="relative mx-auto h-screen w-full overflow-hidden">
    <Vortex
      background-color="black"
      :range-y="800"
      :particle-count="500"
      :base-hue="120"
      class="absolute inset-0 flex items-center justify-center px-8"
    >
      <div class="flex size-full max-w-6xl flex-col md:flex-row">
        <div class="flex size-full h-[36rem] flex-col items-center justify-center md:h-full md:items-start md:p-8">
          <span class="inline-block gap-2 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-center text-5xl font-bold text-transparent md:text-left md:text-6xl">
            Build smarter code with
            <TextHighlight
              class="rounded-xl bg-gradient-to-r from-pink-500 to-violet-500 px-4 py-1"
              text-end-color="hsl(var(--accent))"
            >
              Nexcode AI
            </TextHighlight>
          </span>
          <span class="flex w-full flex-row justify-center py-6 md:justify-start">
            <AnimatedTooltip :items="people" />
          </span>
          <Button 
            variant="gradient"
            size="lg"
            class="group relative overflow-hidden"
          >
            <span class="flex items-center gap-2">
              Get Started
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fill-rule="evenodd" 
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                  clip-rule="evenodd" 
                />
              </svg>
            </span>
          </Button>
        </div>
        <div class="relative flex flex-col items-center justify-center overflow-hidden md:max-w-96">
          <SubscriptionCard @subscribe="handleSubscribe" />
        </div>
      </div>
    </Vortex>
  </section>
</template>

<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import Vortex from '@/components/ui/Vortex.vue'
import TextHighlight from '@/components/ui/TextHighlight.vue'
import AnimatedTooltip from '@/components/ui/AnimatedTooltip.vue'
import SubscriptionCard from '@/components/ui/SubscriptionCard.vue'

const handleSubscribe = () => {
  // Handle subscription logic here
  console.log('Subscription requested')
}

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=3534&q=80",
  }
];
</script>
