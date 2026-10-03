<template>
  <main id="saga" class="pb-0! relative overflow-hidden">
    <h1 class="sr-only">Golden Gate</h1>
    <div class="flex flex-col md:flex-row min-h-screen">
      <!-- Golden Gate Section -->
      <article
        id="golden-gate-section"
        class="w-full md:w-1/2 flex flex-col items-center justify-center gap-6 py-8 px-4 relative group"
        role="region"
      >
        <!-- Background overlay -->
        <div
          class="absolute inset-0 bg-linear-to-br from-yellow-700/30 via-amber-600/25 to-stone-800/60 transition-colors duration-700 group-hover:from-yellow-600/40 group-hover:via-amber-500/35"
        />

        <!-- Decorative border -->
        <div
          class="absolute inset-0 border border-yellow-500/30 group-hover:border-yellow-400/50 transition-colors duration-500"
        />

        <!-- Content container -->
        <div
          class="relative z-10 flex flex-col items-center justify-center gap-6 max-w-2xl mx-auto"
        >
          <!-- Logo with enhanced interactions -->
          <div class="logo-container relative w-full max-w-xl">
            <NuxtLinkLocale
              to="/golden-gate"
              class="block transform transition-transform duration-500 hover:scale-105 focus:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400/50 rounded-lg"
              :aria-label="t('navigation.goldenGate')"
            >
              <NuxtImg
                class="w-full max-w-xl h-auto mx-auto golden-gate-logo drop-shadow-2xl"
                :src="logoGG"
                alt="Golden Gate logo"
                v-bind="logoDimensions.goldenGate[locale]"
                sizes="100vw sm:576px"
                densities="x1 x2"
                fetchpriority="high"
                :preload="{ fetchPriority: 'high' }"
                @contextmenu.prevent
              />
            </NuxtLinkLocale>
          </div>

          <!-- Description with improved typography -->
          <div class="text-content space-y-4">
            <p
              class="text-gray-100 text-center text-base md:text-lg lg:text-xl font-medium leading-relaxed tracking-wide max-w-lg mx-auto"
            >
              {{ t('home.goldenGate.description') }}
            </p>

            <!-- Additional subtitle -->
            <p
              class="text-primary text-center text-sm md:text-base font-light italic pt-2"
            >
              {{ t('home.goldenGate.subtitle') }}
            </p>
          </div>

          <!-- Enhanced CTA button -->
          <div class="cta-container">
            <NuxtLinkLocale
              to="/golden-gate"
              class="gg-button gg-accent-gold flex items-center justify-center gap-2 cursor-pointer"
              :aria-label="`${t('common.learnMore')}: ${t('navigation.goldenGate')}`"
            >
              {{ t('common.learnMore') }}
              <Icon name="i-lucide-arrow-right" class="w-5 h-5" />
            </NuxtLinkLocale>
          </div>
        </div>

        <!-- Enhanced gradient edges -->
        <div
          class="absolute right-0 top-0 bottom-0 w-12 bg-linear-to-r from-transparent via-black/20 to-black/40 hidden md:block pointer-events-none"
        />

        <!-- Decorative corner elements -->
        <div
          class="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-yellow-500/40 hidden sm:block"
        />
        <div
          class="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-yellow-500/40 hidden sm:block"
        />
      </article>

      <!-- Separator -->
      <div
        class="h-px bg-linear-to-r from-transparent via-white/20 to-transparent mx-8 md:hidden backdrop-blur-sm"
      />
      <div
        class="hidden md:block w-px bg-linear-to-b from-transparent via-white/20 to-transparent"
      />

      <!-- Golden Gate 2 Section -->
      <article
        id="golden-gate-2-section"
        class="w-full md:w-1/2 flex flex-col items-center justify-center gap-6 py-8 px-4 relative group"
        role="region"
      >
        <!-- Background overlay -->
        <div
          class="absolute inset-0 bg-linear-to-tl from-stone-700/35 via-red-800/30 to-stone-900/60 transition-colors duration-700 group-hover:from-stone-600/45 group-hover:via-red-700/40"
        />

        <!-- Decorative border -->
        <div
          class="absolute inset-0 border border-red-500/30 group-hover:border-red-400/50 transition-colors duration-500"
        />

        <!-- Content container -->
        <div
          class="relative z-10 flex flex-col items-center justify-center gap-6 max-w-2xl mx-auto"
        >
          <!-- Logo with enhanced interactions -->
          <div class="logo-container relative w-full max-w-xl">
            <NuxtLinkLocale
              to="/golden-gate-2"
              class="block transform transition-transform duration-500 hover:scale-105 focus:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-red-400/50 rounded-lg"
              :aria-label="t('navigation.goldenGate2')"
            >
              <NuxtImg
                class="w-full max-w-xl h-auto mx-auto golden-gate-2-logo drop-shadow-2xl"
                :src="logoGG2"
                alt="Golden Gate 2 logo"
                v-bind="logoDimensions.goldenGate2[locale]"
                sizes="100vw sm:576px"
                densities="x1 x2"
                fetchpriority="high"
                @contextmenu.prevent
              />
            </NuxtLinkLocale>
          </div>

          <!-- Description with improved typography -->
          <div class="text-content space-y-4">
            <p
              class="text-gray-100 text-center text-base md:text-lg lg:text-xl font-medium leading-relaxed tracking-wide max-w-lg mx-auto"
            >
              {{ t('home.goldenGate2.description') }}
            </p>

            <!-- Additional subtitle -->
            <p
              class="text-(--gg-red) text-center text-sm md:text-base font-light italic pt-2"
            >
              {{ t('home.goldenGate2.subtitle') }}
            </p>
          </div>

          <!-- Enhanced CTA button -->
          <div class="cta-container">
            <NuxtLinkLocale
              to="/golden-gate-2"
              class="gg-button gg-accent-red flex items-center justify-center gap-2 cursor-pointer"
              :aria-label="`${t('common.learnMore')}: ${t('navigation.goldenGate2')}`"
            >
              {{ t('common.learnMore') }}
              <Icon name="i-lucide-arrow-right" class="w-5 h-5" />
            </NuxtLinkLocale>
          </div>
        </div>

        <!-- Enhanced gradient edges -->
        <div
          class="absolute left-0 top-0 bottom-0 w-12 bg-linear-to-l from-transparent via-black/20 to-black/40 hidden md:block pointer-events-none"
        />

        <!-- Decorative corner elements -->
        <div
          class="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-red-500/40 hidden sm:block"
        />
        <div
          class="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-red-500/40 hidden sm:block"
        />
      </article>
    </div>
  </main>
