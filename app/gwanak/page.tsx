import type { Metadata } from "next"
import RegionalStructuredData from "@/components/regional-structured-data"
import GwanakClientPage from "./GwanakClientPage"

export const metadata: Metadata = {
  title: "관악구 출장마사지 | 전국 출장안마 | 24시 연중무휴 - 총알출장마사지",
  description:
    "관악구 전 지역 30분 내 방문! 신림동, 봉천동, 남현동 등 관악구 출장마사지 전문 서비스. 24시간 연중무휴 운영, 전문 테라피스트가 직접 방문하여 최고의 힐링 서비스를 제공합니다.",
  keywords:
    "관악구 출장마사지, 신림동 마사지, 봉천동 마사지, 남현동 마사지, 관악구 타이마사지, 관악구 힐링마사지, 24시간 출장마사지",
  openGraph: {
    title: "관악구 출장마사지 | 전국 출장안마 | 24시 연중무휴 - 총알출장마사지",
    description: "관악구 전 지역 30분 내 방문! 전문 테라피스트의 프리미엄 출장마사지 서비스",
    url: "https://chongal-massage.com/gwanak",
    siteName: "총알출장마사지",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "관악구 출장마사지 | 전국 출장안마 | 24시 연중무휴 - 총알출장마사지",
    description: "관악구 전 지역 30분 내 방문! 전문 테라피스트의 프리미엄 출장마사지 서비스",
  },
  alternates: {
    canonical: "https://chongal-massage.com/gwanak",
  },
}

export default function GwanakPage() {
  const serviceAreas = [
    "신림동",
    "봉천동",
    "남현동",
    "청룡동",
    "행운동",
    "낙성대동",
    "인헌동",
    "서원동",
    "신사동",
    "미성동",
    "대학동",
    "조원동",
    "은천동",
    "중앙동",
    "성현동",
    "삼성동",
  ]

  return (
    <>
      <RegionalStructuredData
        regionName="관악구"
        address="서울특별시 관악구"
        coordinates={{ lat: 37.4781, lng: 126.9515 }}
        serviceAreas={serviceAreas}
      />
      <GwanakClientPage />
    </>
  )
}
