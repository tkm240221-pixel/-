import type { Metadata } from "next"
import GangdongClientPage from "./GangdongClientPage"
import RegionalStructuredData from "@/components/regional-structured-data"

export const metadata: Metadata = {
  title: "강동구 출장마사지 | 전국 출장안마 | 24시 연중무휴 - 총알출장마사지",
  description:
    "강동구 전 지역 30분 내 방문하는 프리미엄 출장마사지 서비스. 24시간 연중무휴 운영, 전문 테라피스트가 직접 방문하여 최고의 힐링 서비스를 제공합니다.",
  keywords: "강동구 출장마사지, 강동 마사지, 천호동 출장안마, 성내동 마사지, 길동 출장마사지, 24시간 마사지",
  openGraph: {
    title: "강동구 출장마사지 | 전국 출장안마 | 24시 연중무휴 - 총알출장마사지",
    description: "강동구 전 지역 30분 내 방문하는 프리미엄 출장마사지 서비스",
    url: "https://yourdomain.com/gangdong",
    siteName: "총알출장마사지",
    locale: "ko_KR",
    type: "website",
  },
}

export default function GangdongPage() {
  return (
    <>
      <RegionalStructuredData
        regionName="강동구"
        regionType="seoul"
        serviceAreas={[
          "천호동",
          "성내동",
          "길동",
          "둔촌동",
          "암사동",
          "고덕동",
          "상일동",
          "명일동",
          "강일동",
          "하일동",
          "중곡동",
          "구의동",
        ]}
      />
      <GangdongClientPage />
    </>
  )
}
