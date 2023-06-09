import React from 'react'
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import { Chart } from 'chart.js/auto';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import { Avatar, IconButton } from '@mui/material'
import Inventory from '@mui/icons-material/Inventory'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';



const MainData = () => {


  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


  const data = {
    labels: ['preparing', 'shiped', 'delivered'],
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
      {
        label: 'Popularity of colours',
        data: [23, 23, 96],
        // you can set indiviual colors for each bar
        backgroundColor: [
          'purple',
          'orange',
          'lightgreen',
        ],
        borderWidth: 1,
        width: 1,
        height: 1

      }
    ]
  }

  const bardata = {
    labels: months,
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
      {
        label: '2022',
        data: [55, 23, 96, 50, 55, 45, 70, 65, 56, 23, 45, 65],
        // you can set indiviual colors for each bar
        backgroundColor: [
          'lightblue'
        ],
        borderWidth: 1,
        borderRadius: 4

      },
      {
        label: '2023',
        data: [57, 99, 80],
        // you can set indiviual colors for each bar
        backgroundColor: [
          'blue'
        ],
        borderWidth: 1,
        borderRadius: 4


      }
    ]
  }


  const piedata = {
    labels: ['stock', 'Out of stock'],
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
      {
        label: 'Popularity of colours',
        data: [56, 23],
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
            <h2 className='text-lg '>&#8377; 28000</h2>
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
            <h2 className='text-lg '>2000</h2>
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
            <h2 className='text-lg '>28000</h2>
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
            <h2 className='text-lg '>28</h2>
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