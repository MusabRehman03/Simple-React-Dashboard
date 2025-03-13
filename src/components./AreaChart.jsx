import * as React from 'react';
import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390];
const xLabels = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Friday',
  'Saturday',
  'Sunday',
];

export default function AreaChart() {
  return (
    <LineChart
      width={670}
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
