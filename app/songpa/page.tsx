import type { Metadata } from "next"
import RegionalStructuredData from "@/components/regional-structured-data"
import SongpaClientPage from "./SongpaClientPage"

export const metadata: Metadata = {
  title: "송파구 출장마사지 | 전국 출장안마 | 24시 연중무휴 - 총알출장마사지",
  description:
    "송파구 전 지역 30분 내 방문! 잠실동, 석촌동, 가락동 등 송파구 출장마사지 전문 서비스. 24시간 연중무휴 운영, 전문 테라피스트가 직접 방문하여 최고의 힐링 서비스를 제공합니다.",
  keywords:
    "송파구 출장마사지, 잠실동 마사지, 석촌동 마사지, 가락동 마사지, 송파구 타이마사지, 송파구 힐링마사지, 24시간 출장마사지",
  openGraph: {
    title: "송파구 출장마사지 | 전국 출장안마 | 24시 연중무휴 - 총알출장마사지",
    description: "송파구 전 지역 30분 내 방문! 전문 테라피스트의 프리미엄 출장마사지 서비스",
    url: "https://chongal-massage.com/songpa",
    siteName: "총알출장마사지",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "송파구 출장마사지 | 전국 출장안마 | 24시 연중무휴 - 총알출장마사지",
    description: "송파구 전 지역 30분 내 방문! 전문 테라피스트의 프리미엄 출장마사지 서비스",
  },
  alternates: {
    canonical: "https://chongal-massage.com/songpa",
  },
}

export default function SongpaPage() {
  const serviceAreas = [
    "잠실동",
    "석촌동",
    "가락동",
    "문정동",
    "장지동",
    "삼전동",
    "방이동",
    "오금동",
    "거여동",
    "마천동",
    "풍납동",
    "송파동",
    "신천동",
    "잠실본동",
    "잠실6동",
    "잠실7동",
  ]

  return (
    <>
      <RegionalStructuredData
        regionName="송파구"
        address="서울특별시 송파구"
        coordinates={{ lat: 37.5145, lng: 127.1059 }}
        serviceAreas={serviceAreas}
      />
      <SongpaClientPage />
    </>
  )
}
