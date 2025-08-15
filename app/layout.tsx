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
  title: "총알출장마사지 - 서울 경기 인천 24시간 전문 출장마사지",
  description:
    "서울 경기 인천 전 지역 24시간 출장마사지 서비스. 30분 내 방문, 숙련된 전문 테라피스트, 타이마사지 스웨디시 힐링마사지 전문. 안전하고 깨끗한 프리미엄 홈케어 서비스.",
  keywords:
    "출장마사지, 서울출장마사지, 경기출장마사지, 인천출장마사지, 24시간마사지, 홈케어마사지, 타이마사지, 스웨디시, 힐링마사지, 전문테라피스트",
  authors: [{ name: "총알출장마사지" }],
  creator: "총알출장마사지",
  publisher: "총알출장마사지",
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
    type: "website",
    locale: "ko_KR",
    url: "https://총알출장마사지.com",
    siteName: "총알출장마사지",
    title: "총알출장마사지 - 서울 경기 인천 24시간 전문 출장마사지",
    description:
      "서울 경기 인천 전 지역 24시간 출장마사지 서비스. 30분 내 방문, 전문 테라피스트의 프리미엄 홈케어 마사지.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "총알출장마사지 - 전문 출장마사지 서비스",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "총알출장마사지 - 서울 경기 인천 24시간 전문 출장마사지",
    description:
      "서울 경기 인천 전 지역 24시간 출장마사지 서비스. 30분 내 방문, 전문 테라피스트의 프리미엄 홈케어 마사지.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "google-site-verification-code",
    other: {
      "naver-site-verification": "naver-verification-code",
    },
  },
  alternates: {
    canonical: "https://총알출장마사지.com",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${workSans.variable} ${openSans.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "총알출장마사지",
              description: "서울 경기 인천 전 지역 24시간 출장마사지 서비스",
              url: "https://총알출장마사지.com",
              telephone: "010-2871-2457",
              priceRange: "$$",
              openingHours: "Mo-Su 00:00-23:59",
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 37.5665,
                  longitude: 126.978,
                },
                geoRadius: "50000",
              },
              areaServed: [
                {
                  "@type": "City",
                  name: "서울특별시",
                },
                {
                  "@type": "State",
                  name: "경기도",
                },
                {
                  "@type": "City",
                  name: "인천광역시",
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "마사지 서비스",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "타이마사지",
                      description: "전통 타이마사지 기법을 활용한 전신 마사지",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "힐링 스웨디시",
                      description: "스웨덴식 마사지 기법으로 근육 이완과 스트레스 해소",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
