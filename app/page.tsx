"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle, Shield, CreditCard, Star, X } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function Home() {
  const [showPriceTable, setShowPriceTable] = useState(false)
  const [showRegionalDropdown, setShowRegionalDropdown] = useState(false)
  const [activeRegion, setActiveRegion] = useState("seoul")
  const [typewriterText, setTypewriterText] = useState("")
  const fullText =
    "빠른 예약을 위해 전화 또는 문자로 상세 주소 / 마사지 코스 말씀해주시면 빠른 예약 도와드리도록 하겠습니다 ^^"

  useEffect(() => {
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
  }, [])

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800 shadow-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-emerald-400">총알출장마사지</h1>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8 relative justify-center flex-1 text-left font-normal text-xl text-slate-600">
              <a href="#home" className="hover:text-emerald-400 transition-colors text-white">
                홈
              </a>
              <button
                onClick={() => setShowPriceTable(true)}
                className="hover:text-emerald-400 transition-colors0 text-white"
              >
                코스표
              </button>
              <div className="relative">
                <button
                  onClick={() => setShowRegionalDropdown(!showRegionalDropdown)}
                  className="hover:text-emerald-400 transition-colors flex items-center text-white"
                >
                  지역별
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Regional Dropdown Menu */}
                {showRegionalDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800 border border-slate-700 rounded-lg shadow-xl z-50">
                    <div className="p-4">
                      <div className="flex mb-4 bg-slate-700 rounded-lg p-1">
                        <button
                          onClick={() => setActiveRegion("seoul")}
                          className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                            activeRegion === "seoul" ? "bg-emerald-600 text-white" : "text-slate-300 hover:text-white"
                          }`}
                        >
                          서울
                        </button>
                        <button
                          onClick={() => setActiveRegion("gyeonggi")}
                          className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                            activeRegion === "gyeonggi" ? "bg-blue-600 text-white" : "text-slate-300 hover:text-white"
                          }`}
                        >
                          경기
                        </button>
                        <button
                          onClick={() => setActiveRegion("incheon")}
                          className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                            activeRegion === "incheon" ? "bg-purple-600 text-white" : "text-slate-300 hover:text-white"
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
                              className="text-left p-2 text-slate-300 hover:bg-emerald-900 hover:text-emerald-400 rounded transition-colors block"
                            >
                              강남구출장마사지
                            </Link>
                            <Link
                              href="/gangdong"
                              className="text-left p-2 text-slate-300 hover:bg-emerald-900 hover:text-emerald-400 rounded transition-colors block"
                            >
                              강동구출장마사지
                            </Link>
                            <Link
                              href="/gangbuk"
                              className="text-left p-2 text-slate-300 hover:bg-emerald-900 hover:text-emerald-400 rounded transition-colors block"
                            >
                              강북구출장마사지
                            </Link>
                            <Link
                              href="/gangseo"
                              className="text-left p-2 text-slate-300 hover:bg-emerald-900 hover:text-emerald-400 rounded transition-colors block"
                            >
                              강서구출장마사지
                            </Link>
                            <Link
                              href="/gwanak"
                              className="text-left p-2 text-slate-300 hover:bg-emerald-900 hover:text-emerald-400 rounded transition-colors block"
                            >
                              관악구출장마사지
                            </Link>
                            <Link
                              href="/gwangjin"
                              className="text-left p-2 text-slate-300 hover:bg-emerald-900 hover:text-emerald-400 rounded transition-colors block"
                            >
                              광진구출장마사지
                            </Link>
                            <Link
                              href="/guro"
                              className="text-left p-2 text-slate-300 hover:bg-emerald-900 hover:text-emerald-400 rounded transition-colors block"
                            >
                              구로구출장마사지
                            </Link>
                            <Link
                              href="/geumcheon"
                              className="text-left p-2 text-slate-300 hover:bg-emerald-900 hover:text-emerald-400 rounded transition-colors block"
                            >
                              금천구출장마사지
                            </Link>
                            <Link
                              href="/nowon"
                              className="text-left p-2 text-slate-300 hover:bg-emerald-900 hover:text-emerald-400 rounded transition-colors block"
                            >
                              노원구출장마사지
                            </Link>
                            <Link
                              href="/dobong"
                              className="text-left p-2 text-slate-300 hover:bg-emerald-900 hover:text-emerald-400 rounded transition-colors block"
                            >
                              도봉구출장마사지
                            </Link>
                            <Link
                              href="/dongdaemun"
                              className="text-left p-2 text-slate-300 hover:bg-emerald-900 hover:text-emerald-400 rounded transition-colors block"
                            >
                              동대문구출장마사지
                            </Link>
                            <Link
                              href="/dongjak"
                              className="text-left p-2 text-slate-300 hover:bg-emerald-900 hover:text-emerald-400 rounded transition-colors block"
                            >
                              동작구출장마사지
                            </Link>
                            <Link
                              href="/mapo"
                              className="text-left p-2 text-slate-300 hover:bg-emerald-900 hover:text-emerald-400 rounded transition-colors block"
                            >
                              마포구출장마사지
                            </Link>
                            <Link
                              href="/seodaemun"
                              className="text-left p-2 text-slate-300 hover:bg-emerald-900 hover:text-emerald-400 rounded transition-colors block"
                            >
                              서대문구출장마사지
                            </Link>
                            <Link
                              href="/seocho"
                              className="text-left p-2 text-slate-300 hover:bg-emerald-900 hover:text-emerald-400 rounded transition-colors block"
                            >
                              서초구출장마사지
                            </Link>
                            <Link
                              href="/seongdong"
                              className="text-left p-2 text-slate-300 hover:bg-emerald-900 hover:text-emerald-400 rounded transition-colors block"
                            >
                              성동구출장마사지
                            </Link>
                            <Link
                              href="/seongbuk"
                              className="text-left p-2 text-slate-300 hover:bg-emerald-900 hover:text-emerald-400 rounded transition-colors block"
                            >
                              성북구출장마사지
                            </Link>
                            <Link
                              href="/songpa"
                              className="text-left p-2 text-slate-300 hover:bg-emerald-900 hover:text-emerald-400 rounded transition-colors block"
                            >
                              송파구출장마사지
                            </Link>
                            <Link
                              href="/yangcheon"
                              className="text-left p-2 text-slate-300 hover:bg-emerald-900 hover:text-emerald-400 rounded transition-colors block"
                            >
                              양천구출장마사지
                            </Link>
                            <Link
                              href="/yeongdeungpo"
                              className="text-left p-2 text-slate-300 hover:bg-emerald-900 hover:text-emerald-400 rounded transition-colors block"
                            >
                              영등포구출장마사지
                            </Link>
                            <Link
                              href="/yongsan"
                              className="text-left p-2 text-slate-300 hover:bg-emerald-900 hover:text-emerald-400 rounded transition-colors block"
                            >
                              용산구출장마사지
                            </Link>
                            <Link
                              href="/eunpyeong"
                              className="text-left p-2 text-slate-300 hover:bg-emerald-900 hover:text-emerald-400 rounded transition-colors block"
                            >
                              은평구출장마사지
                            </Link>
                            <Link
                              href="/jongno"
                              className="text-left p-2 text-slate-300 hover:bg-emerald-900 hover:text-emerald-400 rounded transition-colors block"
                            >
                              종로구출장마사지
                            </Link>
                            <Link
                              href="/jung"
                              className="text-left p-2 text-slate-300 hover:bg-emerald-900 hover:text-emerald-400 rounded transition-colors block"
                            >
                              중구출장마사지
                            </Link>
                            <Link
                              href="/jungnang"
                              className="text-left p-2 text-slate-300 hover:bg-emerald-900 hover:text-emerald-400 rounded transition-colors block"
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
                              className="text-left p-2 text-slate-300 hover:bg-blue-900 hover:text-blue-400 rounded transition-colors block"
                            >
                              가평군출장마사지
                            </Link>
                            <Link
                              href="/goyang"
                              className="text-left p-2 text-slate-300 hover:bg-blue-900 hover:text-blue-400 rounded transition-colors block"
                            >
                              고양시출장마사지
                            </Link>
                            <Link
                              href="/gwacheon"
                              className="text-left p-2 text-slate-300 hover:bg-blue-900 hover:text-blue-400 rounded transition-colors block"
                            >
                              과천시출장마사지
                            </Link>
                            <Link
                              href="/gwangmyeong"
                              className="text-left p-2 text-slate-300 hover:bg-blue-900 hover:text-blue-400 rounded transition-colors block"
                            >
                              광명시출장마사지
                            </Link>
                            <Link
                              href="/gwangju"
                              className="text-left p-2 text-slate-300 hover:bg-blue-900 hover:text-blue-400 rounded transition-colors block"
                            >
                              광주시출장마사지
                            </Link>
                            <Link
                              href="/guri"
                              className="text-left p-2 text-slate-300 hover:bg-blue-900 hover:text-blue-400 rounded transition-colors block"
                            >
                              구리시출장마사지
                            </Link>
                            <Link
                              href="/gunpo"
                              className="text-left p-2 text-slate-300 hover:bg-blue-900 hover:text-blue-400 rounded transition-colors block"
                            >
                              군포시출장마사지
                            </Link>
                            <Link
                              href="/gimpo"
                              className="text-left p-2 text-slate-300 hover:bg-blue-900 hover:text-blue-400 rounded transition-colors block"
                            >
                              김포시출장마사지
                            </Link>
                            <Link
                              href="/namyangju"
                              className="text-left p-2 text-slate-300 hover:bg-blue-900 hover:text-blue-400 rounded transition-colors block"
                            >
                              남양주시출장마사지
                            </Link>
                            <Link
                              href="/dongducheon"
                              className="text-left p-2 text-slate-300 hover:bg-blue-900 hover:text-blue-400 rounded transition-colors block"
                            >
                              동두천시출장마사지
                            </Link>
                            <Link
                              href="/bucheon"
                              className="text-left p-2 text-slate-300 hover:bg-blue-900 hover:text-blue-400 rounded transition-colors block"
                            >
                              부천시출장마사지
                            </Link>
                            <Link
                              href="/seongnam"
                              className="text-left p-2 text-slate-300 hover:bg-blue-900 hover:text-blue-400 rounded transition-colors block"
                            >
                              성남시출장마사지
                            </Link>
                            <Link
                              href="/suwon"
                              className="text-left p-2 text-slate-300 hover:bg-blue-900 hover:text-blue-400 rounded transition-colors block"
                            >
                              수원시출장마사지
                            </Link>
                            <Link
                              href="/siheung"
                              className="text-left p-2 text-slate-300 hover:bg-blue-900 hover:text-blue-400 rounded transition-colors block"
                            >
                              시흥시출장마사지
                            </Link>
                            <Link
                              href="/ansan"
                              className="text-left p-2 text-slate-300 hover:bg-blue-900 hover:text-blue-400 rounded transition-colors block"
                            >
                              안산시출장마사지
                            </Link>
                            <Link
                              href="/anseong"
                              className="text-left p-2 text-slate-300 hover:bg-blue-900 hover:text-blue-400 rounded transition-colors block"
                            >
                              안성시출장마사지
                            </Link>
                            <Link
                              href="/anyang"
                              className="text-left p-2 text-slate-300 hover:bg-blue-900 hover:text-blue-400 rounded transition-colors block"
                            >
                              안양시출장마사지
                            </Link>
                            <Link
                              href="/yangju"
                              className="text-left p-2 text-slate-300 hover:bg-blue-900 hover:text-blue-400 rounded transition-colors block"
                            >
                              양주시출장마사지
                            </Link>
                            <Link
                              href="/yangpyeong"
                              className="text-left p-2 text-slate-300 hover:bg-blue-900 hover:text-blue-400 rounded transition-colors block"
                            >
                              양평군출장마사지
                            </Link>
                            <Link
                              href="/yeoju"
                              className="text-left p-2 text-slate-300 hover:bg-blue-900 hover:text-blue-400 rounded transition-colors block"
                            >
                              여주시출장마사지
                            </Link>
                            <Link
                              href="/yeoncheon"
                              className="text-left p-2 text-slate-300 hover:bg-blue-900 hover:text-blue-400 rounded transition-colors block"
                            >
                              연천군출장마사지
                            </Link>
                            <Link
                              href="/osan"
                              className="text-left p-2 text-slate-300 hover:bg-blue-900 hover:text-blue-400 rounded transition-colors block"
                            >
                              오산시출장마사지
                            </Link>
                            <Link
                              href="/yongin"
                              className="text-left p-2 text-slate-300 hover:bg-blue-900 hover:text-blue-400 rounded transition-colors block"
                            >
                              용인시출장마사지
                            </Link>
                            <Link
                              href="/uiwang"
                              className="text-left p-2 text-slate-300 hover:bg-blue-900 hover:text-blue-400 rounded transition-colors block"
                            >
                              의왕시출장마사지
                            </Link>
                            <Link
                              href="/uijeongbu"
                              className="text-left p-2 text-slate-300 hover:bg-blue-900 hover:text-blue-400 rounded transition-colors block"
                            >
                              의정부시출장마사지
                            </Link>
                            <Link
                              href="/icheon"
                              className="text-left p-2 text-slate-300 hover:bg-blue-900 hover:text-blue-400 rounded transition-colors block"
                            >
                              이천시출장마사지
                            </Link>
                            <Link
                              href="/paju"
                              className="text-left p-2 text-slate-300 hover:bg-blue-900 hover:text-blue-400 rounded transition-colors block"
                            >
                              파주시출장마사지
                            </Link>
                            <Link
                              href="/pyeongtaek"
                              className="text-left p-2 text-slate-300 hover:bg-blue-900 hover:text-blue-400 rounded transition-colors block"
                            >
                              평택시출장마사지
                            </Link>
                            <Link
                              href="/pocheon"
                              className="text-left p-2 text-slate-300 hover:bg-blue-900 hover:text-blue-400 rounded transition-colors block"
                            >
                              포천시출장마사지
                            </Link>
                            <Link
                              href="/hanam"
                              className="text-left p-2 text-slate-300 hover:bg-blue-900 hover:text-blue-400 rounded transition-colors block"
                            >
                              하남시출장마사지
                            </Link>
                            <Link
                              href="/hwaseong"
                              className="text-left p-2 text-slate-300 hover:bg-blue-900 hover:text-blue-400 rounded transition-colors block"
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
                              className="text-left p-2 text-slate-300 hover:bg-purple-900 hover:text-purple-400 rounded transition-colors block"
                            >
                              계양구출장마사지
                            </Link>
                            <Link
                              href="/namdong"
                              className="text-left p-2 text-slate-300 hover:bg-purple-900 hover:text-purple-400 rounded transition-colors block"
                            >
                              남동구출장마사지
                            </Link>
                            <Link
                              href="/dong-gu"
                              className="text-left p-2 text-slate-300 hover:bg-purple-900 hover:text-purple-400 rounded transition-colors block"
                            >
                              동구출장마사지
                            </Link>
                            <Link
                              href="/michuhol"
                              className="text-left p-2 text-slate-300 hover:bg-purple-900 hover:text-purple-400 rounded transition-colors block"
                            >
                              미추홀구출장마사지
                            </Link>
                            <Link
                              href="/bupyeong"
                              className="text-left p-2 text-slate-300 hover:bg-purple-900 hover:text-purple-400 rounded transition-colors block"
                            >
                              부평구출장마사지
                            </Link>
                            <Link
                              href="/seo-gu"
                              className="text-left p-2 text-slate-300 hover:bg-purple-900 hover:text-purple-400 rounded transition-colors block"
                            >
                              서구출장마사지
                            </Link>
                            <Link
                              href="/yeonsu"
                              className="text-left p-2 text-slate-300 hover:bg-purple-900 hover:text-purple-400 rounded transition-colors block"
                            >
                              연수구출장마사지
                            </Link>
                            <Link
                              href="/jung-gu"
                              className="text-left p-2 text-slate-300 hover:bg-purple-900 hover:text-purple-400 rounded transition-colors block"
                            >
                              중구출장마사지
                            </Link>
                            <Link
                              href="/ganghwa"
                              className="text-left p-2 text-slate-300 hover:bg-purple-900 hover:text-purple-400 rounded transition-colors block"
                            >
                              강화군출장마사지
                            </Link>
                            <Link
                              href="/ongjin"
                              className="text-left p-2 text-slate-300 hover:bg-purple-900 hover:text-purple-400 rounded transition-colors block"
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
              <a href="tel:010-2871-2457" className="hover:text-emerald-400 transition-colors text-blackr text-white">
                문의
              </a>
            </nav>

            {/* Quick Contact */}
            <div className="flex items-center space-x-3"></div>
          </div>
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
      <section className="bg-emerald-900 py-8 border-b border-emerald-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">출장안마 예약문의 가이드</h2>
            <p className="text-emerald-100 text-lg mb-6">365일 24시간 문의 & 예약 가능합니다</p>

            <div className="bg-slate-800 rounded-lg p-6 mb-6 text-left max-w-4xl mx-auto">
              <p className="mb-4 leading-relaxed text-center leading-7 font-bold text-lg text-red-400 min-h-[3.5rem]">
                {typewriterText}
                {typewriterText.length < fullText.length && <span className="animate-pulse">|</span>}
              </p>
              <div className="bg-emerald-900 rounded-lg p-4 mb-4">
                <p className="text-emerald-100 font-semibold text-center">
                  (선입금, 예약금, 보증금 일절 요구하지 않습니다. 예약시 참고바랍니다.)
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-emerald-900 hover:bg-emerald-50 px-8 py-3 text-lg font-semibold"
                asChild
              >
                <a href="tel:010-2871-2457">
                  <Phone className="h-5 w-5 mr-2" />
                  전화상담
                </a>
              </Button>
              <Button
                size="lg"
                className="bg-yellow-500 text-slate-900 hover:bg-yellow-400 px-8 py-3 text-lg font-semibold"
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
      <section id="home" className="relative bg-gradient-to-br from-slate-800 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-emerald-900 text-emerald-300 hover:bg-emerald-900">24시간 운영</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                전 지역 30분 내 방문
                <span className="text-emerald-400 block">프리미엄 마사지</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                숙련된 전문 테라피스트가 직접 방문하여
                <br />
                최고의 힐링 서비스를 제공합니다
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg font-semibold"
                  asChild
                >
                  <a href="tel:010-2871-2457">
                    <Phone className="h-5 w-5 mr-2" />
                    전화상담
                  </a>
                </Button>
                <Button
                  size="lg"
                  className="bg-yellow-500 text-slate-900 hover:bg-yellow-400 px-8 py-3 text-lg font-semibold"
                  asChild
                >
                  <a href="https://open.kakao.com/o/s0ca9mMh" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    카톡상담
                  </a>
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4 text-emerald-400" />
                  카드 결제 가능
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-emerald-400" />
                  위생 인증
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-slate-800 rounded-lg p-6 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">마사지 코스 & 요금표</h3>

                {/* Thai Massage */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-emerald-400 mb-3">타이 마사지</h4>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="bg-slate-700 rounded p-3 text-center">
                      <div className="text-white font-semibold">60분</div>
                      <div className="text-emerald-400 font-bold">80,000원</div>
                    </div>
                    <div className="bg-slate-700 rounded p-3 text-center">
                      <div className="text-white font-semibold">90분</div>
                      <div className="text-emerald-400 font-bold">100,000원</div>
                    </div>
                    <div className="bg-slate-700 rounded p-3 text-center">
                      <div className="text-white font-semibold">120분</div>
                      <div className="text-emerald-400 font-bold">120,000원</div>
                    </div>
                  </div>
                </div>

                {/* Healing Swedish */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-emerald-400 mb-3">힐링스웨디시</h4>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="bg-slate-700 rounded p-3 text-center">
                      <div className="text-white font-semibold">60분</div>
                      <div className="text-emerald-400 font-bold">90,000원</div>
                    </div>
                    <div className="bg-slate-700 rounded p-3 text-center">
                      <div className="text-white font-semibold">90분</div>
                      <div className="text-emerald-400 font-bold">110,000원</div>
                    </div>
                    <div className="bg-slate-700 rounded p-3 text-center">
                      <div className="text-white font-semibold">120분</div>
                      <div className="text-emerald-400 font-bold">130,000원</div>
                    </div>
                  </div>
                </div>

                {/* VIP Package */}
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-yellow-400 mb-2">VIP (타이 + 힐링 + 풋)</h4>
                  <Badge className="mb-3 bg-yellow-900 text-yellow-300 text-xs">프리미엄 패키지</Badge>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="bg-gradient-to-br from-yellow-900 to-yellow-800 rounded p-3 text-center">
                      <div className="text-white font-semibold">60분</div>
                      <div className="text-yellow-400 font-bold">100,000원</div>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-900 to-yellow-800 rounded p-3 text-center">
                      <div className="text-white font-semibold">90분</div>
                      <div className="text-yellow-400 font-bold">130,000원</div>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-900 to-yellow-800 rounded p-3 text-center">
                      <div className="text-white font-semibold">120분</div>
                      <div className="text-yellow-400 font-bold">160,000원</div>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-900 to-yellow-800 rounded p-3 text-center">
                      <div className="text-white font-semibold">150분</div>
                      <div className="text-yellow-400 font-bold">200,000원</div>
                    </div>
                  </div>
                </div>

                <Button
                  size="sm"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white mt-4"
                  onClick={() => setShowPriceTable(true)}
                >
                  상세 요금표 보기
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Introduction */}
      <section id="services" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">왜 총알출장마사지를 선택해야 할까요?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              고객의 편안함과 만족을 위해 최선을 다하는 프리미엄 홈케어 서비스
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-emerald-400 mb-4">총알출장마사지</h3>
              <p className="text-slate-300 mb-6">
                전문적이고 안전한 홈케어 마사지 서비스로
                <br />
                고객님의 건강과 힐링을 책임집니다.
              </p>
              <div className="space-y-2 text-slate-300">
                <p>24시간 상담: 전화상담</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">빠른 링크</h4>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <a href="#services" className="hover:text-emerald-400 transition-colors">
                    서비스 안내
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">고객센터</h4>
              <div className="space-y-4"></div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">© 2024 총알출장마사지. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
                이용약관
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
                개인정보 처리방침
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">고객 후기</h2>
            <p className="text-xl text-slate-300">실제 고객들의 생생한 후기를 확인해보세요</p>
          </div>

          <div className="relative">
            <div className="flex animate-scroll space-x-8">
              {/* First set of reviews */}
              <Card className="p-6 bg-slate-700 border-slate-600 min-w-[350px] flex-shrink-0">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <img src="/happy-korean-customer.png" alt="Customer" className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <h4 className="font-semibold text-white">김○○님</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-300">
                    "정말 전문적이고 친절하셨어요. 집에서 편안하게 받을 수 있어서 너무 좋았습니다. 다음에도 꼭
                    이용할게요!"
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 bg-slate-700 border-slate-600 min-w-[350px] flex-shrink-0">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <img src="/satisfied-korean-customer.png" alt="Customer" className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <h4 className="font-semibold text-white">박○○님</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-300">
                    "늦은 시간에도 방문해주셔서 감사했어요. 마사지 실력도 정말 좋고 가격도 합리적이에요. 강력
                    추천합니다!"
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 bg-slate-700 border-slate-600 min-w-[350px] flex-shrink-0">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <img src="/happy-korean-customer.png" alt="Customer" className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <h4 className="font-semibold text-white">이○○님</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-300">
                    "VIP 패키지 정말 만족스러웠어요. 피로가 완전히 풀렸고 서비스도 최고였습니다!"
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 bg-slate-700 border-slate-600 min-w-[350px] flex-shrink-0">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <img src="/satisfied-korean-customer.png" alt="Customer" className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <h4 className="font-semibold text-white">최○○님</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-300">
                    "처음 이용해봤는데 정말 만족해요. 테라피스트분이 너무 전문적이시고 친절하셨습니다."
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 bg-slate-700 border-slate-600 min-w-[350px] flex-shrink-0">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <img src="/happy-korean-customer.png" alt="Customer" className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <h4 className="font-semibold text-white">정○○님</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-300">
                    "24시간 서비스라서 야근 후에도 이용할 수 있어서 좋아요. 스트레스가 완전히 해소됐습니다!"
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 bg-slate-700 border-slate-600 min-w-[350px] flex-shrink-0">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <img src="/satisfied-korean-customer.png" alt="Customer" className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <h4 className="font-semibold text-white">한○○님</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-300">
                    "힐링스웨디시 받았는데 정말 시원하고 개운해요. 가격도 합리적이고 서비스도 최고입니다!"
                  </p>
                </CardContent>
              </Card>

              {/* Duplicate set for seamless loop */}
              <Card className="p-6 bg-slate-700 border-slate-600 min-w-[350px] flex-shrink-0">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <img src="/happy-korean-customer.png" alt="Customer" className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <h4 className="font-semibold text-white">김○○님</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-300">
                    "정말 전문적이고 친절하셨어요. 집에서 편안하게 받을 수 있어서 너무 좋았습니다. 다음에도 꼭
                    이용할게요!"
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 bg-slate-700 border-slate-600 min-w-[350px] flex-shrink-0">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <img src="/satisfied-korean-customer.png" alt="Customer" className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <h4 className="font-semibold text-white">박○○님</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-300">
                    "늦은 시간에도 방문해주셔서 감사했어요. 마사지 실력도 정말 좋고 가격도 합리적이에요. 강력
                    추천합니다!"
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 bg-slate-700 border-slate-600 min-w-[350px] flex-shrink-0">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <img src="/happy-korean-customer.png" alt="Customer" className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <h4 className="font-semibold text-white">이○○님</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-300">
                    "VIP 패키지 정말 만족스러웠어요. 피로가 완전히 풀렸고 서비스도 최고였습니다!"
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-emerald-400 mb-4">총알출장마사지</h3>
              <p className="text-slate-300 mb-6">
                전문적이고 안전한 홈케어 마사지 서비스로
                <br />
                고객님의 건강과 힐링을 책임집니다.
              </p>
              <div className="space-y-2 text-slate-300">
                <p>24시간 상담: 전화상담</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">빠른 링크</h4>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <a href="#services" className="hover:text-emerald-400 transition-colors">
                    서비스 안내
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">고객센터</h4>
              <div className="space-y-4"></div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">© 2024 총알출장마사지. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
                이용약관
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
                개인정보 처리방침
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
