import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { FloatingContact } from "@/components/floating-contact"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "쇼타임 출장안마 | 프리미엄 출장마사지 후불제 20대 전문 관리사",
  description:
    "쇼타임 출장안마 - 서울, 경기, 인천, 경상도, 전라도 전지역 24시간 출장마사지 서비스. 20대 전문 관리사, 100% 후불제, 30분 내 도착. 타이마사지, 스웨디시, 아로마마사지 전문. 010-2871-2457",
  keywords:
    "쇼타임출장안마, 쇼타임출장마사지, 출장안마, 출장마사지, 출장, 후불제출장, 후불제출장안마, 후불제출장마사지, 20대출장, 20대출장안마, 20대출장마사지, 서울출장안마, 서울출장마사지, 서울출장, 경기출장안마, 경기출장마사지, 경기출장, 인천출장안마, 인천출장마사지, 인천출장, 경상도출장안마, 경상도출장마사지, 전라도출장안마, 전라도출장마사지, 타이마사지, 타이마사지출장, 스웨디시, 스웨디시마사지, 스웨디시출장, 아로마마사지, 아로마출장, 힐링마사지, 감성마사지, 건식마사지, 습식마사지, 홈케어마사지, 방문마사지, 24시간출장, 24시간출장마사지, 프리미엄출장, 프리미엄출장마사지, 여성전용출장, 남성전용출장, 커플마사지, 호텔출장, 모텔출장, 오피스텔출장, 강남출장, 강남출장안마, 강남출장마사지, 서초출장, 역삼출장, 삼성출장, 분당출장, 수원출장, 부산출장안마, 대구출장안마, 광주출장안마, 대전출장안마, 울산출장안마, 전주출장안마, VIP출장, VIP출장마사지, 고급출장, 고급출장마사지, 내상없는출장, 1인샵, 마사지샵, 출장샵, 관리사출장, 테라피, 출장테라피, 힐링출장, 피로회복마사지, 스트레스해소마사지",
  generator: "v0.app",
  authors: [{ name: "쇼타임 출장안마" }],
  creator: "쇼타임 출장안마",
  publisher: "쇼타임 출장안마",
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
  alternates: {
    types: {
      "application/rss+xml": [
        {
          url: "/feed.xml",
          title: "쇼타임 출장마사지 RSS 피드",
        },
      ],
    },
  },
  openGraph: {
    title: "쇼타임 출장안마 | 프리미엄 출장마사지 후불제 20대",
    description:
      "24시간 연중무휴, 20대 전문 관리사, 100% 후불제 출장마사지 서비스. 서울, 경기, 인천 전지역 30분 내 도착",
    type: "website",
    locale: "ko_KR",
    siteName: "쇼타임 출장안마",
  },
  twitter: {
    card: "summary_large_image",
    title: "쇼타임 출장안마 | 프리미엄 출장마사지",
    description: "24시간 연중무휴 후불제 출장마사지 서비스",
  },
  verification: {
    google: "VGuTJaGsWs5YFoMLha95plREZ5oXzgjocNZ07X987L0",
    other: {
      "naver-site-verification": "naver-site-verification",
    },
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
