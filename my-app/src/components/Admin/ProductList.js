import { DataGrid } from '@mui/x-data-grid'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AdminGetProducts, Delete_Product } from '../../actions/ProductActions'
import { NavLink } from 'react-router-dom'
import Loader from '../layout/Loader/Loader'
import {enqueueSnackbar} from 'notistack'

const ProductList = () => {

  const { adminproducts, loading  , isDeleted , error} = useSelector(state => state.AllProducts)
  const dispatch = useDispatch()
   
  useEffect(() => {
    dispatch(AdminGetProducts())
    if(isDeleted){
      enqueueSnackbar('Deleted Sucessfully ' , { variant : 'success'})
    }
    if(error){
      enqueueSnackbar(error, { variant : 'success'})
    }
  }, [dispatch , error , isDeleted ])



  const rows = adminproducts ? adminproducts.map((elem) => ({
    id: elem._id,
    ProductName: elem.title,
    category: elem.category,
    stock: elem.stock,
    price: 'Rs.' + elem.price,
    curetedPrice: 'Rs.' + elem.cureted_price,
    image: elem.images,
    sell : elem.sell
  }),
  ) : []





  const columns = [

    {
      field: "image",
      headerName: 'Image',
      width: 80,
      renderCell: (params) => {
        return (<div className='flex justify-center'>{
             params.row.image.map((elem) => {
            return (
              <img className='h-10 mx-1' src={elem.url} alt="imagess" />
            )
          })
        } </div>)
        // 
      },
    },
    {
      field: 'id', headerName: 'ID', width: 80,
      renderCell: (params) => {
        return (<NavLink to={`/admin/update-product/${params.row.id}`}>`${params.row.id}`</NavLink>)
        // 
      },
    },

    {
      field: 'ProductName',
      headerName: ' Product Name',
      width: 120,
      editable: true,
    },
    {
      field: 'category',
      headerName: 'Category',
      width: 120,
      editable: true,
    },
    {
      field: 'stock',
      headerName: 'Stock',
      width: 70,
      editable: true,
    },
    {
      field: 'price',
      headerName: 'Price',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 100,
    },
    {
      field: 'curetedPrice',
      headerName: 'curtedPrice',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 100,
    },
    {
      field: 'sell',
      headerName: 'Sell',
      description: 'This column has a value getter and is not sortable.',
      sortable: true,
      width: 80,
    },
    {
      field: "Action",
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (<div className='space-x-3'>
                      <NavLink to={`/admin/update-product/${params.row.id}`}>
                        <button className=' ml-auto px-6 py-1 rounded bg-primary text-white'>
                          View
                        </button>
                      </NavLink>
                      <button onClick={(e)=>{ProductDelete(params.row.id)}} className='px-6 py-1 rounded bg-red-400 text-white'>
                        delete
                      </button>
                    </div>)
        // 
      },
    },

  ];



  const ProductDelete = (id) => {
     dispatch(Delete_Product(id))
  }


  


  return (

    <>
      {
        loading ?
          <Loader />
          :

          <div className=' p-4'>
            <h1 className=' text-2xl font-bold my-2 mb-6'>Products</h1>
            <div className=' bg-white h-96 rounded shadow-lg border border-gray-200 '>
              <DataGrid
                rows={rows}
                columns={columns}
              />
            </div>
          </div>

      }


    </>
  )
}

export default ProductList