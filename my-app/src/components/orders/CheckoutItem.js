import React, { useEffect, useState } from 'react'
import { useDispatch} from 'react-redux'
import { AddCart, RemoveCart } from '../../actions/CartActions'


const CheckoutItem = ({elem , quantity}) => {
    const [quatity, setQuatity] = useState(quantity)
    // console.log(elem);
    const dispatch = useDispatch()


    const remove = (e) => {
        dispatch(RemoveCart(e._id))
    }

    const increaseQuatity = () =>{
        setQuatity(quatity + 1);
        dispatch(AddCart(elem , quatity))
      }


      const decreaseQuatity = () =>{
        setQuatity(quatity - 1);
        
      }

      useEffect(()=>{
        dispatch(AddCart(elem , quatity))
      } , [quatity])


    return (
        <div>
            <div className=' flex bg-white gap-5 p-5 py-4 border'>

                <div className=' flex flex-col w-[150px] gap-3 '>
                    <img className=' w-28 mx-auto' src={elem.images && elem.images[0].url} alt="" />
                    <div className=' border w-full rounded-2xl overflow-hidden flex'>
                        <button onClick={() => increaseQuatity()} className='  p-1 px-4 bg-slate-300 border-black'>+</button>
                        {/* <input value= type="text" className=' px-3 border w-full' /> */}
                        <h1 className='w-full text-center my-auto'>{quatity}</h1>
                        <button onClick={() => quatity > 1 && decreaseQuatity()} className='p-1 px-4 bg-slate-300 border-black'>-</button>
                    </div>
                </div>


                <div className=' flex flex-col   gap-3 justify-between p-2 px-3'>
                    <div className='flex flex-col gap-3 justify-center'>
                        <h1 className=' font-semibold  text-base'>{elem.title}</h1>
                        <h1 className=' font-bold text-base'>Rs. {elem.price}
                            <span className=' mx-2 text-gray-500 font-bold text-sm' >Rs. 69000</span>
                            <span className=' text-green-600 text-base'>69% off</span>
                        </h1>
                    </div>
                </div>

                <div className=' ml-auto'>
                    <button onClick={() => remove(elem)} className=' px-8 py-2 border-red-500 border rounded-md'>Remove</button>
                </div>

            </div>
        </div>
    )
}

export default CheckoutItem