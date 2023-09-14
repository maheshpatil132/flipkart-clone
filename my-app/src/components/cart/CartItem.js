import React, { useEffect, useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
import { useDispatch } from 'react-redux';
import { AddCart, RemoveCart } from '../../actions/CartActions';

const CartItem = ({data , quantities}) => {
  const dispatch = useDispatch();
  const [quantity , setQuantity] = useState(quantities)
  const removeitem = () => {
      dispatch(RemoveCart(data._id))
  }

  useEffect(()=>{
    window.scrollTo(0,0)
  }, [data])
  

  const increaseQuatity = () =>{
    setQuantity(quantity + 1);
    dispatch(AddCart(data , quantity))
  }

  


  return (
    <div className=' flex  border p-2 gap-4'>

            <div className='  flex flex-col gap-3'>
              <img className=' mx-auto my-2 w-28' src={ data && data.images && data.images[0].url  } alt="" />
              <div className=' mx-auto w-1/2 rounded-2xl overflow-hidden flex'>
                <button onClick={()=>{ quantity < data.stock && increaseQuatity() }} className='  p-1 px-4 bg-slate-300 border-black'>+</button>
                <input onChange={(e)=>setQuantity( Number(e.target.value))} value={quantity} type="text" className=' px-3 border w-full' />
                <button onClick={()=>{ quantity > 0 && setQuantity(quantity - 1) }} className='p-1 px-4 bg-slate-300 border-black'>-</button>
              </div>
            </div>

            <div className=' flex  gap-3 w-full justify-between items-start p-2'>

              <div className='flex flex-col gap-3 '>
                <h1 className=' font-semibold  text-base'>{data.title}</h1>
                <div className=' flex gap-4 items-center'>
                  <div className=' font-bold flex gap-1 w-fit items-center text-sm bg-green-700 text-white py-[.1rem] px-2 rounded-sm'>
                    <h1>{data.rating}</h1>
                    <StarIcon fontSize='24px' />
                  </div>
                  <h1 className=' text-gray-500 text-sm font-bold'>( {data.reviews.length} )</h1>
                </div>

                <h1 className=' font-bold text-base'>Rs. {data.price}
                  <del className=' mx-2 text-gray-500 font-bold text-sm' >Rs. {data.cureted_price}</del>
                  <span className=' text-green-600 text-base'>
                  {(((data.cureted_price - data.price) / data.cureted_price) * 100).toFixed(2)}%
                  </span>
                </h1>

                <h1 className=' textxl font-bold'>stock : {data.stock} </h1>
              </div>


              <button onClick={()=>removeitem()} className='border border-red-500 w-fit justify-self-end py-1 rounded hover:text-red-400 px-6'>Remove</button>

            </div>

          </div>
  )
}

export default CartItem