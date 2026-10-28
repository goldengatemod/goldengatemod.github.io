<template>
  <ImageGallery :images="images" :preview-limit="4" accent="red" />
</template>

<script lang="ts" setup>
import ImageGallery from '~/components/common/ImageGallery.vue';

const images = ref([
  {
    src: 'golden-gate-2/preview/gg2-preview-02.webp',
  },
  {
    src: 'golden-gate-2/preview/gg2-preview-04.webp',
  },
  {
    src: 'golden-gate-2/preview/gg2-preview-05.webp',
  },
  {
    src: 'golden-gate-2/preview/gg2-preview-10.webp',
  },
  {
    src: 'golden-gate-2/preview/gg2-preview-07.webp',
  },
  {
    src: 'golden-gate-2/preview/gg2-preview-08.webp',
  },
  {
    src: 'golden-gate-2/preview/gg2-preview-09.webp',
  },
  {
    src: 'golden-gate-2/preview/gg2-preview-11.webp',
  },
  {
    src: 'golden-gate-2/preview/gg2-preview-12.webp',
  },
  {
    src: 'golden-gate-2/preview/gg2-preview-13.webp',
  },
  {
    src: 'golden-gate-2/preview/gg2-preview-14.webp',
  },
  {
    src: 'golden-gate-2/preview/gg2-preview-15.webp',
  },
]);
</script>
