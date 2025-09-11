export interface LocationSEO {
  title: string
  description: string
  keywords: string
  structuredData: any
}

// Location mapping for Korean regions
export const LOCATION_MAP: Record<string, string> = {
  // Seoul districts
  gangnam: "강남구",
  gangdong: "강동구",
  gangbuk: "강북구",
  gangseo: "강서구",
  gwanak: "관악구",
  gwangjin: "광진구",
  guro: "구로구",
  geumcheon: "금천구",
  nowon: "노원구",
  dobong: "도봉구",
  dongdaemun: "동대문구",
  dongjak: "동작구",
  mapo: "마포구",
  seodaemun: "서대문구",
  seocho: "서초구",
  seongdong: "성동구",
  seongbuk: "성북구",
  songpa: "송파구",
  yangcheon: "양천구",
  yeongdeungpo: "영등포구",
  yongsan: "용산구",
  eunpyeong: "은평구",
  jongno: "종로구",
  jung: "중구",

  // Gyeonggi cities
  suwon: "수원시",
  seongnam: "성남시",
  goyang: "고양시",
  yongin: "용인시",
  bucheon: "부천시",
  ansan: "안산시",
  anyang: "안양시",
  namyangju: "남양주시",
  hwaseong: "화성시",
  uijeongbu: "의정부시",
  siheung: "시흥시",
  gwangmyeong: "광명시",
  gwangju: "광주시",
  gunpo: "군포시",
  osan: "오산시",
  icheon: "이천시",
  yangju: "양주시",
  guri: "구리시",
  gwacheon: "과천시",
  uiwang: "의왕시",
  hanam: "하남시",
  yeoncheon: "연천군",
  gapyeong: "가평군",
  yangpyeong: "양평군",
  pocheon: "포천시",
  dongducheon: "동두천시",
  paju: "파주시",
  gimpo: "김포시",
  yeoju: "여주시",
  anseong: "안성시",
  pyeongtaek: "평택시",

  // Incheon districts
  "jung-gu": "중구",
  "dong-gu": "동구",
  michuhol: "미추홀구",
  yeonsu: "연수구",
  namdong: "남동구",
  bupyeong: "부평구",
  gyeyang: "계양구",
  "seo-gu": "서구",
  ganghwa: "강화군",
  ongjin: "옹진군",
}

export function generateLocationSEO(pathname: string): LocationSEO {
  // Extract location from pathname (e.g., /gangnam -> gangnam)
  const locationKey = pathname.replace("/", "").toLowerCase()
  const locationName = LOCATION_MAP[locationKey]

  if (!locationName) {
    // Default SEO for homepage or unknown locations
    return {
      title: "총알출장마사지 | 전국 출장안마 | 24시 연중무휴",
      description:
        "서울 경기 인천 전 지역 24시간 출장마사지 서비스. 30분 내 방문, 숙련된 전문 테라피스트, 타이마사지 스웨디시 힐링마사지 전문.",
      keywords: "출장마사지, 전국출장마사지, 24시간마사지, 홈케어마사지, 타이마사지, 스웨디시, 힐링마사지",
      structuredData: getDefaultStructuredData(),
    }
  }

  // Generate location-specific SEO
  const title = `${locationName} 출장마사지 | 전국 출장안마 | 24시 연중무휴 - 총알출장마사지`
  const description = `${locationName} 전문 출장마사지 서비스. 30분 내 방문, 24시간 연중무휴 운영. 타이마사지, 힐링스웨디시, VIP 패키지 전문. 숙련된 테라피스트의 프리미엄 홈케어 서비스.`
  const keywords = `${locationName}출장마사지, ${locationName}마사지, ${locationName}홈케어, ${locationName}타이마사지, ${locationName}스웨디시, 24시간마사지, 출장안마`

  return {
    title,
    description,
    keywords,
    structuredData: getLocationStructuredData(locationName, locationKey),
  }
}

function getDefaultStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "총알출장마사지",
    description: "서울 경기 인천 전 지역 24시간 출장마사지 서비스",
    url: "https://www.총알출장마사지.com",
    telephone: "010-2871-2457",
    openingHours: "Mo-Su 00:00-23:59",
    areaServed: ["서울특별시", "경기도", "인천광역시"],
  }
}

function getLocationStructuredData(locationName: string, locationKey: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${locationName} 총알출장마사지`,
    description: `${locationName} 전문 출장마사지 서비스. 24시간 연중무휴 운영`,
    url: `https://총알출장마사지.com/${locationKey}`,
    telephone: "010-2871-2457",
    openingHours: "Mo-Su 00:00-23:59",
    areaServed: locationName,
    address: {
      "@type": "PostalAddress",
      addressLocality: locationName,
      addressCountry: "KR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "37.5665",
      longitude: "126.978",
    },
    priceRange: "80000-200000",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
    },
  }
}
