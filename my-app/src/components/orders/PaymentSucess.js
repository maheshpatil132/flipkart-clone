import React, { useEffect, useRef } from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { NewOrder } from '../../actions/OrderActions';
import { ClearCart } from '../../actions/CartActions';


const PaymentSucess = () => {

  const search = useSearchParams()[0]
  const dispatch = useDispatch()
  const payment_id = search.get('reference');
  const navigate = useNavigate()
  const flag = useRef(false)

  useEffect(() => {


    if (flag.current === false) {

    const create_order = async () => {
        const order = JSON.parse(sessionStorage.getItem('order'))
        console.log(order);
        const paymentinfo = {
          id: payment_id,
          status: "paid"
        }

        if (order) {
          console.log("ajasdajdjk");
          order.paymentinfo = paymentinfo
          dispatch(NewOrder(order))
          dispatch(ClearCart())
        } else {
          navigate('/account/orders')
        }

      }

      create_order()

      return () => {
        flag.current = true
      }


    }


  }, [dispatch])

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className=' h-52 w-1/2 bg-green-300 p-4 flex flex-col justify-center items-center gap-7'>
        <CheckCircleIcon fontSize='large' color='success' />
        <h1 className=' text-green-700 text-2xl'>Your order Sucessfully Created</h1>
        <NavLink to={'/account/orders'}><button>View Orders</button></NavLink>
      </div>
    </div>
  )
}

export default PaymentSucess