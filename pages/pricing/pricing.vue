<script setup lang="ts">
import Button from '@/components/ui/Button.vue'

const plans = [
  {
    name: 'Hobby',
    price: 'Free',
    description: 'Perfect for side projects and learning',
    features: [
      'Basic AI code suggestions',
      'Limited API calls',
      'Community support',
      'Basic documentation'
    ]
  },
  {
    name: 'Pro',
    price: '$19',
    period: '/month',
    description: 'For professional developers',
    features: [
      'Advanced AI assistance',
      'Unlimited API calls',
      'Priority support',
      'Full documentation',
      'Custom workflows',
      'Team collaboration'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large teams and organizations',
    features: [
      'Everything in Pro',
      'Custom AI models',
      'Dedicated support',
      'Security features',
      'Advanced analytics',
      'Custom integrations'
    ]
  }
]

definePageMeta({
  layout: 'default'
})
</script>

<template>
  <div class="container mx-auto px-4 py-16">
    <div class="text-center mb-16">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
      <p class="text-xl text-muted-foreground">Choose the plan that's right for you</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div v-for="plan in plans" :key="plan.name" 
           class="relative p-8 rounded-xl border border-border bg-card hover:border-primary transition-colors">
        <div v-if="plan.popular" 
             class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full">
          Most Popular
        </div>
        
        <h3 class="text-2xl font-bold mb-2">{{ plan.name }}</h3>
        <div class="mb-4">
          <span class="text-4xl font-bold">{{ plan.price }}</span>
          <span v-if="plan.period" class="text-muted-foreground">{{ plan.period }}</span>
        </div>
        <p class="text-muted-foreground mb-6">{{ plan.description }}</p>
        
        <ul class="space-y-3 mb-8">
          <li v-for="feature in plan.features" :key="feature" class="flex items-center">
            <span class="text-primary mr-2">✓</span>
            {{ feature }}
          </li>
        </ul>

        <Button :variant="plan.popular ? 'primary' : 'secondary'" class="w-full">
          {{ plan.price === 'Custom' ? 'Contact Sales' : 'Get Started' }}
        </Button>
      </div>
    </div>
  </div>
</template> 