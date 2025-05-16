import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ImagePreloader } from "@/components/image-preloader"

// Verwenden einer einzelnen, einfachen Schriftart, die garantiert funktioniert
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PV-Invest für Unternehmer",
  description: "Wie Sie Steuern in Substanz und Cashflow verwandeln – mit Struktur statt Zufall",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="print-color-adjust" content="exact" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ImagePreloader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
