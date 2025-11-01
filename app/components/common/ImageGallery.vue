<template>
  <section id="gallery">
    <UModal
      v-model="isOpen"
      fullscreen
      :ui="{
        content: 'bg-black/75',
        header: 'border-none',
        body: 'p-0!',
      }"
    >
      <div class="container mx-auto max-w-screen-2xl">
        <div
          v-if="images && images.length"
          class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto pb-10 px-4 md:px-auto"
        >
          <div
            v-for="(image, index) of images"
            :key="index"
            class="gallery-item"
          >
            <NuxtImg
              :src="image.thumbnailSrc"
              :alt="image.alt || `Gallery image ${index + 1}`"
              class="gallery-thumbnail"
              fetchpriority="low"
              @click="openLightbox(index)"
              @contextmenu.prevent
            />

            <NuxtImg
              v-if="image.fullSrc"
              :src="image.fullSrc"
              :alt="image.alt || `Gallery image ${index + 1}`"
              fetchpriority="low"
              class="hidden"
              @contextmenu.prevent
            />
          </div>
        </div>
      </div>

      <template #close>
        <button
          class="absolute top-4 right-4 z-50 p-2 rounded-lg bg-[rgba(25,12,6,0.95)] hover:bg-[rgba(25,12,6,1)] hover:border-[rgba(245,158,11,0.5)] transition-colors flex items-center justify-center border border-default cursor-pointer"
          @click="isOpen = false"
        >
          <UIcon name="i-lucide-x" class="w-6 h-6 text-[#f59e0b]" />
        </button>
      </template>

      <template #body>
        <div
          class="relative w-full h-full flex items-center justify-center p-4"
        >
          <!-- Previous button -->
          <button
            v-if="images.length > 1"
            class="absolute left-4 z-50 p-3 rounded-lg bg-[rgba(25,12,6,0.95)] hover:bg-[rgba(25,12,6,1)] hover:border-[rgba(245,158,11,0.5)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center border border-default cursor-pointer"
            :disabled="currentIndex === 0"
            @click="previousImage"
          >
            <UIcon
              name="i-lucide-chevron-left"
              class="w-6 h-6 text-[#f59e0b]"
            />
          </button>

          <!-- Image display -->
          <div class="flex items-center justify-center w-full h-full">
            <NuxtImg
              v-if="images[currentIndex]"
              :key="currentIndex"
              :src="
                images[currentIndex]?.fullSrc ||
                images[currentIndex]?.thumbnailSrc
              "
              :alt="
                images[currentIndex]?.alt || `Gallery image ${currentIndex + 1}`
              "
              class="w-full h-full object-contain transition-opacity duration-300"
              loading="eager"
              @contextmenu.prevent
            />
          </div>

          <!-- Next button -->
          <button
            v-if="images.length > 1"
            class="absolute right-4 z-50 p-3 rounded-lg bg-[rgba(25,12,6,0.95)] hover:bg-[rgba(25,12,6,1)] hover:border-[rgba(245,158,11,0.5)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center border border-default cursor-pointer"
            :disabled="currentIndex === images.length - 1"
            @click="nextImage"
          >
            <UIcon
              name="i-lucide-chevron-right"
              class="w-6 h-6 text-[#f59e0b]"
            />
          </button>
        </div>
      </template>
    </UModal>
  </section>
</template>

<script setup lang="ts">
interface GalleryImage {
  thumbnailSrc: string
  fullSrc?: string
  alt?: string
}

interface Props {
  images?: GalleryImage[]
}

const props = defineProps<Props>()
const images = computed(() => props.images ?? [])

const isOpen = ref(false)
const currentIndex = ref(0)

const openLightbox = (index: number) => {
  if (!images.value || !images.value.length) return
  currentIndex.value = index
  isOpen.value = true
}

const nextImage = () => {
  if (currentIndex.value < images.value.length - 1) {
    currentIndex.value++
  }
}

const previousImage = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  if (!isOpen.value) return

  if (event.key === 'ArrowRight') {
    nextImage()
  } else if (event.key === 'ArrowLeft') {
    previousImage()
  } else if (event.key === 'Escape') {
    isOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style lang="scss" scoped>
.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 6px;
  transition: transform 0.3s ease;
  aspect-ratio: 4 / 3;
  width: 100%;

  @media (min-width: 640px) {
    border-radius: 8px;
  }

  &:hover {
    @media (hover: hover) {
      transform: scale(1.02);

      .gallery-thumbnail {
        filter: brightness(1.1);
      }
    }
  }

  &:active {
    @media (hover: none) {
      transform: scale(0.98);
    }
  }
}

.gallery-thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  cursor: pointer;
  transition: filter 0.3s ease;
  border-radius: inherit;
}

@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
    animation: none !important;
  }
}
</style>
