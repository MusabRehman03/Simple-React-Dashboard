import React from 'react'
import ResponsiveDrawer from '../ResponsiveDrawer'
import SelectActionCard from '../components./Cards'
import  LineChart  from '../components./LineChart'
import PieChart from '../components./PieChart'
import BarChart from '../components./BarChart'
import AreaChart from '../components./AreaChart'
// import BasicGrid from '../Grid'
function HomePage() {
  return (
    <div >
        <div className="flex flex-col gap-10 xl:ml-[300px] xl:mr-[70px] mr-0 ml-0 items-center  mt-28">
          <SelectActionCard />
          <div className="flex xl:flex-row flex-col items-center gap-10 ">
            <LineChart />
            <PieChart />
          </div>
          <div className="flex xl:flex-row flex-col items-center gap-10">
            <AreaChart />
            <BarChart />
          </div>
        </div>
    </div>
  )
}

export default HomePage
