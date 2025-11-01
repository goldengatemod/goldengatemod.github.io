// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'linebreak-style': 0,
    indent: ['error', 2],
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    '@stylistic/comma-dangle': 'off',
    'import/no-extraneous-dependencies': ['off'],
    'import/prefer-default-export': ['off'],
    'vue/valid-v-slot': [
      'error',
      {
        allowModifiers: true,
      },
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': ['error'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'all',
        argsIgnorePattern: '^_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
  },
}).prepend({
  files: ['app/**/*.{js,ts,vue}'],
  ignores: ['.nuxt', '.yarn', 'dist', 'node_modules'],
})
