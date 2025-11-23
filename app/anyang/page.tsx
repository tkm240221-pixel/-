"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Phone, MessageCircle, Clock, Shield, Users, Star, X, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AnyangPage() {
  const [showPriceTable, setShowPriceTable] = useState(false)
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  const reservationText =
    "빠른 예약을 위해 전화 또는 문자로 상세주소 / 마사지 코스 말씀해주시면 빠른 예약 도와드리도록 하겠습니다 ^^"

  useEffect(() => {
    if (currentIndex < reservationText.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + reservationText[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 50)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, reservationText])

  return (
    <div className="min-h-screen bg-white">
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
              <Link href="tel:전화상담" className="text-gray-700 hover:text-violet-600 transition-colors">
                문의
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <section className="py-16 bg-gradient-to-br from-violet-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white text-center mb-6">출장안마 예약문의 가이드</h2>
            <div className="bg-white/20 rounded-xl p-6 mb-6">
              <p className="text-white text-lg leading-relaxed min-h-[60px]">
                {currentText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-violet-600 hover:bg-violet-50 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:전화상담">전화상담</a>
              </button>
              <button className="bg-amber-400 text-violet-900 hover:bg-amber-300 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                <MessageCircle className="h-5 w-5 mr-2" />
                <a href="https://open.kakao.com/o/s0ca9mMh" target="_blank" rel="noopener noreferrer">
                  카카오톡 상담
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-violet-100 text-violet-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            안양시 프리미엄 서비스
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            안양시 출장마사지
            <span className="text-violet-600 block">365일 24시간 문의 & 예약 가능합니다</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            안양시 전 지역 30분 내 방문 가능한 프리미엄 출장마사지 서비스
          </p>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-violet-800">마사지 코스 & 요금표</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-violet-100">
              <h3 className="text-xl font-bold mb-6 text-violet-700">타이 마사지</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-violet-50 rounded-lg">
                  <span className="font-medium">60분</span>
                  <span className="font-bold text-violet-600">80,000원</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-violet-50 rounded-lg">
                  <span className="font-medium">90분</span>
                  <span className="font-bold text-violet-600">100,000원</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-violet-50 rounded-lg">
                  <span className="font-medium">120분</span>
                  <span className="font-bold text-violet-600">120,000원</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-violet-100">
              <h3 className="text-xl font-bold mb-6 text-violet-700">힐링스웨디시</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-violet-50 rounded-lg">
                  <span className="font-medium">60분</span>
                  <span className="font-bold text-violet-600">90,000원</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-violet-50 rounded-lg">
                  <span className="font-medium">90분</span>
                  <span className="font-bold text-violet-600">110,000원</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-violet-50 rounded-lg">
                  <span className="font-medium">120분</span>
                  <span className="font-bold text-violet-600">130,000원</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl p-8 shadow-lg text-white">
              <h3 className="text-xl font-bold mb-6">VIP (타이 + 힐링 + 풋)</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white/20 rounded-lg">
                  <span className="font-medium">60분</span>
                  <span className="font-bold">100,000원</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/20 rounded-lg">
                  <span className="font-medium">90분</span>
                  <span className="font-bold">130,000원</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/20 rounded-lg">
                  <span className="font-medium">120분</span>
                  <span className="font-bold">160,000원</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/20 rounded-lg">
                  <span className="font-medium">150분</span>
                  <span className="font-bold">200,000원</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-violet-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">안양시 출장마사지 서비스 특징</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-violet-100">
              <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24시간 운영</h3>
              <p className="text-gray-600">
                안양시 어느 시간이든 연락주시면 30분 내로 방문하여 최고의 마사지 서비스를 제공합니다
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-violet-100">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">안전한 서비스</h3>
              <p className="text-gray-600">
                검증된 전문 마사지사가 직접 방문하여 안전하고 깨끗한 환경에서 마사지를 진행합니다
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-violet-100">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">전문 마사지사</h3>
              <p className="text-gray-600">
                5년 이상 경력의 전문 마사지사들이 고객 맞춤형 마사지로 최상의 힐링을 제공합니다
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">안양시 서비스 지역</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center mb-8">
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
              <Card key={area} className="bg-violet-50 border-violet-200 hover:bg-violet-100 transition-colors">
                <CardContent className="p-4 text-center">
                  <MapPin className="h-5 w-5 text-violet-600 mx-auto mb-2" />
                  <span className="text-gray-900 font-medium">{area}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">안양시 고객 후기</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "만안구 김**님",
                rating: 5,
                comment:
                  "안양시에서 이렇게 좋은 마사지 서비스를 받을 수 있어서 정말 만족합니다. 테라피스트분이 매우 전문적이고 친절하셨어요.",
              },
              {
                name: "동안구 박**님",
                rating: 5,
                comment:
                  "평촌에서 30분 내에 와주셔서 너무 편리했습니다. 마사지 실력도 정말 좋고 다음에도 꼭 이용하겠습니다.",
              },
              {
                name: "범계동 이**님",
                rating: 5,
                comment:
                  "VIP 코스를 받았는데 정말 만족스러웠습니다. 타이마사지와 힐링마사지를 함께 받으니 몸이 정말 가벼워졌어요.",
              },
              {
                name: "평촌동 최**님",
                rating: 5,
                comment: "평촌동에서 야간 시간에 이용했는데도 친절하게 서비스해주셨어요.",
              },
              {
                name: "호계동 정**님",
                rating: 5,
                comment: "호계동까지 빠르게 와주시고 마사지 받고 나니 스트레스가 완전히 풀렸습니다.",
              },
              {
                name: "관양동 한**님",
                rating: 5,
                comment: "관양동에서 이용했는데 찾아오기도 쉽고 서비스도 훌륭했습니다.",
              },
            ].map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-violet-100">
                <div className="flex items-center mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">{review.name}</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-violet-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">안양시 출장마사지 예약</h2>
          <p className="text-violet-100 text-lg mb-8">24시간 언제든지 연락주세요</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-violet-600 hover:bg-violet-50 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
              <Phone className="h-5 w-5 mr-2" />
              <a href="tel:전화상담">전화예약</a>
            </button>
            <button className="bg-amber-400 text-violet-900 hover:bg-amber-300 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
              <MessageCircle className="h-5 w-5 mr-2" />
              <a href="https://open.kakao.com/o/s0ca9mMh" target="_blank" rel="noopener noreferrer">
                카톡예약
              </a>
            </button>
          </div>
        </div>
      </section>

      {showPriceTable && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">안양시 출장마사지 요금표</h2>
              <button onClick={() => setShowPriceTable(false)} className="text-gray-500 hover:text-gray-700">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="border border-violet-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-violet-600 mb-4">타이 마사지</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">60분</span>
                      <span className="text-gray-900 font-bold">80,000원</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">90분</span>
                      <span className="text-gray-900 font-bold">100,000원</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">120분</span>
                      <span className="text-gray-900 font-bold">120,000원</span>
                    </div>
                  </div>
                </div>
                <div className="border border-purple-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-purple-600 mb-4">힐링스웨디시</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">60분</span>
                      <span className="text-gray-900 font-bold">90,000원</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">90분</span>
                      <span className="text-gray-900 font-bold">110,000원</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">120분</span>
                      <span className="text-gray-900 font-bold">130,000원</span>
                    </div>
                  </div>
                </div>
                <div className="border border-amber-200 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-amber-600 mb-4">VIP 패키지</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">60분</span>
                      <span className="text-amber-600 font-bold">100,000원</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">90분</span>
                      <span className="text-amber-600 font-bold">130,000원</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">120분</span>
                      <span className="text-amber-600 font-bold">160,000원</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">150분</span>
                      <span className="text-amber-600 font-bold">200,000원</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-violet-600 text-white hover:bg-violet-700 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <a href="tel:전화상담">전화예약</a>
                </button>
                <button className="bg-amber-400 text-violet-900 hover:bg-amber-300 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  <a href="https://open.kakao.com/o/s0ca9mMh" target="_blank" rel="noopener noreferrer">
                    카톡예약
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
