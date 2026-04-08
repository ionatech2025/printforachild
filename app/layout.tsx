import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#003087',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: 'Print for a Child Foundation | Empowering Ugandan Children Through Education',
    template: '%s | Print for a Child Foundation',
  },
  description: 'Print for a Child Foundation prints and distributes study materials to less privileged school children in Uganda. Join us in transforming lives through education.',
  keywords: ['Uganda', 'education', 'charity', 'NGO', 'children', 'books', 'printing', 'donate', 'volunteer', 'Africa'],
  authors: [{ name: 'Print for a Child Foundation' }],
  creator: 'Print for a Child Foundation',
  metadataBase: new URL('https://printforachild.org'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://printforachild.org',
    siteName: 'Print for a Child Foundation',
    title: 'Print for a Child Foundation | Empowering Ugandan Children Through Education',
    description: 'Print for a Child Foundation prints and distributes study materials to less privileged school children in Uganda.',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250519_111620-jUmqqfEwZCi0ZuCSVzaLyDn9HNAxoL.jpg',
        width: 1200,
        height: 630,
        alt: 'Ugandan children reading books provided by Print for a Child Foundation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Print for a Child Foundation | Empowering Ugandan Children Through Education',
    description: 'Print for a Child Foundation prints and distributes study materials to less privileged school children in Uganda.',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250519_111620-jUmqqfEwZCi0ZuCSVzaLyDn9HNAxoL.jpg'],
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
  icons: {
    icon: [
      { url: '/favicon.ico' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Google Analytics placeholder */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script> */}
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
