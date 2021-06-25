module.exports = {
  root: true,
  extends: [
    '@takamachi/eslint-config/presets/react-typescript-prettier',
    'next',
    'next/core-web-vitals',
    'plugin:compat/recommended',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/dom',
    'plugin:testing-library/react',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
};
