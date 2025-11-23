import type { Metadata } from "next"
import Link from "next/link"
import { Clock, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "출장마사지 블로그 | 마사지 정보 및 가이드 - 총알출장마사지",
  description: "출장마사지 관련 유용한 정보, 지역별 가이드, 건강 팁을 제공하는 전문 블로그입니다.",
  keywords: "출장마사지 블로그, 마사지 정보, 건강 팁, 지역별 마사지 가이드",
  openGraph: {
    title: "출장마사지 블로그 | 마사지 정보 및 가이드 - 총알출장마사지",
    description: "출장마사지 관련 유용한 정보, 지역별 가이드, 건강 팁을 제공하는 전문 블로그입니다.",
    type: "website",
  },
}

const blogPosts = [
  {
    id: 1,
    title: "강남구 출장마사지 완벽 가이드 - 예약부터 이용까지",
    excerpt:
      "강남구에서 출장마사지를 이용하실 때 알아두면 좋은 모든 정보를 정리했습니다. 예약 방법, 코스 선택, 주의사항까지 한번에 확인하세요.",
    slug: "gangnam-massage-guide",
    category: "지역 가이드",
    readTime: "5분",
    publishDate: "2024.01.15",
    image: "/-----------.png",
    tags: ["강남구", "출장마사지", "예약방법"],
  },
  {
    id: 2,
    title: "타이마사지 vs 스웨디시 - 어떤 마사지를 선택해야 할까?",
    excerpt:
      "타이마사지와 스웨디시의 차이점을 자세히 알아보고, 본인에게 맞는 마사지 종류를 선택하는 방법을 안내합니다.",
    slug: "thai-vs-swedish-massage",
    category: "마사지 가이드",
    readTime: "7분",
    publishDate: "2024.01.12",
    image: "/-------------.png",
    tags: ["타이마사지", "스웨디시", "마사지종류"],
  },
  {
    id: 3,
    title: "수원시 출장마사지 이용 후기 및 추천 코스",
    excerpt:
      "수원시에서 인기 있는 출장마사지 코스들을 실제 이용 후기와 함께 소개합니다. 가성비 좋은 코스 추천도 함께 확인하세요.",
    slug: "suwon-massage-review",
    category: "지역 가이드",
    readTime: "6분",
    publishDate: "2024.01.10",
    image: "/----------.png",
    tags: ["수원시", "출장마사지", "후기"],
  },
  {
    id: 4,
    title: "직장인을 위한 목어깨 마사지 셀프케어 방법",
    excerpt: "장시간 컴퓨터 작업으로 뭉친 목과 어깨를 위한 간단한 셀프 마사지 방법과 스트레칭을 소개합니다.",
    slug: "office-worker-neck-massage",
    category: "건강 팁",
    readTime: "4분",
    publishDate: "2024.01.08",
    image: "/------------.png",
    tags: ["직장인", "목어깨", "셀프마사지"],
  },
  {
    id: 5,
    title: "24시간 출장마사지 예약 시 주의사항 및 팁",
    excerpt:
      "24시간 언제든 이용 가능한 출장마사지 예약 시 알아두면 좋은 주의사항과 더 나은 서비스를 받기 위한 팁들을 공유합니다.",
    slug: "24hour-massage-booking-tips",
    category: "서비스 정보",
    readTime: "5분",
    publishDate: "2024.01.05",
    image: "/24-----------.png",
    tags: ["24시간", "예약", "주의사항"],
  },
  {
    id: 6,
    title: "송파구 출장마사지 인기 지역 TOP 5",
    excerpt: "송파구에서 출장마사지 이용이 많은 인기 지역들을 소개하고, 각 지역별 특징과 접근성을 분석해드립니다.",
    slug: "songpa-popular-areas",
    category: "지역 가이드",
    readTime: "6분",
    publishDate: "2024.01.03",
    image: "/---------.png",
    tags: ["송파구", "인기지역", "출장마사지"],
  },
  {
    id: 7,
    title: "아로마 마사지의 효능과 추천 에센셜 오일",
    excerpt: "아로마 마사지의 건강상 이점과 스트레스 해소 효과, 그리고 상황별 추천 에센셜 오일을 소개합니다.",
    slug: "aromatherapy-massage-benefits",
    category: "마사지 가이드",
    readTime: "8분",
    publishDate: "2024.01.20",
    image: "/-----------.png",
    tags: ["아로마마사지", "에센셜오일", "스트레스해소"],
  },
  {
    id: 8,
    title: "성남시 분당구 출장마사지 완벽 가이드",
    excerpt: "분당구에서 출장마사지를 이용할 때 알아야 할 모든 정보와 인기 코스, 예약 팁을 정리했습니다.",
    slug: "seongnam-bundang-massage-guide",
    category: "지역 가이드",
    readTime: "7분",
    publishDate: "2024.01.18",
    image: "/----------.png",
    tags: ["성남시", "분당구", "출장마사지"],
  },
  {
    id: 9,
    title: "임산부를 위한 안전한 마사지 가이드",
    excerpt: "임신 중에도 안전하게 받을 수 있는 마사지 종류와 주의사항, 전문 관리사 선택 방법을 안내합니다.",
    slug: "pregnancy-massage-safety-guide",
    category: "건강 팁",
    readTime: "6분",
    publishDate: "2024.01.16",
    image: "/------------.png",
    tags: ["임산부", "안전마사지", "임신"],
  },
  {
    id: 10,
    title: "부천시 출장마사지 이용 후기 및 가격 비교",
    excerpt: "부천시에서 인기 있는 출장마사지 업체들의 실제 이용 후기와 가격을 비교 분석해드립니다.",
    slug: "bucheon-massage-review-comparison",
    category: "지역 가이드",
    readTime: "9분",
    publishDate: "2024.01.14",
    image: "/24-----------.png",
    tags: ["부천시", "가격비교", "후기"],
  },
  {
    id: 11,
    title: "스포츠 마사지 vs 딥티슈 마사지 차이점",
    excerpt: "운동 후 근육 회복을 위한 스포츠 마사지와 딥티슈 마사지의 차이점과 선택 기준을 설명합니다.",
    slug: "sports-vs-deep-tissue-massage",
    category: "마사지 가이드",
    readTime: "7분",
    publishDate: "2024.01.13",
    image: "/---------.png",
    tags: ["스포츠마사지", "딥티슈", "근육회복"],
  },
  {
    id: 12,
    title: "고양시 일산구 출장마사지 추천 업체",
    excerpt: "일산구에서 신뢰할 수 있는 출장마사지 업체들과 각 업체별 특징, 서비스 품질을 비교해드립니다.",
    slug: "goyang-ilsan-massage-recommendations",
    category: "지역 가이드",
    readTime: "8분",
    publishDate: "2024.01.11",
    image: "/-----------.png",
    tags: ["고양시", "일산구", "추천업체"],
  },
  {
    id: 13,
    title: "마사지 후 관리법과 효과 지속 방법",
    excerpt: "마사지 효과를 오래 지속시키기 위한 사후 관리법과 일상생활에서 실천할 수 있는 팁들을 소개합니다.",
    slug: "post-massage-care-tips",
    category: "건강 팁",
    readTime: "5분",
    publishDate: "2024.01.09",
    image: "/-------------.png",
    tags: ["사후관리", "효과지속", "건강관리"],
  },
  {
    id: 14,
    title: "안양시 출장마사지 24시간 서비스 가이드",
    excerpt: "안양시에서 24시간 이용 가능한 출장마사지 서비스와 야간 예약 시 주의사항을 정리했습니다.",
    slug: "anyang-24hour-massage-service",
    category: "서비스 정보",
    readTime: "6분",
    publishDate: "2024.01.07",
    image: "/----------.png",
    tags: ["안양시", "24시간", "야간서비스"],
  },
  {
    id: 15,
    title: "족욕과 발마사지의 건강 효과",
    excerpt: "족욕과 발마사지가 전신 건강에 미치는 긍정적인 영향과 집에서 할 수 있는 간단한 방법을 소개합니다.",
    slug: "foot-massage-health-benefits",
    category: "건강 팁",
    readTime: "5분",
    publishDate: "2024.01.06",
    image: "/------------.png",
    tags: ["족욕", "발마사지", "건강효과"],
  },
  {
    id: 16,
    title: "의정부시 출장마사지 인기 코스 TOP 3",
    excerpt: "의정부시에서 가장 인기 있는 출장마사지 코스 3가지를 상세히 소개하고 각각의 특징을 분석합니다.",
    slug: "uijeongbu-popular-massage-courses",
    category: "지역 가이드",
    readTime: "7분",
    publishDate: "2024.01.04",
    image: "/---------.png",
    tags: ["의정부시", "인기코스", "마사지종류"],
  },
  {
    id: 17,
    title: "커플 마사지 예약 시 알아둘 점",
    excerpt: "커플이 함께 받는 마사지 예약 시 고려사항과 추천 코스, 특별 서비스에 대해 안내합니다.",
    slug: "couple-massage-booking-guide",
    category: "서비스 정보",
    readTime: "6분",
    publishDate: "2024.01.02",
    image: "/24-----------.png",
    tags: ["커플마사지", "예약가이드", "특별서비스"],
  },
  {
    id: 18,
    title: "안산시 출장마사지 지역별 접근성 분석",
    excerpt: "안산시 각 지역별 출장마사지 접근성과 교통편, 주차 정보를 종합적으로 분석해드립니다.",
    slug: "ansan-massage-accessibility-analysis",
    category: "지역 가이드",
    readTime: "8분",
    publishDate: "2023.12.30",
    image: "/-----------.png",
    tags: ["안산시", "접근성", "교통정보"],
  },
  {
    id: 19,
    title: "마사지 오일의 종류와 효능 완벽 가이드",
    excerpt: "다양한 마사지 오일의 종류별 특징과 효능, 피부 타입에 맞는 오일 선택 방법을 상세히 설명합니다.",
    slug: "massage-oil-types-benefits-guide",
    category: "마사지 가이드",
    readTime: "9분",
    publishDate: "2023.12.28",
    image: "/----------.png",
    tags: ["마사지오일", "오일종류", "피부관리"],
  },
  {
    id: 20,
    title: "구리시 출장마사지 예약 꿀팁 모음",
    excerpt: "구리시에서 출장마사지를 더 저렴하고 편리하게 이용할 수 있는 예약 꿀팁과 할인 정보를 공유합니다.",
    slug: "guri-massage-booking-tips",
    category: "서비스 정보",
    readTime: "5분",
    publishDate: "2023.12.26",
    image: "/-------------.png",
    tags: ["구리시", "예약팁", "할인정보"],
  },
  {
    id: 21,
    title: "목디스크 예방을 위한 마사지 요법",
    excerpt: "목디스크 예방과 완화에 도움이 되는 마사지 기법과 일상에서 실천할 수 있는 목 건강 관리법을 소개합니다.",
    slug: "neck-disc-prevention-massage",
    category: "건강 팁",
    readTime: "7분",
    publishDate: "2023.12.24",
    image: "/------------.png",
    tags: ["목디스크", "예방마사지", "목건강"],
  },
]

