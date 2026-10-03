<template>
  <main class="golden-gate-page gg-page-gold">
    <h1 class="sr-only">{{ t('navigation.team') }}</h1>
    <TeamMembersList />
  </main>
</template>

<script setup lang="ts">
const { t } = useI18n();

const title = computed(() => `${t('navigation.team')}`);

useHead({ title });
</script>

<style lang="scss" scoped>
.golden-gate-page {
  min-height: 100vh;
  position: relative;
  background: var(--gg-gradient);
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('~/assets/img/golden-gate/gg-background-lg.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  @media (max-width: 1024px) {
    background-image:
      linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url('~/assets/img/golden-gate/gg-background-md.webp');
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
}

@media (prefers-reduced-motion: reduce) {
  .golden-gate-page {
    background-attachment: scroll;
  }
}
</style>
