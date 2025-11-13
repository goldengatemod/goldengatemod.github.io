<template>
  <section id="intro">
    <div class="container mx-auto">
      <p
        class="mb-10 text-gray-200 text-base md:text-lg mx-4 md:mx-auto flex justify-center"
      >
        {{ t('goldenGate.intro.description') }}
      </p>
      <div class="flex justify-center">
        <IframeWrapper
          src="https://www.youtube.com/embed/Hc1QvRxYDMo?si=o6A3dyrplbxdp_hK"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import IframeWrapper from '~/components/common/IframeWrapper.vue'

const { t } = useI18n()
</script>
