import React,{ useRef , useEffect } from 'react'
import ReactToPrint from 'react-to-print';
import InvoiceContent from './InvoiceContent';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { OrderDetialaction } from '../../actions/OrderActions';
import Loader from '../layout/Loader/Loader'

const Invoice = () => {
   
  const componentRef = useRef();
  const { order , error , loading} = useSelector(state => state.OrderDetial)
  const { id } = useParams();
  const dispatch = useDispatch()

  var today = new Date()
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();


  const dummyInvoiceData = {
    date:mm + '-' + dd + '-' + yyyy ,
    from: 'Flipkart',
    to: order && order.user && order.user.name ,
    items: order && order.orderitems && order.orderitems.map((elem)=>{
      return{
        name : elem.name,
        price : elem.price,
        tax : order.taxprice        ,
        total : order.totalprice,
        quantity : elem.quantity
      }
    }),
    paymentinfo : order && order.paymentinfo,
    shiping : order && order.shipinginfo && order.shipinginfo,
    taxprice : order && order.taxprice,
    shipingprice : order && order.shipingprice
  };



  useEffect(() => {
    if (id) {
      dispatch(OrderDetialaction(id))
    }
  }, [dispatch, id , error ])

  return (
    <div className=' px-12'>
      <div className=' my-4 flex justify-between items-center'>

        <NavLink to={`/account/order/${id}`}><div className=' px-6 py-2 rounded bg-primary text-white'>Back</div></NavLink>
        <ReactToPrint
        trigger={() => <button className=' px-6 py-2 rounded bg-primary text-white'>download</button>}
        content={() => componentRef.current}
      />
      </div>

      {
        loading ? 
          <Loader/>
          :

       <div  ref={componentRef}>
        <InvoiceContent invoiceData={dummyInvoiceData} />
       </div>
      }
    </div>
  )
}

export default Invoice