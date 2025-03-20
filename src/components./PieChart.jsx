import * as React from 'react';
import { useState, useEffect } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {
  const [chartWidth, setChartWidth] = useState(window.innerWidth > 1024 ? 388 : 600);

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth > 1350){
        setChartWidth(388); // Large screens
      }
      else if (window.innerWidth > 1024) {
        setChartWidth(880); // Large screens
      } else if (window.innerWidth > 768) {
        setChartWidth(750); // Medium screens
      } else {
        setChartWidth(500); // Small screens
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      width={chartWidth}
      height={250}
      sx={{backgroundColor:'whitesmoke'}}
    />
  );
}
