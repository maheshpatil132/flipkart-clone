import React, { useEffect } from 'react'
import CartItem from './CartItem'
import EmptyCart from './EmptyCart'
import { useSelector } from 'react-redux'
import Loader from '../layout/Loader/Loader'
import { ClearErrors } from '../../actions/CartActions'
import { NavLink } from 'react-router-dom'



const Cart = () => {
  const { Products, loading , error} = useSelector(state => state.Cart)

   useEffect(()=>{
    if(error){
      ClearErrors()
    }
   })
  return (
    <>
      {
        loading    ?
          <Loader />

          :

          <>
            <div className='flex p-4  gap-4'>

              {/* <!-- left part> */}
              <div className=' flex-1 bg-white '>

                {/* heading */}
                <div className=' p-4 py-3 items-center border-b-2 flex justify-between'>
                  <h1 className=' text-lg font-semibold'>My cart ( {Products.length} )</h1>
                  <NavLink to={'/checkout'}><button className='px-4 py-2 rounded bg-primary text-white'>Check Out</button></NavLink>
                </div>

                {/* <!-- cart container > */}
                <div className=' flex flex-col'>
                  {
                    Products.length > 0 ? Products.map((elem, index) => {
                      return (
                        <CartItem key={index} data={elem.data} quantities={elem.quantity} />
                      )
                    })

                      :
                      <>
                        <EmptyCart />
                      </>

                  }

                </div>
                {/* <!-- cart container > */}

              </div>
              {/* <!-- left part> */}

              {/* <!-- price detials part> */}

              {/* <div className=' bg-white w-96 h-fit sticky top-20'>
  <div className=' p-4 border-b'>
    <h1 className=' text-lg font-bold text-gray-500'>Price Description</h1>
  </div>

  <div className=' p-4'>
    <ul className=' border-dashed border-b border-black p-3'>
      <li className=' flex justify-between py-2  text-lg'>
        <h1>Price ( 1 item)</h1>
        <h1>Rs.33000</h1>
      </li>
      <li className=' flex justify-between  py-2 text-lg'>
        <h1>Discount ( 1 item)</h1>
        <h1>Rs.33000</h1>
      </li>
      <li className=' flex justify-between  py-2  text-lg'>
        <h1>Dilivery Charges ( 1 item)</h1>
        <h1>Rs.33000</h1>
      </li>
    </ul>
    <div className='border-dashed border-b border-black p-3 font-bold text-xl flex items-center justify-between'>
      <h1>Total Amount</h1>
      <h1>Rs.28000</h1>
    </div>
    <div className=' p-3 text-green-400 text-base capitalize font-bold'>
      <p>you will save Rs.2000 on this order</p>
    </div>
  </div>
</div> */}

              {/* <!-- price detials part> */}


            </div>

          </>
      }

    </>
  )
}

export default Cart