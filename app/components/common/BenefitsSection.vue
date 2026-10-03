<template>
  <section id="pros" class="gg-pros" :class="`gg-accent-${accent}`">
    <h2 class="sr-only">{{ t('common.features') }}</h2>
    <div class="gg-pros-grid gg-content">
      <article
        v-for="benefit in benefits"
        :key="benefit.label"
        class="gg-pros-card"
      >
        <div class="gg-pros-icon" aria-hidden="true">
          <Icon :name="benefit.icon" class="text-2xl!" />
        </div>
        <h3 class="gg-pros-title">{{ t(benefit.label) }}</h3>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Benefit } from '~/types/benefit';

withDefaults(defineProps<{ benefits: Benefit[]; accent?: 'gold' | 'red' }>(), {
  accent: 'gold',
});

const { t } = useI18n();
</script>

<style scoped>
.gg-pros-grid {
  --gg-pros-gap: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--gg-pros-gap);
  margin-block: 2rem;
  box-shadow: var(--gg-shadow-card);
  border-radius: var(--gg-radius-control);
}

.gg-pros-card {
  flex: 0 0 100%;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem 1.5rem;
  gap: 1rem;
  background-color: var(--gg-card);
  border-radius: var(--gg-radius-panel);
  border: 1px solid var(--gg-pros-border);
  min-height: 200px;
}

.gg-pros-icon {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--gg-accent-icon);
  color: black;
}

.gg-pros-title {
  font-size: 1.125rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--gg-text-description);
  text-align: center;
  margin: 0;
  line-height: 1.4;
  overflow-wrap: anywhere;
}

@media (min-width: 640px) {
  .gg-pros-grid {
    --gg-pros-gap: 2rem;
  }

  .gg-pros-icon {
    width: 3.5rem;
    height: 3.5rem;
  }

  .gg-pros-title {
    font-size: 1.25rem;
  }
}

@media (min-width: 556px) {
  .gg-pros-card {
    flex-basis: calc((100% - var(--gg-pros-gap)) / 2);
  }
}

@media (min-width: 846px) {
  .gg-pros-card {
    flex-basis: calc((100% - 2 * var(--gg-pros-gap)) / 3);
  }
}

@media (max-width: 640px) {
  .gg-pros-card {
    padding: 1.5rem 1rem;
    min-height: 180px;
    justify-content: center;
  }
}
</style>
