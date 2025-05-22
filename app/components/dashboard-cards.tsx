import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Users, MessageSquare, TrendingUp, Calendar, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

export function DashboardCards() {
  const cards = [
    {
      title: "Total Followers",
      value: "12,546",
      change: "+2.5%",
      trend: "up",
      icon: Users,
      description: "Across all platforms",
    },
    {
      title: "Engagement Rate",
      value: "4.6%",
      change: "+0.8%",
      trend: "up",
      icon: MessageSquare,
      description: "Average across posts",
    },
    {
      title: "Scheduled Posts",
      value: "24",
      change: "7 days",
      trend: "neutral",
      icon: Calendar,
      description: "For the next week",
    },
    {
      title: "AI Suggestions",
      value: "15",
      change: "New",
      trend: "up",
      icon: Zap,
      description: "Ready to review",
    },
  ]

  return (
    <>
      {cards.map((card, index) => (
        <Card key={card.title} className="transition-all duration-200 hover:shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
            <card.icon className={cn(
              "w-4 h-4",
              card.trend === "up" ? "text-success" : 
              card.trend === "down" ? "text-destructive" : 
              "text-muted-foreground"
            )} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{card.value}</div>
            <div className="flex items-center gap-2">
              <p className="text-xs text-muted-foreground">{card.description}</p>
              {card.trend !== "neutral" && (
                <div className={cn(
                  "flex items-center text-xs",
                  card.trend === "up" ? "text-success" : "text-destructive"
                )}>
                  <TrendingUp className={cn(
                    "w-3 h-3 mr-1",
                    card.trend === "down" && "rotate-180"
                  )} />
                  {card.change}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  )
}
