<template>
  <ImageGallery :images="images" />
</template>

<script lang="ts" setup>
import ImageGallery from '~/components/common/ImageGallery.vue'

const images = ref([
  {
    thumbnailSrc: 'golden-gate-2/preview/gg2-preview-02-thumbnail.webp',
    fullSrc: 'golden-gate-2/preview/gg2-preview-02.webp',
  },
  {
    thumbnailSrc: 'golden-gate-2/preview/gg2-preview-04-thumbnail.webp',
    fullSrc: 'golden-gate-2/preview/gg2-preview-04.webp',
  },
  {
    thumbnailSrc: 'golden-gate-2/preview/gg2-preview-05-thumbnail.webp',
    fullSrc: 'golden-gate-2/preview/gg2-preview-05.webp',
  },
  {
    thumbnailSrc: 'golden-gate-2/preview/gg2-preview-10-thumbnail.webp',
    fullSrc: 'golden-gate-2/preview/gg2-preview-10.webp',
  },
  {
    thumbnailSrc: 'golden-gate-2/preview/gg2-preview-07-thumbnail.webp',
    fullSrc: 'golden-gate-2/preview/gg2-preview-07.webp',
  },
  {
    thumbnailSrc: 'golden-gate-2/preview/gg2-preview-08-thumbnail.webp',
    fullSrc: 'golden-gate-2/preview/gg2-preview-08.webp',
  },
  {
    thumbnailSrc: 'golden-gate-2/preview/gg2-preview-09-thumbnail.webp',
    fullSrc: 'golden-gate-2/preview/gg2-preview-09.webp',
  },
  {
    thumbnailSrc: 'golden-gate-2/preview/gg2-preview-11-thumbnail.webp',
    fullSrc: 'golden-gate-2/preview/gg2-preview-11.webp',
  },
  {
    thumbnailSrc: 'golden-gate-2/preview/gg2-preview-12-thumbnail.webp',
    fullSrc: 'golden-gate-2/preview/gg2-preview-12.webp',
  },
  {
    thumbnailSrc: 'golden-gate-2/preview/gg2-preview-13-thumbnail.webp',
    fullSrc: 'golden-gate-2/preview/gg2-preview-13.webp',
  },
  {
    thumbnailSrc: 'golden-gate-2/preview/gg2-preview-14-thumbnail.webp',
    fullSrc: 'golden-gate-2/preview/gg2-preview-14.webp',
  },
  {
    thumbnailSrc: 'golden-gate-2/preview/gg2-preview-15-thumbnail.webp',
    fullSrc: 'golden-gate-2/preview/gg2-preview-15.webp',
  },
])

// const activeIndex = ref(0)
// const displayCustom = ref(false)

// const imageClick = (index: number) => {
//   activeIndex.value = index
//   displayCustom.value = true
// }
</script>
