<template>
  <section id="soundtrack">
    <div class="mx-auto">
      <SectionHeader title="goldenGate2.music.title" />
      <p class="text-gray-200 text-base md:text-lg mx-4 md:mx-auto">
        {{ t('goldenGate2.music.description') }}
      </p>
      <div class="flex justify-center mt-10">
        <IframeWrapper
          src="https://www.youtube.com/embed/i9vDuDjLv-M?si=LiVFDpAsldwU2ImX"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from '~/components/common/SectionHeader.vue'
import IframeWrapper from '~/components/common/IframeWrapper.vue'

const { t } = useI18n()
</script>
