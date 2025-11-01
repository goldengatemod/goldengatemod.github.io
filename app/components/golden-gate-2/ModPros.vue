<template>
  <section
    id="pros"
    class="pros-section"
    aria-labelledby="pros-title"
    role="region"
  >
    <div class="pros-container">
      <div
        v-for="(benefit, index) in pros"
        :key="`benefit-${index}`"
        class="pros-card"
        role="article"
        :aria-labelledby="`benefit-${index}`"
      >
        <div class="pros-card__icon-container" role="img">
          <Icon :name="benefit.icon" class="text-2xl!" />
        </div>

        <h3 :id="`benefit-${index}`" class="pros-card__title">
          {{ t(benefit.label) }}
        </h3>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

interface ProsBenefit {
  label: string
  icon: string
}

interface Props {
  benefits?: ProsBenefit[]
  maxColumns?: number
}

const props = withDefaults(defineProps<Props>(), {
  benefits: undefined,
  maxColumns: 5,
})

const pros = computed<ProsBenefit[]>(
  () =>
    props.benefits || [
      {
        label: 'goldenGate2.pros.0',
        icon: 'i-lucide-clock',
      },
      {
        label: 'goldenGate2.pros.1',
        icon: 'i-lucide-book-open',
      },
      {
        label: 'goldenGate2.pros.4',
        icon: 'i-lucide-globe',
      },
      {
        label: 'goldenGate2.pros.2',
        icon: 'i-lucide-mic',
      },
      {
        label: 'goldenGate2.pros.3',
        icon: 'i-lucide-music',
      },
    ],
)
</script>

<style lang="scss" scoped>
.pros-section {
  --pros-card-bg: rgba(25, 12, 6, 0.88);
  --pros-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.pros-container {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(var(--min-card-width, 250px), 1fr)
  );
  gap: 1.5rem;
  padding: 1rem;
  margin-top: 1rem;
  padding-bottom: 1rem;
  box-shadow: var(--pros-shadow);
  border-radius: 0.5rem;

  @media (min-width: 640px) {
    padding: 2rem;
    gap: 2rem;
  }
}

.pros-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem 1.5rem;
  gap: 1rem;
  background-color: var(--pros-card-bg);
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  min-height: 200px;

  @media (max-width: 640px) {
    padding: 1.5rem 1rem;
    min-height: 180px;
    justify-content: center;
  }
}

.pros-card__icon-container {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ef5350;
  color: black;

  @media (min-width: 640px) {
    width: 3.5rem;
    height: 3.5rem;
  }
}

.pros-card__title {
  font-size: 1.125rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: rgb(229, 231, 235);
  text-align: center;
  margin: 0;
  line-height: 1.4;

  @media (min-width: 640px) {
    font-size: 1.25rem;
  }
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
</style>
