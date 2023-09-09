import { TextField } from '@mui/material'
import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import { useSelector } from 'react-redux';
import Loader from '../layout/Loader/Loader';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MetaData from '../layout/MetaData'
const Account = () => {


  const { user, loading } = useSelector(state => state.User)
   const [name, setName] = useState('')
   const [mobile, setMobile] = useState('')
   const [email, setEmail] = useState('')
   const navigate = useNavigate()
   

  useEffect(()=>{
    if(user){
     if(user.role === 'admin') navigate('/admin/dashboard')
     setName(user.name)
     setEmail(user.email)
     setMobile(user.mobile)
    }else{
      navigate('/login')
    }
  },[ user , navigate])

  return (


    <>
       <MetaData title={"Account"} />
      {loading ? <Loader />
        :
        <>
          <div className=' flex gap-4 p-8'>

            <div>
              <Sidebar user={user} />
            </div>


            {/* right part */}
            <div className=' flex-1 p-6 bg-white rounded'>

              {/* <!-- Personal Information> */}
              <div>
                <h1 className=' text-xl font-bold capitalize'>Personal Information</h1>

                <form action="" className=' mt-6 flex flex-col gap-8'>
                  <TextField
                    variant='standard'
                    label="Your Name"
                    className=' bg-white border capitalize  '
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                  />
                  <TextField
                    variant='standard'
                    label="Mobile Number"
                    className=' bg-white border capitalize'
                    value={mobile}
                    onChange={(e)=>setMobile(e.target.value)}
                  />
                  <TextField
                    variant='standard'
                    label="Email"
                    className=' bg-white border capitalize'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                  <button className=' w-fit mt-4 text-white bg-[#fb641b] py-3 px-14 rounded-sm'>Submit</button>
                </form>
              </div>
              {/* <!-- Personal Information> */}

              {/* <!-- Email Information> */}
              {/* <!-- Email Information> */}


              {/* <!-- Mobile Information> */}
              {/* <!-- Mobile Information> */}


            </div>
          </div>

        </>
      }



    </>
  )
}

export default Account