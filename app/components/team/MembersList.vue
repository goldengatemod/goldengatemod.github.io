<template>
  <div class="container mx-auto max-w-5xl py-6">
    <SectionDivider class="active-member-divider" />

    <!-- Active Members Section -->
    <div class="container mx-auto mb-8">
      <SectionHeader text-class="!text-amber-400" title="Golden Gate Team" />
      <p
        class="text-center text-gray-300 text-base font-medium mb-6 max-w-2xl mx-4 sm:mx-auto"
      >
        {{ t('team.goldenGateTeam.description') }}
      </p>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4 sm:mx-0"
    >
      <div
        v-for="(member, index) in activeMembers"
        :key="`member-${index}`"
        class="group p-4 rounded-lg bg-linear-to-br from-amber-900/20 to-amber-800/10 border border-amber-800/30 hover:border-amber-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-900/20"
      >
        <div class="flex items-start gap-3">
          <div
            class="w-10 h-10 rounded-full bg-amber-500/25 flex items-center justify-center shrink-0 group-hover:bg-amber-500/35 transition-colors duration-300 border border-amber-600/30"
          >
            <span
              class="text-amber-300 font-bebas-neue text-lg font-bold drop-shadow-sm"
            >
              {{ member.nick ? member.nick.charAt(0).toUpperCase() : '?' }}
            </span>
          </div>
          <div class="flex-1 min-w-0">
            <h3
              class="font-bebas-neue text-lg text-amber-400 group-hover:text-amber-300 transition-colors duration-300 wrap-break-word hyphens-auto leading-tight"
            >
              {{ member.nick ? member.nick.toUpperCase() : '' }}
            </h3>
            <div class="flex flex-wrap gap-1 mt-1">
              <span
                v-for="(role, roleIndex) in Array.isArray(member.roles)
                  ? member.roles
                  : []"
                :key="roleIndex"
                class="inline-block px-2 py-1 text-xs bg-amber-800/40 text-amber-200 rounded-full border border-amber-700/50"
              >
                {{ capitalize(translateRole(role)) }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <SectionDivider class="member-divider" />

    <!-- Former Members Section -->
    <div class="container mx-auto mb-8">
      <SectionHeader
        text-class="!text-amber-200"
        title="team.formerMembers.title"
      />
      <p
        class="text-center text-gray-400 text-base font-medium mb-6 max-w-2xl mx-4 lg:mx-auto"
      >
        {{ t('team.formerMembers.description') }}
      </p>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4 lg:mx-0"
    >
      <div
        v-for="(member, memberIndex) in inactiveMembers"
        :key="`exmember-${memberIndex}`"
        class="group p-4 rounded-lg bg-linear-to-br from-gray-800/20 to-gray-700/10 border border-gray-700/30 hover:border-amber-200/30 transition-all duration-300"
      >
        <div class="flex items-start gap-2">
          <div
            class="w-10 h-10 rounded-full bg-amber-200/10 flex items-center justify-center shrink-0 group-hover:bg-amber-200/20 transition-colors duration-300 border border-amber-300/30"
          >
            <span class="text-amber-200/70 font-bebas-neue text-lg">
              {{ member.nick ? member.nick.charAt(0).toUpperCase() : '?' }}
            </span>
          </div>
          <div class="flex-1 min-w-0">
            <h3
              class="font-bebas-neue text-lg text-amber-200 group-hover:text-amber-100 transition-colors duration-300 wrap-break-word hyphens-auto leading-tight"
            >
              {{ member.nick ? member.nick.toUpperCase() : '' }}
            </h3>
            <div class="flex flex-wrap gap-1 mt-1">
              <span
                v-for="(role, roleIndex) in Array.isArray(member.roles)
                  ? member.roles
                  : []"
                :key="`${member.nick}-role-${roleIndex}`"
                class="inline-block px-2 py-0.5 text-xs bg-gray-700/40 text-gray-300 rounded-full border border-gray-600/50"
              >
                {{ capitalize(translateRole(role)) }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Statistics Section -->
    <div
      class="mt-12 p-6 rounded-xl bg-linear-to-r from-amber-900/20 to-amber-800/10 border border-amber-800/30 mx-4 lg:mx-0"
    >
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div class="space-y-2">
          <div class="text-2xl font-bebas-neue text-amber-400">
            {{ activeMembers.length }}
          </div>
          <div class="text-sm text-gray-300 font-medium">
            aktywnych członków
          </div>
        </div>
        <div class="space-y-2">
          <div class="text-2xl font-bebas-neue text-amber-200">
            {{ inactiveMembers.length }}
          </div>
          <div class="text-sm text-gray-400 font-medium">byłych członków</div>
        </div>
        <div class="space-y-2">
          <div class="text-2xl font-bebas-neue text-amber-400">
            {{ members.length }}
          </div>
          <div class="text-sm text-gray-300 font-medium">osób łącznie</div>
        </div>
        <div class="space-y-2">
          <div class="text-2xl font-bebas-neue text-amber-400">
            {{ timeDuration }}
          </div>
          <div class="text-sm text-gray-300 font-medium">lat działalności</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionDivider from '~/components/common/SectionDivider.vue'
import SectionHeader from '~/components/common/SectionHeader.vue'
import { capitalize } from 'vue'

const { te, t } = useI18n()

const now = new Date()
const past = new Date(2007, 11, 15)
const timeDuration = now.getFullYear() - past.getFullYear()

interface TeamMember {
  nick: string
  roles: string[]
  active: boolean
}

const translateRole = (role: string): string => {
  const key = `team.roles.${role}`
  return te(key) ? t(key) : role
}

const members = ref<TeamMember[]>([
  {
    nick: 'Marcin "Sentarion" Bała',
    roles: ['chief', 'story', 'scripts'],
    active: true,
  },
  { nick: 'Dawid "Rysa" Golanek', roles: ['2D', 'spacer'], active: true },
  {
    nick: 'Maciej "wogsel" Goczoł',
    roles: ['story', 'dubbingDirection', 'marketing'],
    active: true,
  },
  {
    nick: 'Grzegorz "Jugoslavia" Andreasik',
    roles: ['story', 'scripts', 'spacer'],
    active: true,
  },
  {
    nick: 'Radosław "Doick" Michalak',
    roles: ['scripts', 'spacer'],
    active: true,
  },
  { nick: 'Damian "Damianut" Orzeszek', roles: ['scripts'], active: true },
  { nick: 'Adam "Adach" Dzieżyk', roles: ['music'], active: true },
  { nick: 'Fabiosek', roles: ['scripts'], active: false },
  { nick: 'MocnyFull', roles: ['spacer'], active: false },
  { nick: 'Montresor', roles: ['story'], active: false },
  { nick: 'Avgust', roles: ['3D'], active: true },
  { nick: 'Nashadu', roles: ['spacer'], active: false },
  { nick: 'Yorick', roles: ['story'], active: false },
  { nick: 'Izaak "Verso" Nowak', roles: ['story', '2D'], active: true },
  { nick: 'kedart', roles: ['3D'], active: true },
  { nick: 'Rafiss', roles: ['scripts'], active: true },
  { nick: 'Rathgar', roles: ['3D', '2D', 'HTML'], active: false },
  { nick: 'Risepolak (Xardas17)', roles: ['animations'], active: true },
  { nick: 'Kereth', roles: ['spacer'], active: false },
  { nick: 'Bucik', roles: ['scripts'], active: false },
  { nick: 'Creenthe', roles: ['2D', '3D'], active: false },
  { nick: 'Gumen', roles: ['3D'], active: false },
  { nick: 'Cor Anghar VII', roles: ['spacer'], active: false },
  { nick: 'Bagwell', roles: ['movies'], active: false },
  { nick: 'Dagonet', roles: ['3D'], active: false },
  { nick: 'Damianx', roles: ['3D'], active: false },
  { nick: 'Herszt', roles: ['3D'], active: false },
  { nick: 'Lord', roles: ['spacer'], active: false },
  { nick: 'The Snajper', roles: ['3D', 'spacer'], active: false },
  { nick: 'Wowoz', roles: ['2D'], active: false },
  { nick: 'Vader', roles: ['spacer'], active: false },
  { nick: 'Famas', roles: ['music'], active: false },
  { nick: 'Revolution', roles: ['3D'], active: false },
  { nick: 'Bragamus', roles: ['story'], active: false },
  { nick: 'damdan', roles: ['spacer'], active: false },
  { nick: 'Sier4a', roles: ['spacer'], active: false },
  { nick: 'Fahren Imi', roles: ['3D'], active: false },
  { nick: 'FraseR', roles: ['spacer'], active: false },
  {
    nick: 'Rinz',
    roles: ['multiplayerSupport'],
    active: false,
  },
  { nick: 'Adrian "VEQ" Fałkowski', roles: ['2D', '3D'], active: false },
  { nick: 'Żelazko', roles: ['translations'], active: false },
  { nick: 'Szymon "Simon Said" Szkucik', roles: ['translations', 'tests'], active: false},
  { nick: 'Ksondar', roles: ['spacer'], active: false },
  { nick: 'Dragomir', roles: ['3D'], active: false },
  { nick: 'Jedaith', roles: ['2D', '3D'], active: false },
  { nick: 'Adanos', roles: ['scripts', 'story'], active: false },
  { nick: 'Avallach', roles: ['2D', '3D'], active: false },
  { nick: 'mark56', roles: ['animations'], active: false },
  { nick: 'Gornos', roles: ['spacer'], active: false },
  { nick: 'Martinos', roles: ['dubbing', 'spacer'], active: false },
  { nick: 'Szynalone', roles: ['translations', '3D'], active: false },
  { nick: 'Kuba Czaker', roles: ['story'], active: false },
  { nick: 'ReyPL (Vanarius)', roles: ['spacer'], active: false },
  { nick: 'Xankir', roles: ['spacer'], active: false },
  { nick: 'Duch', roles: ['story'], active: false },
  { nick: 'Zavima', roles: ['story'], active: false },
  { nick: 'Bartłomiej "RychuKapucino"', roles: ['3D'], active: false },
  { nick: 'Avanqes', roles: ['story'], active: false },
  { nick: 'Marcin "Ronczo" Jarosiński', roles: ['scripts'], active: false },
  { nick: 'schody100', roles: ['story'], active: false },
  { nick: 'Król_Koboldów', roles: ['story'], active: false },
  { nick: 'Snorri', roles: ['story'], active: false },
  { nick: 'drock', roles: ['scripts'], active: false },
  { nick: 'Marlena', roles: ['story'], active: false },
  { nick: 'KwiatekTV', roles: ['spacer'], active: true },
  { nick: 'Setrox', roles: ['tests'], active: false },
  { nick: 'Bubsejk', roles: ['animations'], active: true },
  { nick: 'AnonimowyLektor', roles: ['soundproducer'], active: true },
  { nick: 'Gizbor', roles: ['3D'], active: true },
])

const activeMembers = computed(() =>
  members.value.filter((member: TeamMember) => member.active),
)
const inactiveMembers = computed(() =>
  members.value.filter((member: TeamMember) => !member.active).reverse(),
)
</script>

<style lang="scss" scoped>
:deep(.active-member-divider > .gg-divider > div) {
  border-color: rgba(245, 158, 11, 0.3);
}
:deep(.member-divider > .gg-divider > div) {
  border-color: rgba(245, 158, 11, 0.3);
}
:deep(.gg-icon) {
  fill: var(--color-amber-400);
  filter: drop-shadow(0 4px 8px rgba(219, 184, 119, 0.3));
  transition: all 0.3s ease;
}
</style>
