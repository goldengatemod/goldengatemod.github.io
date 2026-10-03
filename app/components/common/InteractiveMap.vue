<template>
  <div class="map-wrapper">
    <div class="map-container">
      <div class="map-image-container">
        <img
          ref="mapImageRef"
          :src="mapUrl"
          alt="Map"
          class="map-image"
          :width="originalWidth"
          :height="originalHeight"
          loading="lazy"
          decoding="async"
          @load="updateImageSize"
          @contextmenu.prevent
        />

        <UPopover v-for="marker in markers" :key="marker.id">
          <button
            type="button"
            class="map-marker"
            :style="getMarkerStyle(marker)"
            :aria-label="t(marker.title)"
          >
            <UIcon name="i-heroicons-map-pin-solid" class="marker-icon" />
          </button>

          <template #content>
            <div class="marker-tooltip">
              <p class="marker-tooltip--title flex items-center justify-center">
                {{ t(marker.title) }}
              </p>
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
import type { CSSProperties } from 'vue';

interface Marker {
  id: string;
  x: number;
  y: number;
  title: string;
  description?: string;
}

interface Props {
  mapUrl: string;
  markers?: Marker[];
  originalWidth?: number;
  originalHeight?: number;
}

const { t } = useI18n();

const props = withDefaults(defineProps<Props>(), {
  markers: () => [],
  originalWidth: undefined,
  originalHeight: undefined,
});

const mapImageRef = ref<HTMLImageElement | null>(null);
const imageSize = ref({ width: 0, height: 0 });

const updateImageSize = () => {
  if (!mapImageRef.value) return;

  imageSize.value = {
    width: mapImageRef.value.naturalWidth,
    height: mapImageRef.value.naturalHeight,
  };
};

const getMarkerStyle = (marker: Marker): CSSProperties => {
  const width = props.originalWidth || imageSize.value.width;
  const height = props.originalHeight || imageSize.value.height;
  return {
    left: width > 0 ? `${(marker.x / width) * 100}%` : '0%',
    top: height > 0 ? `${(marker.y / height) * 100}%` : '0%',
    visibility: width > 0 && height > 0 ? 'visible' : 'hidden',
  };
};

onMounted(updateImageSize);
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
  color: var(--gg-marker-color, var(--ui-primary));
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3));
  transition:
    color 0.2s ease,
    filter 0.2s ease;

  .map-marker:hover & {
    filter: drop-shadow(0 6px 8px rgba(0, 0, 0, 0.4));
    color: var(--gg-marker-hover, var(--gg-gold-hover));
  }
}

.marker-tooltip {
  padding: 0.75rem;
  max-width: 300px;

  .marker-tooltip--title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.25rem;
    letter-spacing: 0.05em;
    color: white;
    margin: 0 0 0.5rem 0;
  }

  p:not(.marker-tooltip--title) {
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
  .map-marker,
  .marker-icon {
    transition: none;
  }

  .map-marker:hover {
    transform: translate(-50%, -100%);
  }
}
</style>
