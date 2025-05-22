import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function SocialAccounts() {
  // Mock data for connected social accounts
  const accounts = [
    {
      id: 1,
      platform: "Instagram",
      handle: "@vyrale.official",
      status: "connected",
    },
    {
      id: 2,
      platform: "Facebook",
      handle: "Vyrale Official",
      status: "connected",
    },
    {
      id: 3,
      platform: "Twitter",
      handle: "@vyrale",
      status: "connected",
    },
    {
      id: 4,
      platform: "LinkedIn",
      handle: "Vyrale",
      status: "disconnected",
    },
  ]

  // Helper function to get platform icon color
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
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Social Accounts</CardTitle>
          <CardDescription>Manage your connected platforms</CardDescription>
        </div>
        <Button variant="outline" size="sm">
          <PlusCircle className="w-4 h-4 mr-2" />
          Add Account
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {accounts.map((account) => (
            <div key={account.id} className="flex items-center justify-between p-2 border rounded-md border-border">
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${getPlatformColor(account.platform)}`}
                >
                  {account.platform.charAt(0)}
                </div>
                <div>
                  <p className="font-medium">{account.platform}</p>
                  <p className="text-xs text-muted-foreground">{account.handle}</p>
                </div>
              </div>
              <Badge variant={account.status === "connected" ? "default" : "outline"}>
                {account.status === "connected" ? "Connected" : "Disconnected"}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
