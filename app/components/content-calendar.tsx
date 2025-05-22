import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ChevronLeft, ChevronRight, Plus } from "lucide-react"

export function ContentCalendar() {
  // Mock data for upcoming posts
  const upcomingPosts = [
    {
      id: 1,
      title: "Product Launch Announcement",
      date: "2025-05-20T10:00:00",
      platforms: ["Instagram", "Facebook", "LinkedIn"],
      status: "scheduled",
    },
    {
      id: 2,
      title: "Weekly Tips & Tricks",
      date: "2025-05-21T14:30:00",
      platforms: ["Twitter", "Instagram"],
      status: "draft",
    },
    {
      id: 3,
      title: "Customer Success Story",
      date: "2025-05-22T09:00:00",
      platforms: ["LinkedIn", "Facebook"],
      status: "scheduled",
    },
    {
      id: 4,
      title: "Industry News Roundup",
      date: "2025-05-23T16:00:00",
      platforms: ["Twitter", "LinkedIn"],
      status: "scheduled",
    },
    {
      id: 5,
      title: "Weekend Special Offer",
      date: "2025-05-24T11:00:00",
      platforms: ["Instagram", "Facebook"],
      status: "draft",
    },
  ]

  // Helper function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(date)
  }

  // Helper function to get platform color
  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case "Instagram":
        return "bg-[#E1306C] text-white"
      case "Facebook":
        return "bg-[#1877F2] text-white"
      case "Twitter":
        return "bg-[#1DA1F2] text-white"
      case "LinkedIn":
        return "bg-[#0A66C2] text-white"
      default:
        return "bg-gray-medium text-white"
    }
  }

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Content Calendar</CardTitle>
          <CardDescription>Manage your upcoming posts</CardDescription>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm">
            <Calendar className="w-4 h-4 mr-2" />
            May 19-25, 2025
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight className="w-4 h-4" />
          </Button>
          <Button size="sm">
            <Plus className="w-4 h-4 mr-2" />
            New Post
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingPosts.map((post) => (
            <div
              key={post.id}
              className="flex items-center p-3 border rounded-lg border-border hover:bg-gray-light dark:hover:bg-gray-dark/80 transition-colors"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{post.title}</h3>
                  <Badge variant={post.status === "scheduled" ? "default" : "outline"}>
                    {post.status === "scheduled" ? "Scheduled" : "Draft"}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{formatDate(post.date)}</p>
              </div>
              <div className="flex items-center gap-2">
                {post.platforms.map((platform) => (
                  <Badge key={platform} className={getPlatformColor(platform)}>
                    {platform}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
