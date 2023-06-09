import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
   const [keyword, setKeyword] = useState('')
   const navigate = useNavigate()
  const handlesubmit = (e)=>{
    e.preventDefault();
    if(keyword){
      navigate(`/search/${keyword}`)
    }
  }

  return (
    <form onSubmit={(e)=> handlesubmit(e)} className=' text-black flex w-[400px] px-4 p-1.5 rounded-sm  items-center bg-white '>
       <input onChange={(e)=>{ setKeyword(e.target.value) }} type="text" name='search' placeholder='what do you want?' className=' outline-none flex-1 p-0 bg-transparent text-sm' />
       <div className=' pl-2'>
       <SearchIcon className=' text-primary' />
       </div>
    </form>
  )
}

export default SearchBar