module.exports = {
  root: true,
  extends: [
    '@takamachi/eslint-config/presets/react-typescript-prettier',
    'next',
    'next/core-web-vitals',
    'plugin:react/jsx-runtime',
    'plugin:compat/recommended',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/dom',
    'plugin:testing-library/react',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    '@typescript-eslint/no-invalid-this': 'off',
  },
};
