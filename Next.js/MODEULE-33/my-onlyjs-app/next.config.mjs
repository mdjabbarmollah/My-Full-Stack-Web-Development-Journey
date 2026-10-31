/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

// https://images.unsplash.com/photo-1751225750479-43ad27b94fa0
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
    ]
  },
};

export default nextConfig;
