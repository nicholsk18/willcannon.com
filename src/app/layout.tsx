import "./globals.css"

import type { Metadata } from "next"
import { Suspense } from "react"
import { Playfair_Display, Inter } from "next/font/google"
import { Footer } from "@/app/components/footer"
import { GoogleAnalytics } from "@/app/components/google-analytics"

export const metadata: Metadata = {
  metadataBase: new URL('https://willcannon.com'),
  title: {
    default: 'Will Cannon | Professional Golfer - Korn Ferry Tour',
    template: '%s | Will Cannon'
  },
  description: 'Will Cannon is a professional golfer competing on the Korn Ferry Tour. Follow his competitive journey, tournament results, schedule, and career achievements in professional golf.',
  keywords: ['Will Cannon', 'Professional Golfer', 'Korn Ferry Tour', 'PGA Tour', 'Golf', 'Tournament Results', 'Golf Schedule', 'Professional Golf Career', 'Golf Tournaments', 'Golf Sponsorship'],
  authors: [{ name: 'Will Cannon', url: 'https://willcannon.com' }],
  creator: 'Will Cannon',
  publisher: 'Will Cannon',
  applicationName: 'Will Cannon Golf',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://willcannon.com',
    siteName: 'Will Cannon - Professional Golfer',
    title: 'Will Cannon | Professional Golfer - Korn Ferry Tour',
    description: 'Will Cannon is a professional golfer competing on the Korn Ferry Tour. Follow his competitive journey, tournament results, schedule, and career achievements.',
    images: [
      {
        url: '/static/banner-home.png',
        width: 1200,
        height: 630,
        alt: 'Will Cannon - Professional Golfer on the Korn Ferry Tour',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Will Cannon | Professional Golfer - Korn Ferry Tour',
    description: 'Will Cannon is a professional golfer competing on the Korn Ferry Tour. Follow his competitive journey, tournament results, and schedule.',
    images: ['/static/banner-home.png'],
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
  verification: {
    google: 'google-site-verification-code', // Add your actual verification code
  },
  category: 'Sports',
}

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
})

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        {children}
        <Footer />
      </body>
    </html>
  )
}
