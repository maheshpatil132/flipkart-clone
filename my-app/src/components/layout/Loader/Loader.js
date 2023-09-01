import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
  return (
    <div className=" h-72 min-w-full flex items-center justify-center">
            <CircularProgress color={'success'} />
      </div>
  )
}

export default Loader