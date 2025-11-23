import type { Metadata } from "next"
import RegionalStructuredData from "@/components/regional-structured-data"
import GangbukClientPage from "./GangbukClientPage"

export const metadata: Metadata = {
  title: "강북구 출장마사지 | 전국 출장안마 | 24시 연중무휴 - 총알출장마사지",
  description:
    "강북구 전 지역 30분 내 방문! 수유동, 미아동, 번동 등 강북구 출장마사지 전문 서비스. 24시간 연중무휴 운영, 전문 테라피스트가 직접 방문하여 최고의 힐링 서비스를 제공합니다.",
  keywords:
    "강북구 출장마사지, 수유동 마사지, 미아동 마사지, 번동 마사지, 강북구 타이마사지, 강북구 힐링마사지, 24시간 출장마사지",
  openGraph: {
    title: "강북구 출장마사지 | 전국 출장안마 | 24시 연중무휴 - 총알출장마사지",
    description: "강북구 전 지역 30분 내 방문! 전문 테라피스트의 프리미엄 출장마사지 서비스",
    url: "https://chongal-massage.com/gangbuk",
    siteName: "총알출장마사지",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "강북구 출장마사지 | 전국 출장안마 | 24시 연중무휴 - 총알출장마사지",
    description: "강북구 전 지역 30분 내 방문! 전문 테라피스트의 프리미엄 출장마사지 서비스",
  },
  alternates: {
    canonical: "https://chongal-massage.com/gangbuk",
  },
}

export default function GangbukPage() {
  const serviceAreas = [
    "수유동",
    "미아동",
    "번동",
    "우이동",
    "인수동",
    "삼양동",
    "송중동",
    "송천동",
    "삼각산동",
    "번1동",
    "번2동",
    "번3동",
    "수유1동",
    "수유2동",
    "수유3동",
    "우이동",
  ]

  return (
    <>
      <RegionalStructuredData
        regionName="강북구"
        address="서울특별시 강북구"
        coordinates={{ lat: 37.6396, lng: 127.0254 }}
        serviceAreas={serviceAreas}
      />
      <GangbukClientPage />
    </>
  )
}
