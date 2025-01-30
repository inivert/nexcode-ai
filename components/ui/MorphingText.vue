<template>
  <div
    :class="
      cn(
        'relative inline-flex h-16 w-auto text-center font-sans text-[40pt] font-bold leading-none',
        props.class,
      )
    "
  >
    <span
      ref="text1Ref"
      :class="cn('absolute inset-x-0 top-0 m-auto inline-block w-full transition-all duration-300')"
    />
    <span
      ref="text2Ref"
      :class="cn('absolute inset-x-0 top-0 m-auto inline-block w-full transition-all duration-300')"
    />

    <svg class="absolute -z-50 opacity-0" aria-hidden="true">
      <defs>
        <filter id="morphtext-blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.6" />
        </filter>
      </defs>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { cn } from "@/utils";
import { ref, onMounted, onUnmounted } from 'vue';

interface Props {
  class?: string;
  texts: string[];
  morphTime?: number;
  coolDownTime?: number;
}

const props = withDefaults(defineProps<Props>(), {
  morphTime: 1.5,
  coolDownTime: 0.5,
});

const textIndex = ref(0);
const morph = ref(0);
const coolDown = ref(props.coolDownTime);
const time = ref(new Date());

const text1Ref = ref<HTMLSpanElement>();
const text2Ref = ref<HTMLSpanElement>();

function setStyles(fraction: number) {
  if (!text1Ref.value || !text2Ref.value) return;

  text2Ref.value.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  text2Ref.value.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  const invertedFraction = 1 - fraction;
  text1Ref.value.style.filter = `blur(${Math.min(8 / invertedFraction - 8, 100)}px)`;
  text1Ref.value.style.opacity = `${Math.pow(invertedFraction, 0.4) * 100}%`;

  text1Ref.value.textContent = props.texts[textIndex.value % props.texts.length];
  text2Ref.value.textContent = props.texts[(textIndex.value + 1) % props.texts.length];
}

function doMorph() {
  morph.value -= coolDown.value;
  coolDown.value = 0;

  let fraction = morph.value / props.morphTime;

  if (fraction > 1) {
    coolDown.value = props.coolDownTime;
    fraction = 1;
  }

  setStyles(fraction);

  if (fraction === 1) {
    textIndex.value = (textIndex.value + 1) % props.texts.length;
    morph.value = props.morphTime;
  }
}

function doCoolDown() {
  morph.value = props.morphTime;

  if (text1Ref.value && text2Ref.value) {
    text2Ref.value.style.filter = "none";
    text2Ref.value.style.opacity = "100%";
    text1Ref.value.style.filter = "none";
    text1Ref.value.style.opacity = "0%";
  }
}

let animationFrameId: number = 0;
function animate() {
  animationFrameId = requestAnimationFrame(animate);

  const newTime = new Date();
  const dt = (newTime.getTime() - time.value.getTime()) / 1000;
  time.value = newTime;

  coolDown.value -= dt;

  if (coolDown.value <= 0) {
    doMorph();
  } else {
    doCoolDown();
  }
}

onMounted(() => {
  // Initialize first text
  if (text1Ref.value && text2Ref.value) {
    text1Ref.value.textContent = props.texts[0];
    text2Ref.value.textContent = props.texts[1];
    text1Ref.value.style.opacity = "100%";
    text2Ref.value.style.opacity = "0%";
  }
  animate();
});

onUnmounted(() => {
  cancelAnimationFrame(animationFrameId);
});
</script> 