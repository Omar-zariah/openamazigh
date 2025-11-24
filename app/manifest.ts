import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'OpenAmazigh - Learn Tamazight',
    short_name: 'OpenAmazigh',
    description: 'Open source platform for learning Amazigh and Tamazight language, culture, and heritage',
    start_url: '/',
    display: 'standalone',
    background_color: '#2C5F2D',
    theme_color: '#2C5F2D',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}

