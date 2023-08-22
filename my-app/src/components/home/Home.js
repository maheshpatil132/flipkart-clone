import React from 'react'
import Category from '../layout/categories/Category'
import BannerSlider from './Bannerslider/BannerSlider'
import Dealcontainer from './dealcontainer/dealcontainer'
import Productslider from './productslider/Productslider'
import { CircularProgress } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getproduct } from '../../actions/ProductActions'


const Home = () => {


  // const {loading , products }= useSelector(state => state.AllProducts)
  const loading = false;
  const dispatch = useDispatch();
  const key = ''
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
        {
          loading ?
            <div className=' p-10 justify-center items-center flex flex-1 bg-white w-full border'>
              <CircularProgress />
            </div>
            :
            <>
              <Productslider category={"electronics"}  />
              <Productslider category={"women's clothing"}/>
              {/* <Dealcontainer />
              <Dealcontainer />
              <Dealcontainer /> */}
              <Productslider category={"men's clothing"}/>
            </>
        }

        {/* footer  */}

      </div>

    </div>
  )
}

export default Home