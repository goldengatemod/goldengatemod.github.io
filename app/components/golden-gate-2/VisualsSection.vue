<template>
  <section id="visuals">
    <div class="mx-auto">
      <SectionHeader title="goldenGate2.visuals.title" />
      <div class="flex justify-center">
        <NuxtImg
          src="golden-gate-2/preview/gg2-preview-06-thumbnail.webp"
          alt="Morris and Sara"
          width="1920"
          height="1080"
          sizes="100vw sm:672px"
          densities="x1 x2"
          class="w-full max-w-2xl h-auto rounded-xl"
          loading="lazy"
          decoding="async"
          @contextmenu.prevent
        />
      </div>
      <p class="gg-media-gap gg-copy">
        {{ t('goldenGate2.visuals.description') }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from '~/components/common/SectionHeader.vue';

const { t } = useI18n();
</script>

<style lang="css" scoped>
img {
  position: relative;
  overflow: hidden;
  box-shadow: var(--gg-shadow-media);
}
</style>
