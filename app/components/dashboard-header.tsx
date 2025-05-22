"use client"

import { Button } from "@/components/ui/button"
import { PlusCircle, Bell, Settings } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DashboardHeader() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Welcome back, User! 👋</h1>
          <p className="text-muted-foreground">Here's what's happening with your social media today.</p>
        </div>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Bell className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>View all notifications</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
          <Button>
            <PlusCircle className="w-4 h-4 mr-2" />
            Create New Post
          </Button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
          <p className="text-sm font-medium text-primary">AI Assistant</p>
          <p className="text-sm text-muted-foreground">5 new content suggestions ready for review</p>
        </div>
        <div className="p-4 rounded-lg bg-success/5 border border-success/10">
          <p className="text-sm font-medium text-success">Engagement</p>
          <p className="text-sm text-muted-foreground">Your posts are performing 12% better than last week</p>
        </div>
        <div className="p-4 rounded-lg bg-warning/5 border border-warning/10">
          <p className="text-sm font-medium text-warning">Schedule</p>
          <p className="text-sm text-muted-foreground">3 posts scheduled for today</p>
        </div>
      </div>
    </div>
  )
}
