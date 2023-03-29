import React, { useEffect} from 'react'
import Slider from 'react-slick'
import Dslr from '../../../assets/dslr.webp'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import StarIcon from '@mui/icons-material/Star';
import { useSelector, useDispatch } from 'react-redux'
import { getproduct } from '../../../actions/ProductActions';
import { Link } from 'react-router-dom';




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






const Productslider = () => {
 
  const dispatch = useDispatch();
  const {loading , products }= useSelector(state => state.AllProducts)
  

  // console.log(products);
  var settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
  };



  useEffect(() => {
    dispatch(getproduct())
  }, [dispatch])



  return (
    <div className='flex mt-4 bg-white border-3 shadow-sm'>
      {/* left side */}

      {/* right side */}
      <div className=' flex-1 py-2 overflow-hidden'>
        <div className=' border-b p-4'>
          <h1 className=' text-xl font-bold'>Similar Products</h1>

        </div>
        <div className='p-3'>
          <Slider {...settings}>
          
          {
          products && products.map((elem,index)=>{
           
              return(
                <div key={index} className=' p-4 gap-2 capitalize flex flex-col justify-center items-center'>
                  <Link to={`/product/${elem._id}`}>
                <img className='h-40 object-cover' src={Dslr} alt="" />
                <div className=' p-2 flex flex-col gap-3 justify-center items-start'>
                  <h1 className=' font-medium my-2 text-base'>{elem.title}</h1>
                  <div className=' flex gap-4 items-center'>
                    <div className=' font-bold flex gap-1 w-fit items-center text-sm bg-green-700 text-white py-[.1rem] px-2 rounded-sm'>
                      <h1>{elem.rating}</h1>
                      <StarIcon fontSize='24px' />
                    </div>
                    <h1 className=' text-gray-500 text-sm font-bold'>({elem.numrev})</h1>
                  </div>
  
                  <h1 className=' font-bold text-base'>Rs.{elem.price}
                    <span className=' mx-2 text-gray-500 font-bold text-sm' >Rs.{elem.price}</span>
                    <span className=' text-green-600 text-base'>69% off</span>
                  </h1>
                </div>
                </Link>
              </div>
              )
            })

          }
          </Slider>
        </div>


      </div>
    </div>
  )
}

export default Productslider