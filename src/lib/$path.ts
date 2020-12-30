/* eslint-disable */
export const pagesPath = {
  _id: (id: string | number) => ({
    $url: (url?: { hash?: string }) => ({ pathname: '/[id]' as const, query: { id }, hash: url?.hash })
  }),
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath

export const staticPath = {
  android_chrome_384x384_png: '/android-chrome-384x384.png',
  favicon_ico: '/favicon.ico'
} as const

export type StaticPath = typeof staticPath
