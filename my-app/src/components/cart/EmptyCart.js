import React from 'react'
import {NavLink} from 'react-router-dom'
import empty from '../../assets/empty.webp'

const EmptyCart = () => {
  return (
    <div className=' bg-white flex flex-col justify-center items-center gap-6 flex-1 p-4'>
        <div>
            <img className=' h-52 mx-auto' src={empty} alt="" />
        </div>
        <h1 className=' text-base font-bold'>Look Like your cart is Empty !</h1>
        <NavLink to={'/'}><button className=' bg-primary text-white px-8 rounded py-2'>Shop Now</button></NavLink>
    
    </div>
  )
}

export default EmptyCart