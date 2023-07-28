import { DataGrid } from '@mui/x-data-grid'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AdminGetProducts } from '../../actions/ProductActions'
import { NavLink } from 'react-router-dom'

const ProductList = () => {

  const { ProductCount, products } = useSelector(state => state.AllProducts)
  const dispatch = useDispatch()



  console.log(products);
  const rows = products.map((elem) => ({
      id: elem._id,
      ProductName: elem.title, 
      category: elem.category, 
      stock: elem.stock ,
      price:elem.price
     }),
)



  const columns = [
    { field: 'id', headerName: 'ID', width: 90, flex: 1 , 
    renderCell: (params) => {
      return(<NavLink to={`/admin/update-product/${params.row.id}`}>`${params.row.id}`</NavLink>)
      // 
    },
  },
    {
      field: 'ProductName',
      headerName: ' Product Name',
      width: 250,
      editable: true,
    },
    {
      field: 'category',
      headerName: 'Category',
      width: 250,
      editable: true,
    },
    {
      field: 'stock',
      headerName: 'Stock',
      width: 150,
      editable: true,
    },
    {
      field: 'price',
      headerName: 'Price',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    }
  ];


  useEffect(() => {
    dispatch(AdminGetProducts())
  }, [dispatch])


  return (
    <div className=' p-4'>
      <h1 className=' text-2xl font-bold my-2 mb-6'>Products</h1>
      <div className=' bg-white h-96 rounded shadow-lg border border-gray-200 '>
        <DataGrid
          rows={rows}
          columns={columns}
        />
      </div>
    </div>
  )
}

export default ProductList