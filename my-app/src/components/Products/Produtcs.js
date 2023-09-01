import { Checkbox, CircularProgress, Pagination, Slider } from '@mui/material'
import React, { useEffect } from 'react'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';
import Product from './Product';
import './products.css'
import MetaData from '../layout/MetaData';
import {  NavLink, useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getproduct } from '../../actions/ProductActions';


function valuetext(value) {
    return `${value}°C`;
}


const Produtcs = () => {

    const [value, setValue] = React.useState([0, 2000]);
    const [page, setPage] = useState(1)
    const [min , setMin] = useState(0)
    const [max , setMax] = useState(20000)
    const [ratings, setRatings] = useState(true);
    const [query , setQuery] = useSearchParams()
    const dispatch = useDispatch()
    const {loading , products ,error , ProductCount }= useSelector(state => state.AllProducts)
    
    const key = query.get('name')
    let resultsperpage = 10;
     
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
        setTimeout(()=>{
            setMax(newValue[1])
            setMin(newValue[0])
        } , 1000)
    };

    const togglerating = ()=>{
        setRatings(!ratings)
    }

    const changemin = (e)=>{
      const val = e.target.value
      setMin(val)
    }
    const changemax = (e)=>{
        const val = e.target.value
        setMax(val)
      }

      

        
    useEffect(() => {
        dispatch(getproduct(key , min , max , page))
        window.scrollTo(0,0)

    }, [min, dispatch , key ,page , max ])
    
    return (
        <>
        <div className=' flex gap-3 p-4'>
           <MetaData title={key}></MetaData>
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
                            <select value={min} onChange={(e)=>changemin(e)} name="min" className='capitalize font-semibold text-sm outline-none w-20 px-2' id="">
                                <option defaultValue={0}  >0</option>
                                <option value="5000">5000</option>
                                <option value="10000">10000</option>
                                <option value="100000">100000</option>
                            </select>
                        </div>
                        <p>To</p>
                        <div className=' border w-fit p-1 capitalize '>
                            <select value={max} onChange={(e)=>changemax(e)} name="min" className='capitalize font-semibold text-sm outline-none w-20 px-2' id="">
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
                            <p className='font-semibold text-sm'>Electronics</p>
                        </div>
                        <div className=' flex items-center'>
                            <Checkbox />
                            <p className='font-semibold text-sm'> shoes </p>
                        </div>
                        <div className=' flex items-center'>
                            <Checkbox />
                            <p className='font-semibold text-sm'> clothes </p>
                        </div>
                        <div className=' flex items-center'>
                            <Checkbox />
                            <p className='font-semibold text-sm'>  </p>
                        </div>
                    </div>
                    }
                </div>

            </div>
            {/* <!-- left side part> */}

            {/* <!-- right side part> */}
             {
                loading ? 
                <>
                  <div className='flex-1 bg-white w-full flex justify-center items-center'>
                     <CircularProgress/>
                  </div>
                </>
                : 
                <>
                    <div className=' flex-1'>

                    {/* <!-- Heading> */}
                    <div className=' bg-white p-4 border-b'>
                        <h1 className=' text-base font-bold'>
                            Showing { (page -1)*resultsperpage + 1 } - { products.SearchProducts ? ProductCount - (page -1)*resultsperpage + 1 > resultsperpage ? resultsperpage : ProductCount : resultsperpage } of { ProductCount} results for "{key}"
                        </h1>
                    </div>
                    {/* <!-- Heading> */}

                    {/* <!-- Products Conatiner> */}
                    <div className='grid border-b gap-3 bg-white grid-cols-4 p-4'>
                    {
                      products && products.SearchProducts &&  products.SearchProducts.length > 0  ?
                      products.SearchProducts.map((elem , index)=>{
                            return(
                                <NavLink to={`/product/${elem._id}`}>
                                    <Product data={elem} />
                                </NavLink>
                            )
                        })
                        :
                        <>
                        <h1 className=' text-center'>No Products Available</h1>
                        </>
                    }

                    </div>
                    {/* <!-- Products Conatiner> */}

                    {/* <!-- Pagination bar> */}
                    <div className=' p-4  bg-white flex items-center justify-between'>
                        <div>
                            <h1>Page {page} of { Math.ceil(ProductCount/resultsperpage) }</h1>
                        </div>
                        <Pagination
                            count={Math.ceil(ProductCount/10)}
                            defaultPage={1}
                            page={page}
                            color="primary"
                            onChange={(e , value)=>{setPage(value)}}
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
                </>
             }

            {/* <!-- right side part> */}

            {/* <!-- Accesories conatiner> */}

        </div>
        </>
    )
}

export default Produtcs