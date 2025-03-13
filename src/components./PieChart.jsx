import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'Jan-April' },
            { id: 1, value: 15, label: 'May-Aug' },
            { id: 2, value: 20, label: 'Sep-Dec' },
          ],
        },
      ]}
      width={388}
      height={250}
      sx={{backgroundColor:'whitesmoke'}}
    />
  );
}
