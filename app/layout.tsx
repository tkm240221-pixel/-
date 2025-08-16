import type React from "react"
import type { Metadata } from "next"
import { Work_Sans, Open_Sans } from "next/font/google"
import DynamicSEO from "@/components/dynamic-seo"
import "./globals.css"

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
  preload: true,
  fallback: ["system-ui", "arial"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  preload: true,
  fallback: ["system-ui", "arial"],
})

export const metadata: Metadata = {
  title: "총알출장마사지 | 전국 출장안마 | 24시 연중무휴",
  description:
    "서울 경기 인천 전 지역 24시간 출장마사지 서비스. 30분 내 방문, 숙련된 전문 테라피스트, 타이마사지 스웨디시 힐링마사지 전문. 안전하고 깨끗한 프리미엄 홈케어 서비스.",
  keywords: "출장마사지, 전국출장마사지, 24시간마사지, 홈케어마사지, 타이마사지, 스웨디시, 힐링마사지, 전문테라피스트",
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
    title: "총알출장마사지 | 전국 출장안마 | 24시 연중무휴",
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
    title: "총알출장마사지 | 전국 출장안마 | 24시 연중무휴",
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
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no" />
        <meta name="theme-color" content="#7c3aed" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="총알출장마사지" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="msapplication-TileColor" content="#7c3aed" />
        <meta name="msapplication-tap-highlight" content="no" />

        {/* Performance and resource hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />

        {/* Critical image preloads */}
        <link rel="preload" as="image" href="/happy-korean-customer.png" />
        <link rel="preload" as="image" href="/satisfied-korean-customer.png" />
        <link rel="preload" as="image" href="/korean-therapist-smiling.png" />

        {/* Favicon and app icons */}
        <link rel="icon" href="/new-favicon.ico" sizes="any" />
        <link rel="icon" href="/new-icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/new-apple-touch-icon.png" />
        <link rel="manifest" href="/new-manifest.json" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://총알출장마사지.com/#business",
              name: "총알출장마사지",
              alternateName: "총알 출장마사지",
              description: "서울 경기 인천 전 지역 24시간 출장마사지 서비스. 전문 테라피스트의 프리미엄 홈케어 마사지",
              url: "https://총알출장마사지.com",
              telephone: "010-2871-2457",
              priceRange: "80000-200000",
              currenciesAccepted: "KRW",
              paymentAccepted: ["Cash", "Credit Card"],
              openingHours: "Mo-Su 00:00-23:59",
              image: [
                "https://총알출장마사지.com/og-image.jpg",
                "https://총알출장마사지.com/happy-korean-customer.png",
                "https://총알출장마사지.com/korean-therapist-smiling.png",
              ],
              logo: "https://총알출장마사지.com/icon-512.png",
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
                  alternateName: "Seoul",
                },
                {
                  "@type": "State",
                  name: "경기도",
                  alternateName: "Gyeonggi Province",
                },
                {
                  "@type": "City",
                  name: "인천광역시",
                  alternateName: "Incheon",
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "마사지 서비스 메뉴",
                itemListElement: [
                  {
                    "@type": "Offer",
                    "@id": "https://총알출장마사지.com/#thai-massage",
                    name: "타이마사지",
                    description: "전통 타이마사지 기법을 활용한 전신 마사지로 근육 이완과 혈액순환 개선",
                    category: "Massage Therapy",
                    priceSpecification: [
                      {
                        "@type": "PriceSpecification",
                        price: "80000",
                        priceCurrency: "KRW",
                        name: "60분 타이마사지",
                      },
                      {
                        "@type": "PriceSpecification",
                        price: "100000",
                        priceCurrency: "KRW",
                        name: "90분 타이마사지",
                      },
                      {
                        "@type": "PriceSpecification",
                        price: "120000",
                        priceCurrency: "KRW",
                        name: "120분 타이마사지",
                      },
                    ],
                    itemOffered: {
                      "@type": "Service",
                      name: "타이마사지",
                      description: "전통 타이마사지 기법을 활용한 전신 마사지",
                      provider: {
                        "@type": "LocalBusiness",
                        name: "총알출장마사지",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    "@id": "https://총알출장마사지.com/#healing-swedish",
                    name: "힐링 스웨디시",
                    description: "스웨덴식 마사지 기법으로 근육 이완과 스트레스 해소에 효과적",
                    category: "Massage Therapy",
                    priceSpecification: [
                      {
                        "@type": "PriceSpecification",
                        price: "90000",
                        priceCurrency: "KRW",
                        name: "60분 힐링스웨디시",
                      },
                      {
                        "@type": "PriceSpecification",
                        price: "110000",
                        priceCurrency: "KRW",
                        name: "90분 힐링스웨디시",
                      },
                      {
                        "@type": "PriceSpecification",
                        price: "130000",
                        priceCurrency: "KRW",
                        name: "120분 힐링스웨디시",
                      },
                    ],
                    itemOffered: {
                      "@type": "Service",
                      name: "힐링 스웨디시",
                      description: "스웨덴식 마사지 기법으로 근육 이완과 스트레스 해소",
                      provider: {
                        "@type": "LocalBusiness",
                        name: "총알출장마사지",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    "@id": "https://총알출장마사지.com/#vip-package",
                    name: "VIP 패키지 (타이 + 힐링 + 풋)",
                    description: "타이마사지, 힐링스웨디시, 풋마사지를 결합한 프리미엄 패키지",
                    category: "Premium Massage Package",
                    priceSpecification: [
                      {
                        "@type": "PriceSpecification",
                        price: "100000",
                        priceCurrency: "KRW",
                        name: "60분 VIP 패키지",
                      },
                      {
                        "@type": "PriceSpecification",
                        price: "130000",
                        priceCurrency: "KRW",
                        name: "90분 VIP 패키지",
                      },
                      {
                        "@type": "PriceSpecification",
                        price: "160000",
                        priceCurrency: "KRW",
                        name: "120분 VIP 패키지",
                      },
                      {
                        "@type": "PriceSpecification",
                        price: "200000",
                        priceCurrency: "KRW",
                        name: "150분 VIP 패키지",
                      },
                    ],
                    itemOffered: {
                      "@type": "Service",
                      name: "VIP 패키지",
                      description: "타이마사지, 힐링스웨디시, 풋마사지를 결합한 프리미엄 패키지",
                      provider: {
                        "@type": "LocalBusiness",
                        name: "총알출장마사지",
                      },
                    },
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "127",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "김○○",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  reviewBody:
                    "정말 전문적이고 친절하셨어요. 집에서 편안하게 받을 수 있어서 너무 좋았습니다. 다음에도 꼭 이용할게요!",
                },
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "박○○",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  reviewBody:
                    "스트레스가 많이 쌓여있었는데 한 번에 다 풀렸어요. 테라피스트분이 정말 실력이 좋으시네요!",
                },
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "이○○",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  reviewBody: "시간 약속도 정확하고 서비스도 정말 만족스러웠습니다. 다음에 또 예약할게요!",
                },
              ],
              sameAs: ["https://총알출장마사지.com"],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://총알출장마사지.com/#website",
              url: "https://총알출장마사지.com",
              name: "총알출장마사지",
              description: "서울 경기 인천 전 지역 24시간 출장마사지 서비스",
              publisher: {
                "@type": "Organization",
                "@id": "https://총알출장마사지.com/#business",
              },
              potentialAction: [
                {
                  "@type": "SearchAction",
                  target: {
                    "@type": "EntryPoint",
                    urlTemplate: "https://총알출장마사지.com/?s={search_term_string}",
                  },
                  "query-input": "required name=search_term_string",
                },
              ],
              inLanguage: "ko-KR",
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "홈",
                  item: "https://총알출장마사지.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "서울 출장마사지",
                  item: "https://총알출장마사지.com/seoul",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "경기 출장마사지",
                  item: "https://총알출장마사지.com/gyeonggi",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "인천 출장마사지",
                  item: "https://총알출장마사지.com/incheon",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="safe-top safe-bottom safe-left safe-right touch-manipulation">
        <DynamicSEO />
        {children}
      </body>
    </html>
  )
}
