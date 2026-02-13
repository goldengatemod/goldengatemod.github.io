<template>
  <UPopover v-model:open="open">
    <button class="language-trigger">
      <Icon :name="getFlagIcon(locale)" class="flag-icon" />
      <span class="language-name-mobile">{{ appLocales[locale]?.name }}</span>
    </button>

    <template #content>
      <div class="language-dropdown">
        <button
          v-for="(localeData, code) in dropdownLanguages"
          :key="code"
          class="language-option"
          :class="{ active: locale === code }"
          @click="selectLanguage(code as string)"
        >
          <Icon :name="getFlagIcon(code as string)" class="flag-icon" />
          <span class="language-label">{{ localeData.name }}</span>
          <div v-if="locale === code" class="active-dot" />
        </button>
      </div>
    </template>
  </UPopover>
</template>

<script setup lang="ts">
import * as locales from '@nuxt/ui/locale'

const { locale, setLocale, availableLocales } = useI18n()

type AppLocale = (typeof availableLocales)[number]

const open = ref(false)
const isMobile = ref(false)

const appLocales = computed(() =>
  Object.fromEntries(
    Object.entries(locales).filter(([key]) =>
      availableLocales.includes(key as AppLocale),
    ),
  ),
)

const dropdownLanguages = computed(() => {
  if (isMobile.value) {
    return Object.fromEntries(
      Object.entries(appLocales.value).filter(
        ([code]) => code !== locale.value,
      ),
    )
  }
  return appLocales.value
})

const getFlagIcon = (code: string) =>
  ({
    en: 'flag:gb-4x3',
    pl: 'flag:pl-4x3',
    de: 'flag:de-4x3',
    it: 'flag:it-4x3',
  })[code] || 'flag:pl-4x3'

const selectLanguage = (code: string) => {
  if (!availableLocales.includes(code as AppLocale)) return
  setLocale(code as AppLocale)
  localStorage.setItem('locale', code)
  open.value = false
}

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkMobile)
})

onBeforeMount(() => {
  const savedLocale = localStorage.getItem('locale') || 'pl'
  if (availableLocales.includes(savedLocale as AppLocale)) {
    setLocale(savedLocale as AppLocale)
  }
})

defineShortcuts({ o: () => (open.value = !open.value) })
</script>

<style lang="scss" scoped>
.language-trigger {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 8px 12px;
  margin: 0 4px;
  color: #f3f4f6;
  background: transparent;
  border: none;
  border-radius: 8px;
  min-width: 48px;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    border: 1px solid rgba(245, 158, 11, 0.3);
    background: rgba(245, 158, 11, 0.05);
    padding: 12px 16px;
    justify-content: flex-start;
  }

  &:hover {
    color: var(--color-amber-400);
    background: rgba(245, 158, 11, 0.1);

    @media (max-width: 768px) {
      border-color: rgba(245, 158, 11, 0.5);
      background: rgba(245, 158, 11, 0.15);
    }

    .flag-icon {
      filter: brightness(1.2);
    }
  }

  .flag-icon {
    font-size: 1.5rem;
    transition: filter 0.3s ease;
  }

  .language-name-mobile {
    display: none;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.1rem;
    letter-spacing: 0.05em;

    @media (max-width: 768px) {
      display: inline-block;
    }
  }
}

.language-dropdown {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 160px;
  padding: 0.5rem;
  background: linear-gradient(180deg, #190c06 0%, #0f0804 100%);
  border-radius: 8px;
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

.language-option {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  color: #f3f4f6;
  background: transparent;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.1rem;
  letter-spacing: 0.05em;
  text-align: left;
  width: 100%;

  .flag-icon {
    font-size: 1.5rem;
  }

  .language-label {
    flex: 1;
  }

  .active-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--color-amber-400);
  }

  &:hover {
    color: var(--color-amber-400);
    background: rgba(245, 158, 11, 0.1);
  }

  &.active {
    color: var(--color-amber-400);
    background: rgba(245, 158, 11, 0.15);
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
  }
}
</style>
