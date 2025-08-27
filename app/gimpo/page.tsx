import type { Metadata } from "next"
import GimpoClientPage from "./GimpoClientPage"
import RegionalStructuredData from "@/components/regional-structured-data"
import RegionalLinks from "@/components/regional-links"

export const metadata: Metadata = {
  title: "김포 출장마사지 | 전국 출장안마 | 24시 연중무휴 - 총알출장마사지",
  description:
    "김포시 전문 출장마사지 서비스. 24시간 방문, 숙련된 테라피스트, 합리적 가격. 김포 전 지역 30분 내 방문 가능.",
  keywords: "김포 출장마사지, 김포 출장안마, 김포시 마사지, 김포 홈타이, 김포 스웨디시",
  openGraph: {
    title: "김포 출장마사지 | 전국 출장안마 | 24시 연중무휴 - 총알출장마사지",
    description: "김포시 전문 출장마사지 서비스. 24시간 방문, 숙련된 테라피스트, 합리적 가격.",
    url: "https://yourdomain.com/gimpo",
    siteName: "총알출장마사지",
    locale: "ko_KR",
    type: "website",
  },
}

export default function GimpoPage() {
  const gimpoServiceAreas = ["김포1동", "김포2동", "사우동", "풍무동", "장기동", "구래동", "마산동", "고촌읍"]

  return (
    <div className="min-h-screen bg-white">
      <RegionalStructuredData
        regionName="gimpo"
        regionNameKorean="김포시"
        serviceAreas={gimpoServiceAreas}
        coordinates={{
          latitude: 37.6176,
          longitude: 126.7158,
        }}
      />

      <GimpoClientPage />

      <RegionalLinks currentRegion="gimpo" regionType="gyeonggi" />
    </div>
  )
}
