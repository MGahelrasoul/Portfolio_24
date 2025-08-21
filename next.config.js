/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  transpilePackages: [
    'three',
    'three-mesh-bvh',
    'maath',
    '@react-three/fiber',
    '@react-three/drei',
  ],
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false }
    return config
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
