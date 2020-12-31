export const theme = {
  color: {
    black: 'rgba(0, 0, 0, 1)',
    black70: 'rgba(0, 0, 0, 0.7)',
  },
} as const

export type Theme = typeof theme
