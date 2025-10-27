import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Calendar, DollarSign, TrendingUp } from "lucide-react"

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">대시보드</h1>
        <p className="text-gray-600 mt-2">총알출장마사지 관리자 페이지</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">총 예약</CardTitle>
            <Calendar className="h-4 w-4 text-violet-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">1,234</div>
            <p className="text-xs text-green-600 mt-1">+12% 지난달 대비</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">신규 고객</CardTitle>
            <Users className="h-4 w-4 text-violet-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">456</div>
            <p className="text-xs text-green-600 mt-1">+8% 지난달 대비</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">총 매출</CardTitle>
            <DollarSign className="h-4 w-4 text-violet-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">₩12,345,000</div>
            <p className="text-xs text-green-600 mt-1">+15% 지난달 대비</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">평균 평점</CardTitle>
            <TrendingUp className="h-4 w-4 text-violet-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">4.8</div>
            <p className="text-xs text-green-600 mt-1">+0.2 지난달 대비</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>최근 예약</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "김○○", service: "타이마사지 90분", time: "2시간 전", status: "완료" },
                { name: "박○○", service: "힐링스웨디시 60분", time: "4시간 전", status: "진행중" },
                { name: "이○○", service: "VIP 패키지 120분", time: "6시간 전", status: "예약" },
                { name: "최○○", service: "타이마사지 60분", time: "8시간 전", status: "완료" },
              ].map((booking, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b last:border-0">
                  <div>
                    <p className="font-medium text-gray-900">{booking.name}</p>
                    <p className="text-sm text-gray-600">{booking.service}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">{booking.time}</p>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        booking.status === "완료"
                          ? "bg-green-100 text-green-700"
                          : booking.status === "진행중"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>인기 서비스</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { service: "타이마사지", bookings: 456, percentage: 37 },
                { service: "힐링스웨디시", bookings: 389, percentage: 32 },
                { service: "VIP 패키지", bookings: 267, percentage: 22 },
                { service: "기타", bookings: 122, percentage: 9 },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">{item.service}</span>
                    <span className="text-sm text-gray-600">{item.bookings}건</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-violet-600 h-2 rounded-full" style={{ width: `${item.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
