import React, { useEffect } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useSelector, useDispatch } from 'react-redux'
import { getproduct } from '../../../actions/ProductActions';
import { CircularProgress } from '@mui/material';
import Product from './Product';




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






const Productslider = ({ category, page }) => {

  const { products, loading } = useSelector(state => state.AllProducts)
  const dispatch = useDispatch()
  const val = products && products[category] ? Math.min(products[category].length, 5) : 5;

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


  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(getproduct("", "", "", page, category, 0, category))
  }, [category, dispatch, page])

  return (
    <div className='flex mt-4 bg-white border-3 shadow-sm'>
      {/* left side */}

      {/* right side */}
      <div className=' flex-1 py-2 overflow-hidden'>
        <div className=' border-b p-4'>
          <h1 className=' text-xl font-bold capitalize'>Best of {category}</h1>

        </div>
        <div className='p-3 flex justify-center'>
          {!loading ?
            <div className=' w-full '>


              <Slider {...settings}>
                {
                  products && products[category] && products[category].map((elem, index) => {

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

export default Productslider