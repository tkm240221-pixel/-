import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, UserPlus } from "lucide-react"

export default function CustomersPage() {
  const customers = [
    {
      id: "C001",
      name: "김○○",
      phone: "010-1234-5678",
      email: "kim***@email.com",
      region: "강남구",
      totalBookings: 12,
      totalSpent: "1,200,000원",
      lastVisit: "2024-01-15",
      status: "VIP",
    },
    {
      id: "C002",
      name: "박○○",
      phone: "010-2345-6789",
      email: "park***@email.com",
      region: "서초구",
      totalBookings: 8,
      totalSpent: "800,000원",
      lastVisit: "2024-01-14",
      status: "일반",
    },
    {
      id: "C003",
      name: "이○○",
      phone: "010-3456-7890",
      email: "lee***@email.com",
      region: "송파구",
      totalBookings: 5,
      totalSpent: "500,000원",
      lastVisit: "2024-01-13",
      status: "일반",
    },
    {
      id: "C004",
      name: "최○○",
      phone: "010-4567-8901",
      email: "choi***@email.com",
      region: "강서구",
      totalBookings: 15,
      totalSpent: "1,500,000원",
      lastVisit: "2024-01-15",
      status: "VIP",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">고객 관리</h1>
          <p className="text-gray-600 mt-2">전체 고객 정보를 관리합니다</p>
        </div>
        <Button className="bg-violet-600 hover:bg-violet-700">
          <UserPlus className="h-4 w-4 mr-2" />
          고객 추가
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-gray-900">1,234</div>
            <p className="text-sm text-gray-600 mt-1">전체 고객</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-violet-600">156</div>
            <p className="text-sm text-gray-600 mt-1">VIP 고객</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-green-600">89</div>
            <p className="text-sm text-gray-600 mt-1">이번 달 신규</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-gray-900">4.8</div>
            <p className="text-sm text-gray-600 mt-1">평균 만족도</p>
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
                placeholder="고객명, 전화번호, 이메일로 검색..."
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
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">고객번호</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">이름</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">연락처</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">이메일</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">지역</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">예약 횟수</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">총 결제액</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">상태</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">작업</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customer.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 text-sm text-gray-900">{customer.id}</td>
                    <td className="py-4 px-4 text-sm font-medium text-gray-900">{customer.name}</td>
                    <td className="py-4 px-4 text-sm text-gray-600">{customer.phone}</td>
                    <td className="py-4 px-4 text-sm text-gray-600">{customer.email}</td>
                    <td className="py-4 px-4 text-sm text-gray-600">{customer.region}</td>
                    <td className="py-4 px-4 text-sm text-gray-900">{customer.totalBookings}회</td>
                    <td className="py-4 px-4 text-sm font-medium text-gray-900">{customer.totalSpent}</td>
                    <td className="py-4 px-4">
                      <Badge
                        className={
                          customer.status === "VIP" ? "bg-yellow-100 text-yellow-700" : "bg-gray-100 text-gray-700"
                        }
                      >
                        {customer.status}
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
