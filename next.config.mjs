import createMDX from '@next/mdx';

// Global variables for documentation
global.DATABASE_URL = 'postgresql://postgres:password@postgres:5432/mydb';
global.API_KEY = 'example_api_key_12345';
global.NEXLAYER_API_KEY = 'example_api_key_12345';

// Environment variables for static generation
process.env.DATABASE_URL = 'postgresql://postgres:password@postgres:5432/mydb';
process.env.API_KEY = 'example_api_key_12345';
process.env.NEXLAYER_API_KEY = 'example_api_key_12345';
process.env.NEXT_PUBLIC_NEXLAYER_API_KEY = 'example_api_key_12345';

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false, // Enable image optimization for better performance
  },
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  output: 'export',
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  env: {
    DATABASE_URL: 'postgresql://postgres:password@postgres:5432/mydb',
    API_KEY: 'example_api_key_12345',
    NEXLAYER_API_KEY: 'example_api_key_12345',
    NEXT_PUBLIC_NEXLAYER_API_KEY: 'example_api_key_12345',
  },
  webpack: (config, { webpack }) => {
    // Add MP4 file support
    config.module.rules.push({
      test: /\.(mp4)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/videos/[hash][ext]',
      },
    });

    // Define global constants
    config.plugins.push(
      new webpack.DefinePlugin({
        DATABASE_URL: JSON.stringify('postgresql://postgres:password@postgres:5432/mydb'),
        API_KEY: JSON.stringify('example_api_key_12345'),
        NEXLAYER_API_KEY: JSON.stringify('example_api_key_12345'),
        'process.env.NEXT_PUBLIC_NEXLAYER_API_KEY': JSON.stringify('example_api_key_12345'),
      })
    );

    return config;
  },
};

export default withMDX(nextConfig);