import type React from "react"
import { Sidebar } from "@/components/sidebar"
import { MobileNav } from "@/components/mobile-nav"
import { UserProfileButton } from "@/components/user-profile-button"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-gray-light dark:bg-gray-dark">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <header className="sticky top-0 z-10 flex items-center justify-between h-16 px-4 border-b bg-white dark:bg-gray-dark border-gray-medium/20 dark:border-gray-medium/10">
          <MobileNav />
          <div className="flex items-center ml-auto space-x-4">
            <UserProfileButton />
          </div>
        </header>
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
