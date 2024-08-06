export const eslintConfig = `module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
    'next/core-web-vitals',
  ],
  plugins: ['prefer-arrow', '@typescript-eslint', 'import'],
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'prefer-destructuring': ['error'],
    'prefer-const': ['error'],
    'prefer-rest-params': ['error'],
    'import/newline-after-import': ['error'],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'unknown', 'parent', 'sibling', 'index', 'object', 'type'],
        pathGroups: [
          { pattern: '@/components/**', group: 'internal' },
          { pattern: '@/config/**', group: 'internal' },
          { pattern: '@/context/**', group: 'internal' },
          { pattern: '@/hooks/**', group: 'internal' },
          { pattern: '@/lib/**', group: 'internal' },
          { pattern: '@/api/**', group: 'internal' },
          { pattern: '@/types/**', group: 'internal', position: 'after' },
          { pattern: '@/styles/**', group: 'internal', position: 'after' },
        ],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    'react/prop-types': [2, { ignore: ['children'] }],
    'react/display-name': 'off',
    '@next/next/no-document-import-in-page': 'off',
    'react/jsx-no-target-blank': [
      'error',
      {
        allowReferrer: true,
        links: true,
        forms: false,
      },
    ],
  },
  overrides: [
    {
      files: ['**/components/ui/*.tsx'],
      rules: {
        'react/prop-types': [
          2,
          { ignore: ['className', 'sideOffset', 'variant', 'size', 'position', 'orientation', 'align'] },
        ],
      },
    },
  ],
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    react: {
      version: 'detect',
    },
  },
};`