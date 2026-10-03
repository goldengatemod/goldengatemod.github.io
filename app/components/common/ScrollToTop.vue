<template>
  <Transition
    enter-active-class="transition-[opacity,transform] duration-300 ease-out"
    enter-from-class="opacity-0 scale-90 translate-y-2"
    enter-to-class="opacity-100 scale-100 translate-y-0"
    leave-active-class="transition-[opacity,transform] duration-200 ease-in"
    leave-from-class="opacity-100 scale-100 translate-y-0"
    leave-to-class="opacity-0 scale-90 translate-y-2"
  >
    <button
      v-show="isVisible"
      class="scroll-to-top-btn fixed bottom-6 right-6 z-50"
      :class="[
        'transition-[opacity,transform] duration-300',
        isVisible ? 'translate-y-0' : 'translate-y-16',
        isScrolling && 'loading',
      ]"
      :disabled="isScrolling"
      aria-label="Scroll to top"
      @click="scrollToTop"
    >
      <Icon
        v-if="!isScrolling"
        name="i-heroicons-arrow-up-20-solid"
        class="w-5 h-5"
      />
      <Icon
        v-else
        name="i-heroicons-arrow-path-20-solid"
        class="w-5 h-5 animate-spin"
      />
    </button>
  </Transition>
</template>

<script setup lang="ts">
interface Props {
  threshold?: number;
  scrollDuration?: number;
  easingFunction?: (t: number) => number;
  showOnlyWhenScrollable?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  threshold: 300,
  scrollDuration: 800,
  easingFunction: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  showOnlyWhenScrollable: true,
});

const isVisible = ref(false);
const isScrolling = ref(false);
let animationFrame = 0;
let visibilityFrame = 0;

const checkVisibility = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop <= props.threshold) {
    isVisible.value = false;
    return;
  }
  const canScroll = props.showOnlyWhenScrollable
    ? document.documentElement.scrollHeight > window.innerHeight
    : true;

  isVisible.value = scrollTop > props.threshold && canScroll;
};

const scrollToTop = () => {
  if (isScrolling.value) return;

  if (
    props.scrollDuration <= 0 ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    window.scrollTo({ top: 0, behavior: 'instant' });
    return;
  }

  isScrolling.value = true;
  const startPosition = window.pageYOffset;
  const startTime = performance.now();

  const animateScroll = (currentTime: number) => {
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / props.scrollDuration, 1);
    const ease = props.easingFunction(progress);

    window.scrollTo({ top: startPosition * (1 - ease), behavior: 'instant' });

    if (progress < 1) {
      animationFrame = requestAnimationFrame(animateScroll);
    } else {
      isScrolling.value = false;
      animationFrame = 0;
    }
  };

  animationFrame = requestAnimationFrame(animateScroll);
};

const handleScroll = () => {
  if (!visibilityFrame) {
    visibilityFrame = requestAnimationFrame(() => {
      visibilityFrame = 0;
      checkVisibility();
    });
  }
};

onMounted(() => {
  checkVisibility();
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleScroll);
  cancelAnimationFrame(animationFrame);
  cancelAnimationFrame(visibilityFrame);
});

defineExpose({
  scrollToTop,
  isVisible: readonly(isVisible),
  isScrolling: readonly(isScrolling),
});
</script>

<style scoped>
.scroll-to-top-btn {
  background: var(--gg-panel);
  border: 1px solid var(--gg-gold-border);
  color: var(--gg-gold);
  width: 48px;
  height: 48px;
  border-radius: var(--gg-radius-control);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:
    opacity 0.3s ease,
    scale 0.3s ease,
    translate 0.3s ease,
    transform 0.3s ease,
    background-color 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.scroll-to-top-btn:hover:not(:disabled) {
  background: var(--gg-bg);
  border-color: var(--gg-gold-border-hover);
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.scroll-to-top-btn:active:not(:disabled) {
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.scroll-to-top-btn:disabled {
  cursor: not-allowed;
  opacity: 0.7;
}

.scroll-to-top-btn.loading {
  pointer-events: none;
}

@media (max-width: 640px) {
  .scroll-to-top-btn.fixed.bottom-6.right-6 {
    bottom: 1rem;
    right: 1rem;
    width: 44px;
    height: 44px;
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
@media (prefers-reduced-motion: reduce) {
  .scroll-to-top-btn {
    transition: none;
  }

  .scroll-to-top-btn:hover {
    transform: none;
  }

  .animate-spin {
    animation: none;
  }
}
</style>
