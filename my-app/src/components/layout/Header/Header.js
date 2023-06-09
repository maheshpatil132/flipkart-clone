import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Primarydropdown from './Primarydropdown';
import Secondarydropdown from './Secondarydropdown';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

const Header = () => {

  const [toggleprimary, setToggleprimary] = useState(false)
  const [togglesecondary, setToggleSecondary] = useState(false)

  const primarytoggle = () => {
    setToggleprimary(!toggleprimary)
  }
  const secondarytoggle = () => {
    setToggleSecondary(!togglesecondary)
  }


  useEffect(() => {
     
  }, [])
  
  return (
    <div className=' sticky z-50 top-0 p-1.5 capitalize w-full justify-center gap-6 flex items-center text-white bg-primary '>


      {/* logo and search container starts */}
      <div className=' flex items-center gap-4'>
        <div className='italic font-bold'>
           <Link to={'/'}><h1 className='font-extrabold text-[1.32rem]'>Flipkart</h1></Link>
          <h6 className=' text-xs'>Explore <span className=' text-yellow-300'>plus <StarOutlineIcon fontSize='small' /></span>  </h6>
        </div>
        <SearchBar />
      </div>
      {/* logo and search container ends */}

      {/* right container start */}
      <div className=' flex items-center gap-10 font-bold relative'>
        <button onClick={primarytoggle} className=' px-10 py-1 bg-white font-semibold rounded-sm text-primary'>Login</button>
        {toggleprimary && <Primarydropdown />}

        <a href="/">Beacome a Seller</a>


        <span onClick={secondarytoggle} className=' relative  cursor-pointer'>More
          <span className=' px-1'>
            {togglesecondary ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </span>
        </span>

        {togglesecondary && <Secondarydropdown />}


        <span className='cursor-pointer'>
          <span className=' px-1'>
            <ShoppingCartIcon fontSize='small' />
          </span>
          cart</span>


      </div>
      {/* right container end */}

    </div>
  )
}

export default Header