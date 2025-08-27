interface RegionalStructuredDataProps {
  regionName: string
  regionNameKorean: string
  serviceAreas: string[]
  coordinates: {
    latitude: number
    longitude: number
  }
}

export default function RegionalStructuredData({
  regionName,
  regionNameKorean,
  serviceAreas = [], // Added default empty array to prevent undefined map error
  coordinates,
}: RegionalStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://총알출장마사지.com/${regionName}#business`,
    name: `${regionNameKorean} 출장마사지 - 총알출장마사지`,
    alternateName: `${regionNameKorean} 출장안마`,
    description: `${regionNameKorean} 전 지역 24시간 출장마사지 서비스. 30분 내 방문, 숙련된 전문 테라피스트의 프리미엄 홈케어 마사지`,
    url: `https://총알출장마사지.com/${regionName}`,
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
    address: {
      "@type": "PostalAddress",
      addressLocality: regionNameKorean,
      addressCountry: "KR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: coordinates.latitude,
      longitude: coordinates.longitude,
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
      },
      geoRadius: "15000",
    },
    areaServed: (serviceAreas || []).map((area) => ({
      "@type": "Place",
      name: area,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${regionNameKorean} 마사지 서비스 메뉴`,
      itemListElement: [
        {
          "@type": "Offer",
          "@id": `https://총알출장마사지.com/${regionName}#thai-massage`,
          name: "타이마사지",
          description: `${regionNameKorean} 지역 전통 타이마사지 기법을 활용한 전신 마사지로 근육 이완과 혈액순환 개선`,
          category: "Massage Therapy",
          availableAtOrFrom: {
            "@type": "Place",
            name: regionNameKorean,
          },
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
        },
        {
          "@type": "Offer",
          "@id": `https://총알출장마사지.com/${regionName}#healing-swedish`,
          name: "힐링 스웨디시",
          description: `${regionNameKorean} 지역 스웨덴식 마사지 기법으로 근육 이완과 스트레스 해소에 효과적`,
          category: "Massage Therapy",
          availableAtOrFrom: {
            "@type": "Place",
            name: regionNameKorean,
          },
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
        },
        {
          "@type": "Offer",
          "@id": `https://총알출장마사지.com/${regionName}#vip-package`,
          name: "VIP 패키지 (타이 + 힐링 + 풋)",
          description: `${regionNameKorean} 지역 타이마사지, 힐링스웨디시, 풋마사지를 결합한 프리미엄 패키지`,
          category: "Premium Massage Package",
          availableAtOrFrom: {
            "@type": "Place",
            name: regionNameKorean,
          },
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
    sameAs: [`https://총알출장마사지.com/${regionName}`],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}
