export interface ILineChartData {
    sprint: string;
    bugs: number;
}

export interface LineChartProps {
    data: ILineChartData[];
}