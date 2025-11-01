<template>
  <section id="intro">
    <div class="container mx-auto">
      <p
        class="mb-10 text-gray-200 text-base md:text-lg mx-4 md:mx-auto flex justify-center"
      >
        {{ t('goldenGate.intro.description') }}
      </p>
      <div class="flex justify-center">
        <ResponsiveIframe
          src="https://www.youtube.com/embed/Q4NIcGEF1XE?si=ilDFsjbAsfcqBFFO"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ResponsiveIframe from '~/components/common/ResponsiveIframe.vue'

const { t } = useI18n()
</script>
