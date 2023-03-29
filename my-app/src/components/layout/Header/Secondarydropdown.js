import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import GetAppIcon from '@mui/icons-material/GetApp';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';

const Secondarydropdown = () => {
    const nav = [
        {
            title:"Notification Preference",
            icon:<NotificationsIcon fontSize={'small'}/>,
            redirect:"kakakkakkakakk"
        },
        {
            title:"24X7 customer care",
            icon:<LiveHelpIcon fontSize={'small'}/>,
            redirect:"kakakkakkakakk"
        }, {
            title:"Advertise",
            icon:<AutoGraphIcon fontSize={'small'}/>,
            redirect:"kakakkakkakakk"
        }, {
            title:"Download App",
            icon:<GetAppIcon fontSize={'small'}/>,
            redirect:"kakakkakkakakk"
        },
    ]
  return (
    <div className=' dropdown absolute w-60 -right-2 top-12 bg-white shadow-2xl rounded flex-col text-sm'>
    { 
   
        nav.map((elem,index)=>{
            return(
                
                   <div className=' p-4 border-b font-semibold  hover:bg-slate-100  gap-4 text-primary flex items-center'>
                        {elem.icon}
                        <h6 className=' text-black'>{elem.title}</h6>
                   </div>
              
            )
        })
    }
</div>
  )
}

export default Secondarydropdown