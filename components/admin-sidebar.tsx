"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Calendar, Users, FileText, Settings, MapPin, Star, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "대시보드", href: "/admin", icon: LayoutDashboard },
  { name: "예약 관리", href: "/admin/bookings", icon: Calendar },
  { name: "고객 관리", href: "/admin/customers", icon: Users },
  { name: "지역 관리", href: "/admin/regions", icon: MapPin },
  { name: "후기 관리", href: "/admin/reviews", icon: Star },
  { name: "콘텐츠 관리", href: "/admin/content", icon: FileText },
  { name: "설정", href: "/admin/settings", icon: Settings },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold text-violet-600">총알출장마사지</h2>
        <p className="text-sm text-gray-600 mt-1">관리자 페이지</p>
      </div>

      <nav className="p-4 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                isActive ? "bg-violet-50 text-violet-600" : "text-gray-700 hover:bg-gray-50 hover:text-gray-900",
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>

      <div className="absolute bottom-0 w-64 p-4 border-t border-gray-200">
        <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 w-full transition-colors">
          <LogOut className="h-5 w-5" />
          로그아웃
        </button>
      </div>
    </aside>
  )
}
