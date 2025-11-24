import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import KeyboardShortcuts from '@/components/KeyboardShortcuts'
import { ToastProvider } from '@/components/ToastContainer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OpenAmazigh - Amazigh & Tamazight Language & Culture Platform',
  description: 'Open source platform dedicated to preserving and promoting Amazigh and Tamazight language, culture, and heritage',
  keywords: ['amazigh', 'tamazight', 'berber', 'language', 'culture', 'open source', 'tifinagh', 'learn tamazight'],
  authors: [{ name: 'OpenAmazigh Community' }],
  creator: 'OpenAmazigh',
  publisher: 'OpenAmazigh',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://openamazigh.org'), // Update with your actual domain
  openGraph: {
    title: 'OpenAmazigh - Learn Tamazight',
    description: 'Open source platform for learning Amazigh and Tamazight language, culture, and heritage',
    url: 'https://openamazigh.org',
    siteName: 'OpenAmazigh',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpenAmazigh - Learn Tamazight',
    description: 'Open source platform for learning Amazigh and Tamazight',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider>
          <KeyboardShortcuts />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <ScrollToTop />
        </ToastProvider>
      </body>
    </html>
  )
}

