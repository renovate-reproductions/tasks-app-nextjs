/** @type {import('@babel/core').TransformOptions} */
const config = {
  presets: ['next/babel'],
  plugins: [
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    [
      'styled-components',
      {
        ssr: true,
        displayName: process.env.NODE_ENV === 'development',
        transpileTemplateLiterals: true,
        pure: true,
      },
    ],
  ],
};

module.exports = config;
