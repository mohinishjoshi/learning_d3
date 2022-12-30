export interface IBarChartData {
  sprint: string;
  bugs: number;
}

export interface BarChartProps {
  data: IBarChartData[];
}