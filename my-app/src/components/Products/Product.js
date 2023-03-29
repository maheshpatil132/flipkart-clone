import React from 'react'
import Dslr from '../../assets/dslr.webp'
import StarIcon from '@mui/icons-material/Star';


const Product = () => {
  return (
    <div className=' '>
         
         <div className='p-2 gap-1 capitalize flex flex-col justify-center items-center'>
            <div className=' h-56 flex'>
              <img className='h-44 m-auto object-cover' src={Dslr} alt="" />
            </div>
              <div className=' p-2 flex flex-col gap-1 justify-center items-start'>
                <h1 className=' font-semibold my-2 text-sm'>Canon EOS 3000D DSLR Camera 1 Camera Body, 18 - 55 mm Lens </h1>
                <div className=' flex gap-4 items-center'>
                  <div className=' font-bold flex gap-1 w-fit items-center text-sm bg-green-700 text-white py-[.1rem] px-2 rounded-sm'>
                    <h1>4.5</h1>
                    <StarIcon fontSize='24px' />
                  </div>
                  <h1 className=' text-gray-500 text-sm font-bold'>(31)</h1>
                </div>

                <h1 className=' font-bold text-base'>Rs. 61,460

                  <span className=' mx-2 text-gray-500 font-bold text-sm' >Rs. 69000</span>
                  <span className=' text-green-600 text-base'>69% off</span>
                </h1>
              </div>
            </div>

    </div>
  )
}

export default Product