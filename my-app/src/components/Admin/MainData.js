import React, { useEffect } from 'react'
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import { Chart, elements } from 'chart.js/auto';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import { Avatar, IconButton } from '@mui/material'
import Inventory from '@mui/icons-material/Inventory'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useDispatch, useSelector } from 'react-redux';
import { AdminGetProducts } from '../../actions/ProductActions';
import { AdminGetUsers } from '../../actions/UserActions';
import { AdminGetOrders } from '../../actions/OrderActions';



const MainData = () => {


  const dispatch = useDispatch()
  const {adminproducts, ProductCount} = useSelector(state=>state.AllProducts)
  const { users} = useSelector(state=>state.AllUser)
  const { orders} = useSelector(state=>state.AllOrders)
  

  let totalamount = orders?.reduce((total, order) => total + order.totalprice, 0);


  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  
  const lables = ['processing', 'delivered' , 'canceled']

  const data = {
    labels: lables,
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
      {
        label: 'Popularity of colours',
        data: lables.map((elem , index)=> orders && orders.reduce((total , curr)=> {
          if(curr.orderstatus === elem){
            total++;
          }
          return total
        } , 0) ),
        // you can set indiviual colors for each bar
        backgroundColor: [
          'orange',
          '#98fb98',
          '#f1807e',
        ],
        borderWidth: 1,
        width: 1,
        height: 1

      }
    ]
  } 

  let date = new Date()

  
  const bardata = {
    labels: months,
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
      {
        label: `Sales in ${date.getFullYear()}`,
        data: months.map((m, i) => orders?.filter((od) => new Date(od.createdAt).getMonth() === i && new Date(od.createdAt).getFullYear() === date.getFullYear()).reduce((total, od) => total + od.totalprice, 0))
        ,
        // you can set indiviual colors for each bar
        backgroundColor: [
          'lightblue'
        ],
        borderWidth: 1,
        borderRadius: 4

      },
      {
        label:  `Sales in ${date.getFullYear() - 1}`,
        data: months.map((m, i) => orders?.filter((od) => new Date(od.createdAt).getMonth() === i && new Date(od.createdAt).getFullYear() === date.getFullYear() - 2).reduce((total, od) => total + od.totalPrice, 0)),
        // you can set indiviual colors for each bar
        backgroundColor: [
          'blue'
        ],
        borderWidth: 1,
        borderRadius: 4


      }
    ]
  }


  let outofstock = 0;
  adminproducts &&  adminproducts.forEach((elem)=>{
    if(elem.stock<=0){
      outofstock = outofstock + 1;
    }
  })
  

  const piedata = {
    labels: ['stock', 'Out of stock'],
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
      {
        label: 'Popularity of colours',
        data: [ adminproducts && adminproducts.length - outofstock, outofstock],
        // you can set indiviual colors for each bar
        backgroundColor: [
          'lightblue',
          '#ff9ab4'
        ],
        borderWidth: 1,
        width: 1,
        height: 1

      }
    ]

    
  }

  


  useEffect(()=>{
    dispatch(AdminGetProducts())
    dispatch(AdminGetUsers())
    dispatch(AdminGetOrders())
  },[dispatch])

  return (
    <div className=' flex flex-col gap-4'>

      {/* <!-- box conatiner */}
      <div className=' flex items-center justify-between w-full gap-6 my-2 '>
        {/* <!-- box> */}
        <div className='w-full flex gap-4 items-center shadow-sm bg-white text-black font-bold p-3 rounded'>
          <IconButton sx={{ backgroundColor: '#ffe5b3' }} disableRipple   >
            <Avatar sx={{ backgroundColor: 'orange' }}>
              <CurrencyRupeeIcon fontSize='inherit' />
            </Avatar>
          </IconButton>
          <div>
            <h1 className='text-[1rem]'>Total Revenuse</h1>
            <h2 className='text-lg '>&#8377; {totalamount.toFixed(2)}</h2>
          </div>
        </div>
        {/* <!-- box> */}

        {/* <!-- box> */}
        <div className='w-full flex gap-4 items-center shadow-sm bg-white text-black font-bold p-3 rounded'>
          <IconButton sx={{ backgroundColor: '#ffe1ff' }} disableRipple   >
            <Avatar sx={{ backgroundColor: 'purple' }}>
              <ShoppingCartIcon fontSize='inherit' />
            </Avatar>
          </IconButton>
          <div>
            <h1 className='text-[1rem]'>Total Orders</h1>
            <h2 className='text-lg '>{orders.length}</h2>
          </div>
        </div>
        {/* <!-- box> */}


        {/* <!-- box> */}
        <div className='w-full flex gap-4 items-center bg-white shadow-sm text-black font-bold p-3 rounded'>
          <IconButton sx={{ backgroundColor: 'lightblue' }} disableRipple   >
            <Avatar sx={{ backgroundColor: ' blue' }}>
              <Inventory fontSize='inherit' />
            </Avatar>
          </IconButton>
          <div>
            <h1 className='text-[1rem]'>Total Products</h1>
            <h2 className='text-lg '>{ProductCount}</h2>
          </div>
        </div>
        {/* <!-- box> */}


        {/* <!-- box> */}
        <div className='w-full flex gap-4 items-center bg-white shadow-sm text-black font-bold p-3 rounded'>
          <IconButton sx={{ backgroundColor: '#c0f1c0' }} disableRipple   >
            <Avatar sx={{ backgroundColor: '#03c903' }}>
              <PermContactCalendarIcon fontSize='inherit' />
            </Avatar>
          </IconButton>
          <div>
            <h1 className='text-[1rem]'>Total Users</h1>
            <h2 className='text-lg '>{users.length}</h2>
          </div>
        </div>
        {/* <!-- box> */}
      </div>
      {/* <!-- box conatiner */}


      {/* <!-- Chart conatiner-1> */}
      <div className=' flex justify-between min-w-full gap-6 '>

        <div className=' bg-white w-full h-auto p-4 rounded-sm shadow-sm'>
          <span className=' text-lg font-bold'>Sales Report</span>
          <Bar data={bardata} />
        </div>

        <div className=' bg-white p-4 rounded-sm shadow-sm'>
          <span className=' text-lg font-bold'>Orders</span>
          <Doughnut data={data} />
        </div>

      </div>
      {/* <!-- Chart conatiner-1> */}


      {/* <!-- Chart conatiner-2> */}
      <div className=' flex justify-between min-w-full gap-6 '>

        <div className=' bg-white w-full h-auto p-4 rounded-sm shadow-sm'>
          <span className=' text-lg font-bold'>Sales Report</span>
          <Bar data={bardata} />
        </div>

        <div className=' bg-white p-4 rounded-sm shadow-sm'>
          <span className=' text-lg font-bold '>Products Details</span>
          <Pie data={piedata} />
        </div>

      </div>
      {/* <!-- Chart conatiner-2> */}


    </div>
  )
}

export default MainData