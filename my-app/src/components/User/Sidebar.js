import { Avatar } from '@mui/material'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PersonIcon from '@mui/icons-material/Person';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch} from 'react-redux'
import { logoutUser } from '../../actions/UserActions';

const Sidebar = ({ user }) => {
    const dispatch = useDispatch()

  const logoutfun = () => {
    dispatch(logoutUser())
  }

    return (

        <div className=' w-80  flex flex-col gap-3'>
            {/* <!-- heading> */}
            <div className=' p-3 rounded bg-white flex gap-4 items-center'>
                <Avatar sx={{ height: 40, width: 40 }} />
                <h1 className=' text-xl capitalize font-bold'>{user && user.name}</h1>
                <button onClick={logoutfun} className=' bg-red-500 text-white ml-auto px-5 py-1 rounded'>Log out</button>
            </div>
            {/* <!-- heading> */}

            {/* <!--Personal Detials> */}
            <div className=' bg-white rounded-sm'>

                {/* <!-- my orders box> */}
                <NavLink to={'/account/orders'}>
                    <div className=' p-4  py-5 w-full flex gap-6 items-center  border-b font-extrabold uppercase text-gray-500'>
                        <LocalMallIcon className=' text-primary' />
                        <h1 className=' text-lg'>My Orders</h1>
                        <ArrowForwardIosIcon className=' ml-auto' fontSize='small' />
                    </div>
                </NavLink>
                {/* <!-- my orders box> */}

                {/* <!-- Account box> */}
                <div className=' border-b py-2' >
                    <div className=' p-4 py-5 w-full flex gap-6 items-center  font-extrabold uppercase text-gray-500'>
                        <PersonIcon className=' text-primary' />
                        <h1 className=' text-lg'>Account Settings</h1>
                    </div>

                    {/* links */}
                    <ul className=' text-black font-medium'>
                        <NavLink to={'/account'}>
                            <li className=' text-base hover:bg-green-50 py-3 px-16'>
                                Profile Information
                            </li>
                        </NavLink>
                        <li className=' text-base hover:bg-green-50 py-3 px-16'>Manage Address</li>
                    </ul>
                    {/* links */}
                </div>
                {/* <!-- Account box> */}

                {/* <!-- Mystuf box> */}
                <div className=' border-b py-2' >
                    <div className=' p-4 py-5 w-full flex gap-6 items-center  font-extrabold uppercase text-gray-500'>
                        <PersonIcon className=' text-primary' />
                        <h1 className=' text-lg'>My Stufs</h1>
                    </div>

                    {/* links */}
                    <ul className=' text-black font-medium'>
                        <li className=' text-base hover:bg-green-50 py-3 px-16'>My Reviews & Ratings</li>
                        <NavLink to={'/wishlist'}><li className=' text-base hover:bg-green-50 py-3 px-16'>My Wishlist</li></NavLink>
                    </ul>
                    {/* links */}
                </div>
                {/* <!-- Mystuf box> */}



            </div>
            {/* <!--Personal Detials> */}


        </div>
    )
}

export default Sidebar