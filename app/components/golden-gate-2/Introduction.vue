<template>
  <section
    id="introduction"
    class="introduction-section"
    aria-labelledby="introduction-title"
  >
    <div class="gg-content gg-introduction-content relative z-10">
      <div class="logo-container">
        <NuxtImg
          class="logo-image"
          :src="logoSrc"
          alt="Golden Gate 2 logo"
          v-bind="logoDimensions.goldenGate2[locale]"
          sizes="280px 481:600px"
          densities="x1 x2"
          fetchpriority="high"
          :preload="{ fetchPriority: 'high' }"
          @contextmenu.prevent
        />
      </div>

      <div class="text-center">
        <h2 class="text-(--gg-red) uppercase text-base font-light pb-4">
          {{ t('common.download') }}
        </h2>
        <div class="gg-download-buttons">
          <a
            href="https://steamcommunity.com/sharedfiles/filedetails/?id=3622283076"
            target="_blank"
            class="gg-button gg-button--download gg-accent-red"
          >
            <SteamIconLogo class="gg-download-icon" />
            <span>Steam Workshop</span>
          </a>
          <a
            href="https://www.gog.com/game/golden_gate_2_goddess_heart"
            target="_blank"
            class="gg-button gg-button--download gg-accent-red"
          >
            <Icon name="simple-icons-gogdotcom" class="text-3xl text-white" />
            <span>GOG.com</span>
          </a>
          <a
            href="https://www.moddb.com/mods/golden-gate-2-goddess-heart"
            target="_blank"
            class="gg-button gg-button--download gg-accent-red"
          >
            <NuxtImg
              class="gg-download-icon"
              src="moddb-logo.png"
              alt="ModDB"
              format="webp"
              width="2048"
              height="901"
              sizes="64px"
              densities="x1 x2"
              @contextmenu.prevent
            />
            <span>ModDB</span>
          </a>
        </div>
      </div>

      <div class="description-container pt-8">
        <div class="mb-3 gg-copy text-center gg-description-shadow">
          <p v-for="i in 3" :key="i" class="mb-3">
            {{ t(`goldenGate2.description.${i - 1}`) }}
          </p>
        </div>
      </div>
    </div>

    <ModPros class="relative z-10" />
  </section>
</template>

<script setup lang="ts">
import SteamIconLogo from '~/assets/img/steam-icon-logo.svg';
import ModPros from '~/components/golden-gate-2/ModPros.vue';
import { logoDimensions } from '~/utils/logoDimensions';

const { locale, t } = useI18n();

const logoSrc = computed(() => `/gg2-logo-${locale.value}.webp`);
</script>

<style lang="scss" scoped>
.introduction-section {
  --intro-fade-height: clamp(6rem, 13.5vw, 12rem);
  --intro-bg-overlay: linear-gradient(
    180deg,
    rgba(10, 5, 8, 0.18) 0%,
    rgba(75, 10, 22, 0.2) 45%,
    rgba(10, 5, 8, 0.6) 100%
  );
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-bottom: var(--intro-fade-height);
}

.introduction-section::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  mask-image: linear-gradient(
    to bottom,
    #000 calc(100% - var(--intro-fade-height)),
    transparent
  );
  background-image:
    var(--intro-bg-overlay),
    url('~/assets/img/golden-gate-2/gg2-goddess-lg.webp');
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  background-attachment: fixed;

  @media (max-width: 1024px) {
    background-image:
      var(--intro-bg-overlay),
      url('~/assets/img/golden-gate-2/gg2-goddess-md.webp');
  }

  @media (max-width: 768px) {
    background-image:
      var(--intro-bg-overlay),
      url('~/assets/img/golden-gate-2/gg2-goddess-sm.webp');
    background-attachment: scroll;
  }

  @media (max-width: 480px) {
    background-image:
      var(--intro-bg-overlay),
      url('~/assets/img/golden-gate-2/gg2-goddess-xs.webp');
    background-attachment: scroll;
  }
}

.gg-introduction-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-block: 2rem;

  @media (min-width: 768px) {
    padding-block: 3rem;
  }
}

.logo-container {
  width: 100%;
  max-width: 600px;
  text-align: center;

  .logo-image {
    width: 100%;
    max-width: 600px;
    height: auto;
    margin-inline: auto;
    border-radius: 0.75rem;
    filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.4));
  }
}

.description-container {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

@media (max-width: 480px) {
  .gg-introduction-content {
    padding-block: 1rem;
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
</style>
