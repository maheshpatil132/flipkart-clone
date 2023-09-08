import React, { Suspense } from 'react'
import Category from '../layout/categories/Category'
import BannerSlider from './Bannerslider/BannerSlider'
import TopProducts from './dealcontainer/TopProducts'
import MetaData from '../layout/MetaData';

const SliderComponent = React.lazy(() => import('./productslider/Productslider'));


const Home = () => {
  return (
    <div className=' -z-50'>
      <MetaData title={"Flipkart clone | Home"}/>
      <Category />
      {/* benner slider  */}
      <div className='p-4 flex flex-col gap-4'>

        <BannerSlider />
        {/* deal container */}

        <Suspense fallback={<div>Loading...</div>}>
          <section>
            {/* <Dealcontainer/> */}
            <SliderComponent category={"electronics"} />
            <SliderComponent category={"women's clothing"} />
            <TopProducts />
            {/* <SliderComponent category={"men's clothing"}/> */}
          </section>
        </Suspense>




        {/* footer  */}

      </div>

    </div>
  )
}

export default Home