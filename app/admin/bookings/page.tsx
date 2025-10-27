import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Download } from "lucide-react"

export default function BookingsPage() {
  const bookings = [
    {
      id: "BK001",
      customer: "김○○",
      phone: "010-1234-5678",
      service: "타이마사지 90분",
      region: "강남구",
      address: "서울시 강남구 테헤란로 123",
      date: "2024-01-15",
      time: "14:00",
      price: "100,000원",
      status: "완료",
    },
    {
      id: "BK002",
      customer: "박○○",
      phone: "010-2345-6789",
      service: "힐링스웨디시 60분",
      region: "서초구",
      address: "서울시 서초구 강남대로 456",
      date: "2024-01-15",
      time: "16:00",
      price: "90,000원",
      status: "진행중",
    },
    {
      id: "BK003",
      customer: "이○○",
      phone: "010-3456-7890",
      service: "VIP 패키지 120분",
      region: "송파구",
      address: "서울시 송파구 올림픽로 789",
      date: "2024-01-15",
      time: "18:00",
      price: "160,000원",
      status: "예약",
    },
    {
      id: "BK004",
      customer: "최○○",
      phone: "010-4567-8901",
      service: "타이마사지 60분",
      region: "강서구",
      address: "서울시 강서구 공항대로 321",
      date: "2024-01-15",
      time: "20:00",
      price: "80,000원",
      status: "예약",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">예약 관리</h1>
          <p className="text-gray-600 mt-2">전체 예약 내역을 관리합니다</p>
        </div>
        <Button className="bg-violet-600 hover:bg-violet-700">
          <Download className="h-4 w-4 mr-2" />
          엑셀 다운로드
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="고객명, 전화번호, 예약번호로 검색..."
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
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">예약번호</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">고객명</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">연락처</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">서비스</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">지역</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">날짜/시간</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">금액</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">상태</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">작업</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 text-sm text-gray-900">{booking.id}</td>
                    <td className="py-4 px-4 text-sm text-gray-900">{booking.customer}</td>
                    <td className="py-4 px-4 text-sm text-gray-600">{booking.phone}</td>
                    <td className="py-4 px-4 text-sm text-gray-900">{booking.service}</td>
                    <td className="py-4 px-4 text-sm text-gray-600">{booking.region}</td>
                    <td className="py-4 px-4 text-sm text-gray-600">
                      {booking.date} {booking.time}
                    </td>
                    <td className="py-4 px-4 text-sm font-medium text-gray-900">{booking.price}</td>
                    <td className="py-4 px-4">
                      <Badge
                        className={
                          booking.status === "완료"
                            ? "bg-green-100 text-green-700"
                            : booking.status === "진행중"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-yellow-100 text-yellow-700"
                        }
                      >
                        {booking.status}
                      </Badge>
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
