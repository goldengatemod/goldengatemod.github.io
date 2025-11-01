<template>
  <main>
    <div class="container mx-auto max-w-screen-lg pt-6">
      <h1 class="text-5xl text-amber-400 font-medium font-bebas-neue mb-6">
        DOŁĄCZ DO NAS!
      </h1>
      <p class="u-text u-text-2 mb-4 font-medium">
        Obecnie trwają prace nad drugą częścią modyfikacji, więc chętnie
        przyjmiemy każdą pomoc.<br />Aktualnie poszukujemy:
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        <div v-for="offer in offers" :key="offer.id" class="p-3">
          <UCard class="gold-border" style="width: 25rem">
            <template #header>
              <img
                alt="Priest"
                src="~/assets/img/priest.webp"
                @contextmenu.prevent
              />
            </template>
            <template #title>
              <div class="flex justify-center">
                <p class="text-3xl font-medium font-bebas-neue text-amber-400">
                  {{ offer.name }}
                </p>
              </div>
            </template>
            <template #subtitle>
              <hr class="mb-2 border-amber-400" />
            </template>
            <template #content>
              <div>
                <p class="font-semibold text-amber-400">Wymagania:</p>
                <ul class="list-disc list-inside font-medium mb-2">
                  <li
                    v-for="(req, index) in offer.requirements"
                    :key="'req-' + index"
                  >
                    {{ req }}
                  </li>
                </ul>

                <p class="font-semibold text-amber-400 mt-3">Obowiązki:</p>
                <ul class="list-disc list-inside">
                  <li
                    v-for="(duty, index) in offer.duties"
                    :key="'duty-' + index"
                  >
                    {{ duty }}
                  </li>
                </ul>
              </div>
            </template>
            <template #footer>
              <div class="flex justify-center pt-2">
                <UButton
                  primary
                  label="Aplikuj"
                  class="font-semibold"
                  @click="sendOfferApplication(offer.name)"
                />
              </div>
            </template>
          </UCard>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const { t } = useI18n()

const offers = ref([
  {
    id: 1,
    name: 'Animator',
    requirements: [
      'umiejętność tworzenia low-poly modeli 3D',
      'umiejętność tworzenia animacji',
    ],
    duties: ['tworzenie nowych potworów na podstawie konceptów'],
  },
])

function sendOfferApplication(offerName: string) {
  const subject = `[REKRUTACJA] ${offerName}`
  const mailto = `mailto:goldengatebox@gmail.com?subject=${encodeURIComponent(subject)}`
  window.location.href = mailto
}

useHead({
  title: computed(() => `${t('navigation.joinUs')}`),
})
</script>

<style lang="scss" scoped>
main {
  padding-top: 24px;
  padding-bottom: 24px;
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('~/assets/img/golden-gate/gg-background-lg.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.p-card {
  background-color: #190c06;
  /* #15120DF2 */
}

.gold-border {
  position: relative;
  z-index: 0;
  padding: 4px;
}

.gold-border::before {
  content: '';
  position: absolute;
  inset: -6px;
  border: 64px solid transparent;
  border-image: url('~/assets/img/gg-frame.webp') 160 round;
  z-index: -1;
  pointer-events: none;
}
</style>
