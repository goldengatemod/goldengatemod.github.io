<template>
  <section
    id="introduction"
    class="introduction-section"
    aria-labelledby="introduction-title"
    role="banner"
  >
    <div class="container mx-auto max-w-5xl pt-8 pb-12 relative z-10">
      <div class="logo-container">
        <img
          class="logo-image"
          :src="logoSrc"
          alt="Golden Gate logo"
          fetchpriority="high"
          @contextmenu.prevent
        />
      </div>

      <div class="text-center">
        <h2 class="text-amber-400 uppercase text-base font-light pb-4">
          {{ t('common.download') }}
        </h2>
        <div class="download-buttons">
          <a
            href="https://steamcommunity.com/sharedfiles/filedetails/?id=2787956445"
            target="_blank"
            class="download-btn"
          >
            <SteamIconLogo class="download-icon" />
            <span>Steam Workshop</span>
          </a>
          <a
            href="https://www.moddb.com/mods/the-golden-gate/downloads"
            target="_blank"
            class="download-btn"
          >
            <img
              class="download-icon"
              src="/assets/img/moddb-logo.png"
              alt="ModDB"
              @contextmenu.prevent
            />
            <span>ModDB</span>
          </a>
        </div>
      </div>

      <div class="description-container pt-8">
        <div
          class="mb-3 mx-4 md:mx-0 text-gray-200 text-center text-base md:text-lg"
          style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8)"
        >
          <p v-for="i in 2" :key="i" class="mb-3">
            {{ t(`goldenGate.description.${i - 1}`) }}
          </p>
        </div>
      </div>
    </div>

    <ModPros />
  </section>
</template>

<script setup lang="ts">
import SteamIconLogo from '~/assets/img/steam-icon-logo.svg'
import ModPros from '~/components/golden-gate/ModPros.vue'

const { locale, t } = useI18n()

const logoSrc = computed(() => `/gg-logo-${locale.value}.webp`)
</script>

<style lang="scss" scoped>
.introduction-section {
  --bg-overlay: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(139, 69, 19, 0.3) 50%,
    rgba(0, 0, 0, 0.6) 100%
  );
  --bg-image-lg: url('~/assets/img/golden-gate/gg-background-lg.webp');
  --bg-image-md: url('~/assets/img/golden-gate/gg-background-md.webp');
  --bg-image-sm: url('~/assets/img/golden-gate/gg-background-sm.webp');
  --bg-image-xs: url('~/assets/img/golden-gate/gg-background-xs.webp');

  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  background-image: var(--bg-overlay), var(--bg-image-lg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  @container (max-width: 1024px) {
    background-image: var(--bg-overlay), var(--bg-image-md);
  }

  @media (max-width: 1024px) {
    background-image: var(--bg-overlay), var(--bg-image-md);
  }

  @media (max-width: 768px) {
    background-image: none;
    background: linear-gradient(
      180deg,
      #1a0d07 0%,
      #2d1a10 25%,
      #1f1309 75%,
      #0f0804 100%
    );
    background-attachment: scroll;
  }

  @media (max-width: 480px) {
    background: linear-gradient(
      180deg,
      #1c0f08 0%,
      #311c12 30%,
      #221409 70%,
      #12090a 100%
    );
  }

  @media (prefers-reduced-motion: reduce) {
    background-attachment: scroll;
  }
}

.container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }
}

.logo-container {
  text-align: center;

  .logo-image {
    width: 100%;
    max-width: 600px;
    height: auto;
    border-radius: 0.75rem;
    filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.4));
  }
}

.description-container {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 1rem 0.5rem;
  }

  .logo-container .logo-image {
    max-width: 280px;
  }
}

.download-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.21em;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9);

  @media (max-width: 640px) {
    font-size: 1.25rem;
  }
}

.download-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.download-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(245, 158, 11, 0.4) !important;
  color: #f59e0b !important;
  border-radius: 8px !important;
  backdrop-filter: blur(4px);
  padding: 12px 24px !important;
  min-width: auto !important;
  height: 48px !important;
  font-weight: 600 !important;
  font-size: 1rem !important;
  transition: all 0.3s ease !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2) !important;

  &:hover {
    background-color: rgba(239, 68, 68, 0.1);
    border-color: rgba(245, 158, 11, 0.6) !important;
    color: #fbbf24 !important;
    transform: translateY(-2px) !important;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25) !important;
  }

  &:focus {
    outline: none !important;
    box-shadow:
      0 4px 12px rgba(0, 0, 0, 0.2),
      0 0 0 2px rgba(245, 158, 11, 0.4) !important;
  }

  &:active {
    transform: translateY(0) !important;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2) !important;
  }

  @media (max-width: 640px) {
    padding: 10px 20px !important;
    font-size: 0.9rem !important;
    height: 44px !important;
  }
}

.download-icon {
  height: 1.75rem;
  width: auto;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));

  @media (max-width: 640px) {
    height: 1.5rem;
  }
}
</style>
