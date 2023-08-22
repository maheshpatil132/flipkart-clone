import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { Backdrop, Modal } from '@mui/material';

const Loader = () => {
  return (
    <div className=" h-72 min-w-full flex items-center justify-center">
          <Backdrop
           open={true}
          >
            <CircularProgress color={'success'} />
          </Backdrop>
        
      </div>
  )
}

export default Loader