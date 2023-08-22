import React, { useEffect, useState} from 'react'
import Slider from 'react-slick'
import Dslr from '../../../assets/dslr.webp'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import StarIcon from '@mui/icons-material/Star';
import { useSelector, useDispatch } from 'react-redux'
import { getproduct } from '../../../actions/ProductActions';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import { AddWish } from '../../../actions/WishActions';
import { categoryfilter } from '../../../utils/CategorySearch';
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






const Productslider = ({category , page  }) => {
 

  const { wishItems } = useSelector(state => state.WishList)
  const {products , loading} = useSelector(state => state.AllProducts)
  const [wish, setWish] = useState(undefined)
  const [prodctlist, setProductList] = useState([])
  const dispatch = useDispatch()
    
  const val = Number(Math.min(5 , products && products[category] && Number(products[category].length)))
  // console.log(products);
  var settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(6 , 5),
    slidesToScroll: 1,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
  };
 
  const addwishlist = (elem)=>{
    dispatch(AddWish(elem))
  } 
   
   
 
  useEffect(() => {
    window.scrollTo(0,0)
    dispatch(getproduct("" , "","", page , category))
    if(products){
      setProductList( ...prodctlist , products[category])
    }
  }, [ category ,dispatch ])
  // useEffect(()=>{
  //   if(wishItems){
  //     // console.log(wishItems);
  //     setWish([...wishItems])
  //     // console.log(wish);
  //   }
  //   // setProductList(categoryfilter(products , category))
    //  dispatch(getproduct("" , "","", page , category))
  // },[wishItems , products])
  
 
  return (
    <div className='flex mt-4 bg-white border-3 shadow-sm'>
      {/* left side */}

      {/* right side */}
      <div className=' flex-1 py-2 overflow-hidden'>
        <div className=' border-b p-4'>
          <h1 className=' text-xl font-bold capitalize'>Best of {category}</h1>

        </div>
        <div className='p-3 flex justify-center'>
        {  !loading ?
         <div className=' w-full '>
          <Slider {...settings}>
          
          {
           products && products[category] && products[category].map((elem,index)=>{
              
              return(
                <div key={index} className=' p-4 gap-2 capitalize flex flex-col justify-center items-center'>
                  {/* { 

                     ! wish.includes(elem) ? 
                    <FavoriteBorderIcon  onClick={()=>addwishlist(elem)} className='cursor-pointer ml-auto w-fit'/> 
                    : 
                  
                    <FavoriteIcon
                    color='error'
                    onClick={()=>addwishlist(elem)}
                    className='cursor-pointer ml-auto w-fit'
                    />
                    
                  } */}
                  <Link to={`/product/${elem._id}`}>
                <img className='h-40 object-cover mx-auto' src={`${elem.images[0].url}`} alt="" />
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
                    <del className=' mx-2 text-gray-500 font-bold text-sm' >Rs.{elem.price}</del>
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
            : <CircularProgress className=' text-center'/>
          }
        </div>


      </div>
    </div>
  )
}

export default Productslider