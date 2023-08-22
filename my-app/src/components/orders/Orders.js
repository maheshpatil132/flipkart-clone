import React, { useEffect, useState } from 'react'
import Order from './Order'
import OrderSidebar from './OrderSidebar'
import { useDispatch, useSelector } from 'react-redux'
import { Myorders } from '../../actions/OrderActions'
import { NavLink } from 'react-router-dom'


const Orders = () => {
  
   const { orders , loading ,error } = useSelector((state) => state.Myorders)
   const [orderscontainer, SetOrderscontainer] = useState([])
   const dispatch = useDispatch();


  useEffect(()=>{
    dispatch(Myorders())
    
  },[dispatch])
  console.log(orders);


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

        {
         orders && orders.length > 0 ? orders.map((elem ,index)=>{
            return(       
              <Order order = {elem}/>
            )
          }) 

          :
           <div className=' flex flex-col justify-center items-center'>
          <h1 className=' text-center text-lg my-4 font-bold'>No Orders !</h1>
          <NavLink to={'/'}><button className=' py-2 px-6 bg-primary text-white rounded-md'>Shop Now</button></NavLink>
          </div>
        }
            
        {/* <!--order items container> */}

      </div>
      {/* right side */}
    </div>
  )
}

export default Orders