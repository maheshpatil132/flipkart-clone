import { TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import register from '../../assets/register.png'
import { useDispatch, useSelector } from 'react-redux'
import { Clear_Errors, LoginUser } from '../../actions/UserActions'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const { loading , isAuthenticated , user ,  error} = useSelector(state => state.User)
  const submit = (e) => {
   e.preventDefault();

   const form = {
    email : email,
    password : password
   }
   
   dispatch(LoginUser(form))

   
   
  //  setEmail('')
  //  setPassword('')

  }

  const redirect = location.search ? location.search.split('=')[1] : 'account'
  useEffect(() => {
    window.scrollTo(0,0)
    if(error){
      toast.error(error)
      dispatch(Clear_Errors())
    }

    if(isAuthenticated){
      toast("login successfully",{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
      navigate(`/${redirect}`)
    }

     
   }, [dispatch , error ,isAuthenticated])
  return (
    <div className='flex p-4 w-1/2 mx-auto rounded'>
     <ToastContainer
       position="bottom-center"
       autoClose={5000}
       hideProgressBar={false}
       newestOnTop={false}
       closeOnClick
       rtl={false}
       pauseOnFocusLoss
       draggable
       pauseOnHover
       theme="light"
    />
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
     <form onSubmit={(e)=>submit(e)}  action="" className=' flex flex-col gap-4'>
         
          <TextField 
          label="Email"
          variant="standard"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
          <TextField 
          label="Password"
          variant="standard"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />
          <button className='bg-[#fb641b] mt-6 font-bold p-2 px-6 text-white text-lg'>Submit</button>
     </form>
     <div className=' mt-5'>
      
         <span className=' font-medium'> Already have Account ? <NavLink to={'/register'} ><span className=' font-bold text-primary cursor-pointer'>Register</span></NavLink>
         </span>
     </div>
    </div>
    {/* <!-- right Part> */}

 </div>
  )
}

export default Login