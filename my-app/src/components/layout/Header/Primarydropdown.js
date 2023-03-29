import React from 'react'
import './header.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCardIcon from '@mui/icons-material/AddCard';
import RedeemIcon from '@mui/icons-material/Redeem';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const Primarydropdown = () => {
    const nav = [
        {
            title:"My Profile",
            icon:<AccountCircleIcon/>,
            redirect:"kakakkakkakakk"
        },
        {
            title:"Flipkart plus zone",
            icon:<AddCircleOutlineIcon/>,
            redirect:"kakakkakkakakk"
        }, {
            title:"orders",
            icon:<AddCardIcon/>,
            redirect:"kakakkakkakakk"
        }, {
            title:"whislist",
            icon:<FavoriteIcon/>,
            redirect:"kakakkakkakakk"
        }, {
            title:"rewards",
            icon:<EmojiEventsIcon/>,
            redirect:"kakakkakkakakk"
        },
        {
            title:"Gift cards",
            icon:<RedeemIcon/>,
            redirect:"kakakkakkakakk"
        },
    ]

    
  return (
    <div className=' dropdown absolute w-60 -left-16 top-12 bg-white shadow-2xl rounded flex-col text-sm'>
        { 
       
            nav.map((elem,index)=>{
                return(
                    
                       <div className=' p-4 border-b font-semibold hover:bg-slate-100  gap-4 text-primary flex items-center'>
                            <div>{elem.icon}</div>
                            <h6 className=' text-[#212121]'>{elem.title}</h6>
                       </div>
                  
                )
            })
        }
    </div>
  )
}

export default Primarydropdown