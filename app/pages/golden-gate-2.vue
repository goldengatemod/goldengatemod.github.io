<template>
  <main>
    <h1 id="introduction-title" class="sr-only">
      {{ t('navigation.goldenGate2') }}
    </h1>
    <Introduction />

    <div>
      <div class="gg-content">
        <SectionDivider />
        <GoldenGate2LoreSection />
        <SectionDivider />
        <GoldenGate2LocationsSection />
        <SectionDivider />
        <GoldenGate2NpcsSection />
        <SectionDivider />
        <LazyGoldenGate2QuestsSection hydrate-on-visible />
        <SectionDivider />
        <LazyGoldenGate2HeroSection hydrate-on-visible />
        <SectionDivider />
        <GoldenGate2SoundtrackSection />
        <SectionDivider />
        <GoldenGate2DubbingSection />
        <SectionDivider />
        <GoldenGate2MechanicsSection />
        <SectionDivider />
        <LazyGoldenGate2VisualsSection hydrate-on-visible />
        <SectionDivider />
        <GoldenGate2FAQ />
        <SectionDivider />
      </div>
      <GoldenGate2PreviewGallery />
    </div>
  </main>
</template>

<script setup lang="ts">
import SectionDivider from '~/components/common/SectionDivider.vue';
import Introduction from '~/components/golden-gate-2/Introduction.vue';

const { t } = useI18n();

useHead({
  title: computed(() => `${t('navigation.goldenGate2')}`),
});
</script>

<style lang="scss" scoped>
main {
  --bg-overlay: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0) 50%
  );
  --bg-image-lg: url('~/assets/img/golden-gate-2/gg2-background-lg.webp');
  --bg-image-md: url('~/assets/img/golden-gate-2/gg2-background-md.webp');
  --bg-image-sm: url('~/assets/img/golden-gate-2/gg2-background-sm.webp');
  --bg-image-xs: url('~/assets/img/golden-gate-2/gg2-background-xs.webp');

  background-image: var(--bg-overlay), var(--bg-image-lg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  contain: layout style paint;
  will-change: scroll-position;

  @media (max-width: 1024px) {
    background-image: var(--bg-overlay), var(--bg-image-md);
  }

  @media (max-width: 768px) {
    background-image: var(--bg-overlay), var(--bg-image-sm);
    background-attachment: scroll;
  }

  @media (max-width: 480px) {
    background-image: var(--bg-overlay), var(--bg-image-xs);
    background-attachment: scroll;
  }

  @media (prefers-reduced-motion: reduce) {
    background-attachment: scroll;
  }
}
</style>
