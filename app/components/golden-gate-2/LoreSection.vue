<template>
  <section id="lore">
    <div class="container mx-auto">
      <SectionHeader title="goldenGate2.lore.title" />
    </div>

    <div class="container mx-auto">
      <div class="flex justify-center">
        <ResponsiveIframe
          src="https://www.youtube.com/embed/4PrQn64Pol8?si=5-ReIzFymPB_HGG5"
        />
      </div>

      <div class="mt-10 text-gray-200 text-base md:text-lg mx-4 md:mx-auto">
        <p v-for="i in 4" :key="i" :class="{ 'mb-3': i < 4 }">
          {{ t(`goldenGate2.lore.description.${i - 1}`) }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from '~/components/common/SectionHeader.vue'
import ResponsiveIframe from '~/components/common/ResponsiveIframe.vue'

const { t } = useI18n()
</script>
