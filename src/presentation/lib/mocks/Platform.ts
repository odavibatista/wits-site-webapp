interface Platform {
  id: number
  name: string
  pathImage: string
}

export const Platforms: Platform[] = [
  {
    id: 1,
    name: 'Windows',
    pathImage: '/platforms/windows.png',
  },
  {
    id: 2,
    name: 'App Store',
    pathImage: '/platforms/app-store.png',
  },
  {
    id: 1,
    name: 'Play Store',
    pathImage: '/platforms/google-play.png',
  },
]
