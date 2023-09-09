import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Clear_Errors, OrderDetialaction, updateOrder } from '../../actions/OrderActions'
import { NavLink, useParams } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton, Modal, Skeleton, Tooltip } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import {enqueueSnackbar} from 'notistack'


const OrderDetial = () => {

  const { order, loading , isUpdated , error } = useSelector(state => state.OrderDetial)
  const { user } = useSelector(state => state.User)
  const { id } = useParams();

  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('')


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const handlesubmit = (e)=>{
    e.preventDefault();
    const form = {
      id : id,
      orderstatus : status,
    }
    dispatch(updateOrder(form));
  }


  useEffect(() => {
    if (id) {
      dispatch(OrderDetialaction(id))
      setOpen(false)
    }

    if(isUpdated){
       enqueueSnackbar('Order Update done' , {variant : 'success'})
    }

    if(error){
      enqueueSnackbar(error , {variant : 'error'})
      dispatch(Clear_Errors())
   }
  }, [dispatch, id , error , isUpdated])
   

  return (
    <div className=' gap-5 container mx-auto p-12 flex flex-col'>
      {
        loading ?
          <>
            <Skeleton variant='text' height={50} width={100} />
            <Skeleton variant='rectangular' height={240} />
            <Skeleton variant='rectangular' height={240} />
            <Skeleton variant='rectangular' height={240} />
          </>
          :
          <>

            {/* order Modal start */}
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <form onSubmit={(e)=>handlesubmit(e)} className=' flex flex-col gap-9 ' action="">
                  <div className=' flex items-center justify-between'>
                    <h1 className=' text-xl font-bold'>Update Order status</h1>
                    <Tooltip>
                      <IconButton onClick={handleClose} color='error'>
                        <CloseIcon />
                      </IconButton>
                    </Tooltip>
                  </div>

                  <div className=' w-full'>
                    <InputLabel id="order">order status</InputLabel>
                    <Select
                      labelId="order"
                      id="order"
                      value={order && order.orderstatus}
                      label="Age"
                      size='small'
                      className=' w-full'
                      onChange={(e) => { setStatus(e.target.value) }}
                    >
                      <MenuItem value={'processing'}>processing</MenuItem>
                      <MenuItem value={'delivered'}>delivered</MenuItem>
                      <MenuItem value={'canceled'}>canceled</MenuItem>
                    </Select>
                  </div>
                  <button className=' bg-primary text-white py-2'>Submit</button>
                </form>

              </Box>
            </Modal>
            {/* order Modal end */}


            <div className=' flex justify-between'>
            <NavLink to={ user.role !== 'admin' ? '/account/orders' : '/admin/orders'}>
              <button className=' py-2 px-6 bg-primary text-white rounded-full'>
                <KeyboardBackspaceIcon /> Back
              </button>
            </NavLink>
            <NavLink to={`/invoice/${id}`}>
              <button  className=' py-2 px-6 bg-primary text-white rounded-full'>
                  Generate Invoice
              </button>
            </NavLink>
            </div>
            {/* order Items */}
            <div className=' p-6 bg-white'>
              <h1 className=' text-xl font-semibold'>Products Information</h1>
              <hr className=' mb-3 mt-1  text-3xl h-1 bg-slate-500' />
              {

                order && order.orderitems && order.orderitems.map((elem, index) => {
                  return (
                    <div key={index} className=' my-2 border-gray-400 text-center p-4 border flex justify-between '>
                      {/* img */}
                      <div className=' w-24'>
                        <img className='w-24  object-cover' src={elem.image} alt="" />
                      </div>
                      <div className=' text-left'>
                        <h1 className=' text-lg font-semibold'>Product Name</h1>
                        <h1>{elem.name.slice(0, 30) + '....'}</h1>
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

            {/* order Information */}
            <div className=' p-4 bg-white'>
              <div className=' flex justify-between items-center'>
                <h1 className=' text-xl font-semibold'>Order Information</h1>
                {
                  user && user.role === 'admin' &&
                  <Tooltip title='Edit'>
                    <IconButton onClick={handleOpen} color='success'>
                      <EditIcon color='primary' />
                    </IconButton>
                  </Tooltip>}
              </div>
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