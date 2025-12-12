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
          alt="Golden Gate 2 logo"
          fetchpriority="high"
          @contextmenu.prevent
        />
      </div>

      <div class="text-center mb-8">
        <h2 class="text-error uppercase text-base font-light pb-4">
          {{ t('common.download') }}
        </h2>
        <div class="download-buttons">
          <a
            href="https://steamcommunity.com/sharedfiles/filedetails/?id=3622283076"
            target="_blank"
            class="download-btn"
          >
            <SteamIconLogo class="download-icon" />
            <span>Steam Workshop</span>
          </a>
          <a
            href="https://www.gog.com/game/golden_gate_2_goddess_heart"
            target="_blank"
            class="download-btn"
          >
            <Icon name="simple-icons-gogdotcom" class="text-3xl text-white" />
            <span>GOG.com</span>
          </a>
          <a
            href="https://www.moddb.com/mods/golden-gate-2-goddess-heart"
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

      <div class="description-container">
        <div
          class="mb-3 mx-4 md:mx-0 text-gray-200 text-center text-base md:text-lg"
          style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8)"
        >
          <p v-for="i in 3" :key="i" class="mb-3">
            {{ t(`goldenGate2.description.${i - 1}`) }}
          </p>
        </div>
      </div>
    </div>

    <ModPros />
  </section>
</template>

<script setup lang="ts">
import SteamIconLogo from '~/assets/img/steam-icon-logo.svg'
import ModPros from '~/components/golden-gate-2/ModPros.vue'

const { locale, t } = useI18n()

const logoSrc = computed(() => `/gg2-logo-${locale.value}.webp`)
</script>

<style lang="scss" scoped>
.introduction-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-image:
    linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(100, 11, 11, 0.3) 50%,
      rgba(0, 0, 0, 0.6) 80%,
      rgba(0, 0, 0, 0) 100%
    ),
    url('~/assets/img/golden-gate-2/gg2-goddess-lg.webp');
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  background-attachment: fixed;

  @media (max-width: 1024px) {
    background-image:
      linear-gradient(
        135deg,
        rgba(0, 0, 0, 0.4) 0%,
        rgba(100, 11, 11, 0.3) 50%,
        rgba(0, 0, 0, 0.6) 80%,
        rgba(0, 0, 0, 0) 100%
      ),
      url('~/assets/img/golden-gate-2/gg2-goddess-md.webp');
  }

  @media (max-width: 768px) {
    background-image:
      linear-gradient(
        135deg,
        rgba(0, 0, 0, 0.4) 0%,
        rgba(100, 11, 11, 0.3) 50%,
        rgba(0, 0, 0, 0.6) 80%,
        rgba(0, 0, 0, 0) 100%
      ),
      url('~/assets/img/golden-gate-2/gg2-goddess-sm.webp');
    background-attachment: scroll;
  }

  @media (max-width: 480px) {
    background-image:
      linear-gradient(
        135deg,
        rgba(0, 0, 0, 0.4) 0%,
        rgba(100, 11, 11, 0.3) 50%,
        rgba(0, 0, 0, 0.6) 80%,
        rgba(0, 0, 0, 0) 100%
      ),
      url('~/assets/img/golden-gate-2/gg2-goddess-xs.webp');
    background-attachment: scroll;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    z-index: -1;
    will-change: transform;
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

  .description-text {
    font-size: 1rem;
    padding: 0 1rem;
  }

  .logo-container .logo-image {
    max-width: 280px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .logo-image {
    transition: none;

    &:hover {
      transform: none;
    }
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
  border: 1px solid rgba(239, 68, 68, 0.15) !important;
  color: var(--color-red-400) !important;
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
    border-color: rgba(239, 68, 68, 0.5) !important;
    color: var(--color-red-500) !important;
    transform: translateY(-2px) !important;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25) !important;
  }

  &:focus {
    outline: none !important;
    box-shadow:
      0 4px 12px rgba(0, 0, 0, 0.2),
      0 0 0 2px rgba(239, 68, 68, 0.4) !important;
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
