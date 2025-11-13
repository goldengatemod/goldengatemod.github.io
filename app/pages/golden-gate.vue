<template>
  <main class="golden-gate-page pb-0!">
    <Introduction />

    <Suspense>
      <template #default>
        <div>
          <div class="container mx-auto max-w-5xl">
            <SectionDivider />
            <IntroSection />
            <SectionDivider />
            <LocationsSection />
            <SectionDivider />
            <GuildsSection />
            <SectionDivider />
            <PatchSection />
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
import Introduction from '~/components/golden-gate/Introduction.vue'
import IframeWrapper from '~/components/common/IframeWrapper.vue'

const { t } = useI18n()

const SectionDivider = defineAsyncComponent({
  loader: () => import('~/components/common/SectionDivider.vue'),
  delay: 200,
  timeout: 10000,
})

const IntroSection = defineAsyncComponent({
  loader: () => import('~/components/golden-gate/IntroSection.vue'),
  delay: 200,
  timeout: 10000,
})

const LocationsSection = defineAsyncComponent({
  loader: () => import('~/components/golden-gate/LocationsSection.vue'),
  delay: 200,
  timeout: 10000,
})

const GuildsSection = defineAsyncComponent({
  loader: () => import('~/components/golden-gate/GuildsSection.vue'),
  delay: 200,
  timeout: 10000,
})

const PreviewGallery = defineAsyncComponent({
  loader: () => import('~/components/golden-gate/PreviewGallery.vue'),
  delay: 200,
  timeout: 10000,
})

const PatchSection = defineAsyncComponent({
  loader: () => import('~/components/golden-gate/PatchSection.vue'),
  delay: 200,
  timeout: 10000,
})

useHead({
  title: computed(() => `${t('navigation.goldenGate')}`),
})
</script>

<style lang="scss" scoped>
main {
  background: linear-gradient(180deg, #190c06 0%, #0f0804 100%);
  contain: layout style paint;
  will-change: scroll-position;
}

.intro-overlay {
  position: relative;
  z-index: 2;
}

.gallery-section {
  position: relative;
  z-index: 2;
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1));
}

:deep(.gg-icon) {
  fill: var(--color-amber-400) !important;
  filter: drop-shadow(0 4px 8px rgba(219, 184, 119, 0.3)) !important;
}

:deep(.gg-header-text) {
  color: var(--color-amber-400) !important;
}

:deep(.gg-divider > div) {
  border-color: rgba(245, 158, 11, 0.3) !important;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.video-section,
.section-spacing {
  animation: fadeInUp 0.8s ease-out forwards;
}

@media (max-width: 768px) {
  .video-section,
  .section-spacing {
    animation-duration: 0.4s;
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  .golden-gate-page {
    background-attachment: scroll !important;
  }

  .intro-overlay {
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
  }
}

@media (prefers-contrast: high) {
  .golden-gate-page {
    background-image:
      linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
      url('~/assets/img/golden-gate/gg-background-lg.webp');
  }
}

@media (max-width: 375px) {
  .golden-gate-page {
    background-position: center top;
  }
}
</style>
