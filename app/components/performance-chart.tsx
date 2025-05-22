"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, TrendingUp, TrendingDown } from "lucide-react"

export function PerformanceChart() {
  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>Performance Overview</CardTitle>
          <CardDescription>Track your social media performance</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Engagement Rate</p>
              <div className="flex items-center gap-2">
                <p className="text-2xl font-bold">4.6%</p>
                <div className="flex items-center text-success">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm">+0.8%</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Reach</p>
              <div className="flex items-center gap-2">
                <p className="text-2xl font-bold">24.5K</p>
                <div className="flex items-center text-success">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm">+12%</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Conversion</p>
              <div className="flex items-center gap-2">
                <p className="text-2xl font-bold">2.4%</p>
                <div className="flex items-center text-destructive">
                  <TrendingDown className="w-4 h-4" />
                  <span className="text-sm">-0.3%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[300px] flex items-center justify-center border rounded-lg bg-gray-light/50 dark:bg-gray-dark/50">
            <div className="text-center">
              <BarChart3 className="w-12 h-12 mx-auto text-muted-foreground" />
              <p className="mt-2 text-sm text-muted-foreground">Performance chart will be displayed here</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 