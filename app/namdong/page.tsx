import type { Metadata } from "next"
import NamdongClientPage from "./NamdongClientPage"
import { RegionalStructuredData } from "@/components/regional-structured-data"

export const metadata: Metadata = {
  title: "남동구 출장마사지 | 전국 출장안마 | 24시 연중무휴 - 총알출장마사지",
  description:
    "남동구 전 지역 30분 내 방문! 구월동, 간석동, 만수동 출장마사지 전문 서비스. 24시간 예약 가능, 후불제 안전 결제",
  keywords: "남동구 출장마사지, 구월동 마사지, 간석동 출장안마, 만수동 마사지, 인천 남동구 출장마사지",
  openGraph: {
    title: "남동구 출장마사지 | 24시 연중무휴 - 총알출장마사지",
    description: "남동구 전 지역 30분 내 방문! 전문 관리사의 프리미엄 출장마사지 서비스",
    url: "https://총알출장마사지.com/namdong",
    siteName: "총알출장마사지",
    locale: "ko_KR",
    type: "website",
  },
}

export default function NamdongPage() {
  return (
    <>
      <RegionalStructuredData
        regionName="남동구"
        regionNameKorean="남동구"
        serviceAreas={["구월동", "간석동", "만수동", "논현동", "장수동", "서창동"]}
      />
      <NamdongClientPage />
    </>
  )
}
