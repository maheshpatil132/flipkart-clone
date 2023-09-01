import React, {  useEffect } from 'react'
import AdminSideBar from './AdminSideBar'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Dashboard = ({children ,activeTab}) => {
   const navigate = useNavigate()
   const {user} = useSelector(state=>state.User);

   useEffect(()=>{
      if(!user){
         navigate('/login')
      }
   } , [navigate , user])
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