import React from 'react'
import { NavLink } from 'react-router-dom'

const Order = ({order}) => {

   const colors = {
     processing : 'bg-orange-100 text-orange-500',
     delivered : 'bg-green-100 text-green-500'
   }

    return (
        <div className=' bg-white p-6 flex  shadow-md'>
            <div className=' flex flex-1 items-start gap-10'>

                <div>
                    <img className=' w-32' src={order.orderitems[0].image} alt="" />
                </div>

                {/* description */}
                <div className=' flex flex-col gap-1 capitalize'>
                    <h1 className=' text-lg font-semibold'>{ (order.orderitems[0].name).slice(0, 30)+'....'}</h1>
                    <h2>quantity : <span>{order.orderitems[0].quantity}</span></h2>
                    <h2>Price : <span>Rs. {order.orderitems[0].price}</span></h2>
                </div>
                {/* description */}

            </div>



            <div className=' flex w-96'>

                {/* <!-- Total Amount> */}
                <h1 className={ ` text-xl font-bold`}>Rs. {order.totalprice.toFixed(2)}</h1>
                {/* <!-- Total Amount> */}

                {/* order status */}
                <div className=' ml-auto flex flex-col items-center capitalize space-y-3'>
                    <h1 className=' text-xl font-bold'>status</h1>
                    <h2 className={` ${colors[order.orderstatus]} px-4 rounded-full py-[0.30rem] text-sm font-bold`}>{order.orderstatus}</h2>
                </div>  
                {/* order status */}

                <NavLink to={`/account/order/${order._id}`}><button className='px-8 h-fit ml-6 text-white py-1 border bg-primary rounded-md'>view</button></NavLink>

            </div>



        </div>
    )
}

export default Order