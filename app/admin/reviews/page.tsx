import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Search, Filter, ThumbsUp } from "lucide-react"

export default function ReviewsPage() {
  const reviews = [
    {
      id: "R001",
      customer: "김○○",
      service: "타이마사지 90분",
      rating: 5,
      date: "2024-01-15",
      comment: "정말 전문적이고 친절하셨어요. 집에서 편안하게 받을 수 있어서 너무 좋았습니다.",
      status: "승인",
      helpful: 12,
    },
    {
      id: "R002",
      customer: "박○○",
      service: "힐링스웨디시 60분",
      rating: 5,
      date: "2024-01-14",
      comment: "스트레스가 많이 쌓여있었는데 한 번에 다 풀렸어요. 테라피스트분이 정말 실력이 좋으시네요!",
      status: "승인",
      helpful: 8,
    },
    {
      id: "R003",
      customer: "이○○",
      service: "VIP 패키지 120분",
      rating: 5,
      date: "2024-01-13",
      comment: "시간 약속도 정확하고 서비스도 정말 만족스러웠습니다. 다음에 또 예약할게요!",
      status: "대기",
      helpful: 5,
    },
    {
      id: "R004",
      customer: "최○○",
      service: "타이마사지 60분",
      rating: 4,
      date: "2024-01-12",
      comment: "처음 이용해봤는데 정말 만족해요. 테라피스트분이 너무 전문적이시고 친절하셨습니다.",
      status: "승인",
      helpful: 15,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">후기 관리</h1>
          <p className="text-gray-600 mt-2">고객 후기를 관리하고 승인합니다</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-gray-900">127</div>
            <p className="text-sm text-gray-600 mt-1">전체 후기</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-yellow-600">4.8</div>
            <p className="text-sm text-gray-600 mt-1">평균 평점</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-green-600">112</div>
            <p className="text-sm text-gray-600 mt-1">승인된 후기</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-orange-600">15</div>
            <p className="text-sm text-gray-600 mt-1">승인 대기</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="고객명, 서비스명으로 검색..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600"
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              필터
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-medium text-gray-900">{review.customer}</span>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{review.service}</p>
                    <p className="text-gray-900">{review.comment}</p>
                    <div className="flex items-center gap-2 mt-3">
                      <Button variant="ghost" size="sm" className="text-gray-600">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        도움됨 {review.helpful}
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      className={
                        review.status === "승인" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                      }
                    >
                      {review.status}
                    </Badge>
                    {review.status === "대기" && (
                      <div className="flex gap-2">
                        <Button size="sm" className="bg-violet-600 hover:bg-violet-700">
                          승인
                        </Button>
                        <Button size="sm" variant="outline">
                          거부
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
