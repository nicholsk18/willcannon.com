import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Will Cannon - Professional Golfer',
    short_name: 'Will Cannon',
    description: 'Professional golfer competing on the Korn Ferry Tour',
    start_url: '/',
    display: 'standalone',
    background_color: '#F5F5DC',
    theme_color: '#556B2F',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}

