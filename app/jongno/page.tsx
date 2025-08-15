"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle, MapPin, Star, X } from "lucide-react"
import Link from "next/link"

export default function JongnoPage() {
  const [showPriceTable, setShowPriceTable] = useState(false)
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  const reservationText =
    "빠른 예약을 위해 전화로 상세 주소 / 마사지 코스 | (선입금, 예약금 일절 요구하지 않습니다. 예약시 참고바랍니다.)"

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

      <section className="relative bg-gradient-to-br from-violet-600 to-purple-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">종로구 전문 서비스</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              종로구 출장마사지
              <span className="text-violet-200 block">24시간 방문 서비스</span>
            </h1>
            <p className="text-xl text-violet-100 mb-8 max-w-3xl mx-auto">
              종로구 전 지역 30분 내 방문 가능한 프리미엄 출장마사지 서비스
              <br />
              종로1가~6가, 명동, 을지로, 인사동, 삼청동, 북촌한옥마을 등 종로구 어디든 신속하게 방문합니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-white text-violet-600 hover:bg-violet-50 px-8 py-3" asChild>
                <a href="tel:전화상담">
                  <Phone className="h-5 w-5 mr-2" />
                  전화상담
                </a>
              </Button>
              <Button size="lg" className="bg-amber-400 text-violet-900 hover:bg-amber-300 px-8 py-3" asChild>
                <a href="https://open.kakao.com/o/s0ca9mMh" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  카카오톡 상담
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-violet-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-violet-100">
            <h2 className="text-2xl font-bold text-violet-600 text-center mb-6">출장안마 예약문의 가이드</h2>
            <div className="bg-violet-50 rounded-xl p-6 mb-6">
              <p className="text-violet-800 text-lg leading-relaxed min-h-[60px]">
                {currentText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-violet-600 border-2 border-violet-600 hover:bg-violet-50 px-8 py-3"
                asChild
              >
                <a href="tel:전화상담">
                  <Phone className="h-5 w-5 mr-2" />
                  전화상담
                </a>
              </Button>
              <Button size="lg" className="bg-amber-400 text-violet-900 hover:bg-amber-300 px-8 py-3" asChild>
                <a href="https://open.kakao.com/o/s0ca9mMh" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  카카오톡 상담
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">종로구 서비스 지역</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "청운효자동",
              "사직동",
              "삼청동",
              "부암동",
              "평창동",
              "무악동",
              "교남동",
              "가회동",
              "종로1·2·3·4가동",
              "종로5·6가동",
              "이화동",
              "혜화동",
              "명륜3가동",
              "창신1동",
              "창신2동",
              "창신3동",
              "숭인1동",
              "숭인2동",
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
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">종로구 고객 후기</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "종로1가 김**님",
                rating: 5,
                comment: "종로1가에서 이용했는데 정말 만족스러웠어요. 마사지사분도 친절하시고 실력도 좋으셨습니다.",
              },
              {
                name: "명동 박**님",
                rating: 5,
                comment: "명동 호텔까지 빠르게 와주셨고, 마사지 받고 나니 몸이 정말 가벼워졌어요.",
              },
              {
                name: "인사동 이**님",
                rating: 5,
                comment: "인사동에서 처음 이용해봤는데 생각보다 훨씬 좋았습니다. 다음에도 이용할게요.",
              },
              {
                name: "삼청동 최**님",
                rating: 5,
                comment: "삼청동까지 30분 안에 와주셔서 놀랐어요. 서비스도 정말 만족합니다.",
              },
              {
                name: "을지로 정**님",
                rating: 5,
                comment: "을지로에서 야간 시간에 이용했는데도 친절하게 서비스해주셨어요.",
              },
              {
                name: "북촌 한**님",
                rating: 5,
                comment: "북촌한옥마을에서 이용했는데 찾아오기도 쉽고 서비스도 훌륭했습니다.",
              },
            ].map((review, index) => (
              <Card key={index} className="bg-white border-violet-200 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="flex text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">{review.name}</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-violet-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">종로구 출장마사지 예약</h2>
          <p className="text-violet-100 text-lg mb-8">24시간 언제든지 연락주세요</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-violet-600 hover:bg-violet-50 px-8 py-3" asChild>
              <a href="tel:전화상담">
                <Phone className="h-5 w-5 mr-2" />
                전화상담
              </a>
            </Button>
            <Button size="lg" className="bg-amber-400 text-violet-900 hover:bg-amber-300 px-8 py-3" asChild>
              <a href="https://open.kakao.com/o/s0ca9mMh" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 mr-2" />
                카카오톡 상담
              </a>
            </Button>
          </div>
        </div>
      </section>

      {showPriceTable && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">종로구 출장마사지 요금표</h2>
              <button onClick={() => setShowPriceTable(false)} className="text-gray-500 hover:text-gray-700">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="border-violet-200">
                  <CardContent className="p-6">
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
                      <div className="flex justify-between">
                        <span className="text-gray-600">150분</span>
                        <span className="text-gray-900 font-bold">150,000원</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-purple-200">
                  <CardContent className="p-6">
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
                      <div className="flex justify-between">
                        <span className="text-gray-600">150분</span>
                        <span className="text-gray-900 font-bold">160,000원</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-amber-200 bg-gradient-to-br from-amber-50 to-amber-100">
                  <CardContent className="p-6">
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
                  </CardContent>
                </Card>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-violet-600 text-white hover:bg-violet-700 px-8 py-3" asChild>
                  <a href="tel:전화상담">
                    <Phone className="h-5 w-5 mr-2" />
                    전화예약
                  </a>
                </Button>
                <Button size="lg" className="bg-amber-400 text-violet-900 hover:bg-amber-300 px-8 py-3" asChild>
                  <a href="https://open.kakao.com/o/s0ca9mMh" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    카톡예약
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
