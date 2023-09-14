import { CircularProgress, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import register from '../../assets/register.png'
import { useDispatch, useSelector } from 'react-redux'
import { Clear_Errors, LoginUser } from '../../actions/UserActions'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { useSnackbar } from 'notistack'
import MetaData from '../layout/MetaData'


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const { enqueueSnackbar } = useSnackbar()
  const { isAuthenticated, error, loading } = useSelector(state => state.User)


  const submit = (e) => {
    e.preventDefault();
    const form = {
      email: email,
      password: password
    }
    dispatch(LoginUser(form))
    if (isAuthenticated) { enqueueSnackbar("Login Sucessfully", { variant: 'success' }) }
  }

  const redirect = location.search ? location.search.split('=')[1] : 'account'

  useEffect(() => {

    window.scrollTo(0, 0)

    if (error) {
      enqueueSnackbar(error, { variant: 'error' })
      dispatch(Clear_Errors())
    }

    if (isAuthenticated) {
      navigate(`/${redirect}`)
    }


  }, [dispatch, error, isAuthenticated, navigate, redirect, enqueueSnackbar])
  return (
    <div className='flex p-4 w-1/2 mx-auto rounded'>
      <MetaData title={"Login"}/>
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
        <form onSubmit={(e) => submit(e)} action="" className=' flex flex-col gap-4'>

          <TextField
            label="Email"
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type='password'
            variant="standard"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button disabled={loading ? true : false} 
          className={` ${ loading ? 'bg-slate-400' : 'bg-[#fb641b]'  }  mt-6 font-bold p-2 px-6 text-white text-lg`}>
            {loading ? 
            <div className=' flex gap-1 justify-center items-center'> 
              <CircularProgress size={25} style={{ 'color': 'white' }} />
              <h1>Please wait...</h1>
            </div>
             : "Login"}
            

            

          </button>
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