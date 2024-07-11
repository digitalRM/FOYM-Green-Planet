"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

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
  { treeType: "Pine", amount: 294001030, fill: "var(--color-pine)" },
  { treeType: "Maple", amount: 180014000, fill: "var(--color-maple)" },
  { treeType: "Oak", amount: 129002300, fill: "var(--color-oak)" },
]

const chartConfig = {
  amount: {
    label: "Trees Planted",
  },
  pine: {
    label: "Pine Trees",
    color: "#00683A",
  },
  maple: {
    label: "Maple Trees",
    color: "#014024",
  },
  oak: {
    label: "Oak Trees",
    color: "#0a7d4a",
  },
}

export function TreesChartTwo({ ...props }) {
  const totalTrees = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.amount, 0)
  }, [])

  return (
    <Card className="flex flex-col" {...props}>
      <CardHeader className="items-center pb-0">
        <CardTitle>Trees Planted by Us</CardTitle>
        <CardDescription>January 2021 - January 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={true}
              className="w-40"
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="treeType"
              innerRadius={70}
              strokeWidth={50}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-lg font-bold"
                        >
                          {totalTrees.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Trees Planted
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          On our way to planting 1 billion trees by 2028!
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total trees planted by us from 2021 to 2024.
        </div>
      </CardFooter>
    </Card>
  )
}
