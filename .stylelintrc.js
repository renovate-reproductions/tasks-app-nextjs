module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-styled-components',
    'stylelint-config-prettier',
    'stylelint-config-property-sort-order-smacss',
  ],
  customSyntax: 'postcss-jsx',
  rules: {
    'no-empty-source': null,
    'declaration-colon-newline-after': null,
    'value-keyword-case': null,
    'a11y/no-outline-none': null,
    'a11y/selector-pseudo-class-focus': true,
    'a11y/content-property-no-static-value': true,
    'a11y/font-size-is-readable': true,
    'a11y/no-obsolete-attribute': true,
    'a11y/no-obsolete-element': true,
    'a11y/no-text-align-justify': true,
    'no-descending-specificity': null,
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['content-visibility', 'contain-intrinsic-size'],
      },
    ],
    'plugin/no-unsupported-browser-features': [
      true,
      {
        ignore: [
          'css-appearance',
          'css-gradients',
          'css-sticky',
          'intrinsic-width',
        ],
      },
    ],
  },
};
