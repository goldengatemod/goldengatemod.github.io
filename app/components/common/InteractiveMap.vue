<template>
  <div class="map-wrapper">
    <div class="map-container">
      <div ref="mapContainerRef" class="map-image-container">
        <img
          ref="mapImageRef"
          :src="mapUrl"
          alt="Map"
          class="map-image"
          @load="updateScale"
          @contextmenu.prevent
        />

        <UPopover v-for="marker in markers" :key="marker.id">
          <div class="map-marker" :style="getMarkerStyle(marker)">
            <UIcon name="i-heroicons-map-pin-solid" class="marker-icon" />
          </div>

          <template #content>
            <div class="marker-tooltip">
              <h4
                class="marker-tooltip--title flex items-center justify-center"
              >
                {{ t(marker.title) }}
              </h4>
              <p v-if="marker.description" class="text-sm">
                {{ t(marker.description) }}
              </p>
            </div>
          </template>
        </UPopover>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Marker {
  id: string
  x: number
  y: number
  title: string
  description?: string
}

interface Props {
  mapUrl: string
  markers?: Marker[]
  originalWidth?: number
  originalHeight?: number
}

const { t } = useI18n()

const props = withDefaults(defineProps<Props>(), {
  markers: () => [],
  originalWidth: undefined,
  originalHeight: undefined,
})

const mapContainerRef = ref<HTMLElement | null>(null)
const mapImageRef = ref<HTMLImageElement | null>(null)
const scale = ref(1)

const updateScale = () => {
  if (!mapImageRef.value) return

  const naturalWidth = props.originalWidth || mapImageRef.value.naturalWidth
  const displayWidth = mapImageRef.value.clientWidth

  scale.value = displayWidth / naturalWidth
}

const getMarkerStyle = (marker: Marker) => {
  return {
    left: `${marker.x * scale.value}px`,
    top: `${marker.y * scale.value}px`,
  }
}

onMounted(() => {
  updateScale()
  window.addEventListener('resize', updateScale)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScale)
})

let resizeObserver: ResizeObserver | null = null

onMounted(() => {
  if (typeof ResizeObserver !== 'undefined' && mapContainerRef.value) {
    resizeObserver = new ResizeObserver(() => {
      updateScale()
    })
    resizeObserver.observe(mapContainerRef.value)
  }
})

onUnmounted(() => {
  if (resizeObserver) {
    resizeObserver.disconnect()
  }
})
</script>

<style lang="scss" scoped>
.map-wrapper {
  width: 100%;
  min-height: 400px;
}

.map-container {
  position: relative;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.map-image-container {
  position: relative;
  width: 100%;
  line-height: 0;
}

.map-image {
  width: 100%;
  height: auto;
  display: block;
}

.map-marker {
  position: absolute;
  transform: translate(-50%, -100%);
  z-index: 10;
  transition: transform 0.2s ease;
  pointer-events: auto;
  cursor: pointer;

  &:hover {
    transform: translate(-50%, -100%) scale(1.2);
  }
}

.marker-icon {
  width: 32px;
  height: 32px;
  color: var(--ui-primary);
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3));
  transition: all 0.2s ease;

  .map-marker:hover & {
    filter: drop-shadow(0 6px 8px rgba(0, 0, 0, 0.4));
    color: var(--color-amber-400);
  }
}

.marker-tooltip {
  padding: 0.75rem;
  max-width: 300px;

  h4 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.25rem;
    letter-spacing: 0.05em;
    color: white;
    margin: 0 0 0.5rem 0;
  }

  p {
    margin: 0;
    color: #f3f4f6;
    line-height: 1.5;
  }
}

@media (max-width: 768px) {
  .map-wrapper {
    min-height: 300px;
  }

  .marker-icon {
    width: 40px;
    height: 40px;
  }

  .marker-tooltip {
    max-width: 250px;
    padding: 0.5rem;
  }
}

@media (max-width: 480px) {
  .marker-icon {
    width: 36px;
    height: 36px;
  }

  .marker-tooltip {
    max-width: 200px;
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
    animation: none !important;
  }
}
</style>
