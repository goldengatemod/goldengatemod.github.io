<template>
  <section id="hero">
    <div class="mx-auto">
      <SectionHeader title="goldenGate2.hero.title" />

      <div class="flex justify-center">
        <NuxtImg
          class="w-full max-w-2xl h-auto rounded-xl"
          src="golden-gate-2/preview/gg2-preview-01-thumbnail.webp"
          alt="Morris in trouble"
          width="1920"
          height="1080"
          sizes="100vw sm:672px"
          densities="x1 x2"
          loading="lazy"
          decoding="async"
          @contextmenu.prevent
        />
      </div>

      <div class="gg-media-gap gg-copy">
        <p v-for="i in 4" :key="i" :class="{ 'mb-3': i < 4 }">
          {{ t(`goldenGate2.hero.description.${i - 1}`) }}
        </p>
      </div>
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
