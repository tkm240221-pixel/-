"use client"

import { useState } from "react"
import Link from "next/link"

const REGIONS: Record<string, { name: string; districts: Record<string, string> }> = {
  seoul: {
    name: "서울",
    districts: {
      gangnam: "강남구",
      gangdong: "강동구",
      gangbuk: "강북구",
      gangseo: "강서구",
      gwanak: "관악구",
      gwangjin: "광진구",
      guro: "구로구",
      geumcheon: "금천구",
      nowon: "노원구",
      dobong: "도봉구",
      dongdaemun: "동대문구",
      dongjak: "동작구",
      mapo: "마포구",
      seodaemun: "서대문구",
      seocho: "서초구",
      seongdong: "성동구",
      seongbuk: "성북구",
      songpa: "송파구",
      yangcheon: "양천구",
      yeongdeungpo: "영등포구",
      yongsan: "용산구",
      eunpyeong: "은평구",
      jongno: "종로구",
      jung: "중구",
      jungnang: "중랑구",
    },
  },
  gyeonggi: {
    name: "경기",
    districts: {
      gapyeong: "가평군",
      goyang: "고양시",
      gwacheon: "과천시",
      gwangmyeong: "광명시",
      gwangju: "광주시",
      guri: "구리시",
      gunpo: "군포시",
      gimpo: "김포시",
      namyangju: "남양주시",
      dongducheon: "동두천시",
      bucheon: "부천시",
      seongnam: "성남시",
      suwon: "수원시",
      siheung: "시흥시",
      ansan: "안산시",
      anseong: "안성시",
      anyang: "안양시",
      yangju: "양주시",
      yangpyeong: "양평군",
      yeoju: "여주시",
      yeoncheon: "연천군",
      osan: "오산시",
      yongin: "용인시",
      uiwang: "의왕시",
      uijeongbu: "의정부시",
      icheon: "이천시",
      paju: "파주시",
      pyeongtaek: "평택시",
      pocheon: "포천시",
      hanam: "하남시",
      hwaseong: "화성시",
    },
  },
  incheon: {
    name: "인천",
    districts: {
      ganghwa: "강화군",
      gyeyang: "계양구",
      namdong: "남동구",
      donggu: "동구",
      michuhol: "미추홀구",
      bupyeong: "부평구",
      seogu: "서구",
      yeonsu: "연수구",
      ongjin: "옹진군",
      junggu: "중구",
    },
  },
}

export default function RegionLinks() {
  const [activeRegion, setActiveRegion] = useState<"seoul" | "gyeonggi" | "incheon">("seoul")

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-violet-700 mb-4">지역별 출장마사지 안내</h2>

      {/* Tabs */}
      <div className="flex space-x-2 mb-4">
        {Object.entries(REGIONS).map(([key, region]) => (
          <button
            key={key}
            onClick={() => setActiveRegion(key as any)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeRegion === key ? "bg-violet-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-violet-50"
            }`}
          >
            {region.name}
          </button>
        ))}
      </div>

      {/* Links */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-sm text-gray-700">
        {Object.entries(REGIONS[activeRegion].districts).map(([slug, name]) => (
          <Link
            key={slug}
            href={`/${slug}`}
            className="hover:text-violet-600 transition-colors"
          >
            {name} 출장마사지
          </Link>
        ))}
      </div>
    </section>
  )
}
