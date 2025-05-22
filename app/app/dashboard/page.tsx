import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardCards } from "@/components/dashboard-cards"
import { ContentCalendar } from "@/components/content-calendar"
import { RecentActivity } from "@/components/recent-activity"
import { SocialAccounts } from "@/components/social-accounts"
import { PerformanceChart } from "@/components/performance-chart"

export const metadata: Metadata = {
  title: "Dashboard | ⚡vyrale",
  description: "Manage your social media presence with ⚡vyrale",
}

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <DashboardHeader />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCards />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <div className="lg:col-span-4">
          <PerformanceChart />
        </div>
        <div className="lg:col-span-3">
          <SocialAccounts />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <div className="lg:col-span-4">
          <ContentCalendar />
        </div>
        <div className="lg:col-span-3">
          <RecentActivity />
        </div>
      </div>
    </div>
  )
}
