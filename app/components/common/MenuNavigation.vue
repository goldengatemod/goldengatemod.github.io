<template>
  <div class="mobile-menu-toggle md:hidden">
    <button
      class="menu-toggle-btn"
      aria-label="Toggle navigation menu"
      @click="toggleMobileMenu"
    >
      <Icon
        :name="mobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'"
        class="w-6 h-6"
      />
    </button>
  </div>

  <div
    v-if="mobileMenuOpen"
    class="mobile-menu-overlay md:hidden"
    @click="closeMobileMenu"
  >
    <nav class="mobile-menu" @click.stop>
      <div class="mobile-logo">
        <NuxtLinkLocale to="/" @click="closeMobileMenu">
          <img
            src="/gg-icon-96.webp"
            alt="Golden Gate logo icon"
            fetchpriority="high"
            @contextmenu.prevent
          />
        </NuxtLinkLocale>
      </div>

      <div class="mobile-menu-items">
        <NuxtLinkLocale
          v-for="item in items"
          :key="item.url"
          :to="item.url"
          class="mobile-menu-item"
          active-class="active"
          @click="closeMobileMenu"
        >
          <span>{{ getLabel(item.label) }}</span>
        </NuxtLinkLocale>
      </div>

      <div class="mobile-language-switcher">
        <CommonLanguageSwitcher />
      </div>

      <div class="mobile-menu-spacer" />
    </nav>
  </div>

  <nav class="sticky-menubar hidden md:block">
    <NuxtLinkLocale to="/">
      <div class="emblemat">
        <img
          src="/gg-icon-96.webp"
          alt="Golden Gate logo icon"
          fetchpriority="high"
          @contextmenu.prevent
        />
        <div class="logo-glow" />
      </div>
    </NuxtLinkLocale>

    <div class="menubar-content">
      <div class="nav-items-container">
        <NuxtLinkLocale
          v-for="item in items"
          :key="item.url"
          class="nav-item"
          :to="item.url"
          active-class="active-tab"
        >
          <span class="nav-text">{{ getLabel(item.label) }}</span>
          <div class="nav-underline" />
        </NuxtLinkLocale>
      </div>

      <div class="desktop-end-section">
        <CommonLanguageSwitcher />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { te, t } = useI18n()

interface MenuItem {
  label: string
  url: string
}

const route = useRoute()

const mobileMenuOpen = ref(false)

const items = ref<MenuItem[]>([
  {
    label: 'navigation.goldenGate',
    url: '/golden-gate',
  },
  {
    label: 'navigation.goldenGate2',
    url: '/golden-gate-2',
  },
  {
    label: 'navigation.team',
    url: '/team',
  },
])

const getLabel = (label: unknown): string => {
  if (typeof label === 'string') {
    return te(label) ? t(label).toUpperCase() : label.toUpperCase()
  }
  return ''
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  if (mobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  document.body.style.overflow = ''
}

const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && mobileMenuOpen.value) {
    closeMobileMenu()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
  document.body.style.overflow = ''
})

watch(
  () => route.path,
  () => {
    closeMobileMenu()
  },
)
</script>

<style lang="scss" scoped>
.mobile-menu-toggle {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1300;

  .menu-toggle-btn {
    background: rgba(25, 12, 6, 0.95);
    border: 1px solid rgba(245, 158, 11, 0.3);
    color: #f59e0b;
    width: 48px;
    height: 48px;
    border-radius: 8px;
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(25, 12, 6, 1);
      border-color: rgba(245, 158, 11, 0.5);
    }
  }
}

.mobile-menu-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1250;
  backdrop-filter: blur(4px);
}

.mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 280px;
  background: linear-gradient(180deg, #190c06 0%, #0f0804 100%);
  border-left: 1px solid rgba(245, 158, 11, 0.3);
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y: auto;
}

.mobile-logo {
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(245, 158, 11, 0.2);
}

.mobile-menu-items {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.mobile-menu-item {
  display: block;
  padding: 1rem;
  color: #f3f4f6;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.25rem;
  letter-spacing: 0.05em;

  &:hover {
    background: rgba(245, 158, 11, 0.1);
    color: #f59e0b;
  }

  &.active {
    background: rgba(245, 158, 11, 0.15);
    color: #f59e0b;
    border-left: 3px solid #f59e0b;
  }
}

.mobile-language-switcher {
  border-top: 1px solid rgba(245, 158, 11, 0.2);
  padding-top: 1rem;
}

.mobile-menu-spacer {
  flex-grow: 1;
}

.sticky-menubar {
  position: sticky;
  top: 0;
  z-index: 1200 !important;
  border: 0;
  border-radius: 0 0 8px 8px;
  border-bottom: 1px solid rgba(245, 158, 11, 0.3);
  background: linear-gradient(180deg, #190c06 0%, #0f0804 100%);
  backdrop-filter: blur(8px);
  padding: 0 0 0 140px;
  transition: all 0.3s ease;

  &:hover {
    border-bottom-color: rgba(245, 158, 11, 0.5);
  }

  @media (max-width: 768px) {
    display: none;
  }

  &.scrolled {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    border-bottom-color: rgba(245, 158, 11, 0.4);
  }
}

.menubar-content {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}

.nav-items-container {
  display: flex;
  align-items: center;
  flex-grow: 1;
}

.emblemat {
  position: fixed;
  top: 0;
  left: 25px;
  background: linear-gradient(135deg, #221002 0%, #190c06 100%);
  border-top: none;
  box-shadow:
    4px 5px 15px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(245, 158, 11, 0.1);
  z-index: 2000;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid transparent;

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.15);
    box-shadow:
      4px 8px 25px rgba(0, 0, 0, 0.5),
      inset 0 1px 0 rgba(245, 158, 11, 0.2);
  }

  .logo-glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      rgba(245, 158, 11, 0.1) 0%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
    pointer-events: none;
  }

  &:hover .logo-glow {
    opacity: 1;
  }
}

.nav-item {
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px 12px;
  color: #f3f4f6;
  text-decoration: none;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.25rem;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
  margin: 0 4px;

  &:hover {
    color: var(--color-amber-400);
    background: rgba(245, 158, 11, 0.05);

    .nav-underline {
      width: 100%;
      opacity: 1;
    }
  }

  &.active-tab {
    color: var(--color-amber-400);

    .nav-underline {
      width: 100%;
      opacity: 1;
      background: var(--color-amber-400);
    }
  }

  .nav-text {
    position: relative;
    z-index: 2;
  }

  .nav-underline {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: color-mix(in srgb, var(--color-amber-400) 60%, transparent);
    transition: all 0.3s ease;
    opacity: 0;
  }
}

.desktop-end-section {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-right: 1rem;
  margin-left: auto;
}

@media (max-width: 1024px) {
  .sticky-menubar {
    padding-left: 120px;
  }

  .emblemat {
    left: 20px;
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
    transform: none !important;
    animation: none !important;
  }
}
</style>
