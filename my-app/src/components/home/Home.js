import React from 'react'
import Category from '../layout/categories/Category'
import BannerSlider from './Bannerslider/BannerSlider'
import Dealcontainer from './dealcontainer/dealcontainer'
import Productslider from './productslider/Productslider'


const Home = () => {
  return (
    <div className=' -z-50'>
      <Category/>
      {/* benner slider  */}
      <div className='p-4 flex flex-col gap-4'>

      <BannerSlider/>
      {/* deal container */}
      <Productslider/>
      <Productslider/>
      <Dealcontainer/>
      <Dealcontainer/>
      <Dealcontainer/>
      <Productslider/>
      {/* footer  */}

      </div>
     
    </div>
  )
}

export default Home