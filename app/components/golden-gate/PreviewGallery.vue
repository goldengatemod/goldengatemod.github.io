<template>
  <ImageGallery :images="images" />
</template>

<script lang="ts" setup>
import ImageGallery from '~/components/common/ImageGallery.vue'

const images = ref([
  {
    thumbnailSrc: 'golden-gate/preview/gg-preview-01.webp',
  },
  {
    thumbnailSrc: 'golden-gate/preview/gg-preview-02.webp',
  },
  {
    thumbnailSrc: 'golden-gate/preview/gg-preview-03.webp',
  },
  {
    thumbnailSrc: 'golden-gate/preview/gg-preview-04.webp',
  },
  {
    thumbnailSrc: 'golden-gate/preview/gg-preview-05.webp',
  },
  {
    thumbnailSrc: 'golden-gate/preview/gg-preview-06.webp',
  },
  {
    thumbnailSrc: 'golden-gate/preview/gg-preview-07.webp',
  },
  {
    thumbnailSrc: 'golden-gate/preview/gg-preview-08.webp',
  },
  {
    thumbnailSrc: 'golden-gate/preview/gg-preview-09.webp',
  },
  {
    thumbnailSrc: 'golden-gate/preview/gg-preview-10.webp',
  },
  {
    thumbnailSrc: 'golden-gate/preview/gg-preview-11.webp',
  },
  {
    thumbnailSrc: 'golden-gate/preview/gg-preview-12.webp',
  },
  {
    thumbnailSrc: 'golden-gate/preview/gg-preview-13.webp',
  },
  {
    thumbnailSrc: 'golden-gate/preview/gg-preview-14.webp',
  },
  {
    thumbnailSrc: 'golden-gate/preview/gg-preview-15.webp',
  },
  {
    thumbnailSrc: 'golden-gate/preview/gg-preview-16.webp',
  },
])
</script>
