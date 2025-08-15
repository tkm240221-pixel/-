"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle, MapPin, Clock, Shield, Users, Star } from "lucide-react"
import Link from "next/link"

export default function GwacheonPage() {
  const [displayText, setDisplayText] = useState("")
  const [showModal, setShowModal] = useState(false)
  const fullText = "과천시 출장마사지 예약 가이드"

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-violet-600">
              총알출장마사지
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-violet-600 transition-colors">
                홈
              </Link>
              <button
                onClick={() => setShowModal(true)}
                className="text-gray-600 hover:text-violet-600 transition-colors"
              >
                코스표
              </button>
              <Link href="#areas" className="text-gray-600 hover:text-violet-600 transition-colors">
                지역별
              </Link>
              <Link href="tel:010-2871-2457" className="text-gray-600 hover:text-violet-600 transition-colors">
                문의
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-r from-violet-600 to-purple-700 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">{displayText}</h2>
            <p className="text-violet-100 mb-6">
              빠른 예약을 위해 전화 또는 문자로 상세주소 / 마사지 코스 말씀해주시면 빠른 예약 도와드리도록 하겠습니다 ^^
              <br />
              과천시 전 지역 30분 내 도착 가능합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-violet-600 hover:bg-violet-50" asChild>
                <a href="tel:010-2871-2457">
                  <Phone className="h-4 w-4 mr-2" />
                  전화상담
                </a>
              </Button>
              <Button className="bg-yellow-500 text-white hover:bg-yellow-600" asChild>
                <a href="https://open.kakao.com/o/s0ca9mMh" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  카톡 문의
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-violet-100 text-violet-800">과천시 전문 서비스</Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">과천시 출장마사지</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            중앙동, 갈현동, 별양동 등 과천시 전 지역
            <br />
            24시간 언제든지 방문 가능한 프리미엄 출장마사지
          </p>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">마사지 코스 & 요금표</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-violet-100 hover:border-violet-300 transition-colors bg-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-violet-600 mb-4 text-center">타이 마사지</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-3 px-4 bg-violet-50 rounded-lg">
                    <span className="text-gray-700">60분</span>
                    <span className="font-bold text-violet-600">80,000원</span>
                  </div>
                  <div className="flex justify-between items-center py-3 px-4 bg-violet-50 rounded-lg">
                    <span className="text-gray-700">90분</span>
                    <span className="font-bold text-violet-600">100,000원</span>
                  </div>
                  <div className="flex justify-between items-center py-3 px-4 bg-violet-50 rounded-lg">
                    <span className="text-gray-700">120분</span>
                    <span className="font-bold text-violet-600">120,000원</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-violet-100 hover:border-purple-300 transition-colors bg-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-purple-600 mb-4 text-center">힐링스웨디시</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-3 px-4 bg-violet-50 rounded-lg">
                    <span className="text-gray-700">60분</span>
                    <span className="font-bold text-purple-600">90,000원</span>
                  </div>
                  <div className="flex justify-between items-center py-3 px-4 bg-violet-50 rounded-lg">
                    <span className="text-gray-700">90분</span>
                    <span className="font-bold text-purple-600">110,000원</span>
                  </div>
                  <div className="flex justify-between items-center py-3 px-4 bg-violet-50 rounded-lg">
                    <span className="text-gray-700">120분</span>
                    <span className="font-bold text-purple-600">130,000원</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-violet-100 bg-gradient-to-br from-amber-400 to-yellow-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 text-center">VIP (타이 + 힐링 + 풋)</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-3 px-4 bg-white/20 backdrop-blur-sm rounded-lg">
                    <span className="text-white">60분</span>
                    <span className="font-bold text-white">100,000원</span>
                  </div>
                  <div className="flex justify-between items-center py-3 px-4 bg-white/20 backdrop-blur-sm rounded-lg">
                    <span className="text-white">90분</span>
                    <span className="font-bold text-white">130,000원</span>
                  </div>
                  <div className="flex justify-between items-center py-3 px-4 bg-white/20 backdrop-blur-sm rounded-lg">
                    <span className="text-white">120분</span>
                    <span className="font-bold text-white">160,000원</span>
                  </div>
                  <div className="flex justify-between items-center py-3 px-4 bg-white/20 backdrop-blur-sm rounded-lg">
                    <span className="text-white">150분</span>
                    <span className="font-bold text-white">200,000원</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">과천시 출장마사지 서비스 특징</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-violet-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24시간 운영</h3>
              <p className="text-gray-600">언제든지 편리한 시간에 이용 가능한 24시간 서비스</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">안전한 서비스</h3>
              <p className="text-gray-600">검증된 전문 테라피스트의 안전하고 깔끔한 서비스</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">전문 테라피스트</h3>
              <p className="text-gray-600">풍부한 경험과 전문 기술을 보유한 숙련된 테라피스트</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">만족도 최우선</h3>
              <p className="text-gray-600">고객 만족을 최우선으로 하는 프리미엄 서비스</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section id="areas" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">과천시 서비스 지역</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {["중앙동", "갈현동", "별양동", "과천동", "주암동", "문원동", "막계동", "원문동"].map((area) => (
              <Card key={area} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4 text-center">
                  <MapPin className="h-5 w-5 text-violet-600 mx-auto mb-2" />
                  <span className="text-gray-900 font-medium">{area}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">과천시 고객 후기</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-violet-500">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-gray-600">중앙동 고객</span>
                </div>
                <p className="text-gray-700">
                  "중앙동에서 이용했는데 정말 만족스러웠어요. 테라피스트분이 매우 전문적이고 친절하셨습니다. 피로가
                  완전히 풀렸고 다음에도 꼭 이용하고 싶어요."
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-gray-600">갈현동 고객</span>
                </div>
                <p className="text-gray-700">
                  "갈현동 지역인데 30분 만에 도착해주셨어요. VIP 코스 받았는데 정말 시원하고 개운했습니다. 가격도
                  합리적이고 서비스 품질이 훌륭해요."
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-amber-500">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-gray-600">별양동 고객</span>
                </div>
                <p className="text-gray-700">
                  "별양동에서 늦은 시간에 예약했는데도 친절하게 응대해주셨어요. 마사지 실력도 뛰어나고 전체적으로 매우
                  만족스러운 서비스였습니다."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">과천시 출장마사지 예약</h2>
          <p className="text-gray-300 text-lg mb-8">24시간 언제든지 연락주세요</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-violet-600 hover:bg-violet-700 px-8 py-3" asChild>
              <a href="tel:010-2871-2457">
                <Phone className="h-5 w-5 mr-2" />
                전화상담
              </a>
            </Button>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 px-8 py-3" asChild>
              <a href="https://open.kakao.com/o/s0ca9mMh" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 mr-2" />
                카카오톡 상담
              </a>
            </Button>
          </div>
          <div className="text-gray-400 text-sm">
            <p>운영시간: 24시간 연중무휴</p>
            <p>과천시 전 지역 서비스 가능</p>
          </div>
        </div>
      </footer>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">과천시 출장마사지 코스표</h2>
                <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700 text-2xl">
                  ×
                </button>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border rounded-lg p-4">
                  <h3 className="text-lg font-bold text-violet-600 mb-4 text-center">타이 마사지</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b">
                      <span>60분</span>
                      <span className="font-bold">80,000원</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span>90분</span>
                      <span className="font-bold">100,000원</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span>120분</span>
                      <span className="font-bold">120,000원</span>
                    </div>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="text-lg font-bold text-purple-600 mb-4 text-center">힐링스웨디시</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b">
                      <span>60분</span>
                      <span className="font-bold">90,000원</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span>90분</span>
                      <span className="font-bold">110,000원</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span>120분</span>
                      <span className="font-bold">130,000원</span>
                    </div>
                  </div>
                </div>
                <div className="border rounded-lg p-4 bg-amber-50">
                  <h3 className="text-lg font-bold text-amber-600 mb-4 text-center">VIP (타이 + 힐링 + 풋)</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b border-amber-200">
                      <span>60분</span>
                      <span className="font-bold text-amber-700">100,000원</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-amber-200">
                      <span>90분</span>
                      <span className="font-bold text-amber-700">130,000원</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-amber-200">
                      <span>120분</span>
                      <span className="font-bold text-amber-700">160,000원</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span>150분</span>
                      <span className="font-bold text-amber-700">200,000원</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
