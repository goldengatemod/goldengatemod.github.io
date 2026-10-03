<template>
  <section id="npcs">
    <div class="mx-auto">
      <SectionHeader title="goldenGate2.npcs.title" />

      <div class="gg-copy mb-3">
        <p v-for="i in 2" :key="i" :class="{ 'mb-3': i < 2 }">
          {{ t(`goldenGate2.npcs.description.${i - 1}`) }}
        </p>
      </div>

      <UTabs
        :orientation="isMobile ? 'horizontal' : 'vertical'"
        color="primary"
        variant="link"
        size="xl"
        :items="items"
        class="gg-accent-red w-full"
        :ui="{ list: 'max-w-full border-(--gg-section-border)' }"
      >
        <template #content="{ item }">
          <div
            class="min-h-[500px] md:min-h-[600px] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 md:items-center"
          >
            <div class="flex items-center justify-center md:h-[500px]">
              <img
                v-if="item.label"
                :src="item.image"
                :alt="item.label"
                width="300"
                height="400"
                loading="lazy"
                decoding="async"
                class="mx-auto rounded-lg w-full max-w-[300px] md:max-w-none md:max-h-[500px] h-auto object-contain"
                @contextmenu.prevent
              />
            </div>
            <div>
              <h3
                class="text-2xl md:text-3xl font-bebas-neue text-highlighted mb-4"
              >
                {{ item.label }}
              </h3>
              <p class="gg-copy">
                {{ t(item.content ?? '') }}
              </p>
            </div>
          </div>
        </template>
      </UTabs>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from '~/components/common/SectionHeader.vue';
import type { TabsItem } from '@nuxt/ui';

import AlrikRender from '~/assets/img/golden-gate-2/npcs/npc-alrik.webp';
import RamseyRender from '~/assets/img/golden-gate-2/npcs/npc-ramsey.webp';
import AshtonRender from '~/assets/img/golden-gate-2/npcs/npc-ashton.webp';
import OlsaRender from '~/assets/img/golden-gate-2/npcs/npc-olsa.webp';
import SylviaRender from '~/assets/img/golden-gate-2/npcs/npc-sylvia.webp';

const { t } = useI18n();

const isMobile = useMediaQuery('(width < 768px)');

const items = ref([
  {
    label: 'Alrik',
    content: 'goldenGate2.npcs.list.alrik',
    image: AlrikRender,
  },
  {
    label: 'Ramsey',
    content: 'goldenGate2.npcs.list.ramsey',
    image: RamseyRender,
  },
  {
    label: 'Ashton',
    content: 'goldenGate2.npcs.list.ashton',
    image: AshtonRender,
  },
  {
    label: 'Olsa',
    content: 'goldenGate2.npcs.list.olsa',
    image: OlsaRender,
  },
  {
    label: 'Sylvia',
    content: 'goldenGate2.npcs.list.sylvia',
    image: SylviaRender,
  },
] satisfies TabsItem[]);
</script>
