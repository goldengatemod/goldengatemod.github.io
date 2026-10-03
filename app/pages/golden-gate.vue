<template>
  <main class="golden-gate-page gg-page-gold">
    <h1 id="introduction-title" class="sr-only">
      {{ t('navigation.goldenGate') }}
    </h1>
    <Introduction />

    <div>
      <div class="gg-content">
        <SectionDivider />
        <GoldenGateIntroSection />
        <SectionDivider />
        <GoldenGateLocationsSection />
        <SectionDivider />
        <LazyGoldenGateGuildsSection hydrate-on-visible />
        <SectionDivider />
        <GoldenGatePatchSection />
        <SectionDivider />
      </div>
      <GoldenGatePreviewGallery />
    </div>
  </main>
</template>

<script setup lang="ts">
import SectionDivider from '~/components/common/SectionDivider.vue';
import Introduction from '~/components/golden-gate/Introduction.vue';

const { t } = useI18n();

useHead({
  title: computed(() => `${t('navigation.goldenGate')}`),
});
</script>

<style lang="scss" scoped>
main {
  background: var(--gg-gradient);
  contain: layout style paint;
  will-change: scroll-position;
}
</style>
