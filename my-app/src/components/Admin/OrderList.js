import React, { useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { AdminGetOrders, Delete_Order } from '../../actions/OrderActions';
import Loader from '../layout/Loader/Loader'
import { NavLink } from 'react-router-dom';
import {enqueueSnackbar} from 'notistack'


const OrderList = () => {

  const { loading, orders , isDeleted  , error} = useSelector(state => state.AllOrders);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(AdminGetOrders())
    if(isDeleted){
      enqueueSnackbar("Order Deleted Sucessfully" , {variant : 'success'})
    }
    if(error){
      enqueueSnackbar(error , {variant : 'error'})
    }
  }, [dispatch , error , isDeleted])

  // id , status , amount , view button , number of products
  const rows = orders && orders.map((elem) => ({
    id: elem._id,
    amount: ["Rs." + elem.totalprice],
    status: elem.orderstatus,
    numberofproducts: elem.orderitems.length,
  }),
  )


  const columns = [
    { field: 'id', headerName: 'ID', flex: 1, },
    {
      field: 'amount',
      headerName: 'Amount',
      width: 150,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      editable: true,
    },
    {
      field: 'numberofproducts',
      headerName: 'Number of products',
      width: 150,
      editable: true,
    },
    {
      field: "Action",
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (<div className='space-x-3'><NavLink to={`/account/order/${params.row.id}`}>
                      <button className=' ml-auto px-6 py-1 rounded bg-primary text-white'>
                        View
                      </button>
                    </NavLink>
                      <button onClick={()=>DeleteOrder(params.row.id)} className='px-6 py-1 rounded bg-red-400 text-white'>
                        delete
                      </button>
                    </div>)
        // 
      },
    },



  ];
   

  const DeleteOrder = (id) => {
        dispatch(Delete_Order(id))
  }
  return (
    <div className=' p-4 w-full '>
      <>
        {
          loading ?
            <Loader />
            :
            <>

              <h1 className=' text-xl font-bold my-2 mb-6'>Orders List</h1>
              <div className=' bg-white rounded-md shadow-md h-96 w-full' >
                <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  disableSelectionOnClick


                />
              </div>

            </>
        }

      </>

    </div>
  )
}

export default OrderList