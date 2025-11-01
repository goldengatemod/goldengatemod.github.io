<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 scale-90 translate-y-2"
    enter-to-class="opacity-100 scale-100 translate-y-0"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100 scale-100 translate-y-0"
    leave-to-class="opacity-0 scale-90 translate-y-2"
  >
    <button
      v-show="isVisible"
      class="scroll-to-top-btn fixed bottom-6 right-6 z-50"
      :class="[
        'transition-all duration-300',
        isVisible ? 'translate-y-0' : 'translate-y-16',
        isScrolling && 'loading',
      ]"
      :disabled="isScrolling"
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
  threshold?: number
  scrollDuration?: number
  easingFunction?: (t: number) => number
  showOnlyWhenScrollable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  threshold: 300,
  scrollDuration: 800,
  easingFunction: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  showOnlyWhenScrollable: true,
})

const isVisible = ref(false)
const isScrolling = ref(false)

const checkVisibility = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  const canScroll = props.showOnlyWhenScrollable
    ? document.documentElement.scrollHeight > window.innerHeight
    : true

  isVisible.value = scrollTop > props.threshold && canScroll
}

const scrollToTop = async () => {
  if (isScrolling.value) return

  isScrolling.value = true
  const startPosition = window.pageYOffset
  const startTime = performance.now()

  const animateScroll = (currentTime: number) => {
    const timeElapsed = currentTime - startTime
    const progress = Math.min(timeElapsed / props.scrollDuration, 1)
    const ease = props.easingFunction(progress)

    window.scrollTo(0, startPosition * (1 - ease))

    if (progress < 1) {
      requestAnimationFrame(animateScroll)
    } else {
      isScrolling.value = false
    }
  }

  requestAnimationFrame(animateScroll)
}

let ticking = false
const handleScroll = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      checkVisibility()
      ticking = false
    })
    ticking = true
  }
}

onMounted(() => {
  checkVisibility()
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', checkVisibility, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', checkVisibility)
})

defineExpose({
  scrollToTop,
  isVisible: readonly(isVisible),
  isScrolling: readonly(isScrolling),
})
</script>

<style scoped>
.scroll-to-top-btn {
  background: rgba(25, 12, 6, 0.95);
  border: 1px solid rgba(245, 158, 11, 0.3);
  color: #f59e0b;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.scroll-to-top-btn:hover:not(:disabled) {
  background: rgba(25, 12, 6, 1);
  border-color: rgba(245, 158, 11, 0.5);
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
</style>
