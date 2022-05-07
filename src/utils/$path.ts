export const pagesPath = {
  css_containment: {
    $url: (url?: { hash?: string }) => ({
      pathname: '/css-containment' as const,
      hash: url?.hash,
    }),
  },
  dvh: {
    $url: (url?: { hash?: string }) => ({
      pathname: '/dvh' as const,
      hash: url?.hash,
    }),
  },
  height: {
    $url: (url?: { hash?: string }) => ({
      pathname: '/height' as const,
      hash: url?.hash,
    }),
  },
  lvh: {
    $url: (url?: { hash?: string }) => ({
      pathname: '/lvh' as const,
      hash: url?.hash,
    }),
  },
  svh: {
    $url: (url?: { hash?: string }) => ({
      pathname: '/svh' as const,
      hash: url?.hash,
    }),
  },
  tasks: {
    $url: (url?: { hash?: string }) => ({
      pathname: '/tasks' as const,
      hash: url?.hash,
    }),
  },
  vh: {
    $url: (url?: { hash?: string }) => ({
      pathname: '/vh' as const,
      hash: url?.hash,
    }),
  },
  $url: (url?: { hash?: string }) => ({
    pathname: '/' as const,
    hash: url?.hash,
  }),
};

export type PagesPath = typeof pagesPath;

export const staticPath = {
  _DS_Store: '/.DS_Store',
  favicon_ico: '/favicon.ico',
  images: {
    _DS_Store: '/images/.DS_Store',
    hussain_faruhaan_XOEL0hNDub0_unsplash_jpg:
      '/images/hussain-faruhaan-XOEL0hNDub0-unsplash.jpg',
    jake_allison_MNspPBIcWbo_unsplash_jpg:
      '/images/jake-allison-MNspPBIcWbo-unsplash.jpg',
    joao_marcelo_martins_hFoPRRwjVgg_unsplash_jpg:
      '/images/joao-marcelo-martins-hFoPRRwjVgg-unsplash.jpg',
    motoki_tonn_vV1a1Leq_dQ_unsplash_jpg:
      '/images/motoki-tonn-vV1a1Leq-dQ-unsplash.jpg',
    pascal_van_de_vendel_GWF4_nayH_4_unsplash_jpg:
      '/images/pascal-van-de-vendel-GWF4_nayH-4-unsplash.jpg',
  },
} as const;

export type StaticPath = typeof staticPath;
