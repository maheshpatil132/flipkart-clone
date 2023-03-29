import { TextField } from '@mui/material'
import React from 'react'
import register from '../../assets/register.png'

const Login = () => {
  return (
    <div className='flex p-4 w-1/2 mx-auto rounded'>

    {/* <!-- left Part> */}
     <div className=' w-72 flex flex-col gap-10 justify-between bg-primary p-7 text-white'>
         <div>
             <h1 className='text-2xl mb-3 font-semibold'>Looks like you're New Here</h1>
             <p className=' text-lg'>Sign up with your mobile number to get started</p>
         </div>
         <div>
             <img src={register} alt="" />
         </div>
         
     </div>
    {/* <!-- left Part> */}

    {/* <!-- right Part> */}
    <div className=' bg-white p-8 flex-1'>
      <h1 className=' text-2xl font-semibold mb-3'>Login</h1>
     <form  action="" className=' flex flex-col gap-4'>
         
          <TextField 
          label="Email"
          variant="standard"/>
          <TextField 
          label="Password"
          variant="standard"/>
          <button className='bg-[#fb641b] mt-6 font-bold p-2 px-6 text-white text-lg'>Submit</button>
     </form>
     <div className=' mt-5'>
         <span className=' font-medium'> Already have Account ? <span className=' font-bold text-primary cursor-pointer'>Login</span></span>
     </div>
    </div>
    {/* <!-- right Part> */}

 </div>
  )
}

export default Login