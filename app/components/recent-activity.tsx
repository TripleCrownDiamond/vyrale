import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentActivity() {
  // Mock data for recent activities
  const activities = [
    {
      id: 1,
      user: {
        name: "AI Assistant",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "AI",
      },
      action: "Generated 5 post ideas for your campaign",
      time: "10 minutes ago",
    },
    {
      id: 2,
      user: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "SJ",
      },
      action: "Scheduled a post for Instagram",
      time: "1 hour ago",
    },
    {
      id: 3,
      user: {
        name: "AI Assistant",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "AI",
      },
      action: "Optimized your LinkedIn post",
      time: "2 hours ago",
    },
    {
      id: 4,
      user: {
        name: "Mark Wilson",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "MW",
      },
      action: "Added a new team member",
      time: "Yesterday",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest actions on your account</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src={activity.user.avatar || "/placeholder.svg"} alt={activity.user.name} />
                <AvatarFallback>{activity.user.initials}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm">
                  <span className="font-medium">{activity.user.name}</span> {activity.action}
                </p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
