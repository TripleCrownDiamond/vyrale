"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  LayoutDashboard,
  Calendar,
  MessageSquare,
  BarChart3,
  Settings,
  Users,
  Zap,
  PenTool,
  Sparkles,
  Lightbulb,
} from "lucide-react"

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string
    title: string
    icon: React.ReactNode
  }[]
}

export function Sidebar({ className }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()

  const routes = [
    {
      href: "/dashboard",
      title: "Dashboard",
      icon: <LayoutDashboard className="w-5 h-5" />,
    },
    {
      href: "/dashboard/content",
      title: "Content Creation",
      icon: <PenTool className="w-5 h-5" />,
    },
    {
      href: "/dashboard/ai-assistant",
      title: "AI Assistant",
      icon: <Sparkles className="w-5 h-5" />,
    },
    {
      href: "/dashboard/schedule",
      title: "Schedule",
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      href: "/dashboard/engage",
      title: "Engagement",
      icon: <MessageSquare className="w-5 h-5" />,
    },
    {
      href: "/dashboard/analytics",
      title: "Analytics",
      icon: <BarChart3 className="w-5 h-5" />,
    },
    {
      href: "/dashboard/ideas",
      title: "Content Ideas",
      icon: <Lightbulb className="w-5 h-5" />,
    },
    {
      href: "/dashboard/team",
      title: "Team",
      icon: <Users className="w-5 h-5" />,
    },
    {
      href: "/dashboard/settings",
      title: "Settings",
      icon: <Settings className="w-5 h-5" />,
    },
  ]

  return (
    <aside className="hidden border-r md:block w-64 border-gray-medium/20 dark:border-gray-medium/10">
      <div className="flex flex-col h-full">
        <div className="flex items-center h-16 px-6 border-b border-gray-medium/20 dark:border-gray-medium/10">
          <Link href="/" className="flex items-center gap-2 font-heading">
            <Zap className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold">⚡vyrale</span>
          </Link>
        </div>
        <ScrollArea className="flex-1 py-4">
          <SidebarNav items={routes} />
        </ScrollArea>
        <div className="p-4 mt-auto">
          <Button className="w-full" variant="outline">
            <Zap className="w-4 h-4 mr-2 text-primary" />
            Upgrade Plan
          </Button>
        </div>
      </div>
    </aside>
  )
}

export function SidebarNav({ items, className, ...props }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <nav className={cn("grid gap-1 px-2", className)} {...props}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-light dark:hover:bg-gray-dark/80 hover:text-primary transition-colors",
            pathname === item.href
              ? "bg-gray-light dark:bg-gray-dark/80 text-primary"
              : "text-gray-dark dark:text-gray-medium",
          )}
        >
          {item.icon}
          {item.title}
        </Link>
      ))}
    </nav>
  )
}
