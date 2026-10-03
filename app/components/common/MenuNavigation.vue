<template>
  <USlideover
    v-model:open="mobileMenuOpen"
    :title="t('common.navigation')"
    :transition="!prefersReducedMotion"
    :ui="{
      overlay: 'mobile-menu-overlay z-[1250] bg-black/80 backdrop-blur-sm',
      content: 'z-[1400] w-[min(100vw,20rem)] max-w-none ring-0',
    }"
  >
    <button
      type="button"
      class="mobile-menu-toggle menu-toggle-btn md:hidden"
      :aria-label="t('common.openMenu')"
    >
      <Icon name="heroicons:bars-3" class="w-6 h-6" />
    </button>

    <template #content>
      <nav class="mobile-menu" :aria-label="t('common.navigation')">
        <button
          type="button"
          class="mobile-menu-close menu-toggle-btn"
          :aria-label="t('common.closeMenu')"
          @click="closeMobileMenu"
        >
          <Icon name="heroicons:x-mark" class="w-6 h-6" />
        </button>
        <div class="mobile-logo">
          <NuxtLinkLocale to="/" @click="closeMobileMenu">
            <img
              src="/gg-icon-96.webp"
              alt="Golden Gate logo icon"
              width="96"
              height="96"
              fetchpriority="high"
              @contextmenu.prevent
            />
          </NuxtLinkLocale>
        </div>

        <div class="mobile-language-switcher">
          <CommonLanguageSwitcher class="w-full" />
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

        <div class="mobile-menu-spacer" />
      </nav>
    </template>
  </USlideover>

  <nav class="sticky-menubar hidden md:block">
    <NuxtLinkLocale to="/" :aria-label="t('navigation.home')">
      <div class="emblemat">
        <img
          src="/gg-icon-96.webp"
          alt="Golden Gate logo icon"
          width="96"
          height="96"
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
          :aria-label="getLabel(item.label)"
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
const { te, t } = useI18n();

interface MenuItem {
  label: string;
  url: string;
}

const route = useRoute();

const mobileMenuOpen = ref(false);
const isDesktop = useMediaQuery('(min-width: 768px)');
const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

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
]);

const getLabel = (label: unknown): string => {
  if (typeof label === 'string') {
    return te(label) ? t(label).toUpperCase() : label.toUpperCase();
  }
  return '';
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

watch(
  () => route.path,
  () => {
    closeMobileMenu();
  },
);

watch(isDesktop, (desktop) => {
  if (desktop) closeMobileMenu();
});
</script>

<style lang="scss" scoped>
.mobile-menu-toggle {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1300;

  @media (min-width: 768px) {
    &.menu-toggle-btn {
      display: none;
    }
  }
}

.menu-toggle-btn {
  background: var(--gg-panel);
  border: 1px solid var(--gg-gold-border);
  color: var(--gg-gold);
  width: 48px;
  height: 48px;
  border-radius: var(--gg-radius-control);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:
    color 0.3s ease,
    background-color 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    background: var(--gg-bg);
    border-color: var(--gg-gold-border-hover);
  }
}

.mobile-menu-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.mobile-menu {
  position: relative;
  height: 100%;
  width: 100%;
  background: var(--gg-gradient);
  border-left: 1px solid var(--gg-gold-border);
  padding: 5rem 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
}

.mobile-logo {
  display: flex;
  justify-content: center;
}

.mobile-menu-items {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.mobile-menu-item {
  display: block;
  padding: 1rem;
  color: var(--gg-text-description);
  text-decoration: none;
  border-radius: var(--gg-radius-control);
  transition:
    color 0.3s ease,
    background-color 0.3s ease,
    border-color 0.3s ease;
  font-family: var(--font-bebas-neue);
  font-size: 1.25rem;
  letter-spacing: 0.05em;

  &:hover {
    background: rgba(245, 158, 11, 0.1);
    color: var(--gg-gold);
  }

  &.active {
    background: rgba(245, 158, 11, 0.15);
    color: var(--gg-gold);
    border-left: 3px solid #f59e0b;
  }
}

.mobile-language-switcher {
  border-top: 1px solid rgba(245, 158, 11, 0.2);
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(245, 158, 11, 0.2);
}

.mobile-menu-spacer {
  flex-grow: 1;
  min-width: 0;
  flex-wrap: wrap;
}

.sticky-menubar {
  position: sticky;
  top: 0;
  z-index: 1200;
  border: 0;
  border-radius: 0 0 8px 8px;
  border-bottom: 1px solid var(--gg-gold-border);
  background: var(--gg-gradient);
  backdrop-filter: blur(8px);
  padding: 0 0 0 140px;
  transition:
    color 0.3s ease,
    background-color 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    border-bottom-color: var(--gg-gold-border-hover);
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
  min-width: 0;
  flex-wrap: wrap;
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
  z-index: 1201;
  overflow: hidden;
  transition:
    transform 0.3s ease,
    filter 0.3s ease,
    box-shadow 0.3s ease;
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
  color: var(--gg-text-description);
  text-decoration: none;
  font-family: var(--font-bebas-neue);
  font-size: 1.25rem;
  letter-spacing: 0.05em;
  transition:
    color 0.3s ease,
    background-color 0.3s ease,
    border-color 0.3s ease;
  margin: 0 4px;
  min-width: 0;
  overflow-wrap: anywhere;

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
    transition:
      width 0.3s ease,
      opacity 0.3s ease;
    opacity: 0;
  }
}

.desktop-end-section {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
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
  .menu-toggle-btn,
  .mobile-menu-item,
  .sticky-menubar,
  .nav-item,
  .nav-underline,
  .emblemat,
  .emblemat .logo-glow {
    transition: none;
  }

  .emblemat:hover {
    transform: none;
  }
}
</style>