</template>

<script setup lang="ts">
import { logoDimensions } from '~/utils/logoDimensions';

const { locale, t } = useI18n();

const logoGG = computed(() => `/gg-logo-${locale.value}.webp`);
const logoGG2 = computed(() => `/gg2-logo-${locale.value}.webp`);

useHead({
  title: computed(() => `${t('navigation.home')}`),
});
</script>

<style lang="scss" scoped>
#golden-gate-section {
  --gg-bg-overlay: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(139, 69, 19, 0.3) 50%,
    rgba(0, 0, 0, 0.6) 100%
  );
  --gg-bg-image-lg: url('~/assets/img/golden-gate/gg-background-lg.webp');
  --gg-bg-image-md: url('~/assets/img/golden-gate/gg-background-md.webp');
  --gg-bg-image-sm: url('~/assets/img/golden-gate/gg-background-sm.webp');
  --gg-bg-image-xs: url('~/assets/img/golden-gate/gg-background-xs.webp');

  min-height: 100vh;
  position: relative;
  background-image: var(--gg-bg-overlay), var(--gg-bg-image-lg);
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  @media (max-width: 1024px) {
    background-image: var(--gg-bg-overlay), var(--gg-bg-image-md);
  }

  @media (max-width: 768px) {
    background-image: var(--gg-bg-overlay), var(--gg-bg-image-sm);
  }

  @media (max-width: 480px) {
    background-image: var(--gg-bg-overlay), var(--gg-bg-image-xs);
  }
}

#golden-gate-2-section {
  --gg2-bg-overlay: linear-gradient(
    225deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(87, 83, 78, 0.3) 50%,
    rgba(0, 0, 0, 0.6) 100%
  );
  --gg2-bg-image-lg: url('~/assets/img/golden-gate-2/gg2-goddess-lg.webp');
  --gg2-bg-image-md: url('~/assets/img/golden-gate-2/gg2-goddess-md.webp');
  --gg2-bg-image-sm: url('~/assets/img/golden-gate-2/gg2-goddess-sm.webp');
  --gg2-bg-image-xs: url('~/assets/img/golden-gate-2/gg2-goddess-xs.webp');

  min-height: 100vh;
  position: relative;
  background-image: var(--gg2-bg-overlay), var(--gg2-bg-image-lg);
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  @media (max-width: 1024px) {
    background-image: var(--gg2-bg-overlay), var(--gg2-bg-image-md);
  }

  @media (max-width: 768px) {
    background-image: var(--gg2-bg-overlay), var(--gg2-bg-image-sm);
  }

  @media (max-width: 480px) {
    background-image: var(--gg2-bg-overlay), var(--gg2-bg-image-xs);
  }
}

.golden-gate-logo,
.golden-gate-2-logo {
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
  transition: filter 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.golden-gate-logo:hover,
.golden-gate-2-logo:hover {
  filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.4)) brightness(1.1);
}

.text-content p {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

@media (max-width: 768px) {
  #golden-gate-section,
  #golden-gate-2-section {
    min-height: 80vh;
    background-attachment: scroll;
    padding: 1.5rem;
  }

  .golden-gate-logo,
  .golden-gate-2-logo {
    max-width: 85%;
  }
}

@media (max-width: 480px) {
  #golden-gate-section,
  #golden-gate-2-section {
    min-height: 70vh;
    padding: 1rem;
  }

  .text-content p {
    font-size: 0.875rem;
    line-height: 1.4;
  }
}

@media (prefers-reduced-motion: reduce) {
  .golden-gate-logo,
  .golden-gate-2-logo,
  .group > .absolute,
  .group a {
    transition: none;
  }

  .group a:hover,
  .group a:focus {
    transform: none;
    /* Reset Tailwind scale variables; CSS minification can lower scale: none. */
    --tw-scale-x: 1;
    --tw-scale-y: 1;
  }
}

@media (prefers-contrast: high) {
  .text-content p {
    color: white;
    text-shadow: 2px 2px 4px black;
  }
}

@media print {
  #golden-gate-section,
  #golden-gate-2-section {
    background: white;
    color: black;
    min-height: auto;
  }

  .absolute {
    display: none;
  }
}
</style>
