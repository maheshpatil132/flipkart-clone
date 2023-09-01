import React, { Suspense } from 'react'
import Category from '../layout/categories/Category'
import BannerSlider from './Bannerslider/BannerSlider'
import Productslider from './productslider/Productslider'

import { CircularProgress } from '@mui/material'

const SliderComponent = React.lazy(() => import('./productslider/Productslider'));
const Home = () => {


  // const {loading , products }= useSelector(state => state.AllProducts)
  const loading = false;

  // useEffect(() => {
  //   dispatch(getproduct(key))
  //   window.scrollTo(0,0)
  // }, [ dispatch])
  return (
    <div className=' -z-50'>
      <Category />
      {/* benner slider  */}
      <div className='p-4 flex flex-col gap-4'>

        <BannerSlider />
        {/* deal container */}

        <Suspense fallback={<div>Loading...</div>}>
          <section>
            <SliderComponent  category={"electronics"} />
            <SliderComponent category={"women's clothing"}/>
            {/* <SliderComponent category={"men's clothing"}/> */}
          </section>
        </Suspense>




        {/* footer  */}

      </div>

    </div>
  )
}

export default Home