import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Built by Sunny | Full-Stack Developer',
  description:
    'Portfolio of Sunday J. — Full-Stack Developer building digital products and web applications.',
  openGraph: {
    title: 'Built by Sunny | Sunday J.',
    description:
      'Building digital products, web applications and technology-driven experiences.',
    url: 'https://builtbysunny.web.app',
    siteName: 'Built by Sunny',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Built by Sunny — Sunday J., Full-Stack Developer',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Built by Sunny | Sunday J.',
    description: 'Full-Stack Developer building digital products.',
    images: ['/opengraph-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}