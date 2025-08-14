import type React from "react"
import type { Metadata } from "next"
import { Work_Sans, Open_Sans } from "next/font/google"
import "./globals.css"

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: "총알출장마사지 - 전문 홈케어 마사지 서비스",
  description: "24시간 운영, 전 지역 30분 내 방문, 숙련된 전문 테라피스트의 프리미엄 마사지 서비스",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${workSans.variable} ${openSans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
