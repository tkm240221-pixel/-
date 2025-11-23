"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle, Shield, CreditCard, Star, X } from "lucide-react"
import { useState, useEffect, useCallback, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import Head from "next/head"

export default function HomePage() {
  const [showPriceTable, setShowPriceTable] = useState(false)
  const [showRegionalDropdown, setShowRegionalDropdown] = useState(false)
  const [activeRegion, setActiveRegion] = useState("seoul")
  const [typewriterText, setTypewriterText] = useState("")
  const fullText =
    "빠른 예약을 위해 전화 또는 문자로 상세 주소 / 마사지 코스 말씀해주시면 빠른 예약 도와드리도록 하겠습니다 ^^"
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showMobileRegionalDropdown, setShowMobileRegionalDropdown] = useState(false)
  const [activeMobileRegion, setActiveMobileRegion] = useState("seoul")

  const typewriterEffect = useCallback(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypewriterText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)
    return () => clearInterval(timer)
  }, [fullText])

  useEffect(() => {
    const cleanup = typewriterEffect()
    return cleanup
  }, [typewriterEffect])

  const regionalData = useMemo(
    () => ({
      seoul: {
        name: "서울",
        districts: [
          "강남구",
          "강동구",
          "강북구",
          "강서구",
          "관악구",
          "광진구",
          "구로구",
          "금천구",
          "노원구",
          "도봉구",
          "동대문구",
          "동작구",
          "마포구",
          "서대문구",
          "서초구",
          "성동구",
          "성북구",
          "송파구",
          "양천구",
          "영등포구",
          "용산구",
          "은평구",
          "종로구",
          "중구",
          "중랑구",
        ],
      },
      gyeonggi: {
        name: "경기",
        districts: [
          "가평군",
          "고양시",
          "과천시",
          "광명시",
          "광주시",
          "구리시",
          "군포시",
          "김포시",
          "남양주시",
          "동두천시",
          "부천시",
          "성남시",
          "수원시",
          "시흥시",
          "안산시",
          "안성시",
          "안양시",
          "양주시",
          "양평군",
          "여주시",
          "연천군",
          "오산시",
          "용인시",
          "의왕시",
          "의정부시",
          "이천시",
          "파주시",
          "평택시",
          "포천시",
          "하남시",
          "화성시",
        ],
      },
      incheon: {
        name: "인천",
        districts: ["강화군", "계양구", "남동구", "동구", "미추홀구", "부평구", "서구", "연수구", "옹진군", "중구"],
      },
    }),
    [],
  )

  return (
    <>
      <Head>
        <title>총알출장마사지 - 서울 경기 인천 24시간 전문 출장마사지 | 30분 내 방문</title>
        <meta
          name="description"
          content="서울 경기 인천 전 지역 24시간 출장마사지 서비스. 30분 내 방문, 숙련된 전문 테라피스트의 타이마사지, 스웨디시, 힐링마사지. 안전하고 깨끗한 프리미엄 홈케어 서비스를 경험하세요."
        />
        <meta
          name="keywords"
          content="출장마사지, 서울출장마사지, 경기출장마사지, 인천출장마사지, 24시간마사지, 홈케어마사지, 타이마사지, 스웨디시, 힐링마사지, 강남출장마사지, 강서출장마사지, 수원출장마사지"
        />
        <link rel="canonical" href="https://총알출장마사지.com" />
      </Head>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white shadow-lg border-b border-violet-100 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-violet-600">총알출장마사지</h1>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-8 relative justify-center flex-1 font-normal text-xl text-gray-600">
                <a href="#home" className="hover:text-violet-600 transition-colors text-gray-700">
                  홈
                </a>
                <button
                  onClick={() => setShowPriceTable(true)}
                  className="hover:text-violet-600 transition-colors text-gray-700"
                >
                  코스표
                </button>
                <div className="relative">
                  <button
                    onClick={() => setShowRegionalDropdown(!showRegionalDropdown)}
                    className="hover:text-violet-600 transition-colors flex items-center text-gray-700"
                  >
                    지역별
                    <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Regional Dropdown Menu */}
                  {showRegionalDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-96 bg-white border border-violet-200 rounded-lg shadow-2xl z-50">
                      <div className="p-4">
                        <div className="flex mb-4 bg-violet-50 rounded-lg p-1">
                          <button
                            onClick={() => setActiveRegion("seoul")}
                            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                              activeRegion === "seoul"
                                ? "bg-violet-600 text-white"
                                : "text-gray-600 hover:text-violet-600"
                            }`}
                          >
                            서울
                          </button>
                          <button
                            onClick={() => setActiveRegion("gyeonggi")}
                            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                              activeRegion === "gyeonggi"
                                ? "bg-violet-500 text-white"
                                : "text-gray-600 hover:text-violet-600"
                            }`}
                          >
                            경기
                          </button>
                          <button
                            onClick={() => setActiveRegion("incheon")}
                            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                              activeRegion === "incheon"
                                ? "bg-violet-400 text-white"
                                : "text-gray-600 hover:text-violet-600"
                            }`}
                          >
                            인천
                          </button>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-xs max-h-60 overflow-y-auto">
                          {/* Seoul Districts */}
                          {activeRegion === "seoul" && (
                            <>
                              <Link
                                href="/gangnam"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                강남구출장마사지
                              </Link>
                              <Link
                                href="/gangdong"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                강동구출장마사지
                              </Link>
                              <Link
                                href="/gangbuk"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                강북구출장마사지
                              </Link>
                              <Link
                                href="/gangseo"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                강서구출장마사지
                              </Link>
                              <Link
                                href="/gwanak"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                관악구출장마사지
                              </Link>
                              <Link
                                href="/gwangjin"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                광진구출장마사지
                              </Link>
                              <Link
                                href="/guro"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                구로구출장마사지
                              </Link>
                              <Link
                                href="/geumcheon"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                금천구출장마사지
                              </Link>
                              <Link
                                href="/nowon"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                노원구출장마사지
                              </Link>
                              <Link
                                href="/dobong"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                도봉구출장마사지
                              </Link>
                              <Link
                                href="/dongdaemun"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                동대문구출장마사지
                              </Link>
                              <Link
                                href="/dongjak"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                동작구출장마사지
                              </Link>
                              <Link
                                href="/mapo"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                마포구출장마사지
                              </Link>
                              <Link
                                href="/seodaemun"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                서대문구출장마사지
                              </Link>
                              <Link
                                href="/seocho"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                서초구출장마사지
                              </Link>
                              <Link
                                href="/seongdong"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                성동구출장마사지
                              </Link>
                              <Link
                                href="/seongbuk"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                성북구출장마사지
                              </Link>
                              <Link
                                href="/songpa"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                송파구출장마사지
                              </Link>
                              <Link
                                href="/yangcheon"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                양천구출장마사지
                              </Link>
                              <Link
                                href="/yeongdeungpo"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                영등포구출장마사지
                              </Link>
                              <Link
                                href="/yongsan"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                용산구출장마사지
                              </Link>
                              <Link
                                href="/eunpyeong"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                은평구출장마사지
                              </Link>
                              <Link
                                href="/jongno"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                종로구출장마사지
                              </Link>
                              <Link
                                href="/jung"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                중구출장마사지
                              </Link>
                              <Link
                                href="/jungnang"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                중랑구출장마사지
                              </Link>
                            </>
                          )}

                          {/* Gyeonggi Districts */}
                          {activeRegion === "gyeonggi" && (
                            <>
                              <Link
                                href="/gapyeong"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                가평군출장마사지
                              </Link>
                              <Link
                                href="/goyang"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                고양시출장마사지
                              </Link>
                              <Link
                                href="/gwacheon"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                과천시출장마사지
                              </Link>
                              <Link
                                href="/gwangmyeong"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                광명시출장마사지
                              </Link>
                              <Link
                                href="/gwangju"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                광주시출장마사지
                              </Link>
                              <Link
                                href="/guri"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                구리시출장마사지
                              </Link>
                              <Link
                                href="/gunpo"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                군포시출장마사지
                              </Link>
                              <Link
                                href="/gimpo"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                김포시출장마사지
                              </Link>
                              <Link
                                href="/namyangju"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                남양주시출장마사지
                              </Link>
                              <Link
                                href="/dongducheon"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                동두천시출장마사지
                              </Link>
                              <Link
                                href="/bucheon"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                부천시출장마사지
                              </Link>
                              <Link
                                href="/seongnam"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                성남시출장마사지
                              </Link>
                              <Link
                                href="/suwon"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                수원시출장마사지
                              </Link>
                              <Link
                                href="/siheung"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                시흥시출장마사지
                              </Link>
                              <Link
                                href="/ansan"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                안산시출장마사지
                              </Link>
                              <Link
                                href="/anseong"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                안성시출장마사지
                              </Link>
                              <Link
                                href="/anyang"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                안양시출장마사지
                              </Link>
                              <Link
                                href="/yangju"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                양주시출장마사지
                              </Link>
                              <Link
                                href="/yangpyeong"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                양평군출장마사지
                              </Link>
                              <Link
                                href="/yeoju"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                여주시출장마사지
                              </Link>
                              <Link
                                href="/yeoncheon"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                연천군출장마사지
                              </Link>
                              <Link
                                href="/osan"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                오산시출장마사지
                              </Link>
                              <Link
                                href="/yongin"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                용인시출장마사지
                              </Link>
                              <Link
                                href="/uiwang"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                의왕시출장마사지
                              </Link>
                              <Link
                                href="/uijeongbu"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                의정부시출장마사지
                              </Link>
                              <Link
                                href="/icheon"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                이천시출장마사지
                              </Link>
                              <Link
                                href="/paju"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                파주시출장마사지
                              </Link>
                              <Link
                                href="/pyeongtaek"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                평택시출장마사지
                              </Link>
                              <Link
                                href="/pocheon"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                포천시출장마사지
                              </Link>
                              <Link
                                href="/hanam"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                하남시출장마사지
                              </Link>
                              <Link
                                href="/hwaseong"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                화성시출장마사지
                              </Link>
                            </>
                          )}

                          {/* Incheon Districts */}
                          {activeRegion === "incheon" && (
                            <>
                              <Link
                                href="/gyeyang"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                계양구출장마사지
                              </Link>
                              <Link
                                href="/namdong"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                남동구출장마사지
                              </Link>
                              <Link
                                href="/dong-gu"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                동구출장마사지
                              </Link>
                              <Link
                                href="/michuhol"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                미추홀구출장마사지
                              </Link>
                              <Link
                                href="/bupyeong"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                부평구출장마사지
                              </Link>
                              <Link
                                href="/seo-gu"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                서구출장마사지
                              </Link>
                              <Link
                                href="/yeonsu"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                연수구출장마사지
                              </Link>
                              <Link
                                href="/jung-gu"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                중구출장마사지
                              </Link>
                              <Link
                                href="/ganghwa"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                강화군출장마사지
                              </Link>
                              <Link
                                href="/ongjin"
                                className="p-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded transition-colors"
                                onClick={() => setShowRegionalDropdown(false)}
                              >
                                옹진군출장마사지
                              </Link>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <Link href="/blog" className="hover:text-violet-600 transition-colors text-gray-700">
                  블로그
                </Link>
                <a href="tel:010-2871-2457" className="text-gray-600 hover:text-violet-600 transition-colors">
                  문의
                </a>
              </nav>

              <div className="md:hidden">
                <button
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                  className="text-gray-600 hover:text-violet-600 transition-colors p-2"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>

              {/* Quick Contact - Desktop only */}
              <div className="hidden md:flex items-center space-x-3"></div>
            </div>

            {showMobileMenu && (
              <div className="md:hidden bg-white border-t border-violet-100 py-4">
                <div className="space-y-3">
                  <a
                    href="#home"
                    className="block px-4 py-2 text-gray-700 hover:text-violet-600 hover:bg-violet-50 transition-colors"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    홈
                  </a>
                  <button
                    onClick={() => {
                      setShowPriceTable(true)
                      setShowMobileMenu(false)
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:text-violet-600 hover:bg-violet-50 transition-colors"
                  >
                    코스표
                  </button>
                  <div>
                    <button
                      onClick={() => setShowMobileRegionalDropdown(!showMobileRegionalDropdown)}
                      className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:text-violet-600 hover:bg-violet-50 transition-colors"
                    >
                      지역별
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Mobile Regional Dropdown */}
                    {showMobileRegionalDropdown && (
                      <div className="bg-violet-50 px-4 py-2">
                        <div className="flex mb-3 bg-white rounded-lg p-1">
                          <button
                            onClick={() => setActiveMobileRegion("seoul")}
                            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                              activeMobileRegion === "seoul"
                                ? "bg-violet-600 text-white"
                                : "text-gray-600 hover:text-violet-600"
                            }`}
                          >
                            서울
                          </button>
                          <button
                            onClick={() => setActiveMobileRegion("gyeonggi")}
                            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                              activeMobileRegion === "gyeonggi"
                                ? "bg-violet-500 text-white"
                                : "text-gray-600 hover:text-violet-600"
                            }`}
                          >
                            경기
                          </button>
                          <button
                            onClick={() => setActiveMobileRegion("incheon")}
                            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                              activeMobileRegion === "incheon"
                                ? "bg-violet-400 text-white"
                                : "text-gray-600 hover:text-violet-600"
                            }`}
                          >
                            인천
                          </button>
                        </div>

                        <div className="grid grid-cols-1 gap-1 text-sm max-h-48 overflow-y-auto">
                          {/* Seoul Districts - Mobile */}
                          {activeMobileRegion === "seoul" && (
                            <>
                              <Link
                                href="/gangnam"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                강남구출장마사지
                              </Link>
                              <Link
                                href="/gangdong"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                강동구출장마사지
                              </Link>
                              <Link
                                href="/gangbuk"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                강북구출장마사지
                              </Link>
                              <Link
                                href="/gangseo"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                강서구출장마사지
                              </Link>
                              <Link
                                href="/gwanak"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                관악구출장마사지
                              </Link>
                              <Link
                                href="/gwangjin"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                광진구출장마사지
                              </Link>
                              <Link
                                href="/guro"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                구로구출장마사지
                              </Link>
                              <Link
                                href="/geumcheon"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                금천구출장마사지
                              </Link>
                              <Link
                                href="/nowon"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                노원구출장마사지
                              </Link>
                              <Link
                                href="/dobong"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                도봉구출장마사지
                              </Link>
                              <Link
                                href="/dongdaemun"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                동대문구출장마사지
                              </Link>
                              <Link
                                href="/dongjak"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                동작구출장마사지
                              </Link>
                              <Link
                                href="/mapo"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                마포구출장마사지
                              </Link>
                              <Link
                                href="/seodaemun"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                서대문구출장마사지
                              </Link>
                              <Link
                                href="/seocho"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                서초구출장마사지
                              </Link>
                              <Link
                                href="/seongdong"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                성동구출장마사지
                              </Link>
                              <Link
                                href="/seongbuk"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                성북구출장마사지
                              </Link>
                              <Link
                                href="/songpa"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                송파구출장마사지
                              </Link>
                              <Link
                                href="/yangcheon"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                양천구출장마사지
                              </Link>
                              <Link
                                href="/yeongdeungpo"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                영등포구출장마사지
                              </Link>
                              <Link
                                href="/yongsan"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                용산구출장마사지
                              </Link>
                              <Link
                                href="/eunpyeong"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                은평구출장마사지
                              </Link>
                              <Link
                                href="/jongno"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                종로구출장마사지
                              </Link>
                              <Link
                                href="/jung"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                중구출장마사지
                              </Link>
                              <Link
                                href="/jungnang"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                중랑구출장마사지
                              </Link>
                            </>
                          )}

                          {/* Gyeonggi Districts - Mobile */}
                          {activeMobileRegion === "gyeonggi" && (
                            <>
                              <Link
                                href="/gapyeong"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                가평군출장마사지
                              </Link>
                              <Link
                                href="/goyang"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                고양시출장마사지
                              </Link>
                              <Link
                                href="/gwacheon"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                과천시출장마사지
                              </Link>
                              <Link
                                href="/gwangmyeong"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                광명시출장마사지
                              </Link>
                              <Link
                                href="/gwangju"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                광주시출장마사지
                              </Link>
                              <Link
                                href="/guri"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                구리시출장마사지
                              </Link>
                              <Link
                                href="/gunpo"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                군포시출장마사지
                              </Link>
                              <Link
                                href="/gimpo"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                김포시출장마사지
                              </Link>
                              <Link
                                href="/namyangju"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                남양주시출장마사지
                              </Link>
                              <Link
                                href="/dongducheon"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                동두천시출장마사지
                              </Link>
                              <Link
                                href="/bucheon"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                부천시출장마사지
                              </Link>
                              <Link
                                href="/seongnam"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                성남시출장마사지
                              </Link>
                              <Link
                                href="/suwon"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                수원시출장마사지
                              </Link>
                              <Link
                                href="/siheung"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                시흥시출장마사지
                              </Link>
                              <Link
                                href="/ansan"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                안산시출장마사지
                              </Link>
                              <Link
                                href="/anseong"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                안성시출장마사지
                              </Link>
                              <Link
                                href="/anyang"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                안양시출장마사지
                              </Link>
                              <Link
                                href="/yangju"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                양주시출장마사지
                              </Link>
                              <Link
                                href="/yangpyeong"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                양평군출장마사지
                              </Link>
                              <Link
                                href="/yeoju"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                여주시출장마사지
                              </Link>
                              <Link
                                href="/yeoncheon"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                연천군출장마사지
                              </Link>
                              <Link
                                href="/osan"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                오산시출장마사지
                              </Link>
                              <Link
                                href="/yongin"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                용인시출장마사지
                              </Link>
                              <Link
                                href="/uiwang"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                의왕시출장마사지
                              </Link>
                              <Link
                                href="/uijeongbu"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                의정부시출장마사지
                              </Link>
                              <Link
                                href="/icheon"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                이천시출장마사지
                              </Link>
                              <Link
                                href="/paju"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                파주시출장마사지
                              </Link>
                              <Link
                                href="/pyeongtaek"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                평택시출장마사지
                              </Link>
                              <Link
                                href="/pocheon"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                포천시출장마사지
                              </Link>
                              <Link
                                href="/hanam"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                하남시출장마사지
                              </Link>
                              <Link
                                href="/hwaseong"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                화성시출장마사지
                              </Link>
                            </>
                          )}

                          {/* Incheon Districts - Mobile */}
                          {activeMobileRegion === "incheon" && (
                            <>
                              <Link
                                href="/gyeyang"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                계양구출장마사지
                              </Link>
                              <Link
                                href="/namdong"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                남동구출장마사지
                              </Link>
                              <Link
                                href="/dong-gu"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                동구출장마사지
                              </Link>
                              <Link
                                href="/michuhol"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                미추홀구출장마사지
                              </Link>
                              <Link
                                href="/bupyeong"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                부평구출장마사지
                              </Link>
                              <Link
                                href="/seo-gu"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                서구출장마사지
                              </Link>
                              <Link
                                href="/yeonsu"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                연수구출장마사지
                              </Link>
                              <Link
                                href="/jung-gu"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                중구출장마사지
                              </Link>
                              <Link
                                href="/ganghwa"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                강화군출장마사지
                              </Link>
                              <Link
                                href="/ongjin"
                                className="p-2 text-gray-700 hover:bg-white hover:text-violet-600 rounded transition-colors"
                                onClick={() => {
                                  setShowMobileMenu(false)
                                  setShowMobileRegionalDropdown(false)
                                }}
                              >
                                옹진군출장마사지
                              </Link>
                            </>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                  <Link
                    href="/blog"
                    className="block px-4 py-2 text-gray-700 hover:text-violet-600 hover:bg-violet-50 transition-colors"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    블로그
                  </Link>
                  <a
                    href="tel:010-2871-2457"
                    className="block px-4 py-2 text-gray-700 hover:text-violet-600 hover:bg-violet-50 transition-colors"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    문의
                  </a>
                </div>
              </div>
            )}
          </div>
        </header>

        {showRegionalDropdown && (
          <div className="fixed inset-0 z-40" onClick={() => setShowRegionalDropdown(false)}></div>
        )}

        {/* Price Table Modal */}
        {showPriceTable && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-slate-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center p-6 border-b border-slate-700">
                <h2 className="text-2xl font-bold text-white">마사지 코스 & 요금표</h2>
                <button onClick={() => setShowPriceTable(false)} className="text-slate-400 hover:text-white">
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="p-6 space-y-8">
                {/* Thai Massage */}
                <div>
                  <h3 className="text-xl font-semibold text-emerald-400 mb-4">타이 마사지</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Card className="bg-slate-700 border-slate-600">
                      <CardContent className="p-4 text-center">
                        <div className="text-lg font-semibold text-white">60분</div>
                        <div className="text-2xl font-bold text-emerald-400">80,000원</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-slate-700 border-slate-600">
                      <CardContent className="p-4 text-center">
                        <div className="text-lg font-semibold text-white">90분</div>
                        <div className="text-2xl font-bold text-emerald-400">100,000원</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-slate-700 border-slate-600">
                      <CardContent className="p-4 text-center">
                        <div className="text-lg font-semibold text-white">120분</div>
                        <div className="text-2xl font-bold text-emerald-400">120,000원</div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Healing Swedish */}
                <div>
                  <h3 className="text-xl font-semibold text-emerald-400 mb-4">힐링스웨디시</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Card className="bg-slate-700 border-slate-600">
                      <CardContent className="p-4 text-center">
                        <div className="text-lg font-semibold text-white">60분</div>
                        <div className="text-2xl font-bold text-emerald-400">90,000원</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-slate-700 border-slate-600">
                      <CardContent className="p-4 text-center">
                        <div className="text-lg font-semibold text-white">90분</div>
                        <div className="text-2xl font-bold text-emerald-400">110,000원</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-slate-700 border-slate-600">
                      <CardContent className="p-4 text-center">
                        <div className="text-lg font-semibold text-white">120분</div>
                        <div className="text-2xl font-bold text-emerald-400">130,000원</div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* VIP Package */}
                <div>
                  <h3 className="text-xl font-semibold text-yellow-400 mb-2">VIP (타이 + 힐링 + 풋)</h3>
                  <Badge className="mb-4 bg-yellow-900 text-yellow-300">프리미엄 패키지</Badge>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Card className="bg-gradient-to-br from-yellow-900 to-yellow-800 border-yellow-600">
                      <CardContent className="p-4 text-center">
                        <div className="text-lg font-semibold text-white">60분</div>
                        <div className="text-2xl font-bold text-yellow-400">100,000원</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-br from-yellow-900 to-yellow-800 border-yellow-600">
                      <CardContent className="p-4 text-center">
                        <div className="text-lg font-semibold text-white">90분</div>
                        <div className="text-2xl font-bold text-yellow-400">130,000원</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-br from-yellow-900 to-yellow-800 border-yellow-600">
                      <CardContent className="p-4 text-center">
                        <div className="text-lg font-semibold text-white">120분</div>
                        <div className="text-2xl font-bold text-yellow-400">160,000원</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-br from-yellow-900 to-yellow-800 border-yellow-600">
                      <CardContent className="p-4 text-center">
                        <div className="text-lg font-semibold text-white">150분</div>
                        <div className="text-2xl font-bold text-yellow-400">200,000원</div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Contact Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-700">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white flex-1" asChild>
                    <a href="tel:010-2871-2457">
                      <Phone className="h-5 w-5 mr-2" />
                      전화상담
                    </a>
                  </Button>
                  <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 flex-1" asChild>
                    <a href="https://open.kakao.com/o/s0ca9mMh" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      카톡상담
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Reservation Guide Section */}
        <section className="bg-gradient-to-r from-violet-600 to-violet-700 py-8 border-b border-violet-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-4">출장안마 예약문의 가이드</h2>
              <p className="text-violet-100 text-lg mb-6">365일 24시간 문의 & 예약 가능합니다</p>

              <div className="bg-white rounded-lg p-6 mb-6 text-left max-w-4xl mx-auto shadow-xl">
                <p className="mb-4 leading-relaxed text-center leading-7 font-bold text-lg text-violet-600 min-h-[3.5rem]">
                  {typewriterText}
                  {typewriterText.length < fullText.length && <span className="animate-pulse">|</span>}
                </p>
                <div className="bg-violet-50 rounded-lg p-4 mb-4 border border-violet-200">
                  <p className="text-violet-700 font-semibold text-center">
                    (선입금, 예약금, 보증금 일절 요구하지 않습니다. 예약시 참고바랍니다.)
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-violet-600 hover:bg-violet-50 px-8 py-3 text-lg font-semibold shadow-lg"
                  asChild
                >
                  <a href="tel:010-2871-2457">
                    <Phone className="h-5 w-5 mr-2" />
                    전화상담
                  </a>
                </Button>
                <Button
                  size="lg"
                  className="bg-yellow-400 text-gray-800 hover:bg-yellow-300 px-8 py-3 text-lg font-semibold shadow-lg"
                  asChild
                >
                  <a href="https://open.kakao.com/o/s0ca9mMh" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    카카오톡 상담
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Banner */}
        <section id="home" className="relative bg-gradient-to-br from-violet-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-violet-100 text-violet-600 hover:bg-violet-200">24시간 운영</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                  전 지역 30분 내 방문
                  <span className="text-violet-600 block">프리미엄 마사지</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  숙련된 전문 테라피스트가 직접 방문하여
                  <br />
                  최고의 힐링 서비스를 제공합니다
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8"></div>
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4 text-violet-600" />
                    카드 결제 가능
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-violet-600" />
                    위생 인증
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-lg p-6 shadow-2xl">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">마사지 코스 & 요금표</h3>

                  {/* Thai Massage */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-violet-600 mb-3">타이 마사지</h4>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div className="bg-violet-50 rounded p-3 text-center">
                        <div className="text-gray-700 font-semibold">60분</div>
                        <div className="text-violet-600 font-bold">80,000원</div>
                      </div>
                      <div className="bg-violet-50 rounded p-3 text-center">
                        <div className="text-gray-700 font-semibold">90분</div>
                        <div className="text-violet-600 font-bold">100,000원</div>
                      </div>
                      <div className="bg-violet-50 rounded p-3 text-center">
                        <div className="text-gray-700 font-semibold">120분</div>
                        <div className="text-violet-600 font-bold">120,000원</div>
                      </div>
                    </div>
                  </div>

                  {/* Healing Swedish */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-violet-600 mb-3">힐링스웨디시</h4>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div className="bg-violet-50 rounded p-3 text-center">
                        <div className="text-gray-700 font-semibold">60분</div>
                        <div className="text-violet-600 font-bold">90,000원</div>
                      </div>
                      <div className="bg-violet-50 rounded p-3 text-center">
                        <div className="text-gray-700 font-semibold">90분</div>
                        <div className="text-violet-600 font-bold">110,000원</div>
                      </div>
                      <div className="bg-violet-50 rounded p-3 text-center">
                        <div className="text-gray-700 font-semibold">120분</div>
                        <div className="text-violet-600 font-bold">130,000원</div>
                      </div>
                    </div>
                  </div>

                  {/* VIP Package */}
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-yellow-400 mb-2">VIP (타이 + 힐링 + 풋)</h4>
                    <Badge className="mb-3 bg-yellow-100 text-yellow-700 text-xs">프리미엄 패키지</Badge>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="bg-yellow-50 rounded p-3 text-center">
                        <div className="text-gray-700 font-semibold">60분</div>
                        <div className="text-yellow-400 font-bold">100,000원</div>
                      </div>
                      <div className="bg-yellow-50 rounded p-3 text-center">
                        <div className="text-gray-700 font-semibold">90분</div>
                        <div className="text-yellow-400 font-bold">130,000원</div>
                      </div>
                      <div className="bg-yellow-50 rounded p-3 text-center">
                        <div className="text-gray-700 font-semibold">120분</div>
                        <div className="text-yellow-400 font-bold">160,000원</div>
                      </div>
                      <div className="bg-yellow-50 rounded p-3 text-center">
                        <div className="text-gray-700 font-semibold">150분</div>
                        <div className="text-yellow-400 font-bold">200,000원</div>
                      </div>
                    </div>
                  </div>

                  <Button
                    size="sm"
                    className="w-full bg-violet-600 hover:bg-violet-700 text-white mt-4"
                    onClick={() => setShowPriceTable(true)}
                  >
                    상세 요금표 보기
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-violet-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                왜 총알출장마사지를 선택해야 할까요?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                고객의 편안함과 만족을 위해 최선을 다하는 프리미엄 홈케어 서비스
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-violet-600 mb-4">총알출장마사지</h3>
                <p className="text-gray-600 mb-6">
                  전문적이고 안전한 홈케어 마사지 서비스로
                  <br />
                  고객님의 건강과 힐링을 책임집니다.
                </p>
                <div className="space-y-2 text-gray-600">
                  <p>24시간 상담: 전화상담</p>
                </div>
              </div>

              <div>
                <h4 className="text-lg mb-4 font-semibold text-gray-800">빠른 링크</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <a href="#services" className="hover:text-violet-600 transition-colors">
                      서비스 안내
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4 text-gray-800">고객센터</h4>
                <div className="space-y-4"></div>
              </div>
            </div>

            <div className="border-t border-violet-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">© 2024 총알출장마사지. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-500 hover:text-violet-600 text-sm transition-colors">
                  이용약관
                </a>
                <a href="#" className="text-gray-500 hover:text-violet-600 text-sm transition-colors">
                  개인정보 처리방침
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="py-20 bg-gradient-to-br from-violet-50 to-purple-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-violet-900 mb-4">고객 후기</h2>
              <p className="text-xl text-violet-700">실제 고객들의 생생한 후기를 확인해보세요</p>
            </div>

            <div className="relative">
              <div className="flex animate-scroll space-x-8">
                {/* First set of reviews */}
                <Card className="p-6 bg-white border-violet-200 shadow-lg min-w-[350px] flex-shrink-0">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <Image
                        src="/happy-korean-customer.png"
                        alt="만족한 고객"
                        width={48}
                        height={48}
                        className="rounded-full mr-4"
                        loading="lazy"
                        quality={85}
                      />
                      <div>
                        <h4 className="font-semibold text-violet-900">김○○님</h4>
                        <div className="flex text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-violet-700">
                      "정말 전문적이고 친절하셨어요. 집에서 편안하게 받을 수 있어서 너무 좋았습니다. 다음에도 꼭
                      이용할게요!"
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-6 bg-white border-violet-200 shadow-lg min-w-[350px] flex-shrink-0">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <Image
                        src="/satisfied-korean-customer.png"
                        alt="만족한 고객"
                        width={48}
                        height={48}
                        className="rounded-full mr-4"
                        loading="lazy"
                        quality={85}
                      />
                      <div>
                        <h4 className="font-semibold text-violet-900">박○○님</h4>
                        <div className="flex text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-violet-700">
                      "스트레스가 많이 쌓여있었는데 한 번에 다 풀렸어요. 테라피스트분이 정말 실력이 좋으시네요!"
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-6 bg-white border-violet-200 shadow-lg min-w-[350px] flex-shrink-0">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <Image
                        src="/korean-therapist-smiling.png"
                        alt="만족한 고객"
                        width={48}
                        height={48}
                        className="rounded-full mr-4"
                        loading="lazy"
                        quality={85}
                      />
                      <div>
                        <h4 className="font-semibold text-violet-900">이○○님</h4>
                        <div className="flex text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-violet-700">
                      "시간 약속도 정확하고 서비스도 정말 만족스러웠습니다. 다음에 또 예약할게요!"
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-6 bg-white border-violet-200 shadow-lg min-w-[350px] flex-shrink-0">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <Image
                        src="/satisfied-korean-customer.png"
                        alt="만족한 고객"
                        width={48}
                        height={48}
                        className="rounded-full mr-4"
                        loading="lazy"
                        quality={85}
                      />
                      <div>
                        <h4 className="font-semibold text-violet-900">최○○님</h4>
                        <div className="flex text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-violet-700">
                      "처음 이용해봤는데 정말 만족해요. 테라피스트분이 너무 전문적이시고 친절하셨습니다."
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-6 bg-white border-violet-200 shadow-lg min-w-[350px] flex-shrink-0">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <Image
                        src="/happy-korean-customer.png"
                        alt="만족한 고객"
                        className="w-12 h-12 rounded-full mr-4"
                        width={48}
                        height={48}
                        loading="lazy"
                        quality={85}
                      />
                      <div>
                        <h4 className="font-semibold text-violet-900">정○○님</h4>
                        <div className="flex text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-violet-700">
                      "24시간 서비스라서 야근 후에도 이용할 수 있어서 좋아요. 스트레스가 완전히 해소됐습니다!"
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-6 bg-white border-violet-200 shadow-lg min-w-[350px] flex-shrink-0">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <Image
                        src="/satisfied-korean-customer.png"
                        alt="만족한 고객"
                        width={48}
                        height={48}
                        className="rounded-full mr-4"
                        loading="lazy"
                        quality={85}
                      />
                      <div>
                        <h4 className="font-semibold text-violet-900">한○○님</h4>
                        <div className="flex text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-violet-700">
                      "힐링스웨디시 받았는데 정말 시원하고 개운해요. 가격도 합리적이고 서비스도 최고입니다!"
                    </p>
                  </CardContent>
                </Card>

                {/* Duplicate set for seamless loop */}
                <Card className="p-6 bg-white border-violet-200 shadow-lg min-w-[350px] flex-shrink-0">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <Image
                        src="/happy-korean-customer.png"
                        alt="만족한 고객"
                        className="w-12 h-12 rounded-full mr-4"
                        width={48}
                        height={48}
                        loading="lazy"
                        quality={85}
                      />
                      <div>
                        <h4 className="font-semibold text-violet-900">김○○님</h4>
                        <div className="flex text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-violet-700">
                      "정말 전문적이고 친절하셨어요. 집에서 편안하게 받을 수 있어서 너무 좋았습니다. 다음에도 꼭
                      이용할게요!"
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-6 bg-white border-violet-200 shadow-lg min-w-[350px] flex-shrink-0">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <Image
                        src="/satisfied-korean-customer.png"
                        alt="만족한 고객"
                        width={48}
                        height={48}
                        className="rounded-full mr-4"
                        loading="lazy"
                        quality={85}
                      />
                      <div>
                        <h4 className="font-semibold text-violet-900">박○○님</h4>
                        <div className="flex text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-violet-700">
                      "스트레스가 많이 쌓여있었는데 한 번에 다 풀렸어요. 테라피스트분이 정말 실력이 좋으시네요!"
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-6 bg-white border-violet-200 shadow-lg min-w-[350px] flex-shrink-0">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <Image
                        src="/korean-therapist-smiling.png"
                        alt="만족한 고객"
                        width={48}
                        height={48}
                        className="rounded-full mr-4"
                        loading="lazy"
                        quality={85}
                      />
                      <div>
                        <h4 className="font-semibold text-violet-900">이○○님</h4>
                        <div className="flex text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-violet-700">
                      "시간 약속도 정확하고 서비스도 정말 만족스러웠습니다. 다음에 또 예약할게요!"
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* All Regional Links Section */}
        <section id="regions" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">전 지역 출장마사지 서비스</h2>
              <p className="text-lg text-gray-600">서울, 경기, 인천 전 지역 24시간 출장마사지 서비스를 제공합니다</p>
            </div>

            {/* Seoul Region */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">서울 출장마사지</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                <Link
                  href="/gangnam"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">강남구 출장마사지</span>
                </Link>
                <Link
                  href="/gangdong"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">강동구 출장마사지</span>
                </Link>
                <Link
                  href="/gangbuk"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">강북구 출장마사지</span>
                </Link>
                <Link
                  href="/gangseo"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">강서구 출장마사지</span>
                </Link>
                <Link
                  href="/gwanak"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">관악구 출장마사지</span>
                </Link>
                <Link
                  href="/gwangjin"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">광진구 출장마사지</span>
                </Link>
                <Link
                  href="/guro"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">구로구 출장마사지</span>
                </Link>
                <Link
                  href="/geumcheon"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">금천구 출장마사지</span>
                </Link>
                <Link
                  href="/nowon"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">노원구 출장마사지</span>
                </Link>
                <Link
                  href="/dobong"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">도봉구 출장마사지</span>
                </Link>
                <Link
                  href="/dongdaemun"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">동대문구 출장마사지</span>
                </Link>
                <Link
                  href="/dongjak"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">동작구 출장마사지</span>
                </Link>
                <Link
                  href="/mapo"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">마포구 출장마사지</span>
                </Link>
                <Link
                  href="/seodaemun"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">서대문구 출장마사지</span>
                </Link>
                <Link
                  href="/seocho"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">서초구 출장마사지</span>
                </Link>
                <Link
                  href="/seongdong"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">성동구 출장마사지</span>
                </Link>
                <Link
                  href="/seongbuk"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">성북구 출장마사지</span>
                </Link>
                <Link
                  href="/songpa"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">송파구 출장마사지</span>
                </Link>
                <Link
                  href="/yangcheon"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">양천구 출장마사지</span>
                </Link>
                <Link
                  href="/yeongdeungpo"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">영등포구 출장마사지</span>
                </Link>
                <Link
                  href="/yongsan"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">용산구 출장마사지</span>
                </Link>
                <Link
                  href="/eunpyeong"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">은평구 출장마사지</span>
                </Link>
                <Link
                  href="/jongno"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">종로구 출장마사지</span>
                </Link>
                <Link
                  href="/jung"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">중구 출장마사지</span>
                </Link>
                <Link
                  href="/jungnang"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">중랑구 출장마사지</span>
                </Link>
              </div>
            </div>

            {/* Gyeonggi Region */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">경기 출장마사지</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                <Link
                  href="/gapyeong"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">가평군 출장마사지</span>
                </Link>
                <Link
                  href="/goyang"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">고양시 출장마사지</span>
                </Link>
                <Link
                  href="/gwacheon"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">과천시 출장마사지</span>
                </Link>
                <Link
                  href="/gwangmyeong"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">광명시 출장마사지</span>
                </Link>
                <Link
                  href="/gwangju"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">광주시 출장마사지</span>
                </Link>
                <Link
                  href="/guri"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">구리시 출장마사지</span>
                </Link>
                <Link
                  href="/gunpo"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">군포시 출장마사지</span>
                </Link>
                <Link
                  href="/gimpo"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">김포시 출장마사지</span>
                </Link>
                <Link
                  href="/namyangju"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">남양주시 출장마사지</span>
                </Link>
                <Link
                  href="/dongducheon"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">동두천시 출장마사지</span>
                </Link>
                <Link
                  href="/bucheon"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">부천시 출장마사지</span>
                </Link>
                <Link
                  href="/seongnam"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">성남시 출장마사지</span>
                </Link>
                <Link
                  href="/suwon"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">수원시 출장마사지</span>
                </Link>
                <Link
                  href="/siheung"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">시흥시 출장마사지</span>
                </Link>
                <Link
                  href="/ansan"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">안산시 출장마사지</span>
                </Link>
                <Link
                  href="/anseong"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">안성시 출장마사지</span>
                </Link>
                <Link
                  href="/anyang"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">안양시 출장마사지</span>
                </Link>
                <Link
                  href="/yangju"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">양주시 출장마사지</span>
                </Link>
                <Link
                  href="/yangpyeong"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">양평군 출장마사지</span>
                </Link>
                <Link
                  href="/yeoju"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">여주시 출장마사지</span>
                </Link>
                <Link
                  href="/yeoncheon"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">연천군 출장마사지</span>
                </Link>
                <Link
                  href="/osan"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">오산시 출장마사지</span>
                </Link>
                <Link
                  href="/yongin"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">용인시 출장마사지</span>
                </Link>
                <Link
                  href="/uiwang"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">의왕시 출장마사지</span>
                </Link>
                <Link
                  href="/uijeongbu"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">의정부시 출장마사지</span>
                </Link>
                <Link
                  href="/icheon"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">이천시 출장마사지</span>
                </Link>
                <Link
                  href="/paju"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">파주시 출장마사지</span>
                </Link>
                <Link
                  href="/pyeongtaek"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">평택시 출장마사지</span>
                </Link>
                <Link
                  href="/pocheon"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">포천시 출장마사지</span>
                </Link>
                <Link
                  href="/hanam"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">하남시 출장마사지</span>
                </Link>
                <Link
                  href="/hwaseong"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">화성시 출장마사지</span>
                </Link>
              </div>
            </div>

            {/* Incheon Region */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">인천 출장마사지</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                <Link
                  href="/gyeyang"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">계양구 출장마사지</span>
                </Link>
                <Link
                  href="/namdong"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">남동구 출장마사지</span>
                </Link>
                <Link
                  href="/dong-gu"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">동구 출장마사지</span>
                </Link>
                <Link
                  href="/michuhol"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">미추홀구 출장마사지</span>
                </Link>
                <Link
                  href="/bupyeong"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">부평구 출장마사지</span>
                </Link>
                <Link
                  href="/seo-gu"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">서구 출장마사지</span>
                </Link>
                <Link
                  href="/yeonsu"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">연수구 출장마사지</span>
                </Link>
                <Link
                  href="/jung-gu"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">중구 출장마사지</span>
                </Link>
                <Link
                  href="/ganghwa"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">강화군 출장마사지</span>
                </Link>
                <Link
                  href="/ongjin"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-violet-50 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-violet-600">옹진군 출장마사지</span>
                </Link>
              </div>
            </div>

            {/* SEO Text */}
            <div className="text-center mt-12 p-6 bg-white rounded-lg shadow-sm">
              <p className="text-sm text-gray-600 leading-relaxed">
                서울, 경기, 인천 전 지역에서 24시간 출장마사지 서비스를 제공합니다. 전문 마사지사가 직접 방문하여 최고의
                힐링 서비스를 제공하며, 모든 지역에서 동일한 품질의 서비스를 받으실 수 있습니다. 예약 문의는 언제든지
                가능하며, 빠른 상담과 예약 확정을 도와드립니다.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="bg-white text-gray-800 py-16 border-t border-violet-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-violet-600 mb-4">총알출장마사지</h3>
                <p className="text-gray-600 mb-6">
                  전문적이고 안전한 홈케어 마사지 서비스로
                  <br />
                  고객님의 건강과 힐링을 책임집니다.
                </p>
                <div className="space-y-2 text-gray-600">
                  <p>24시간 상담: 전화상담</p>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4 text-gray-800">빠른 링크</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <a href="#services" className="hover:text-violet-600 transition-colors">
                      서비스 안내
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4 text-gray-800">고객센터</h4>
                <div className="space-y-4"></div>
              </div>
            </div>

            <div className="border-t border-violet-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">© 2024 총알출장마사지. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-500 hover:text-violet-600 text-sm transition-colors">
                  이용약관
                </a>
                <a href="#" className="text-gray-500 hover:text-violet-600 text-sm transition-colors">
                  개인정보 처리방침
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
