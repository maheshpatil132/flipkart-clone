import React from 'react'
import Order from './Order'
import OrderSidebar from './OrderSidebar'



const Orders = () => {
  return (
    <div className=' flex p-8 gap-10'>
      <OrderSidebar />

      {/* right side */}
      <div className=' flex-1  flex flex-col'>

        {/* <!--search bar> */}
        <div className='flex w-full mb-4'>
          <input type="text" placeholder='search...' className=' border shadow-sm w-full px-4' />
          <button className=' rounded-sm px-10 py-1.5 text-lg bg-primary text-white'>search</button>
        </div>
        {/* <!--search bar> */}

        {/* <!--order items container> */}
            <Order/>
            <Order/>
            <Order/>
            <Order/>
        {/* <!--order items container> */}

      </div>
      {/* right side */}
    </div>
  )
}

export default Orders