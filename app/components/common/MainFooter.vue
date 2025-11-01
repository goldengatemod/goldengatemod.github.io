<template>
  <footer class="consistent-footer">
    <div class="mx-auto w-full pb-6 lg:pb-8">
      <!-- Decorative top border -->
      <div class="flex justify-center mb-8">
        <div
          class="w-32 h-px bg-linear-to-r from-transparent via-amber-400 to-transparent"
        />
      </div>

      <div class="px-6 lg:px-8">
        <!-- Main row -->
        <div
          class="flex flex-col lg:flex-row justify-between items-center gap-6 pb-6 border-b border-amber-800/30"
        >
          <!-- Copyright Section - Left -->
          <div class="text-center lg:text-left order-2 lg:order-1">
            <p class="text-amber-200/70 font-bebas-neue text-lg tracking-wide">
              Copyright &copy; 2007-{{ currentYear }} Golden Gate Team
            </p>
            <p class="text-amber-200/50 text-sm font-medium mt-1">
              {{ t('common.allRightsReserved') }}.
            </p>
          </div>

          <!-- Social Media and Contact Section - Right -->
          <div class="flex flex-col items-center gap-4 order-1 lg:order-2">
            <!-- Social Media -->
            <div class="flex gap-3">
              <!-- Facebook -->
              <a
                href="https://www.facebook.com/zlotewrotamod"
                class="group flex flex-col items-center gap-2 p-3 rounded-lg bg-amber-900/20 hover:bg-amber-900/40 transition-all duration-300 hover:scale-105"
                aria-label="Facebook"
              >
                <Icon
                  name="simple-icons:facebook"
                  class="text-xl! text-amber-300 group-hover:text-white transition-colors duration-300"
                />
                <span
                  class="text-sm md:text-xs text-amber-200/70 group-hover:text-white transition-colors duration-300 font-medium"
                >
                  Facebook
                </span>
              </a>

              <!-- YouTube -->
              <a
                href="https://www.youtube.com/@ZloteWrotaTeam"
                class="group flex flex-col items-center gap-2 p-3 rounded-lg bg-amber-900/20 hover:bg-amber-900/40 transition-all duration-300 hover:scale-105"
                aria-label="YouTube"
              >
                <Icon
                  name="simple-icons:youtube"
                  class="text-xl! text-amber-300 group-hover:text-white transition-colors duration-300"
                />
                <span
                  class="text-sm md:text-xs text-amber-200/70 group-hover:text-white transition-colors duration-300 font-medium"
                >
                  YouTube
                </span>
              </a>

              <!-- Discord -->
              <a
                href="https://discord.gg/rP2ZKy7pP8"
                class="group flex flex-col items-center gap-2 p-3 rounded-lg bg-amber-900/20 hover:bg-amber-900/40 transition-all duration-300 hover:scale-105"
                aria-label="Discord"
              >
                <Icon
                  name="simple-icons:discord"
                  class="text-xl! text-amber-300 group-hover:text-white transition-colors duration-300"
                />
                <span
                  class="text-sm md:text-xs text-amber-200/70 group-hover:text-white transition-colors duration-300 font-medium"
                >
                  Discord
                </span>
              </a>

              <!-- ModDB -->
              <a
                href="https://www.moddb.com/company/golden-gate-team"
                class="group flex flex-col items-center gap-2 p-3 rounded-lg bg-amber-900/20 hover:bg-amber-900/40 transition-all duration-300 hover:scale-105"
                aria-label="ModDB"
              >
                <Icon
                  name="mdi:wrench"
                  class="text-xl! text-amber-300 group-hover:text-white transition-colors duration-300"
                />
                <span
                  class="text-sm md:text-xs text-amber-200/70 group-hover:text-white transition-colors duration-300 font-medium"
                >
                  ModDB
                </span>
              </a>
            </div>

            <!-- Contact -->
            <div
              class="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-900/20 rounded-full"
            >
              <UIcon name="lucide:mail" class="text-xl! text-amber-300" />
              <a
                href="mailto:goldengatebox@gmail.com"
                class="text-amber-200 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                goldengatebox@gmail.com
              </a>
            </div>
          </div>
        </div>

        <!-- Author Section - Center bottom -->
        <div class="text-center pt-6">
          <p class="text-amber-200/50 text-sm">
            {{ t('common.website') }}
          </p>
          <p
            class="text-amber-200/70 text-lg font-bebas-neue tracking-wide mt-1"
          >
            Radosław "Doick" Michalak
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { t } = useI18n()

const currentYear = new Date().getFullYear()
</script>

<style lang="scss" scoped>
.consistent-footer {
  position: relative;
  background: linear-gradient(180deg, #190c06 0%, #0f0804 100%);
  border-top: 1px solid rgba(245, 158, 11, 0.3);
  border-radius: 8px 8px 0 0;
  transition: all 0.3s ease;
}

.consistent-footer:hover {
  border-top-color: rgba(245, 158, 11, 0.5);
}

@media (max-width: 1024px) {
  .consistent-footer .flex.flex-col.lg\\:flex-row {
    flex-direction: column;
    gap: 2rem;
  }

  .consistent-footer .text-center.lg\\:text-left {
    text-align: center;
  }
}

@media (max-width: 640px) {
  .consistent-footer .flex.gap-3 {
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .consistent-footer .group {
    padding: 0.75rem 0.5rem;
    min-width: 75px;
  }

  .consistent-footer .group i {
    font-size: 1rem;
  }

  .consistent-footer .group span {
    font-size: 0.625rem;
    line-height: 1;
  }

  .consistent-footer .inline-flex {
    padding: 0.5rem 0.75rem;
    font-size: 0.75rem;
  }
}

.group:hover {
  transform: translateY(-2px);
}

@media (prefers-reduced-motion: reduce) {
  .group:hover,
  .consistent-footer {
    transform: none;
    transition: none;
  }
}

.group:focus {
  outline: 2px solid #f59e0b;
  outline-offset: 2px;
  border-radius: 8px;
}
</style>
