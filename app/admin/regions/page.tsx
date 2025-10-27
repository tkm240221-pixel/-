import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, TrendingUp } from "lucide-react"

export default function RegionsPage() {
  const regions = [
    { name: "강남구", bookings: 234, revenue: "23,400,000원", growth: "+15%" },
    { name: "서초구", bookings: 189, revenue: "18,900,000원", growth: "+12%" },
    { name: "송파구", bookings: 156, revenue: "15,600,000원", growth: "+8%" },
    { name: "강서구", bookings: 145, revenue: "14,500,000원", growth: "+10%" },
    { name: "마포구", bookings: 134, revenue: "13,400,000원", growth: "+7%" },
    { name: "영등포구", bookings: 123, revenue: "12,300,000원", growth: "+9%" },
    { name: "용산구", bookings: 112, revenue: "11,200,000원", growth: "+6%" },
    { name: "성동구", bookings: 98, revenue: "9,800,000원", growth: "+5%" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">지역 관리</h1>
        <p className="text-gray-600 mt-2">지역별 예약 및 매출 현황을 확인합니다</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">서비스 지역</CardTitle>
            <MapPin className="h-4 w-4 text-violet-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">65개</div>
            <p className="text-xs text-gray-600 mt-1">서울/경기/인천</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">최다 예약 지역</CardTitle>
            <TrendingUp className="h-4 w-4 text-violet-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">강남구</div>
            <p className="text-xs text-green-600 mt-1">234건 (+15%)</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">평균 응답 시간</CardTitle>
            <TrendingUp className="h-4 w-4 text-violet-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">23분</div>
            <p className="text-xs text-green-600 mt-1">목표: 30분 이내</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>지역별 통계</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">지역</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">예약 건수</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">매출</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">성장률</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">작업</th>
                </tr>
              </thead>
              <tbody>
                {regions.map((region, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 text-sm font-medium text-gray-900">{region.name}</td>
                    <td className="py-4 px-4 text-sm text-gray-900">{region.bookings}건</td>
                    <td className="py-4 px-4 text-sm font-medium text-gray-900">{region.revenue}</td>
                    <td className="py-4 px-4">
                      <span className="text-sm text-green-600 font-medium">{region.growth}</span>
                    </td>
                    <td className="py-4 px-4">
                      <Button variant="ghost" size="sm">
                        상세보기
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
