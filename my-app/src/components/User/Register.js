import { CircularProgress, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import register from '../../assets/register.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Clear_Errors, RegisterUser } from '../../actions/UserActions'
import { useSnackbar } from 'notistack';
import MetaData from '../layout/MetaData'




const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const dispatch = useDispatch();
  const { loading, isAuthenticated, error } = useSelector(state => state.User)

  const { enqueueSnackbar } = useSnackbar()

  const submit = (e) => {

    e.preventDefault();
     
    if(mobile.length !== 10){
      return enqueueSnackbar("Please Write valid mobile number" , {variant: 'error'})
    }

    if(password.length < 6){
      return enqueueSnackbar("Password should have minimum length six" , {variant: 'error'})
    }
   
    const form = {
      name: name,
      email: email,
      password: password,
      mobile: mobile
    }

    dispatch(RegisterUser(form))

    if (isAuthenticated) {
      enqueueSnackbar('Register Successfully', { variant: 'success' })
    }
  }


  useEffect(() => {
    window.scrollTo(0, 0)
    if (error) {
      enqueueSnackbar(error, { variant: 'error' })
      dispatch(Clear_Errors())
    }
    if (isAuthenticated) {
      navigate('/account')
    }

  }, [dispatch, error, isAuthenticated, navigate, enqueueSnackbar])
  return (
    <div className='flex p-4 w-1/2 mx-auto rounded'>
     <MetaData title={'Register'}/>
      {/* <!-- left Part> */}
      <div className=' w-72 flex flex-col justify-between bg-primary p-8 text-white'>
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
        <h1 className=' text-2xl font-semibold mb-3'>Register</h1>
        <form onSubmit={(e) => submit(e)} action="" className=' flex flex-col gap-4'>
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Email"
            variant="standard"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Mobile"
            variant="standard"
            value={mobile}
            required
            onChange={(e) => setMobile(e.target.value)}
          />
          <TextField
            label="Password"
            variant="standard"
            type='password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button disabled={loading ? true : false}
            className={` ${loading ? 'bg-slate-400' : 'bg-[#fb641b]'}  mt-6 font-bold p-2 px-6 text-white text-lg`}>{loading ?
              <div className=' flex gap-1 justify-center items-center'>
                <CircularProgress size={25} style={{ 'color': 'white' }} />
                <h1>Please wait...</h1>
              </div>
              : "Register"}</button>
        </form>
        <div className=' mt-5'>
          <span className=' font-medium'> Already have Account ? <NavLink to={'/login'} ><span className=' font-bold text-primary cursor-pointer'>Login</span></NavLink>
          </span>
        </div>
      </div>
      {/* <!-- right Part> */}

    </div>
  )
}

export default Register