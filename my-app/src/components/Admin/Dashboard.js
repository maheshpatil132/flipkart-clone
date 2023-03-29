import Inventory from '@mui/icons-material/Inventory'
import { Avatar, IconButton } from '@mui/material'
import React, { Children } from 'react'
import AdminSideBar from './AdminSideBar'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import MainData from './MainData';


const Dashboard = ({children ,activeTab}) => {
  
   return (
      <div className=' min-h-screen flex'>
         <AdminSideBar activeTab={activeTab} />
         <div className="right flex flex-col flex-1 p-3 px-8 ">
            {/* chart container -1 */}
             <div className='overflow-hidden '>
               { children }
             </div>
            {/* chart container -1 */}
           
         </div>
      </div>
   )
}

export default Dashboard