"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Phone, MessageCircle, Clock, Shield, Users, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"

export default function AnyangPage() {
  const [showPriceTable, setShowPriceTable] = useState(false)
  const [typewriterText, setTypewriterText] = useState("")

  const fullText =
    "빠른 예약을 위해 전화 또는 문자로 상세주소 / 마사지 코스 말씀해주시면 빠른 예약 도와드리도록 하겠습니다 ^^"

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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-violet-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-violet-600">
              총알출장마사지
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-violet-600 transition-colors">
                홈
              </Link>
              <button
                onClick={() => setShowPriceTable(true)}
                className="text-gray-700 hover:text-violet-600 transition-colors"
              >
                코스표
              </button>
              <Link href="/#regions" className="text-gray-700 hover:text-violet-600 transition-colors">
                지역별
              </Link>
              <a href="tel:010-2871-2457" className="text-gray-700 hover:text-violet-600 transition-colors">
                문의
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Reservation Guide Section */}
      <section className="bg-gradient-to-r from-violet-600 to-purple-600 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">출장안마 예약문의 가이드</h2>
          <p className="text-lg mb-4">365일 24시간 문의 & 예약 가능합니다</p>
          <div className="bg-violet-800 bg-opacity-50 rounded-lg p-4 mb-6">
            <p className="text-violet-100 min-h-[60px]">
              {typewriterText}
              {typewriterText.length < fullText.length && <span className="animate-pulse">|</span>}
            </p>
          </div>
          <p className="text-sm text-violet-200 mb-6">
            (선입금, 예약금, 보증금 일절 요구하지 않습니다. 예약시 참고바랍니다.)
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:010-2871-2457"
              className="bg-white text-violet-600 px-6 py-3 rounded-lg font-semibold hover:bg-violet-50 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              전화상담
            </a>
            <a
              href="https://open.kakao.com/o/s0ca9mMh"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              카카오톡 상담
            </a>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">안양시 출장마사지</h1>
            <p className="text-xl text-gray-600 mb-8">안양시 전 지역 30분 내 방문 프리미엄 마사지</p>
            <p className="text-lg text-gray-700 mb-8">
              숙련된 전문 테라피스트가 직접 방문하여
              <br />
              최고의 힐링 서비스를 제공합니다
            </p>
          </div>

          {/* Service Areas */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">안양시 서비스 지역</h2>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  "만안구",
                  "동안구",
                  "안양동",
                  "석수동",
                  "박달동",
                  "관양동",
                  "비산동",
                  "평촌동",
                  "호계동",
                  "범계동",
                  "갈산동",
                  "신촌동",
                  "부림동",
                  "부흥동",
                ].map((area) => (
                  <Card key={area} className="bg-slate-700 border-slate-600 hover:bg-slate-600 transition-colors">
                    <CardContent className="p-4 text-center">
                      <MapPin className="h-5 w-5 text-blue-400 mx-auto mb-2" />
                      <span className="text-white font-medium">{area}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">안양시 출장마사지 요금표</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-slate-800 border-slate-700">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-400 mb-4">타이 마사지</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-slate-300">60분</span>
                        <span className="text-white font-bold">80,000원</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">90분</span>
                        <span className="text-white font-bold">100,000원</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">120분</span>
                        <span className="text-white font-bold">120,000원</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-slate-800 border-slate-700">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-400 mb-4">힐링스웨디시</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-slate-300">60분</span>
                        <span className="text-white font-bold">90,000원</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">90분</span>
                        <span className="text-white font-bold">110,000원</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">120분</span>
                        <span className="text-white font-bold">130,000원</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-yellow-900 to-yellow-800 border-yellow-600">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-yellow-400 mb-4">VIP 패키지</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-slate-300">60분</span>
                        <span className="text-yellow-400 font-bold">100,000원</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">90분</span>
                        <span className="text-yellow-400 font-bold">130,000원</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">120분</span>
                        <span className="text-yellow-400 font-bold">160,000원</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Service Features Section */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">안양시 출장마사지 서비스 특징</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-violet-50 rounded-xl">
                  <Clock className="w-12 h-12 text-violet-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">24시간 운영</h3>
                  <p className="text-gray-600">안양시 전 지역 24시간 언제든지 방문 가능합니다</p>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-xl">
                  <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">안전한 서비스</h3>
                  <p className="text-gray-600">검증된 전문 테라피스트의 안전하고 깨끗한 서비스</p>
                </div>
                <div className="text-center p-6 bg-amber-50 rounded-xl">
                  <Users className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">전문 테라피스트</h3>
                  <p className="text-gray-600">숙련된 경험과 전문 기술을 보유한 테라피스트</p>
                </div>
              </div>
            </div>
          </section>

          {/* Customer Reviews Section */}
          <section className="py-16 bg-gradient-to-br from-violet-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">안양시 고객 후기</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">안양시 만안구</span>
                  </div>
                  <p className="text-gray-700">
                    "안양시에서 이렇게 좋은 마사지 서비스를 받을 수 있어서 정말 만족합니다. 테라피스트분이 매우
                    전문적이고 친절하셨어요."
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">안양시 동안구</span>
                  </div>
                  <p className="text-gray-700">
                    "평촌에서 30분 내에 와주셔서 너무 편리했습니다. 마사지 실력도 정말 좋고 다음에도 꼭 이용하겠습니다."
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">안양시 범계동</span>
                  </div>
                  <p className="text-gray-700">
                    "VIP 코스를 받았는데 정말 만족스러웠습니다. 타이마사지와 힐링마사지를 함께 받으니 몸이 정말
                    가벼워졌어요."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">안양시 출장마사지 예약</h2>
              <p className="text-gray-600 text-lg mb-8">24시간 언제든지 연락주세요</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:010-2871-2457"
                  className="bg-violet-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-violet-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  010-2871-2457
                </a>
                <a
                  href="https://open.kakao.com/o/s0ca9mMh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-400 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  카카오톡 상담
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">총알출장마사지</h3>
              <p className="text-gray-300 mb-4">안양시 전 지역 프리미엄 출장마사지 서비스</p>
              <p className="text-gray-400">24시간 연중무휴 운영</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">서비스 지역</h4>
              <p className="text-gray-300">안양시 전 지역</p>
              <p className="text-gray-400">30분 내 방문 보장</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">연락처</h4>
              <div className="space-y-2">
                <a
                  href="tel:010-2871-2457"
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  전화상담
                </a>
                <a
                  href="https://open.kakao.com/o/s0ca9mMh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  카카오톡 상담
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 총알출장마사지. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
