import type { Metadata } from "next"
import DongGuClientPage from "./DongGuClientPage"

export const metadata: Metadata = {
  title: "인천 동구 출장마사지 | 총알출장마사지 - 24시간 운영",
  description:
    "인천 동구 전 지역 30분 내 방문! 타이마사지, 힐링스웨디시, VIP 코스 전문. 24시간 운영, 후불제, 안전한 서비스.",
  keywords: "인천 동구 출장마사지, 동구 타이마사지, 동구 스웨디시, 24시간 출장마사지",
  openGraph: {
    title: "인천 동구 출장마사지 | 총알출장마사지",
    description: "인천 동구 전 지역 30분 내 방문! 전문 테라피스트의 프리미엄 홈케어 서비스",
    type: "website",
  },
}

export default function DongGuPage() {
  return <DongGuClientPage />
}
