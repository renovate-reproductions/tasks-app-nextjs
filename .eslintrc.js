module.exports = {
  root: true,
  extends: [
    '@takamachi/eslint-config/presets/react-typescript-prettier',
    'next/core-web-vitals',
    'plugin:react/jsx-runtime',
    'plugin:compat/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  overrides: [
    {
      files: ['*.@(test|spec).@(ts|tsx|js|jsx|mjs|cjs)'],
      extends: [
        'plugin:jest/recommended',
        'plugin:jest-dom/recommended',
        'plugin:testing-library/dom',
        'plugin:testing-library/react',
      ],
      settings: {
        jest: {
          version: 27,
        },
      },
    },
    {
      files: ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
      extends: ['plugin:storybook/recommended'],
    },
  ],
};
