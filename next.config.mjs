/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
      },
      {
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
}

export default nextConfig
