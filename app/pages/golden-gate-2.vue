<template>
  <main>
    <Introduction />

    <Suspense>
      <template #default>
        <div>
          <div class="container mx-auto max-w-5xl">
            <SectionDivider />
            <LoreSection />
            <SectionDivider />
            <LocationsSection />
            <SectionDivider />
            <NpcsSection />
            <SectionDivider />
            <QuestsSection />
            <SectionDivider />
            <HeroSection />
            <SectionDivider />
            <SoundtrackSection />
            <SectionDivider />
            <DubbingSection />
            <SectionDivider />
            <MechanicsSection />
            <SectionDivider />
            <VisualsSection />
            <SectionDivider />
            <FAQ />
            <SectionDivider />
          </div>
          <PreviewGallery />
        </div>
      </template>
      <template #fallback>
        <div class="loading-placeholder">
          <p>{{ t('common.loading') }}</p>
        </div>
      </template>
    </Suspense>
  </main>
</template>

<script setup lang="ts">
import Introduction from '~/components/golden-gate-2/Introduction.vue'

const { t } = useI18n()

const SectionDivider = defineAsyncComponent({
  loader: () => import('~/components/common/SectionDivider.vue'),
  delay: 200,
  timeout: 10000,
})

const LoreSection = defineAsyncComponent({
  loader: () => import('~/components/golden-gate-2/LoreSection.vue'),
  delay: 200,
  timeout: 10000,
})

const LocationsSection = defineAsyncComponent({
  loader: () => import('~/components/golden-gate-2/LocationsSection.vue'),
  delay: 200,
  timeout: 10000,
})

const NpcsSection = defineAsyncComponent({
  loader: () => import('~/components/golden-gate-2/NpcsSection.vue'),
  delay: 200,
  timeout: 10000,
})

const QuestsSection = defineAsyncComponent({
  loader: () => import('~/components/golden-gate-2/QuestsSection.vue'),
  delay: 200,
  timeout: 10000,
})

const HeroSection = defineAsyncComponent({
  loader: () => import('~/components/golden-gate-2/HeroSection.vue'),
  delay: 200,
  timeout: 10000,
})

const SoundtrackSection = defineAsyncComponent({
  loader: () => import('~/components/golden-gate-2/SoundtrackSection.vue'),
  delay: 200,
  timeout: 10000,
})

const DubbingSection = defineAsyncComponent({
  loader: () => import('~/components/golden-gate-2/DubbingSection.vue'),
  delay: 200,
  timeout: 10000,
})

const MechanicsSection = defineAsyncComponent({
  loader: () => import('~/components/golden-gate-2/MechanicsSection.vue'),
  delay: 200,
  timeout: 10000,
})

const VisualsSection = defineAsyncComponent({
  loader: () => import('~/components/golden-gate-2/VisualsSection.vue'),
  delay: 200,
  timeout: 10000,
})

const FAQ = defineAsyncComponent({
  loader: () => import('~/components/golden-gate-2/FAQ.vue'),
  delay: 200,
  timeout: 10000,
})

const PreviewGallery = defineAsyncComponent({
  loader: () => import('~/components/golden-gate-2/PreviewGallery.vue'),
  delay: 200,
  timeout: 10000,
})

useHead({
  title: computed(() => `${t('navigation.goldenGate2')}`),
})
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

  @container (max-width: 1024px) {
    background-image: var(--bg-overlay), var(--bg-image-md);
  }

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

:deep(.gg-icon) {
  fill: white;
  filter: drop-shadow(0 4px 8px rgba(255, 255, 255, 0.3));
}
</style>
