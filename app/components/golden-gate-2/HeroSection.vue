<template>
  <section id="hero">
    <div class="mx-auto">
      <SectionHeader title="goldenGate2.hero.title" />

      <div class="flex justify-center">
        <NuxtImg
          class="w-full max-w-2xl h-auto mx-4 md:mx-auto rounded-xl"
          src="golden-gate-2/preview/gg2-preview-01-thumbnail.webp"
          alt="Morris in trouble"
          lazy
          @contextmenu.prevent
        />
      </div>

      <div class="mt-10 text-gray-200 text-base md:text-lg mx-4 md:mx-auto">
        <p v-for="i in 4" :key="i" :class="{ 'mb-3': i < 4 }">
          {{ t(`goldenGate2.hero.description.${i - 1}`) }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from '~/components/common/SectionHeader.vue'

const { t } = useI18n()
</script>

<style lang="css" scoped>
img {
  position: relative;
  overflow: hidden;
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.3),
    0 10px 10px -5px rgba(0, 0, 0, 0.2);
}
</style>
