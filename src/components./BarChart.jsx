import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { dataset, valueFormatter } from './dataset/weather';

const chartSetting = {
  yAxis: [
    {
      label: 'Yearly Expense (MIllion)',
    },
  ],
  width: 670,
  height: 250,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-10px, 0)',
    },backgroundColor:'whitesmoke'
  },
};

export default function BarsDataset() {
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
