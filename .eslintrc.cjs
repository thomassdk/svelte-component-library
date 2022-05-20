module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/recommended-requiring-type-checking', 'prettier', 'plugin:storybook/recommended', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.svelte']
  },
  plugins: ['svelte3', '@typescript-eslint'],
  ignorePatterns: ['.eslintrc.*', 'vite.config.*', 'svelte.config.*'],
  overrides: [{
    files: ['*.svelte'],
    processor: 'svelte3/svelte3'
  }],
  settings: {
    'svelte3/typescript': () => require('typescript') // pass the TypeScript package to the Svelte plugin

  }
};