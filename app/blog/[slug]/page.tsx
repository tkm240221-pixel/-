import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Clock, Tag } from "lucide-react"
import { notFound } from "next/navigation"

// Blog post data
const blogPosts = {
  "gangnam-massage-guide": {
    title: "강남구 출장마사지 완벽 가이드 - 예약부터 이용까지",
    content: `
      <h2>강남구 출장마사지 서비스 소개</h2>
      <p>강남구는 서울의 대표적인 비즈니스 중심지로, 많은 직장인들과 방문객들이 스트레스 해소를 위해 출장마사지 서비스를 이용하고 있습니다. 총알출장마사지는 강남구 전 지역에서 24시간 연중무휴로 전문적인 마사지 서비스를 제공합니다.</p>
      
      <h3>강남구 주요 서비스 지역</h3>
      <ul>
        <li><strong>역삼동</strong> - 테헤란로 일대 오피스 밀집 지역</li>
        <li><strong>삼성동</strong> - 코엑스, 삼성역 주변</li>
        <li><strong>청담동</strong> - 고급 주거 지역</li>
        <li><strong>압구정동</strong> - 로데오거리, 갤러리아 백화점 인근</li>
        <li><strong>신사동</strong> - 가로수길, 신사역 주변</li>
      </ul>
      
      <h3>예약 방법 및 절차</h3>
      <p>강남구 출장마사지 예약은 매우 간단합니다:</p>
      <ol>
        <li><strong>전화 예약</strong>: 010-9999-9999로 연락</li>
        <li><strong>위치 확인</strong>: 정확한 주소 및 건물명 전달</li>
        <li><strong>코스 선택</strong>: 원하시는 마사지 코스 선택</li>
        <li><strong>시간 조율</strong>: 방문 시간 협의</li>
        <li><strong>서비스 이용</strong>: 전문 관리사 방문 및 서비스 제공</li>
      </ol>
      
      <h3>추천 마사지 코스</h3>
      <p>강남구에서 인기 있는 마사지 코스들을 소개합니다:</p>
      
      <h4>1. 스웨디시 마사지 (60분)</h4>
      <p>부드럽고 깊은 압력으로 근육의 긴장을 완화시키는 서양식 마사지입니다. 직장인들의 스트레스 해소에 특히 효과적입니다.</p>
      
      <h4>2. 타이마사지 (90분)</h4>
      <p>태국 전통 마사지 기법으로 스트레칭과 지압을 결합한 마사지입니다. 몸의 유연성 향상과 혈액순환 개선에 도움이 됩니다.</p>
      
      <h4>3. 아로마 마사지 (60분)</h4>
      <p>천연 에센셜 오일을 사용한 마사지로 심신의 안정과 릴렉스 효과를 제공합니다.</p>
      
      <h3>이용 시 주의사항</h3>
      <ul>
        <li>예약 시간 30분 전 재확인 연락</li>
        <li>깨끗한 환경에서 서비스 이용</li>
        <li>건강상 문제가 있을 경우 사전 고지</li>
        <li>서비스 이용 후 충분한 수분 섭취</li>
      </ul>
      
      <h3>강남구 출장마사지의 장점</h3>
      <p>강남구에서 출장마사지를 이용하시면 다음과 같은 장점이 있습니다:</p>
      <ul>
        <li><strong>편리성</strong>: 이동 시간 없이 원하는 장소에서 서비스 이용</li>
        <li><strong>프라이버시</strong>: 개인적인 공간에서 편안한 마사지</li>
        <li><strong>시간 절약</strong>: 바쁜 일정 중에도 효율적인 스트레스 해소</li>
        <li><strong>전문성</strong>: 숙련된 전문 관리사의 맞춤형 서비스</li>
      </ul>
    `,
    excerpt: "강남구에서 출장마사지를 이용하실 때 알아두면 좋은 모든 정보를 정리했습니다.",
    category: "지역 가이드",
    readTime: "5분",
    publishDate: "2024.01.15",
    tags: ["강남구", "출장마사지", "예약방법"],
    relatedPosts: ["songpa-popular-areas", "suwon-massage-review"],
  },
  "thai-vs-swedish-massage": {
    title: "타이마사지 vs 스웨디시 - 어떤 마사지를 선택해야 할까?",
    content: `
      <h2>마사지 종류별 특징 비교</h2>
      <p>출장마사지를 예약할 때 가장 많이 고민하는 것이 바로 마사지 종류 선택입니다. 타이마사지와 스웨디시는 각각 다른 특징과 효과를 가지고 있어, 개인의 상황과 선호도에 따라 선택하시는 것이 좋습니다.</p>
      
      <h3>타이마사지 (Thai Massage)</h3>
      <h4>특징</h4>
      <ul>
        <li><strong>기원</strong>: 태국 전통 마사지 기법</li>
        <li><strong>방식</strong>: 스트레칭과 지압을 결합</li>
        <li><strong>복장</strong>: 편안한 옷을 입고 진행</li>
        <li><strong>도구</strong>: 오일 사용하지 않음</li>
        <li><strong>강도</strong>: 중간~강한 압력</li>
      </ul>
      
      <h4>효과</h4>
      <ul>
        <li>관절 가동범위 증가</li>
        <li>근육 유연성 향상</li>
        <li>혈액순환 개선</li>
        <li>에너지 라인(센) 자극</li>
        <li>전신 균형 조절</li>
      </ul>
      
      <h4>추천 대상</h4>
      <ul>
        <li>몸이 뻣뻣하고 유연성이 부족한 분</li>
        <li>장시간 앉아서 일하는 직장인</li>
        <li>운동 부족으로 인한 근육 경직이 있는 분</li>
        <li>활동적인 마사지를 선호하는 분</li>
      </ul>
      
      <h3>스웨디시 마사지 (Swedish Massage)</h3>
      <h4>특징</h4>
      <ul>
        <li><strong>기원</strong>: 서양식 마사지의 기본</li>
        <li><strong>방식</strong>: 부드럽고 리드미컬한 손동작</li>
        <li><strong>복장</strong>: 타월로 가린 상태에서 진행</li>
        <li><strong>도구</strong>: 마사지 오일 사용</li>
        <li><strong>강도</strong>: 부드러움~중간 압력</li>
      </ul>
      
      <h4>효과</h4>
      <ul>
        <li>근육 긴장 완화</li>
        <li>스트레스 해소</li>
        <li>혈액순환 촉진</li>
        <li>림프 순환 개선</li>
        <li>깊은 이완과 휴식</li>
      </ul>
      
      <h4>추천 대상</h4>
      <ul>
        <li>스트레스가 많고 긴장이 심한 분</li>
        <li>부드럽고 편안한 마사지를 원하는 분</li>
        <li>마사지 초보자</li>
        <li>깊은 휴식과 이완이 필요한 분</li>
      </ul>
      
      <h3>상황별 마사지 선택 가이드</h3>
      
      <h4>업무 스트레스가 심할 때</h4>
      <p><strong>추천: 스웨디시 마사지</strong><br>
      부드러운 터치와 오일 마사지로 심신의 안정을 찾을 수 있습니다.</p>
      
      <h4>몸이 뻣뻣하고 경직되었을 때</h4>
      <p><strong>추천: 타이마사지</strong><br>
      스트레칭 동작으로 관절 가동범위를 늘리고 근육을 이완시킵니다.</p>
      
      <h4>운동 후 근육 회복이 필요할 때</h4>
      <p><strong>추천: 스웨디시 마사지</strong><br>
      근육의 피로물질 제거와 회복을 도와줍니다.</p>
      
      <h4>장시간 앉아있어 허리와 어깨가 아플 때</h4>
      <p><strong>추천: 타이마사지</strong><br>
      척추 정렬과 자세 교정에 도움이 됩니다.</p>
      
      <h3>마사지 선택 시 고려사항</h3>
      <ul>
        <li><strong>개인 선호도</strong>: 강한 압력 vs 부드러운 터치</li>
        <li><strong>시간</strong>: 타이마사지는 보통 90분, 스웨디시는 60분</li>
        <li><strong>목적</strong>: 이완 vs 근육 교정</li>
        <li><strong>건강 상태</strong>: 부상이나 질환 여부</li>
        <li><strong>경험</strong>: 마사지 경험 유무</li>
      </ul>
      
      <h3>전문가 추천</h3>
      <p>처음 출장마사지를 이용하시는 분들께는 스웨디시 마사지를 추천합니다. 부드럽고 편안한 마사지로 시작하여 마사지에 익숙해진 후 타이마사지를 경험해보시는 것이 좋습니다.</p>
      
      <p>정기적으로 마사지를 받으시는 분들은 두 가지를 번갈아가며 받으시면 더욱 효과적입니다.</p>
    `,
    excerpt:
      "타이마사지와 스웨디시의 차이점을 자세히 알아보고, 본인에게 맞는 마사지 종류를 선택하는 방법을 안내합니다.",
    category: "마사지 가이드",
    readTime: "7분",
    publishDate: "2024.01.12",
    tags: ["타이마사지", "스웨디시", "마사지종류"],
    relatedPosts: ["office-worker-neck-massage", "24hour-massage-booking-tips"],
  },
}

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    return {
      title: "페이지를 찾을 수 없습니다 - 총알출장마사지",
    }
  }

  return {
    title: `${post.title} - 총알출장마사지`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
  }
}

