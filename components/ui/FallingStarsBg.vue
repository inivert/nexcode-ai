<script setup lang="ts">
import { cn } from '@/utils'

interface Props {
  class?: string
}

const props = defineProps<Props>()
</script>

<template>
  <div :class="cn('absolute inset-0 overflow-hidden', props.class)">
    <div class="stars" />
    <div class="stars2" />
    <div class="stars3" />
  </div>
</template>

<style scoped>
.stars {
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 1744px 122px #fff,
    134px 1321px #fff,
    92px 859px #fff,
    1162px 1185px #fff,
    569px 415px #fff,
    1590px 360px #fff,
    1649px 1556px #fff,
    1090px 1138px #fff,
    1662px 538px #fff,
    1962px 1155px #fff,
    1440px 251px #fff,
    1452px 1441px #fff;
  animation: animStar 50s linear infinite;
}

.stars2 {
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 1744px 122px #fff,
    134px 1321px #fff,
    92px 859px #fff,
    1162px 1185px #fff,
    569px 415px #fff,
    1590px 360px #fff,
    1649px 1556px #fff,
    1090px 1138px #fff,
    1662px 538px #fff,
    1962px 1155px #fff,
    1440px 251px #fff,
    1452px 1441px #fff;
  animation: animStar2 100s linear infinite;
}

.stars3 {
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 1744px 122px #fff,
    134px 1321px #fff,
    92px 859px #fff,
    1162px 1185px #fff,
    569px 415px #fff,
    1590px 360px #fff,
    1649px 1556px #fff,
    1090px 1138px #fff,
    1662px 538px #fff,
    1962px 1155px #fff,
    1440px 251px #fff,
    1452px 1441px #fff;
  animation: animStar3 150s linear infinite;
}

@keyframes animStar {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-2000px) rotate(360deg);
  }
}

@keyframes animStar2 {
  from {
    transform: translateY(0) rotate(45deg);
  }
  to {
    transform: translateY(-2000px) rotate(405deg);
  }
}

@keyframes animStar3 {
  from {
    transform: translateY(0) rotate(-45deg);
  }
  to {
    transform: translateY(-2000px) rotate(315deg);
  }
}
</style> 
