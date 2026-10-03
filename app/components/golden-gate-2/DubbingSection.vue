<template>
  <section id="dubbing">
    <div class="container mx-auto">
      <SectionHeader title="Dubbing" />
    </div>
    <div class="container mx-auto">
      <p class="gg-copy">
        {{ t('goldenGate2.dubbing') }}
      </p>
      <div class="flex justify-center gg-media-gap">
        <IframeWrapper
          src="https://www.youtube.com/embed/4Cft9E1ttHA?si=jpXcmFrgNB9kPLpF"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from '~/components/common/SectionHeader.vue';
import IframeWrapper from '~/components/common/IframeWrapper.vue';

const { t } = useI18n();
</script>
