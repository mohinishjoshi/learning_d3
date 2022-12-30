import { useState, useEffect } from 'react';
import { csv } from 'd3-fetch';
import { ascending } from 'd3-array';
import React from 'react';
import BarChart from './BarChart';
import { IBarChartData } from '../../types/bar-chart-types';

const parseNA = (string: string) => (string === 'NA' ? undefined : string)

function type(d: { sprint: any; bugs: string | number }) {
  return {
    sprint: parseNA(d.sprint),
    bugs: +d.bugs,
  }
}

function filterData(data: IBarChartData[]) {
  return data.filter(d => {
    return d.bugs > 0
  })
}

function prepareBarChartData(data: IBarChartData[]) {
  return data;
}

const BarChartData = () => {
  const [barChartData, setBarChartData] = useState(null)

  useEffect(() => {
    csv('/static/data/barchart.csv', type).then((data: IBarChartData[]) => {
      const dataClean = filterData(data);
      setBarChartData(
        prepareBarChartData(dataClean).sort((a, b) => {
          return ascending(a.sprint, b.sprint)
        }),
      );
    });
  }, [])

  if (barChartData === null) {
    return (<p>Loading...</p>);
  }

  return <BarChart data={barChartData} />
}

export default BarChartData
