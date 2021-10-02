import { Provider } from '../src/infrastructure/controllers/_app';

export const parameters = {
  actions: {
    argTypesRegex: '^on[A-Z].*',
  },
  controls: {
    expanded: true,
    matchers: {
      date: /^(created|updated)At$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <Provider>
      <Story />
    </Provider>
  ),
];
