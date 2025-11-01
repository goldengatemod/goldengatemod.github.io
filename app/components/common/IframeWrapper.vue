<template>
  <div class="responsive-iframe mx-4 sm:mx-auto">
    <div
      v-if="!isIframeLoaded"
      class="youtube-facade"
      :style="{ backgroundImage: `url(${thumbnailUrl})` }"
      @click="loadIframe"
    >
      <div class="play-button">
        <svg viewBox="0 0 24 24" width="68" height="48">
          <path d="M8 5v14l11-7z" fill="currentColor" />
        </svg>
      </div>
      <div v-if="title" class="video-title">
        {{ title }}
      </div>
    </div>

    <iframe
      v-if="isIframeLoaded"
      :src="fullSrc"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
      style="box-shadow: 4px 5px 5px rgba(0, 0, 0, 0.3)"
      width="672"
      height="378"
      fetchpriority="low"
      sandbox="allow-scripts allow-same-origin"
    />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  src: string
  title?: string
}>()

const isIframeLoaded = ref(false)

const videoId = computed(() => {
  const match = props.src.match(/embed\/([^?]+)/)
  return match ? match[1] : ''
})

const thumbnailUrl = computed(
  () => `https://i.ytimg.com/vi/${videoId.value}/maxresdefault.jpg`,
)

const fullSrc = computed(() => {
  return props.src.includes('?')
    ? `${props.src}&autoplay=1`
    : `${props.src}?autoplay=1`
})

const loadIframe = () => {
  isIframeLoaded.value = true
}
</script>

<style lang="scss" scoped>
.responsive-iframe {
  aspect-ratio: 16 / 9;
  width: 100%;
  max-width: 672px;
  contain: layout style paint;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.3),
    0 10px 10px -5px rgba(0, 0, 0, 0.2);
}

.responsive-iframe iframe {
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
}

.youtube-facade {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    transition: background 0.2s ease;
  }

  &:hover .play-button {
    transform: scale(1.05);
  }

  &:hover::before {
    background: rgba(0, 0, 0, 0.1);
  }
}

.play-button {
  background: rgba(0, 0, 0, 0.8);
  border-radius: 25%;
  padding: 18px 22px;
  color: #fff;
  transition: all 0.2s ease;

  svg {
    display: block;
  }

  &:hover {
    background: rgba(255, 0, 0, 0.9);
  }
}

.video-title {
  position: absolute;
  bottom: 16px;
  left: 16px;
  right: 16px;
  color: white;
  background: rgba(0, 0, 0, 0.7);
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
}
</style>
