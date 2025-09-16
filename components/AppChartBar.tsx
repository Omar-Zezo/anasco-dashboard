"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

interface Props {
  chartData: {
    id: number;
    month: string;
    desktop: number;
    mobile: number;
  }[];
}

const AppChartBar = ({ chartData }: Props) => {
  return (
    <div>
      <div className="flex max-lg:flex-col max-lg:gap-2 items-center mb-6">
        <h3 className="text-lg font-medium">Traffic By Device</h3>
        <div className="ml-4 flex items-center gap-4 text-sm">
          <div className="flex items-center gap-4">
            <p className="text-muted-foreground">Total Projects</p>
            <p className="text-muted-foreground">Operating Status</p>
          </div>
          <span className="text-muted-foreground">|</span>
          <div className="flex items-center gap-4">
            <p className="text-primary flex items-center gap-2">
              <span className="size-2 rounded-full bg-primary"></span>
              Current Week
            </p>
            <p className="text-primary flex items-center gap-2">
              <span className="size-2 rounded-full bg-slate-400"></span>
              Previews Week
            </p>
          </div>
        </div>
      </div>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis tickLine={false} tickMargin={10} axisLine={false} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default AppChartBar;
