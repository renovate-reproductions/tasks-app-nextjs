export const theme = {
  color: {
    white: 'rgba(255, 255, 255, 1)',
    black70: 'rgba(0, 0, 0, 0.7)',
    black: 'rgba(0, 0, 0, 1)',
  },
} as const;

export type Theme = typeof theme;
