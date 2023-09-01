import React from 'react'
import Avatar from '@mui/material/Avatar';
import InventoryIcon from '@mui/icons-material/Inventory';
import { NavLink} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../actions/UserActions';


const AdminSideBar = ({ activeTab }) => {

  const dispatch = useDispatch()

  let activeStyle = {
     backgroundColor : '#334155'
  };

  const logoutfun = () => {
    dispatch(logoutUser())
  }
  const navs = [
    {
      title: "Dashboard",
      redirect: '/admin/dashboard'
    },
    {
      title: "Orders",
      redirect: '/admin/orders'
    },
    {
      title: "Products",
      redirect: '/admin/products'
    },
    {
      title: "Add Product",
      redirect: '/admin/add-product'
    },
    {
      title: "Users",
      redirect: '/admin/users'
    },
    {
      title: "All reviews",
      redirect: '/admin/all/revi  ews'
    },
    


  ]

  return (
    <div className=' text-white bg-slate-800 min-w-[18rem] p-3'>

      {/* <!-- Admin Info> */}
      <div className=' flex items-center gap-5 mb-9 mt-2 p-4 bg-slate-700 rounded'>
        <Avatar />
        <div className=' text-gray-300'>
          <h1 className=' text-white  font-medium '>Admin</h1>
          <p>admin@gmail.com</p>
        </div>
      </div>
      {/* <!-- Admin Info> */}

      {/* Navbar */}
      <nav className=' flex flex-col gap-1 '>
        {
          navs.map((elem, index) => {
            return (
              <NavLink key={index} to={elem.redirect} style={activeTab===index ? activeStyle : undefined}  className={'flex hover:bg-slate-700 items-center gap-5 p-4 rounded'}>
                <InventoryIcon />
                <h1>{elem.title}</h1>
              </NavLink>
            )
          })
        }
        <button onClick={logoutfun} className={'flex hover:bg-slate-700 items-center gap-5 p-4 rounded'}>
        <InventoryIcon />
          Log out
          </button>

      </nav>
      {/* developer */}
    </div>
  )
}

export default AdminSideBar