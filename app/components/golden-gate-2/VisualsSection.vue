<template>
  <section id="visuals">
    <div class="mx-auto">
      <SectionHeader title="goldenGate2.visuals.title" />
      <div class="flex justify-center">
        <NuxtImg
          src="golden-gate-2/preview/gg2-preview-06-thumbnail.webp"
          alt="Morris and Sara"
          class="w-full max-w-2xl h-auto mx-4 md:mx-auto rounded-xl"
          lazy
          @contextmenu.prevent
        />
      </div>
      <p class="mt-10 text-gray-200 text-base md:text-lg mx-4 md:mx-auto">
        {{ t('goldenGate2.visuals.description') }}
      </p>
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
