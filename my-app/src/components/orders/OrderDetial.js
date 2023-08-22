import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { OrderDetialaction } from '../../actions/OrderActions'
import { NavLink, useParams } from 'react-router-dom'
import Loader from '../layout/Loader/Loader'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const OrderDetial = () => {

  const { order, loading } = useSelector(state => state.OrderDetial)
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(OrderDetialaction(id))
    }
  }, [dispatch, id])




  return (
    <div className=' gap-5 container mx-auto p-12 flex flex-col'>
      {
        loading ? <Loader />
          :
          <>

          <NavLink to={'/account/orders'}>
            <button className=' py-2 px-6 bg-primary text-white rounded-full'> 
                <KeyboardBackspaceIcon/> Back
            </button>
          </NavLink>
          {/* order Items */}
          <div className=' p-6 bg-white'>
              <h1 className=' text-xl font-semibold'>Products Information</h1>
              <hr className=' mb-3 mt-1  text-3xl h-1 bg-slate-500' />
              {

                order && order.orderitems && order.orderitems.map((elem, index) => {
                  return (
                    <div className=' my-2 border-gray-400 text-center p-4 border flex justify-between '>
                      {/* img */}
                      <div className=' w-24'>
                      <img className='w-24  object-cover' src={elem.image} alt="" />
                      </div>
                      <div className=' text-left'>
                        <h1 className=' text-lg font-semibold'>Product Name</h1>
                        <h1>{elem.name.slice(0, 30)+'....'}</h1>
                      </div>

                      <div>
                      <h1 className=' text-lg font-semibold'>Quantity</h1>
                        <h1>{elem.quantity}</h1>
                      </div>

                      <div>
                      <h1 className=' text-lg font-semibold'>Price</h1>
                        <h1>{elem.price}</h1>
                      </div>



                    </div>
                  )
                })
              }


            </div>


            {/* shiping info */}
            <div className=' p-4 bg-white'>
              <h1 className=' text-xl font-semibold'>Shipping Information</h1>
              <hr className=' mb-2 mt-1 text-3xl h-1 bg-slate-500' />
              <div className=' space-y-2  capitalize'>
                <h2> <span className=' font-semibold'>Address : </span>{order && order.shipinginfo && order.shipinginfo.address}</h2>
                <h2><span className=' font-semibold'>City : </span>  {order && order.shipinginfo && order.shipinginfo.city}</h2>
                <h2><span className=' font-semibold'>State : </span>  {order && order.shipinginfo && order.shipinginfo.state}</h2>
                <h2><span className=' font-semibold'>Country : </span>  {order && order.shipinginfo && order.shipinginfo.country}</h2>
              </div>
            </div>

            <div className=' p-4 bg-white'>
              <h1 className=' text-xl font-semibold'>Payment Information</h1>
              <hr className=' mb-2 mt-1 text-3xl h-1 bg-slate-500' />
              <div className=' space-y-2 '>
                <h2><span className=' font-semibold'>Ammount : </span>  Rs.{order && order.totalprice}</h2>
                <h2> <span className=' font-semibold'>status : </span> {order && order.paymentinfo && order.paymentinfo.status}</h2>
              </div>
            </div>

            <div className=' p-4 bg-white'>
              <h1 className=' text-xl font-semibold'>Order Information</h1>
              <hr className=' mb-2 mt-1 text-3xl h-1 bg-slate-500' />
              <div className=' space-y-2 '>
                <h2><span className=' font-semibold'>Ammount : </span>  Rs.{order && order.totalprice}</h2>
                <h2> <span className=' font-semibold'>status : </span> {order && order.orderstatus}</h2>
                <h2><span className=' font-semibold'>Created At : </span> {order && order.createdAt && order.createdAt.split('T')[0]}</h2>
              </div>
            </div>

            
          </>
      }


    </div>
  )
}

export default OrderDetial