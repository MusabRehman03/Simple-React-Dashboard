import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { dataset, valueFormatter } from './dataset/weather';
import { useState } from 'react';
import { useEffect } from 'react';


export default function BarsDataset() {
  const [chartWidth, setChartWidth] = useState(window.innerWidth > 1024 ? 635 : 600);

useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth > 1376) {
      setChartWidth(635); // Large screens
    }else if (window.innerWidth > 1278) {
      setChartWidth(590); // Large screens
    } else if (window.innerWidth > 1024) {
      setChartWidth(880); // Large screens
    }else if (window.innerWidth > 768) {
      setChartWidth(750); // Medium screens
    } else {
      setChartWidth(500); // Small screens
    }
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);
const chartSetting = {
  yAxis: [
    {
      label: 'Yearly Expense (MIllion)',
    },
  ],
  width: chartWidth,
  height: 250,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-10px, 0)',
    },backgroundColor:'whitesmoke'
  },
};
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        { dataKey: 'london', label: '2015', valueFormatter },
        { dataKey: 'paris', label: '2016', valueFormatter },
        { dataKey: 'newYork', label: '2017', valueFormatter },
        { dataKey: 'seoul', label: '2018', valueFormatter },
      ]}
      {...chartSetting}
    />
  );
}
