import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { Modal } from '@mui/material';

const Loader = () => {
  return (
    <div className=" h-72 min-w-full flex items-center justify-center">
          
          <CircularProgress />

        
      </div>
  )
}

export default Loader