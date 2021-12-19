module.exports = {
  '*.@(ts|tsx)': 'bash -c tsc',
  '*.@(js|ts|tsx)': 'eslint',
  '*.test.@(js|ts|tsx)': 'jest',
  '*.css': 'stylelint',
};
