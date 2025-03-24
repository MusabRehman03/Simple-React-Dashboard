import * as React from 'react';
import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart';
import { useState } from 'react';
import { useEffect } from 'react';
const uData = [4000, 3000, 2000, 2780, 1890, 2390];
const xLabels = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Friday',
  'Saturday',
  'Sunday',
];

function AreaChart() {
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
  return (
    <LineChart
      width={chartWidth}
      height={250}
      series={[{ data: uData, label: 'Activity', area: true, showMark: false }]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      sx={{
        [`& .${lineElementClasses.root}`]: {
          display: 'none',
        },backgroundColor:'whitesmoke'
      }}
    />
  );
}
export default AreaChart
