"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Menu,
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

export function MobileNav() {
  const [open, setOpen] = React.useState(false)
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
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="px-0 mr-2 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="w-6 h-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <div className="flex items-center gap-2 px-7">
          <Link href="/" className="flex items-center gap-2 font-heading" onClick={() => setOpen(false)}>
            <Zap className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold">⚡vyrale</span>
          </Link>
        </div>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
          <div className="pl-6 pr-8">
            {routes.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-light dark:hover:bg-gray-dark/80 hover:text-primary transition-colors",
                  pathname === item.href
                    ? "bg-gray-light dark:bg-gray-dark/80 text-primary"
                    : "text-gray-dark dark:text-gray-medium",
                )}
                onClick={() => setOpen(false)}
              >
                {item.icon}
                {item.title}
              </Link>
            ))}
          </div>
        </ScrollArea>
        <div className="px-6">
          <Button className="w-full" variant="outline">
            <Zap className="w-4 h-4 mr-2 text-primary" />
            Upgrade Plan
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
