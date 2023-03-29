import { Checkbox, Pagination, Slider } from '@mui/material'
import React from 'react'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';
import Product from './Product';
import './products.css'
import MetaData from '../layout/MetaData';
import { useParams } from 'react-router-dom';
import Productslider from '../home/productslider/Productslider';


function valuetext(value) {
    return `${value}°C`;
}


const Produtcs = () => {

    const [value, setValue] = React.useState([20, 37]);
    const [ratings, setRatings] = useState(true);
    const {keyword} = useParams()
    

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const togglerating = ()=>{
        setRatings(!ratings)
    }
    return (
        <>
        <div className=' flex gap-3 p-4'>
           <MetaData title={"jsjs"}></MetaData>
            {/* <!-- left side part> */}
            <div className=' w-64 sticky top-20 bg-white h-fit'>
                
                <div className=' p-4 border-b'>
                    <h1 className=' text-lg font-bold'>Filters</h1>
                </div>

                {/* <div className='p-4 border-b'>
                    <h1>categories</h1>
                    <p>camera</p>
                </div> */}

                <div className='p-4 border-b'>
                    <h1 className=' text-base font-bold'>Price</h1>

                    <Slider
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        min={0}
                        max={200000}

                    />

                    <div className=' flex items-center justify-between'>
                        <div className=' border w-fit p-1 capitalize '>
                            <select name="min" className='capitalize font-semibold text-sm outline-none w-20 px-2' id="">
                                <option value="min">min</option>
                                <option value="one">5000</option>
                                <option value="two">10000</option>
                                <option value="three">100000</option>
                            </select>
                        </div>
                        <p>To</p>
                        <div className=' border w-fit p-1 capitalize '>
                            <select name="min" className='capitalize font-semibold text-sm outline-none w-20 px-2' id="">
                                <option value="min">Max</option>
                                <option value="one">5000</option>
                                <option value="two">10000</option>
                                <option value="three">100000</option>
                            </select>
                        </div>
                    </div>

                </div>

                <div className=' p-4 border-b'>
                    <div className=' flex justify-between items-center'>
                        <h1 className=' text-sm font-bold'>CUSTOMER RATINGS</h1>
                        <div className=' cursor-pointer' onClick={togglerating}>
                            { ratings && <ExpandLessIcon /> }
                            { !ratings && <ExpandMoreIcon/> }
                        </div>
                    </div>
{
      ratings && 
                    <div>
                        <div className=' flex items-center'>
                            <Checkbox />
                            <p className='font-semibold text-sm'>4 <StarIcon fontSize='10px' /> &  above </p>
                        </div>
                        <div className=' flex items-center'>
                            <Checkbox />
                            <p className='font-semibold text-sm'>3 <StarIcon fontSize='10px' /> &  above </p>
                        </div>
                        <div className=' flex items-center'>
                            <Checkbox />
                            <p className='font-semibold text-sm'>2 <StarIcon fontSize='10px' /> &  above </p>
                        </div>
                        <div className=' flex items-center'>
                            <Checkbox />
                            <p className='font-semibold text-sm'>2 <StarIcon fontSize='10px' /> &  above </p>
                        </div>
                    </div>
                    }
                </div>

            </div>
            {/* <!-- left side part> */}

            {/* <!-- right side part> */}

            <div className=' flex-1'>

            {/* <!-- Heading> */}
            <div className=' bg-white p-4 border-b'>
                <h1 className=' text-base font-bold'>Showing 1 - 40 of 74,726 results for "cameras"</h1>
            </div>
            {/* <!-- Heading> */}

            {/* <!-- Products Conatiner> */}
            <div className='grid border-b bg-white grid-cols-4 p-4'>
               <Product/>
               <Product/>
               <Product/>
               <Product/>
               <Product/>
               <Product/>
               <Product/>
               <Product/>
               <Product/>

            </div>
            {/* <!-- Products Conatiner> */}

            {/* <!-- Pagination bar> */}
               <div className=' p-4  bg-white flex items-center justify-between'>
                 <div>
                    <h1>Page 1 of 1,870</h1>
                 </div>
                   <Pagination
                    count={10}
                    defaultPage={1}
                    color="primary"
                   />
               </div>
            {/* <!-- Pagination bar> */}

            {/* <!-- like container> */}
             <div className=' border mt-2 p-4 bg-white flex gap-8 items-center'>
                <h1 className=' font-semibold'>Did you find what you were looking for?</h1>
                <div className=' flex items-center gap-4'>
                    <button className=' border px-8 py-1 bg-white font-bold'>Yes</button>
                    <button className=' border px-8 py-1 bg-white font-bold'>No</button>
                </div>
             </div>
            {/* <!-- like container> */}

            </div>

            {/* <!-- right side part> */}

            {/* <!-- Accesories conatiner> */}

        </div>
        </>
    )
}

export default Produtcs