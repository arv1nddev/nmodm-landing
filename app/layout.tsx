import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// Use Inter font - a clean, modern sans-serif
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'NMODM - Strategic Number Game',
  description: 'A turn-based strategy game of numbers and foresight. Challenge your mind with pure skill-based gameplay.',
  keywords: ['game', 'strategy', 'puzzle', 'numbers', 'two-player', 'offline'],
  authors: [{ name: 'NMODM Team' }],
  openGraph: {
    title: 'NMODM - Strategic Number Game',
    description: 'A turn-based strategy game of numbers and foresight.',
    type: 'website',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NMODM - Strategic Number Game',
    description: 'A turn-based strategy game of numbers and foresight.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}