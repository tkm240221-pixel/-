import type { Metadata } from "next"
import RegionalStructuredData from "@/components/regional-structured-data"
import SeochoClientPage from "./SeochoClientPage"

export const metadata: Metadata = {
  title: "서초구 출장마사지 | 전국 출장안마 | 24시 연중무휴 - 총알출장마사지",
  description:
    "서초구 전 지역 30분 내 방문! 서초동, 잠원동, 반포동, 방배동, 양재동 등 서초구 출장마사지 전문 서비스. 24시간 연중무휴 운영, 전문 테라피스트가 직접 방문하여 최고의 힐링 서비스를 제공합니다.",
  keywords:
    "서초구 출장마사지, 서초동 마사지, 잠원동 마사지, 반포동 마사지, 방배동 마사지, 양재동 마사지, 서초구 타이마사지, 서초구 힐링마사지, 24시간 출장마사지",
  openGraph: {
    title: "서초구 출장마사지 | 전국 출장안마 | 24시 연중무휴 - 총알출장마사지",
    description: "서초구 전 지역 30분 내 방문! 전문 테라피스트의 프리미엄 출장마사지 서비스",
    url: "https://chongal-massage.com/seocho",
    siteName: "총알출장마사지",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "서초구 출장마사지 | 전국 출장안마 | 24시 연중무휴 - 총알출장마사지",
    description: "서초구 전 지역 30분 내 방문! 전문 테라피스트의 프리미엄 출장마사지 서비스",
  },
  alternates: {
    canonical: "https://chongal-massage.com/seocho",
  },
}

export default function SeochoPage() {
  const serviceAreas = [
    "서초1동",
    "서초2동",
    "서초3동",
    "서초4동",
    "잠원동",
    "반포본동",
    "반포1동",
    "반포2동",
    "반포3동",
    "반포4동",
    "방배본동",
    "방배1동",
    "방배2동",
    "방배3동",
    "방배4동",
    "양재1동",
    "양재2동",
    "내곡동",
  ]

  return (
    <>
      <RegionalStructuredData
        regionName="서초구"
        address="서울특별시 서초구"
        coordinates={{ lat: 37.4837, lng: 127.0324 }}
        serviceAreas={serviceAreas}
      />
      <SeochoClientPage />
    </>
  )
}
