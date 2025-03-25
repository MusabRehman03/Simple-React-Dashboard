import * as React from "react";
import { useState, useEffect } from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function BasicPie() {
  const [chartWidth, setChartWidth] = useState(
    window.innerWidth > 1024 ? 388 : 600
  );
  const categoryArr = JSON.parse(localStorage.getItem('categoryArr'))||[]
  const productsArr= JSON.parse(localStorage.getItem("productsArr")) || []
  const categoryCount=[]

productsArr.forEach(element => {
  let i=0
  // console.log(element)
  while(i<categoryArr.length){
    if(element.category==categoryArr[i]){
      categoryCount[i] = parseInt(categoryCount[i] || 0) + 1;

    }
    i++
    // continue
  }
});
console.log(categoryArr)
console.log(categoryCount)
let data=[]
categoryArr.forEach((element,index)=>{
  let d={
    id:index,
    value:categoryCount[index],
   label:element.toString()
  }
  data.push(d)

})
console.log(data)

// console.log(categoryCount)
// categoryArr.forEach(element => {
//   setCategoryData(prevData=>({
//     ...prevData,
//     element
//   }))
// })
// console.log(categoryArr)

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
          data: data,
        },
      ]}
      width={chartWidth}
      height={250}
      sx={{ backgroundColor: "whitesmoke" }}
    />
  );
}
