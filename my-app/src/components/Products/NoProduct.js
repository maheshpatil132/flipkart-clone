import React from 'react'
import NoProd from '../../assets/no-products.png'

const NoProduct = () => {
  return (
    <div className='flex gap-3 p-4 justify-center items-center flex-col w-full'>
        <img src={NoProd} alt="No Products" />
        <h1 className=' text-black text-2xl font-bold'>Sorry, no results found!</h1>
        <h5 className=' text-gray-600 text-lg font-medium'>Please check the spelling or try searching for something else</h5>
    </div>
  )
}

export default NoProduct