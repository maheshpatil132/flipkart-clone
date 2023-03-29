import React from 'react'
import Slider from 'react-slick'
import Banner1 from '../../../assets/banner1.webp'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './carousel.css'


export const PreviousBtn = ({ className, onClick }) => {
    return (
      <div className={className} onClick={onClick}>
        <ArrowBackIosIcon style={{color:'blue'}} fontSize='medium' />
      </div>
    )
  }
  
  export const NextBtn = ({ className, onClick}) => {
    return (
      <div className={className}  onClick={onClick}>
        <ArrowForwardIosIcon style={{color:'blue'}} fontSize='medium' />
      </div>
    )
  }

const BannerSlider = () => {
    

    var settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PreviousBtn />,
        nextArrow: <NextBtn />,
    };


    return (
        <div className=" w-full rounded-sm relative overflow-hidden">
            <Slider {...settings}>
                
                    <img className=' h-[47vh] w-full object-cover' src={Banner1} alt="" />
                    <img className=' h-[47vh] w-full object-cover' src={Banner1} alt="" />
                    <img className=' h-[47vh] w-full object-cover' src={Banner1} alt="" />
                    <img className=' h-[47vh] w-full object-cover' src={Banner1} alt="" />
              
            </Slider>

        </div>
    )
}

export default BannerSlider