<template>
  <section id="soundtrack">
    <div class="mx-auto">
      <SectionHeader title="goldenGate2.music.title" />
      <p class="gg-copy">
        {{ t('goldenGate2.music.description') }}
      </p>
      <div class="flex justify-center gg-media-gap">
        <IframeWrapper
          src="https://www.youtube.com/embed/i9vDuDjLv-M?si=LiVFDpAsldwU2ImX"
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
