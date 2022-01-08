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
  favicon_ico: '/favicon.ico',
  images: {
    hoodh_ahmed_MiLSst1yExk_unsplash_jpg: '/images/hoodh-ahmed-MiLSst1yExk-unsplash.jpg',
    hussain_faruhaan_XOEL0hNDub0_unsplash_jpg: '/images/hussain-faruhaan-XOEL0hNDub0-unsplash.jpg',
    jaanus_jagomagi_FFUPFHcp2YU_unsplash_jpg: '/images/jaanus-jagomagi-FFUPFHcp2YU-unsplash.jpg',
    jairph_BYmE15nyHEg_unsplash_jpg: '/images/jairph-BYmE15nyHEg-unsplash.jpg',
    jake_allison_MNspPBIcWbo_unsplash_jpg: '/images/jake-allison-MNspPBIcWbo-unsplash.jpg',
    jcob_nasyr_dfar2BIUomI_unsplash_jpg: '/images/jcob-nasyr-dfar2BIUomI-unsplash.jpg',
    joao_marcelo_martins_hFoPRRwjVgg_unsplash_jpg: '/images/joao-marcelo-martins-hFoPRRwjVgg-unsplash.jpg',
    lenstravelier_mTzxHB2_XRI_unsplash_jpg: '/images/lenstravelier-mTzxHB2_XRI-unsplash.jpg',
    manuel_boxler__CZERTBlepA_unsplash_jpg: '/images/manuel-boxler--CZERTBlepA-unsplash.jpg',
    motoki_tonn_vV1a1Leq_dQ_unsplash_jpg: '/images/motoki-tonn-vV1a1Leq-dQ-unsplash.jpg',
    natur_wunderland_yQTQgXeYAac_unsplash_jpg: '/images/natur-wunderland-yQTQgXeYAac-unsplash.jpg',
    niklas_tidbury_KHtBHyRsV_M_unsplash_jpg: '/images/niklas-tidbury-KHtBHyRsV-M-unsplash.jpg',
    niko_romo_K0A34ok_1GU_unsplash_jpg: '/images/niko-romo-K0A34ok-1GU-unsplash.jpg',
    pascal_van_de_vendel_GWF4_nayH_4_unsplash_jpg: '/images/pascal-van-de-vendel-GWF4_nayH-4-unsplash.jpg',
    shannon_tremaine_NRz7SfpnqUM_unsplash_jpg: '/images/shannon-tremaine-NRz7SfpnqUM-unsplash.jpg',
    tim_foster_V2HBmfto63E_unsplash_jpg: '/images/tim-foster-V2HBmfto63E-unsplash.jpg',
    trent_haaland_eNI_0vy7IBE_unsplash_jpg: '/images/trent-haaland-eNI-0vy7IBE-unsplash.jpg',
    v2osk_uUbEvoRfRdY_unsplash_jpg: '/images/v2osk-uUbEvoRfRdY-unsplash.jpg'
  }
} as const

// prettier-ignore
export type StaticPath = typeof staticPath
