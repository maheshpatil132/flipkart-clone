import React from 'react'
import dslr from '../../assets/dslr.webp'
import StarIcon from '@mui/icons-material/Star';
import { AddWish } from '../../actions/WishActions';
import { useDispatch } from 'react-redux';

const Wishitem = ({data}) => {
    const dispatch = useDispatch()
    const RemoveWishItem = ()=> {
        dispatch(AddWish(data))
    }
    console.log(data);
    return (
        <div className=' flex border-b items-start p-6 gap-8'>

            <div className='  flex flex-col gap-3'>
                <img className=' mx-auto my-2 w-32' src={data.images[0].url} alt="" />
            </div>

            <div className=' flex flex-col  gap-3 justify-between'>
                <div className='flex flex-col gap-3 '>
                    <h1 className=' font-semibold  text-base'>{data.title}</h1>

                    <div className=' flex gap-4 items-center'>
                        <div className=' font-bold flex gap-1 w-fit items-center text-sm bg-green-700 text-white py-[.1rem] px-2 rounded-sm'>
                            <h1>{data.rating}</h1>
                            <StarIcon fontSize='24px' />
                        </div>
                        <h1 className=' text-gray-500 text-sm font-bold'>( { data.reviews.length } )</h1>
                    </div>

                    <h1 className=' font-bold text-xl'>Rs. {data.price}
                        <del className=' mx-2 text-gray-500 font-bold text-sm' >Rs.{data.cureted_price}</del>
                        <span className=' text-green-600 text-base'>
                        {(((data.cureted_price - data.price) / data.cureted_price) * 100).toFixed(2)}%
                        </span>
                    </h1>
                </div>




            </div>

            <button onClick={()=>RemoveWishItem()} className='border border-red-500 w-fit h-fit ml-auto justify-self-end py-1 rounded hover:text-red-400 px-6'>Remove</button>

        </div>
    )
}

export default Wishitem