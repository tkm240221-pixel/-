import type { Metadata } from "next"
import GangseoClientPage from "./GangseoClientPage"
import RegionalStructuredData from "@/components/regional-structured-data"

export const metadata: Metadata = {
  title: "강서구 출장마사지 | 전국 출장안마 | 24시 연중무휴 - 총알출장마사지",
  description:
    "강서구 전 지역 30분 내 방문하는 프리미엄 출장마사지 서비스. 24시간 연중무휴 운영, 전문 테라피스트가 직접 방문하여 최고의 힐링 서비스를 제공합니다.",
  keywords: "강서구 출장마사지, 강서 마사지, 화곡동 출장안마, 등촌동 마사지, 가양동 출장마사지, 24시간 마사지",
  openGraph: {
    title: "강서구 출장마사지 | 전국 출장안마 | 24시 연중무휴 - 총알출장마사지",
    description: "강서구 전 지역 30분 내 방문하는 프리미엄 출장마사지 서비스",
    url: "https://yourdomain.com/gangseo",
    siteName: "총알출장마사지",
    locale: "ko_KR",
    type: "website",
  },
}

export default function GangseoPage() {
  return (
    <>
      <RegionalStructuredData
        regionName="강서구"
        regionType="seoul"
        serviceAreas={["화곡동", "등촌동", "가양동", "마곡동", "염창동", "발산동", "우장산동", "공항동"]}
      />
      <GangseoClientPage />
    </>
  )
}
