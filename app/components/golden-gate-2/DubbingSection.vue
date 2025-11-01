<template>
  <section id="dubbing">
    <div class="container mx-auto">
      <SectionHeader title="Dubbing" />
    </div>
    <div class="container mx-auto">
      <p class="text-gray-200 text-base md:text-lg mx-4 sm:mx-auto">
        {{ t('goldenGate2.dubbing') }}
      </p>
      <div class="flex justify-center mt-10">
        <ResponsiveIframe
          src="https://www.youtube.com/embed/4Cft9E1ttHA?si=jpXcmFrgNB9kPLpF"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from '~/components/common/SectionHeader.vue'
import ResponsiveIframe from '~/components/common/ResponsiveIframe.vue'

const { t } = useI18n()
</script>
