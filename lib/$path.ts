/* eslint-disable */
// prettier-ignore
export const pagesPath = {
  tasks: {
    $url: (url?: { hash?: string }) => ({ pathname: '/tasks' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

// prettier-ignore
export type PagesPath = typeof pagesPath

// prettier-ignore
export const staticPath = {
  _DS_Store: '/.DS_Store',
  favicon_ico: '/favicon.ico',
  images: {
    hussain_faruhaan_XOEL0hNDub0_unsplash_jpg: '/images/hussain-faruhaan-XOEL0hNDub0-unsplash.jpg',
    jake_allison_MNspPBIcWbo_unsplash_jpg: '/images/jake-allison-MNspPBIcWbo-unsplash.jpg',
    joao_marcelo_martins_hFoPRRwjVgg_unsplash_jpg: '/images/joao-marcelo-martins-hFoPRRwjVgg-unsplash.jpg',
    motoki_tonn_vV1a1Leq_dQ_unsplash_jpg: '/images/motoki-tonn-vV1a1Leq-dQ-unsplash.jpg',
    pascal_van_de_vendel_GWF4_nayH_4_unsplash_jpg: '/images/pascal-van-de-vendel-GWF4_nayH-4-unsplash.jpg'
  }
} as const

// prettier-ignore
export type StaticPath = typeof staticPath
