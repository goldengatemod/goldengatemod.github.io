<template>
  <ImageGallery :images="images" :preview-limit="4" />
</template>

<script lang="ts" setup>
import ImageGallery from '~/components/common/ImageGallery.vue';

const images = ref([
  {
    src: 'golden-gate/preview/gg-preview-01.webp',
  },
  {
    src: 'golden-gate/preview/gg-preview-02.webp',
  },
  {
    src: 'golden-gate/preview/gg-preview-03.webp',
  },
  {
    src: 'golden-gate/preview/gg-preview-04.webp',
  },
  {
    src: 'golden-gate/preview/gg-preview-05.webp',
  },
  {
    src: 'golden-gate/preview/gg-preview-06.webp',
  },
  {
    src: 'golden-gate/preview/gg-preview-07.webp',
  },
  {
    src: 'golden-gate/preview/gg-preview-08.webp',
  },
  {
    src: 'golden-gate/preview/gg-preview-09.webp',
  },
  {
    src: 'golden-gate/preview/gg-preview-10.webp',
  },
  {
    src: 'golden-gate/preview/gg-preview-11.webp',
  },
  {
    src: 'golden-gate/preview/gg-preview-12.webp',
  },
]);
</script>
