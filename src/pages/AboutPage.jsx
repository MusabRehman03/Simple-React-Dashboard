import React from 'react'
import { Link } from 'react-router-dom'
import ResponsiveDrawer from '../ResponsiveDrawer'
// import MiniDrawer from ''
function AboutPage() {
  return (
    <>
{/* <ResponsiveDrawer/> */}
    <div className='h-[100vh] w-[100vw] xl:ml-[120px] ml-0 flex justify-center items-center'>
      <h1 className='font-extrabold text-4xl'>This Is About Page</h1>
    </div>
    </>
  )
}

export default AboutPage
