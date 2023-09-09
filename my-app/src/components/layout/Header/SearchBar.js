import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useLocation, useNavigate } from 'react-router-dom';

const SearchBar = () => {
   const [keyword, setKeyword] = useState('')
   
   const {pathname} = useLocation()
   

   const navigate = useNavigate()
  const handlesubmit = (e)=>{
    e.preventDefault();
    navigate(`/search?name=${keyword}`)
  }

  useEffect(()=>{
   if(pathname !== '/search')
        setKeyword('')
  },[pathname])


  return (
    <form onSubmit={(e)=> handlesubmit(e)} className=' w-[400px] text-black flex px-4 p-1.5 rounded  items-center bg-white '>
       <input 
       onChange={(e)=>{ setKeyword(e.target.value) }} 
       value={keyword}
       type="text" 
       name='search' 
       placeholder='Search for Products , Brand and Categories' 
       className=' rounded outline-none flex-1 py-1 w-4/6  bg-transparent text-base' />
       <div className=' pl-2'>
       <SearchIcon className=' text-primary' />
       </div>
    </form>
  )
}

export default SearchBar