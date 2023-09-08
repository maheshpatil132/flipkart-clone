import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";

const SearchBar = () => {
   const [keyword, setKeyword] = useState('')
   const [searchParams, setSearchParams] = useSearchParams();
   const [query , setQuery] = useSearchParams();

   const navigate = useNavigate()
  const handlesubmit = (e)=>{
    e.preventDefault();
    navigate(`/search?name=${keyword}`)
  }


  return (
    <form onSubmit={(e)=> handlesubmit(e)} className=' text-black flex w-[400px] px-4 p-1.5 rounded-sm  items-center bg-white '>
       <input 
       onChange={(e)=>{ setKeyword(e.target.value) }} 
       type="text" 
       name='search' 
       placeholder='Search for Products , Brand and Categories' 
       className=' outline-none flex-1 p-0 bg-transparent text-sm' />
       <div className=' pl-2'>
       <SearchIcon className=' text-primary' />
       </div>
    </form>
  )
}

export default SearchBar