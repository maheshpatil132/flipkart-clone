import { TextField } from '@mui/material'
import React from 'react'
import Sidebar from './Sidebar'

const Account = () => {
  return (
    <div className=' flex gap-4 p-8'>

      <div>
        <Sidebar />
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
              className=' bg-white border  '
            />
            <TextField
              variant='standard'
              label="Mobile Number"
              className=' bg-white border'
            />
            <TextField
              variant='standard'
              label="Email"
              className=' bg-white border'
            />
            <TextField
              variant='standard'
              label="Password"
              className=' bg-white border'
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
  )
}

export default Account