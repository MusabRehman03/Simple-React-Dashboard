import * as React from 'react';
import { useState, useEffect } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490,3600,4200,2300,3630,1900];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300,4000, 3000, 2000, 2780,];
const xLabels = [
  'Jan',
  'Feb',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

export default function BiaxialLineChart() {

  const [chartWidth, setChartWidth] = useState(window.innerWidth > 1024 ? 880 : 600);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1376) {
        setChartWidth(880); // Large screens
      }else if (window.innerWidth > 1278) {
        setChartWidth(800); // Large screens
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

  return (
    <LineChart
      width={chartWidth}
      height={250}
      series={[
        { data: pData, label: 'Income', yAxisId: 'leftAxisId' },
        { data: uData, label: 'Expense', yAxisId: 'rightAxisId' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      yAxis={[{ id: 'leftAxisId' }, { id: 'rightAxisId' }]}
      rightAxis="rightAxisId"
      sx={{backgroundColor:'whitesmoke'}}
    />

  );
}
