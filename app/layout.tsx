import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { FloatingContact } from "@/components/floating-contact"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://showmassage.xyz"),
  title: "Show Time Massage | Premium Mobile Massage Service",
  description:
    "24/7 professional mobile massage service in Korea. Premium therapists, payment after service, arrives within 30 minutes.",
  keywords:
    "massage, mobile massage, outcall massage, seoul massage, korean massage, thai massage, swedish massage, aroma massage, premium massage",
  generator: "v0.app",
  authors: [{ name: "Show Time Massage" }],
  creator: "Show Time Massage",
  publisher: "Show Time Massage",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Show Time Massage | Premium Mobile Massage",
    description: "24/7 professional mobile massage service. Payment after service, arrives within 30 minutes.",
    type: "website",
    siteName: "Show Time Massage",
  },
  twitter: {
    card: "summary_large_image",
    title: "Show Time Massage | Premium Mobile Massage",
    description: "24/7 professional mobile massage service",
  },
  verification: {
    google: "VGuTJaGsWs5YFoMLha95plREZ5oXzgjocNZ07X987L0",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`font-sans antialiased`}>
        {children}
        <FloatingContact />
        <Analytics />
      </body>
    </html>
  )
}
