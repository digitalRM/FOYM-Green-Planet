"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { Month: "Jan", amount: 110122805 },
  { Month: "Feb", amount: 130120285 },
  { Month: "Mar", amount: 120122085 },
  { Month: "Apr", amount: 140120285 },
  { Month: "May", amount: 223012285 },
  { Month: "June", amount: 290122085 },
]

const chartConfig = {
  amount: {
    label: "Trees Cut",
    color: "#00683A",
  },
}

export function TreeChart({...props}) {
  return (
    <Card className="bg-white" {...props}>
      <CardHeader>
        <CardTitle>Trees Cut Down by Corporations</CardTitle>
        <CardDescription>Total trees cut in the last 6 months</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="Month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={true}
              className="w-48"
              content={<ChartTooltipContent hideLabel />} 
            />
            <Bar dataKey="amount" fill="#00683A" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Showing total trees cut in the last 6 months around the world.
        </div>
      </CardFooter>
    </Card>
  )
}
