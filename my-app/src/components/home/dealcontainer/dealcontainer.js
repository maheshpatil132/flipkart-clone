import React from 'react'
import Slider from 'react-slick'
import Dslr from '../../../assets/dslr.webp'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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






const Dealcontainer = () => {

    var settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <PreviousBtn />,
        nextArrow: <NextBtn />,
    };


    return (
        <div className='flex  bg-white border-3 shadow-sm'>
            {/* left side */}
            <div className="left flex flex-col gap-10 justify-center border-r border-gray-200  p-6 bg-white items-center">
                <h1 className=' h-1 text-3xl font-medium'>Best of Electronics</h1>
                <button className=' bg-primary text-white py-1.5 px-8 rounded-sm'>view All</button>
            </div>
            {/* right side */}
            <div className=' flex-1 py-4 overflow-hidden'>

                <Slider {...settings}>

                    <div className=' text-center gap-2 border capitalize flex flex-col justify-center items-center'>
                        <img className='h-36 mx-auto object-cover' src={Dslr} alt="" />
                        <div className=' p-2'>
                            <h1 className=' font-bold my-2 text-lg'>Top microless cameras</h1>
                            <h3 className=' text-green-500'>shop now !</h3>
                        </div>
                    </div>
                    
                    <div className=' text-center gap-2 border capitalize flex flex-col justify-center items-center'>
                        <img className='h-36 mx-auto object-cover' src={Dslr} alt="" />
                        <div className=' p-2'>
                            <h1 className=' font-bold my-2 text-lg'>Top microless cameras</h1>
                            <h3 className=' text-green-500'>shop now !</h3>
                        </div>
                    </div>

                    <div className=' text-center border gap-2 capitalize flex flex-col justify-center items-center'>
                        <img className='h-36 mx-auto object-cover' src={Dslr} alt="" />
                        <div className=' p-2'>
                            <h1 className=' font-bold my-2 text-lg'>Top microless cameras</h1>
                            <h3 className=' text-green-500'>shop now !</h3>
                        </div>
                    </div>

                    <div className=' text-center gap-2 border  capitalize flex flex-col justify-center items-center'>
                        <img className='h-36 mx-auto object-cover' src={Dslr} alt="" />
                        <div className=' p-2'>
                            <h1 className=' font-bold my-2 text-lg'>Top microless cameras</h1>
                            <h3 className=' text-green-500'>shop now !</h3>
                        </div>
                    </div>

                </Slider>

            </div>
        </div>
    )
}

export default Dealcontainer