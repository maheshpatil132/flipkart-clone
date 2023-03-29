import React from 'react'
import categories from './category.json'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './category.css'

const Category = () => {


    const show=()=>{

    }
   
  return (
    <div className=' overflow-x-scroll-scroll bg-white relative capitalize flex w-full gap-3 border p-3 font-semibold items-center justify-between px-4 lg:px-20'>
        
         {
            categories.map((elem,index)=>{
                return(
                    <div key={index} onClick={show} className=' relative menu flex gap-2 items-center'>
                        <h3>{elem.title}</h3>
                         { 
                            elem.sub ? <ExpandMoreIcon/> : ''
                         }

                         {
                            elem.sub &&

                            <div className=' bg-white z-10 p-4 w-48 border submenu absolute -left-10 top-9'>
                                {
                                    elem.sub.map((e,i)=>{
                                        return(
                                             <p className=' text-gray-400 text-sm font-light p-1'>{e}</p>
                                        )
                                    })
                                }
                            </div>
                         }
                         
                    </div>
                )
            })
         }
    </div>
  )
}

export default Category