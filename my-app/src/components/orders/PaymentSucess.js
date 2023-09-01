import React, { useEffect, useRef } from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { NewOrder } from '../../actions/OrderActions';
import { ClearCart } from '../../actions/CartActions';
import {enqueueSnackbar} from 'notistack'


const PaymentSucess = () => {

  const search = useSearchParams()[0]
  const dispatch = useDispatch()
  const payment_id = search.get('reference');
  const navigate = useNavigate()
  const flag = useRef(false)

  const {order} = useSelector(state => state.Neworder)

  useEffect(() => {

    


    if (flag.current === false) {

    const create_order = async () => {
        const orderinfo = JSON.parse(sessionStorage.getItem('order'))
        const paymentinfo = {
          id: payment_id,
          status: "paid"
        }

        if (orderinfo) {
          orderinfo.paymentinfo = paymentinfo
          dispatch(NewOrder(orderinfo))
          dispatch(ClearCart())

          if(order){
            enqueueSnackbar('Order Placed Sucessfully!' , {variant : 'success'})
       }
        } else {
          navigate('/account/orders')
        }

      }

      create_order()

      return () => {
        flag.current = true
      }


    }


  }, [dispatch ,navigate ,order, payment_id])

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className=' h-52 w-1/2 bg-green-100  p-4 flex flex-col justify-center items-center gap-7'>
        <CheckCircleIcon fontSize='large' color='success' />
        <h1 className=' text-green-500 text-2xl'>Your order Sucessfully Created</h1>
        <NavLink to={'/account/orders'}><button>View Orders</button></NavLink>
      </div>
    </div>
  )
}

export default PaymentSucess