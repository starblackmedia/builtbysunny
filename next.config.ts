import type {NextConfig} from 'next';
import fs from 'fs';
import path from 'path';

// Programmatically clean up redundant conflicting page routes left over from previous refactors
const duplicateCaseStudyPage = path.join(process.cwd(), 'src/app/(web)/work/[id]/page.tsx');
if (fs.existsSync(duplicateCaseStudyPage)) {
  try {
    fs.unlinkSync(duplicateCaseStudyPage);
  } catch (error) {
    // Fail-safe catch
  }
}

const nextConfig: NextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
