import type { Metadata } from "next"
import SuwonClientPage from "./SuwonClientPage"
import RegionalStructuredData from "@/components/regional-structured-data"

export const metadata: Metadata = {
  title: "수원시 출장마사지 | 전국 출장안마 | 24시 연중무휴 - 총알출장마사지",
  description: "수원시 전문 출장마사지 서비스. 영통구, 팔달구, 장안구, 권선구 30분 내 도착. 24시간 예약 가능.",
  keywords: "수원시 출장마사지, 수원 출장안마, 영통구 마사지, 팔달구 마사지, 장안구 마사지, 권선구 마사지",
  openGraph: {
    title: "수원시 출장마사지 | 전국 출장안마 | 24시 연중무휴",
    description: "수원시 전문 출장마사지 서비스. 영통구, 팔달구, 장안구, 권선구 30분 내 도착.",
    url: "https://totalgunmassage.com/suwon",
  },
}

export default function SuwonPage() {
  return (
    <>
      <RegionalStructuredData
        regionName="수원시"
        areaServed={["영통구", "팔달구", "장안구", "권선구", "매탄동", "원천동", "인계동", "화서동"]}
        coordinates={{ lat: 37.2636, lng: 127.0286 }}
      />
      <SuwonClientPage />
    </>
  )
}
