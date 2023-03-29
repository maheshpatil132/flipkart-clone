import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
const OrderList = () => {
    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      ];
      

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 , flex:1 },
        {
          field: 'firstName',
          headerName: 'First name',
          width: 250,
          editable: true,
        },
        {
          field: 'lastName',
          headerName: 'Last name',
          width: 250,
          editable: true,
        },
        {
          field: 'age',
          headerName: 'Age',
          width: 150,
          editable: true,
        },
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
      ];
  return (
    <div className=' p-4 w-full '>
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
    </div>
  )
}

export default OrderList