import React from 'react'
import { CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { AddWish } from '../../../actions/WishActions';


const Product = ({ elem, index }) => {
    const { wishItems } = useSelector(state => state.WishList)
    const dispatch = useDispatch();

    const isExist = wishItems.some((product) => product._id === elem._id)
    const addwish = () => {
        dispatch(AddWish(elem))
    }

    return (
        <div className=' border p-2 m-3'>

            <span 
            onClick={addwish} 
            className={`${isExist ? 'text-red-500' : ' text-gray-300'}  cursor-pointer mb-3 w-full flex justify-end`}>
                <FavoriteIcon />
            </span>
            <Link to={`/product/${elem._id}`}>
                <div key={index} className='p-2 gap-2 capitalize flex flex-col justify-center items-center'>
                    <div className=' flex flex-col relative justify-center items-center'>
                        <img loading='lazy' className='h-32  hover:scale-[1.07] transition-all' src={`${elem.images[0].url}`} alt="img" />
                        <CircularProgress className=' absolute -z-50' />
                    </div>
                    <div className=' p-2 flex flex-col gap-3 justify-center items-start'>
                        <h1 className=' font-medium my-2 text-base'>{elem.title.slice(0, 40) + "...."}</h1>
                        <div className=' flex gap-4 items-center'>
                            <div 
                            className=' font-bold flex gap-1 w-fit items-center text-sm bg-green-700 text-white py-[.1rem] px-2 rounded-sm'>
                                <h1>{elem.rating.toFixed(2)}</h1>
                                <StarIcon fontSize='24px' />
                            </div>
                            <h1 className=' text-gray-500 text-sm font-bold'>({elem.numrev})</h1>
                        </div>

                        <h1 className=' font-bold text-base'>Rs.{elem.price}
                            <del className=' mx-2 text-gray-500 font-bold text-sm' >Rs.{elem.cureted_price}</del>
                            <span className=' text-green-600 text-base'>
                                {(((elem.cureted_price - elem.price) / elem.cureted_price) * 100).toFixed(2)}%
                            </span>
                        </h1>
                    </div>
                </div>
            </Link>



        </div>
    )
}

export default Product