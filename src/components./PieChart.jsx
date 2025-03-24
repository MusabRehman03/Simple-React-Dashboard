import * as React from "react";
import { useState, useEffect } from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function BasicPie() {
  const [chartWidth, setChartWidth] = useState(
    window.innerWidth > 1024 ? 388 : 600
  );
  const [category,setCategory]=useState(JSON.parse(localStorage.getItem("categoryArr")) || [])
  const [arr, setArr] = useState(JSON.parse(localStorage.getItem("productsArr")) || []);
  const [categoryData,setCategoryData]=useState([])
  const [categoryCount,setCategoryCount]=useState([])


useEffect(()=>{
  let temp = category
  temp.forEach((item)=>{
    setCategoryData({
      ...categoryData,
      item
    })
  })
},[category])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1376) {
        setChartWidth(388); // xLarge screens
      } else if (window.innerWidth > 1279) {
        setChartWidth(388); // Large screens
      } else if (window.innerWidth > 1024) {
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
  // useEffect({});
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: categoryData[0] },
            { id: 1, value: 15, label: categoryData[1] },
            { id: 2, value: 20, label: categoryData[2] },
          ],
        },
      ]}
      width={chartWidth}
      height={250}
      sx={{ backgroundColor: "whitesmoke" }}
    />
  );
}