export default function BlogPost({ params }: Props) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-violet-600">
              총알출장마사지
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-violet-600 transition-colors">
                홈
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-violet-600 transition-colors">
                블로그
              </Link>
              <Link href="tel:010-9999-9999" className="text-gray-700 hover:text-violet-600 transition-colors">
                문의
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Back to Blog */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          블로그로 돌아가기
        </Link>
      </div>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Article Header */}
          <div className="p-8 border-b">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="bg-violet-100 text-violet-600 px-3 py-1 rounded-full text-xs font-medium">
                {post.category}
              </span>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
              <span>{post.publishDate}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <p className="text-xl text-gray-600 leading-relaxed">{post.excerpt}</p>
            <div className="flex flex-wrap gap-2 mt-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Article Content */}
          <div className="p-8">
            <div
              className="prose prose-lg max-w-none prose-violet prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">관련 글</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {post.relatedPosts?.map((slug) => {
              const relatedPost = blogPosts[slug as keyof typeof blogPosts]
              if (!relatedPost) return null

              return (
                <Link
                  key={slug}
                  href={`/blog/${slug}`}
                  className="block p-4 border border-gray-200 rounded-lg hover:border-violet-300 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{relatedPost.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{relatedPost.excerpt}</p>
                  <div className="flex items-center gap-2 mt-3 text-xs text-gray-500">
                    <span className="bg-violet-100 text-violet-600 px-2 py-1 rounded-full">{relatedPost.category}</span>
                    <span>{relatedPost.readTime}</span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl text-white p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">지금 바로 출장마사지 예약하세요</h2>
          <p className="text-violet-100 mb-6">24시간 연중무휴, 전국 어디든 방문해드립니다</p>
          <Link
            href="tel:010-9999-9999"
            className="inline-block bg-white text-violet-600 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            010-9999-9999
          </Link>
        </div>
      </article>
    </div>
  )
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}
