<template>
  <section id="npcs">
    <div class="mx-auto">
      <SectionHeader title="goldenGate2.npcs.title" />

      <div class="text-gray-200 text-base md:text-lg mb-3 mx-4 md:mx-auto">
        <p v-for="i in 2" :key="i" :class="{ 'mb-3': i < 2 }">
          {{ t(`goldenGate2.npcs.description.${i - 1}`) }}
        </p>
      </div>

      <UTabs
        :orientation="isMobile ? 'horizontal' : 'vertical'"
        color="error"
        variant="link"
        size="xl"
        :items="items"
        class="w-full px-4 md:px-0"
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
                class="mx-auto rounded-lg w-full max-w-[300px] md:max-w-none md:max-h-[500px] h-auto object-contain"
                @contextmenu.prevent
              />
            </div>
            <div>
              <h3
                class="px-4 md:px-0 text-2xl md:text-3xl font-bebas-neue mb-4"
              >
                {{ item.label }}
              </h3>
              <p
                class="px-4 md:px-0 text-gray-200 md:text-lg md:leading-relaxed"
              >
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
import SectionHeader from '~/components/common/SectionHeader.vue'
import type { TabsItem } from '@nuxt/ui'

import AlrikRender from '~/assets/img/golden-gate-2/npcs/npc-alrik.webp'
import RamseyRender from '~/assets/img/golden-gate-2/npcs/npc-ramsey.webp'
import AshtonRender from '~/assets/img/golden-gate-2/npcs/npc-ashton.webp'
import OlsaRender from '~/assets/img/golden-gate-2/npcs/npc-olsa.webp'
import SylviaRender from '~/assets/img/golden-gate-2/npcs/npc-sylvia.webp'

const { t } = useI18n()

const isMobile = ref(false)

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
] satisfies TabsItem[])

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>
