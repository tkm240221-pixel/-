import type { Metadata } from "next"
import GangnamClientPage from "./GangnamClientPage"
import RegionalStructuredData from "@/components/regional-structured-data"

export const metadata: Metadata = {
  title: "강남구 출장마사지 | 전국 출장안마 | 24시 연중무휴 - 총알출장마사지",
  description:
    "강남구 전 지역 30분 내 방문하는 프리미엄 출장마사지 서비스. 24시간 연중무휴 운영, 전문 테라피스트가 직접 방문하여 최고의 힐링 서비스를 제공합니다.",
  keywords: "강남구 출장마사지, 강남 마사지, 역삼동 출장안마, 삼성동 마사지, 청담동 출장마사지, 24시간 마사지",
  openGraph: {
    title: "강남구 출장마사지 | 전국 출장안마 | 24시 연중무휴 - 총알출장마사지",
    description: "강남구 전 지역 30분 내 방문하는 프리미엄 출장마사지 서비스",
    url: "https://yourdomain.com/gangnam",
    siteName: "총알출장마사지",
    locale: "ko_KR",
    type: "website",
  },
}

export default function GangnamPage() {
  return (
    <>
      <RegionalStructuredData
        regionName="강남구"
        regionType="seoul"
        serviceAreas={["역삼동", "삼성동", "청담동", "논현동", "압구정동", "신사동", "도곡동", "개포동"]}
      />
      <GangnamClientPage />
    </>
  )
}
