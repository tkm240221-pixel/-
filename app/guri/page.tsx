"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Phone, MessageCircle, Clock, Shield, Users, Star } from "lucide-react"
import Link from "next/link"

export default function GuriPage() {
  const [displayedText, setDisplayedText] = useState("")
  const fullText =
    "빠른 예약을 위해 전화 또는 문자로 상세주소 / 마사지 코스 말씀해주시면 빠른 예약 도와드리도록 하겠습니다 ^^"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1))
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
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-violet-600">총알출장마사지</h1>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-violet-600 transition-colors">
                홈
              </Link>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-gray-700 hover:text-violet-600 transition-colors">코스표</button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <DialogHeader>
                    <DialogTitle className="text-center text-2xl font-bold text-violet-600">
                      마사지 코스 & 요금표
                    </DialogTitle>
                  </DialogHeader>
                  <div className="grid md:grid-cols-3 gap-6 p-6">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-violet-600 mb-4 text-center">타이 마사지</h3>
                        <div className="space-y-3">
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
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-purple-600 mb-4 text-center">힐링스웨디시</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                            <span className="font-medium">60분</span>
                            <span className="font-bold text-purple-600">90,000원</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                            <span className="font-medium">90분</span>
                            <span className="font-bold text-purple-600">110,000원</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                            <span className="font-medium">120분</span>
                            <span className="font-bold text-purple-600">130,000원</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-amber-600 mb-2 text-center">VIP 패키지</h3>
                        <p className="text-sm text-gray-600 text-center mb-4">(타이 + 힐링 + 풋)</p>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center p-3 bg-gradient-to-br from-amber-400 to-yellow-500 text-white rounded-lg">
                            <span className="font-medium">60분</span>
                            <span className="font-bold">100,000원</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-gradient-to-br from-amber-400 to-yellow-500 text-white rounded-lg">
                            <span className="font-medium">90분</span>
                            <span className="font-bold">130,000원</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-gradient-to-br from-amber-400 to-yellow-500 text-white rounded-lg">
                            <span className="font-medium">120분</span>
                            <span className="font-bold">160,000원</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-gradient-to-br from-amber-400 to-yellow-500 text-white rounded-lg">
                            <span className="font-medium">150분</span>
                            <span className="font-bold">200,000원</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </DialogContent>
              </Dialog>
              <Link href="#" className="text-gray-700 hover:text-violet-600 transition-colors">
                지역별
              </Link>
              <a href="tel:010-2871-2457" className="text-gray-700 hover:text-violet-600 transition-colors">
                문의
              </a>
            </nav>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-r from-violet-600 to-purple-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">출장마사지 예약문의 가이드</h2>
            <p className="text-white text-lg mb-6 min-h-[2rem]">{displayedText}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-violet-600 hover:bg-gray-100" asChild>
                <a href="tel:010-2871-2457">
                  <Phone className="h-5 w-5 mr-2" />
                  전화상담
                </a>
              </Button>
              <Button size="lg" className="bg-yellow-500 text-white hover:bg-yellow-400" asChild>
                <a href="https://open.kakao.com/o/s0ca9mMh" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  카톡상담
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-violet-100 text-violet-800">구리시 전문 서비스</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              구리시 출장마사지
              <span className="text-violet-600 block">24시간 방문 서비스</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              구리시 전 지역 30분 내 방문! 숙련된 전문 테라피스트가 직접 방문하여 최고의 힐링 서비스를 제공합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-violet-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">마사지 코스 & 요금표</h2>
            <p className="text-gray-600">투명하고 합리적인 가격으로 최고의 서비스를 제공합니다</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-violet-100">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-violet-600 mb-6 text-center">타이 마사지</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-violet-50 rounded-lg">
                    <span className="font-medium text-gray-700">60분</span>
                    <span className="font-bold text-violet-600 text-lg">80,000원</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-violet-50 rounded-lg">
                    <span className="font-medium text-gray-700">90분</span>
                    <span className="font-bold text-violet-600 text-lg">100,000원</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-violet-50 rounded-lg">
                    <span className="font-medium text-gray-700">120분</span>
                    <span className="font-bold text-violet-600 text-lg">120,000원</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-100">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-purple-600 mb-6 text-center">힐링스웨디시</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                    <span className="font-medium text-gray-700">60분</span>
                    <span className="font-bold text-purple-600 text-lg">90,000원</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                    <span className="font-medium text-gray-700">90분</span>
                    <span className="font-bold text-purple-600 text-lg">110,000원</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                    <span className="font-medium text-gray-700">120분</span>
                    <span className="font-bold text-purple-600 text-lg">130,000원</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-amber-200 bg-gradient-to-br from-amber-50 to-amber-100">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-amber-600 mb-2 text-center">VIP 패키지</h3>
                <p className="text-center text-gray-600 mb-6">(타이 + 힐링 + 풋)</p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gradient-to-br from-amber-400 to-yellow-500 text-white rounded-lg">
                    <span className="font-medium">60분</span>
                    <span className="font-bold text-lg">100,000원</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gradient-to-br from-amber-400 to-yellow-500 text-white rounded-lg">
                    <span className="font-medium">90분</span>
                    <span className="font-bold text-lg">130,000원</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gradient-to-br from-amber-400 to-yellow-500 text-white rounded-lg">
                    <span className="font-medium">120분</span>
                    <span className="font-bold text-lg">160,000원</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gradient-to-br from-amber-400 to-yellow-500 text-white rounded-lg">
                    <span className="font-medium">150분</span>
                    <span className="font-bold text-lg">200,000원</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">구리시 출장마사지 서비스 특징</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-violet-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24시간 운영</h3>
              <p className="text-gray-600">언제든지 편리한 시간에 예약 가능합니다</p>
            </div>

            <div className="text-center">
              <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-violet-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">안전한 서비스</h3>
              <p className="text-gray-600">철저한 위생관리와 안전한 서비스 제공</p>
            </div>

            <div className="text-center">
              <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-violet-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">전문 테라피스트</h3>
              <p className="text-gray-600">숙련된 전문가들의 맞춤형 케어</p>
            </div>

            <div className="text-center">
              <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-violet-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">VIP 서비스</h3>
              <p className="text-gray-600">프리미엄 서비스로 특별한 힐링 경험</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">구리시 서비스 지역</h2>
            <p className="text-gray-600">구리시 전 지역 30분 내 방문 서비스</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-violet-600 mb-3">인창동</h3>
                <p className="text-gray-600 text-sm">인창동 전 지역</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-violet-600 mb-3">교문동</h3>
                <p className="text-gray-600 text-sm">교문동 전 지역</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-violet-600 mb-3">수택동</h3>
                <p className="text-gray-600 text-sm">수택동 전 지역</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-violet-600 mb-3">토평동</h3>
                <p className="text-gray-600 text-sm">토평동 전 지역</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-violet-600 mb-3">갈매동</h3>
                <p className="text-gray-600 text-sm">갈매동 전 지역</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-violet-600 mb-3">아천동</h3>
                <p className="text-gray-600 text-sm">아천동 전 지역</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-violet-600 mb-3">사노동</h3>
                <p className="text-gray-600 text-sm">사노동 전 지역</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">구리시 고객 후기</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">김○○ 고객님</span>
                </div>
                <p className="text-gray-700">
                  "인창동에서 이용했는데 정말 만족스러웠어요. 테라피스트분이 너무 친절하시고 실력도 좋으셔서 몸이 정말
                  가벼워졌습니다. 다음에도 꼭 이용할게요!"
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">이○○ 고객님</span>
                </div>
                <p className="text-gray-700">
                  "수택동 거주하는데 30분 내에 정말 오셨어요. VIP 패키지 받았는데 가격 대비 정말 만족스럽습니다. 위생도
                  철저하게 관리하시네요."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">박○○ 고객님</span>
                </div>
                <p className="text-gray-700">
                  "갈매동에서 힐링스웨디시 받았는데 정말 시원했어요. 예약도 간편하고 서비스도 전문적이라 추천합니다!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-violet-400 mb-4">총알출장마사지</h3>
            <p className="text-gray-300 mb-6">구리시 전문 출장마사지 서비스</p>
            <div className="flex justify-center space-x-6 mb-6">
              <a href="tel:010-2871-2457" className="text-gray-300 hover:text-violet-400 transition-colors">
                전화상담: 010-2871-2457
              </a>
            </div>
            <div className="text-gray-400 text-sm">
              <p>운영시간: 24시간 연중무휴</p>
              <p className="mt-2">구리시 전 지역 30분 내 방문 서비스</p>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8">
              <p className="text-gray-400 text-sm">© 2024 총알출장마사지. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
