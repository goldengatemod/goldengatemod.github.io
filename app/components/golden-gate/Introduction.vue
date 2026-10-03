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
          alt="Golden Gate logo"
          v-bind="logoDimensions.goldenGate[locale]"
          sizes="280px 481:600px"
          densities="x1 x2"
          fetchpriority="high"
          :preload="{ fetchPriority: 'high' }"
          @contextmenu.prevent
        />
      </div>

      <div class="text-center">
        <h2 class="text-amber-400 uppercase text-base font-light pb-4">
          {{ t('common.download') }}
        </h2>
        <div class="gg-download-buttons">
          <a
            href="https://steamcommunity.com/sharedfiles/filedetails/?id=2787956445"
            target="_blank"
            class="gg-button gg-button--download gg-accent-gold"
          >
            <SteamIconLogo class="gg-download-icon" />
            <span>Steam Workshop</span>
          </a>
          <a
            href="https://www.moddb.com/mods/the-golden-gate/downloads"
            target="_blank"
            class="gg-button gg-button--download gg-accent-gold"
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
import SteamIconLogo from '~/assets/img/steam-icon-logo.svg';
import ModPros from '~/components/golden-gate/ModPros.vue';
import { logoDimensions } from '~/utils/logoDimensions';

const { locale, t } = useI18n();

const logoSrc = computed(() => `/gg-logo-${locale.value}.webp`);
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
  margin-inline: auto;
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

  .logo-container .logo-image {
    max-width: 280px;
  }
}
</style>