const categories = ["전체", "지역 가이드", "마사지 가이드", "건강 팁", "서비스 정보"]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-violet-600">
              총알출장마사지
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-violet-600 transition-colors">
                홈
              </Link>
              <Link href="/blog" className="text-violet-600 font-medium">
                블로그
              </Link>
              <Link href="tel:010-9999-9999" className="text-gray-700 hover:text-violet-600 transition-colors">
                문의
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">출장마사지 전문 블로그</h1>
          <p className="text-xl text-violet-100 mb-8">마사지 정보부터 지역별 가이드까지, 유용한 정보를 제공합니다</p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full transition-colors ${
                category === "전체"
                  ? "bg-violet-600 text-white"
                  : "bg-white text-gray-700 hover:bg-violet-50 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-video bg-gray-100">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="bg-violet-100 text-violet-600 px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.publishDate}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-700 font-medium"
                  >
                    자세히 보기
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Regional Links Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">지역별 출장마사지 서비스</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-violet-600 mb-4">서울 주요 지역</h3>
              <div className="space-y-2">
                <Link href="/gangnam" className="block text-gray-700 hover:text-violet-600 transition-colors">
                  강남구 출장마사지
                </Link>
                <Link href="/songpa" className="block text-gray-700 hover:text-violet-600 transition-colors">
                  송파구 출장마사지
                </Link>
                <Link href="/seocho" className="block text-gray-700 hover:text-violet-600 transition-colors">
                  서초구 출장마사지
                </Link>
                <Link href="/gangseo" className="block text-gray-700 hover:text-violet-600 transition-colors">
                  강서구 출장마사지
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-violet-600 mb-4">경기 주요 지역</h3>
              <div className="space-y-2">
                <Link href="/suwon" className="block text-gray-700 hover:text-violet-600 transition-colors">
                  수원시 출장마사지
                </Link>
                <Link href="/seongnam" className="block text-gray-700 hover:text-violet-600 transition-colors">
                  성남시 출장마사지
                </Link>
                <Link href="/goyang" className="block text-gray-700 hover:text-violet-600 transition-colors">
                  고양시 출장마사지
                </Link>
                <Link href="/anyang" className="block text-gray-700 hover:text-violet-600 transition-colors">
                  안양시 출장마사지
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-violet-600 mb-4">인천 주요 지역</h3>
              <div className="space-y-2">
                <Link href="/namdong" className="block text-gray-700 hover:text-violet-600 transition-colors">
                  남동구 출장마사지
                </Link>
                <Link href="/bupyeong" className="block text-gray-700 hover:text-violet-600 transition-colors">
                  부평구 출장마사지
                </Link>
                <Link href="/seo-gu" className="block text-gray-700 hover:text-violet-600 transition-colors">
                  서구 출장마사지
                </Link>
                <Link href="/yeonsu" className="block text-gray-700 hover:text-violet-600 transition-colors">
                  연수구 출장마사지
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">총알출장마사지</h3>
          <p className="text-gray-400 mb-6">전국 어디든 24시간 연중무휴 출장마사지 서비스</p>
          <div className="flex justify-center space-x-8 mb-6">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
              홈
            </Link>
            <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
              블로그
            </Link>
            <Link href="tel:010-9999-9999" className="text-gray-400 hover:text-white transition-colors">
              문의
            </Link>
          </div>
          <p className="text-gray-500 text-sm">© 2024 총알출장마사지. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
