"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle, MapPin, Clock, Shield, Users, CreditCard, Star } from "lucide-react"
import Link from "next/link"
import { RegionalLinks } from "@/components/regional-links"

export default function NamdongClientPage() {
  const [currentText, setCurrentText] = useState("")
  const [showModal, setShowModal] = useState(false)
  const fullText =
    "빠른 예약을 위해 전화 또는 문자로 상세주소 / 마사지 코스 말씀해주시면 빠른 예약 도와드리도록 하겠습니다 ^^)"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setCurrentText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
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
              <Link href="/blog" className="text-gray-600 hover:text-violet-600 transition-colors">
                블로그
              </Link>
              <Link href="tel:010-2871-2457" className="text-gray-600 hover:text-violet-600 transition-colors">
                문의
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Reservation Guide */}
      <section className="bg-gradient-to-r from-violet-600 via-purple-600 to-violet-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-white text-sm md:text-base">
              <span className="font-semibold">남동구 출장마사지 예약 안내</span>
            </p>
            <p className="text-violet-100 text-xs md:text-sm mt-1 min-h-[20px]">{currentText}</p>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-violet-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-violet-100 text-violet-800 hover:bg-violet-200">365일 24시간 운영 중</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              남동구 출장마사지
              <span className="text-violet-600 block">전문 테라피스트가 직접 방문하는 프리미엄 마사지 서비스</span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3" asChild>
                <a href="tel:010-2871-2457">
                  <Phone className="h-5 w-5 mr-2" />
                  010-2871-2457
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-violet-600 text-violet-600 hover:bg-violet-50 px-8 py-3 bg-transparent"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                문자 예약
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">마사지 코스 & 요금표</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Thai Massage */}
            <Card className="relative overflow-hidden border-2 hover:border-violet-200 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-violet-600 mb-4">타이 마사지</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">60분</span>
                    <span className="text-lg font-bold text-violet-600">80,000원</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">90분</span>
                    <span className="text-lg font-bold text-violet-600">100,000원</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">120분</span>
                    <span className="text-lg font-bold text-violet-600">120,000원</span>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li>• 전신 타이 마사지</li>
                  <li>• 스트레칭 포함</li>
                  <li>• 근육 이완 효과</li>
                  <li>• 혈액순환 개선</li>
                </ul>
              </CardContent>
            </Card>

            {/* Swedish Massage */}
            <Card className="relative overflow-hidden border-2 border-violet-200 hover:border-violet-300 transition-all duration-300">
              <Badge className="absolute top-4 right-4 bg-violet-600 text-white">인기</Badge>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-violet-600 mb-4">힐링스웨디시</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">60분</span>
                    <span className="text-lg font-bold text-violet-600">90,000원</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">90분</span>
                    <span className="text-lg font-bold text-violet-600">110,000원</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">120분</span>
                    <span className="text-lg font-bold text-violet-600">130,000원</span>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li>• 전신 스웨디시</li>
                  <li>• 아로마 오일 사용</li>
                  <li>• 깊은 이완 효과</li>
                  <li>• 스트레스 해소</li>
                </ul>
              </CardContent>
            </Card>

            {/* VIP Package */}
            <Card className="relative overflow-hidden border-2 bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 hover:border-amber-300 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-amber-600 mb-4">VIP (타이 + 힐링 + 풋)</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-amber-100">
                    <span className="text-gray-600">60분</span>
                    <span className="text-lg font-bold text-amber-600">100,000원</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-amber-100">
                    <span className="text-gray-600">90분</span>
                    <span className="text-lg font-bold text-amber-600">130,000원</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-amber-100">
                    <span className="text-gray-600">120분</span>
                    <span className="text-lg font-bold text-amber-600">160,000원</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">150분</span>
                    <span className="text-lg font-bold text-amber-600">200,000원</span>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li>• 프리미엄 코스</li>
                  <li>• 전신 케어</li>
                  <li>• 고급 아로마 오일</li>
                  <li>• 개인 맞춤 서비스</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">* 모든 가격은 출장비 포함 가격이며, 추가 비용은 없습니다.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => setShowModal(true)} className="bg-violet-600 hover:bg-violet-700 text-white">
                자세한 요금표 보기
              </Button>
              <Button
                variant="outline"
                className="border-violet-600 text-violet-600 hover:bg-violet-50 bg-transparent"
                asChild
              >
                <a href="tel:010-2871-2457">즉시 상담</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">남동구 출장마사지 서비스 특징</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-violet-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24시간 운영</h3>
              <p className="text-gray-600">언제든지 편리한 시간에 예약 가능</p>
            </div>
            <div className="text-center">
              <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-violet-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">안전한 서비스</h3>
              <p className="text-gray-600">검증된 전문 테라피스트만 파견</p>
            </div>
            <div className="text-center">
              <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-violet-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">전문 기술</h3>
              <p className="text-gray-600">숙련된 관리사의 전문적인 마사지</p>
            </div>
            <div className="text-center">
              <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-violet-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">맞춤 서비스</h3>
              <p className="text-gray-600">개인별 맞춤형 마사지 프로그램</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">남동구 서비스 지역</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "구월1동",
              "구월2동",
              "구월3동",
              "구월4동",
              "간석1동",
              "간석2동",
              "간석3동",
              "간석4동",
              "만수1동",
              "만수2동",
              "만수3동",
              "만수4동",
              "만수5동",
              "만수6동",
              "논현동",
              "장수동",
              "서창동",
              "남촌동",
              "고잔동",
              "소래동",
            ].map((area) => (
              <div
                key={area}
                className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-violet-50 transition-colors"
              >
                <MapPin className="h-4 w-4 text-violet-600 mr-2 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">남동구 고객 후기</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">구월동 고객</span>
                </div>
                <p className="text-gray-700 mb-4">
                  "구월동에서 이용했는데 정말 만족스러웠어요. 관리사님이 매우 친절하시고 실력도 뛰어나셨습니다. 다음에도
                  꼭 이용하겠습니다."
                </p>
                <p className="text-sm text-gray-500">김○○님 (힐링스웨디시 90분)</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">간석동 고객</span>
                </div>
                <p className="text-gray-700 mb-4">
                  "간석동까지 빠르게 와주셔서 감사했어요. VIP 코스 받았는데 정말 시원하고 개운했습니다. 추천합니다!"
                </p>
                <p className="text-sm text-gray-500">박○○님 (VIP 패키지 120분)</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">만수동 고객</span>
                </div>
                <p className="text-gray-700 mb-4">
                  "만수동에서 타이마사지 받았는데 너무 좋았어요. 전문적이고 깔끔한 서비스에 만족합니다. 재방문 의사
                  100%!"
                </p>
                <p className="text-sm text-gray-500">이○○님 (타이 마사지 120분)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">총알출장마사지</h3>
              <p className="text-gray-400 mb-4">남동구 전문 출장마사지 서비스</p>
              <p className="text-gray-400">365일 24시간 운영</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">서비스 지역</h4>
              <p className="text-gray-400">남동구 전 지역</p>
              <p className="text-gray-400">30분 내 도착</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">연락처</h4>
              <p className="text-gray-400 mb-2">전화: 010-2871-2457</p>
              <p className="text-gray-400">24시간 상담 가능</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 총알출장마사지. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Regional Links */}
      <RegionalLinks currentRegion="남동구" regionType="incheon" />

      {/* Price Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">상세 요금표</h3>
                <Button variant="ghost" onClick={() => setShowModal(false)}>
                  ✕
                </Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-violet-600 text-white">
                      <th className="border border-gray-300 px-4 py-3 text-left">코스명</th>
                      <th className="border border-gray-300 px-4 py-3 text-center">시간</th>
                      <th className="border border-gray-300 px-4 py-3 text-center">가격</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">포함 서비스</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">타이 마사지</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">60분</td>
                      <td className="border border-gray-300 px-4 py-3 text-center font-bold text-violet-600">
                        80,000원
                      </td>
                      <td className="border border-gray-300 px-4 py-3">전신 타이 마사지, 스트레칭</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">타이 마사지</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">90분</td>
                      <td className="border border-gray-300 px-4 py-3 text-center font-bold text-violet-600">
                        100,000원
                      </td>
                      <td className="border border-gray-300 px-4 py-3">전신 타이 마사지, 스트레칭, 근육 이완</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">타이 마사지</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">120분</td>
                      <td className="border border-gray-300 px-4 py-3 text-center font-bold text-violet-600">
                        120,000원
                      </td>
                      <td className="border border-gray-300 px-4 py-3">
                        전신 타이 마사지, 스트레칭, 근육 이완, 혈액순환
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">힐링스웨디시</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">60분</td>
                      <td className="border border-gray-300 px-4 py-3 text-center font-bold text-violet-600">
                        90,000원
                      </td>
                      <td className="border border-gray-300 px-4 py-3">전신 스웨디시, 아로마 오일</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">힐링스웨디시</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">90분</td>
                      <td className="border border-gray-300 px-4 py-3 text-center font-bold text-violet-600">
                        110,000원
                      </td>
                      <td className="border border-gray-300 px-4 py-3">전신 스웨디시, 아로마 오일, 깊은 이완</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">힐링스웨디시</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">120분</td>
                      <td className="border border-gray-300 px-4 py-3 text-center font-bold text-violet-600">
                        130,000원
                      </td>
                      <td className="border border-gray-300 px-4 py-3">
                        전신 스웨디시, 아로마 오일, 깊은 이완, 스트레스 해소
                      </td>
                    </tr>
                    <tr className="bg-amber-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">VIP 패키지</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">60분</td>
                      <td className="border border-gray-300 px-4 py-3 text-center font-bold text-amber-600">
                        100,000원
                      </td>
                      <td className="border border-gray-300 px-4 py-3">타이 + 힐링 + 풋 마사지</td>
                    </tr>
                    <tr className="bg-amber-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">VIP 패키지</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">90분</td>
                      <td className="border border-gray-300 px-4 py-3 text-center font-bold text-amber-600">
                        130,000원
                      </td>
                      <td className="border border-gray-300 px-4 py-3">타이 + 힐링 + 풋 마사지, 프리미엄 오일</td>
                    </tr>
                    <tr className="bg-amber-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">VIP 패키지</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">120분</td>
                      <td className="border border-gray-300 px-4 py-3 text-center font-bold text-amber-600">
                        160,000원
                      </td>
                      <td className="border border-gray-300 px-4 py-3">
                        타이 + 힐링 + 풋 마사지, 프리미엄 오일, 전신 케어
                      </td>
                    </tr>
                    <tr className="bg-amber-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">VIP 패키지</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">150분</td>
                      <td className="border border-gray-300 px-4 py-3 text-center font-bold text-amber-600">
                        200,000원
                      </td>
                      <td className="border border-gray-300 px-4 py-3">
                        타이 + 힐링 + 풋 마사지, 프리미엄 오일, 전신 케어, 개인 맞춤
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 text-center">
                <Button onClick={() => setShowModal(false)} className="bg-violet-600 hover:bg-violet-700 text-white">
                  닫기
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
