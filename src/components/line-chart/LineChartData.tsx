import { useState, useEffect } from 'react';
import { csv } from 'd3-fetch';
import { ascending } from 'd3-array';
import React from 'react';
import { ILineChartData } from '../../types/line-chart-types';
import LineChart from './LineChart';


const parseNA = (string: string) => (string === 'NA' ? undefined : string)

function type(d: { sprint: any; bugs: string | number }) {
  return {
    sprint: parseNA(d.sprint),
    bugs: +d.bugs,
  }
}

function filterData(data: ILineChartData[]) {
  return data.filter(d => {
    return d.bugs > 0
  })
}

function prepareLineChartData(data: ILineChartData[]) {
  return data;
}

const LineChartData = () => {
  const [lineChartData, setLineChartData] = useState(null)

  useEffect(() => {
    csv('/static/data/linechart.csv', type).then((data: ILineChartData[]) => {
      const dataClean = filterData(data);
      setLineChartData(
        prepareLineChartData(dataClean).sort((a, b) => {
          return ascending(a.sprint, b.sprint)
        }),
      );
    });
  }, [])

  if (lineChartData === null) {
    return (<p>Loading...</p>);
  }

  return <LineChart data={lineChartData} />
}

export default LineChartData
