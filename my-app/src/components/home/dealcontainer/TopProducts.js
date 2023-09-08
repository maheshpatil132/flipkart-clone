import React, { useEffect, useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useDispatch, useSelector } from 'react-redux';
import { GetTopProducts } from '../../../actions/ProductActions';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from '../productslider/Product';
import { CircularProgress } from '@mui/material';



export const PreviousBtn = ({ className, onClick, style }) => {
    return (
      <div className={className} onClick={onClick}>
        <ArrowBackIosIcon style={{ color: 'blue' }} fontSize='medium' />
      </div>
    )
  }
  
  export const NextBtn = ({ className, onClick, style }) => {
    return (
      <div className={className} onClick={onClick}>
        <ArrowForwardIosIcon style={{ color: 'blue' }} fontSize='medium' />
      </div>
    )
  }

const TopProducts = () => {
    
    const {products , loading} = useSelector(state=>state.TopProducts);
   
    const dispatch = useDispatch()
    


  const val = products ? Math.min(products.length, 5) : 5;

  // console.log(products);
  var settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: val,
    slidesToScroll: 1,
    initialSlide: 1,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
  };

  // const addwishlist = (elem)=>{
  //   dispatch(AddWish(elem))
  // } 



  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(GetTopProducts())
  }, [ dispatch])


  return (
    <div className='flex mt-4 bg-white border-3 shadow-sm'>
    {/* left side */}

    {/* right side */}
    <div className=' flex-1 py-2 overflow-hidden'>
      <div className=' border-b p-4'>
        <h1 className=' text-xl font-bold capitalize'>Top Selled Products</h1>

      </div>
      <div className='p-3 flex justify-center'>
        {!loading ?
          <div className=' w-full '>


            <Slider {...settings}>
              {
                products && products.map((elem, index) => {

                  return (
                    <Product key={index} elem={elem} index={index} />
                  )
                })

              }
            </Slider>
          </div>
          : <CircularProgress className=' text-center' />
        }
      </div>


    </div>
  </div>
  )
}

export default TopProducts