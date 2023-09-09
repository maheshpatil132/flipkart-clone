import React, { useEffect } from 'react'
import CartItem from './CartItem'
import EmptyCart from './EmptyCart'
import { useSelector } from 'react-redux'
import Loader from '../layout/Loader/Loader'
import { ClearErrors } from '../../actions/CartActions'
import { NavLink } from 'react-router-dom'
import MetaData from '../layout/MetaData'



const Cart = () => {
  const { Products, loading, error } = useSelector(state => state.Cart)

  useEffect(() => {
    if (error) {
      ClearErrors()
    }
  })
  return (
    <>

     <MetaData title={'Flipkart | Cart'}/>
      {
        loading ?
          <Loader />

          :

          <>
            <div className='flex p-4  gap-4'>

              {/* <!-- left part> */}
              <div className=' flex-1 bg-white '>

                {/* heading */}
                <div className=' p-4 py-3 items-center border-b-2 flex justify-between'>
                  <h1 className=' text-lg font-semibold'>My cart ( {Products.length} )</h1>
                  {
                    Products.length > 0 &&
                    <NavLink to={'/checkout'}>
                      <button className='px-4 py-2 rounded bg-primary text-white'>
                        Check Out
                      </button>
                    </NavLink>
                  }

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




            </div>

          </>
      }

    </>
  )
}

export default Cart