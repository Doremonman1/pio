import type { Metadata } from 'next';
import { Inter, Fraunces, Archivo_Black, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['300', '400', '700', '900'],
  style: ['normal', 'italic'],
});

const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  variable: '--font-grotesque',
  display: 'swap',
  weight: '400',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Venite University — Come as you\'re becoming',
  description: 'A university built on invitation and arrival. Explore programmes, campus life, and how to apply to Venite.',
  metadataBase: new URL('https://venite.edu'),
  openGraph: {
    title: 'Venite University — Come as you\'re becoming',
    description: 'A university built on invitation and arrival. Explore programmes, campus life, and how to apply to Venite.',
    url: 'https://venite.edu',
    siteName: 'Venite University',
    images: [
      {
        url: 'https://picsum.photos/seed/venite-og/1200/630',
        width: 1200,
        height: 630,
        alt: 'Venite University Threshold Archway',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Venite University — Come as you\'re becoming',
    description: 'A university built on invitation and arrival. Explore programmes, campus life, and how to apply to Venite.',
    images: ['https://picsum.photos/seed/venite-og/1200/630'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${archivoBlack.variable} ${ibmPlexMono.variable}`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen flex flex-col transition-colors duration-200"
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
