"use client"

import * as React from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  TooltipProps
} from "recharts"
import { cn } from "@/lib/utils"

interface ChartData {
  name: string
  value: number
  [key: string]: string | number
}

interface ChartProps {
  data: ChartData[]
  className?: string
  barProps?: React.ComponentProps<typeof Bar>
}

export function Chart({ data, className, barProps, ...props }: ChartProps) {
  return (
    <div className={cn("h-[350px]", className)}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar 
            dataKey="value" 
            fill="#8884d8" 
            radius={[4, 4, 0, 0]} 
            {...barProps} 
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

interface CustomTooltipProps extends TooltipProps<number, string> {
  active?: boolean
  payload?: {
    name: string
    value: number
    payload: any
    color: string
    dataKey: string
  }[]
  label?: string
}

const CustomTooltip = ({
  active,
  payload,
  label,
}: CustomTooltipProps) => {
  if (!active || !payload || !payload.length) return null

  return (
    <div className="rounded-md border bg-background p-4 shadow-sm">
      <p className="font-medium">{label}</p>
      <div className="grid gap-1">
        {payload.map((item, index) => (
          <div key={`item-${index}`} className="flex items-center gap-2">
            <div
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-muted-foreground">{item.name}:</span>
            <span className="font-medium">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}