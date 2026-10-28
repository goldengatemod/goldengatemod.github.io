<template>
  <ImageGallery :images="images" :preview-limit="4" />
</template>

<script lang="ts" setup>
import ImageGallery from '~/components/common/ImageGallery.vue';

const images = ref([
  {
    thumbnailSrc: 'golden-gate/preview/gg-preview-01-thumbnail.webp',
    fullSrc: 'golden-gate/preview/gg-preview-01.webp',
  },
  {
    thumbnailSrc: 'golden-gate/preview/gg-preview-02-thumbnail.webp',
    fullSrc: 'golden-gate/preview/gg-preview-02.webp',
  },
  {
    thumbnailSrc: 'golden-gate/preview/gg-preview-03-thumbnail.webp',
    fullSrc: 'golden-gate/preview/gg-preview-03.webp',
  },
  {
    thumbnailSrc: 'golden-gate/preview/gg-preview-04-thumbnail.webp',
    fullSrc: 'golden-gate/preview/gg-preview-04.webp',
  },
  {
    thumbnailSrc: 'golden-gate/preview/gg-preview-05-thumbnail.webp',
    fullSrc: 'golden-gate/preview/gg-preview-05.webp',
  },
  {
    thumbnailSrc: 'golden-gate/preview/gg-preview-06-thumbnail.webp',
    fullSrc: 'golden-gate/preview/gg-preview-06.webp',
  },
  {
    thumbnailSrc: 'golden-gate/preview/gg-preview-07-thumbnail.webp',
    fullSrc: 'golden-gate/preview/gg-preview-07.webp',
  },
  {
    thumbnailSrc: 'golden-gate/preview/gg-preview-08-thumbnail.webp',
    fullSrc: 'golden-gate/preview/gg-preview-08.webp',
  },
  {
    thumbnailSrc: 'golden-gate/preview/gg-preview-09-thumbnail.webp',
    fullSrc: 'golden-gate/preview/gg-preview-09.webp',
  },
  {
    thumbnailSrc: 'golden-gate/preview/gg-preview-10-thumbnail.webp',
    fullSrc: 'golden-gate/preview/gg-preview-10.webp',
  },
  {
    thumbnailSrc: 'golden-gate/preview/gg-preview-11-thumbnail.webp',
    fullSrc: 'golden-gate/preview/gg-preview-11.webp',
  },
  {
    thumbnailSrc: 'golden-gate/preview/gg-preview-12-thumbnail.webp',
    fullSrc: 'golden-gate/preview/gg-preview-12.webp',
  },
]);
</script>
