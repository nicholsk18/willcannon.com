import "./globals.css"

import { Caveat } from "next/font/google"

const caveat = Caveat({
  weight: ["500", "700", "400"],
  variable: "--font-caveat",
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${caveat.variable} antialiased h-full scroll-smooth`}>
        {children}
      </body>
    </html>
  )
}
