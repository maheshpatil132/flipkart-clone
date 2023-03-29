import React, { useEffect } from 'react'
import dslr from '../../assets/dslr.webp'
import StarIcon from '@mui/icons-material/Star';
import SellIcon from '@mui/icons-material/Sell';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Avatar } from '@mui/material';
import Category from '../layout/categories/Category';
import Productslider from '../home/productslider/Productslider';
import { useParams } from 'react-router-dom';
import { getproddetials } from '../../actions/ProductActions';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../layout/Loader/Loader';
import MetaData from '../layout/MetaData';
const ProductDetials = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { product, loading } = useSelector(state => state.ProductDetial)
    console.log(product.title);
    useEffect(() => {
        dispatch(getproddetials(id))

    }, [dispatch, id])

    return (
        <>
            {
                loading ? <Loader /> :
                    (<>
                        <MetaData title={product.title} />
                        <div className=' flex flex-col'>
                            <Category />
                            <div className=' p-3 flex bg-white  '>

                                {/* <left part start> */}
                                <div className=' w-[35%]  flex-1 flex flex-col p-6'>
                                    {/* img container */}
                                    
                                    <div className=' top-20 sticky'>
                                        <img className=' mx-auto w-full' src={dslr} alt="" />
                                        <div className=' my-8 flex items-center gap-2 justify-between'>
                                            <button className='w-full bg-[#ff9f00] text-lg font-bold text-white py-3'> <ShoppingCartIcon /> Add to cart</button>
                                            <button className='w-full  bg-[#fb641b] text-lg font-bold py-3 text-white'><ShoppingBagIcon /> Buy Now</button>
                                        </div>
                                    </div>

                                </div>
                                {/* </left part>*/}

                                {/* <!-- right container starts > */}
                                <div className=' p-4 px-8 w-[65%]'>
                                    {/* <!-- Heading container> */}
                                    <div className=' flex flex-col gap-2'>
                                        {/* <!--Heading> */}
                                        <h1 className=' capitalize text-xl text-[#212121] font-semibold'>{product.title}
                                        </h1>
                                        {/* <!--Heading> */}
                                        {/* <!--rating> */}
                                        <div className=' flex gap-4 items-center'>
                                            <div className=' font-bold flex gap-1 w-fit items-center text-sm bg-green-700 text-white py-[.1rem] px-2 rounded-sm'>
                                                <h1>{product.rating}</h1>
                                                <StarIcon fontSize='24px' />
                                            </div>
                                            <h1 className=' text-gray-500 text-sm font-bold'>
                                                {product.numrev} Ratings & {product.numrev} Reviews
                                            </h1>
                                        </div>
                                        {/* <!--Heading> */}

                                        {/* price */}

                                        <h1 className=' text-sm font-bold text-green-600 '>Special Price</h1>
                                        <h1 className=' font-bold text-3xl'>Rs. {product.price}

                                            <span className=' mx-4 text-gray-500 font-bold text-sm' >Rs. 69000</span>
                                            <span className=' text-green-600 text-base'>69% off</span>
                                        </h1>
                                        <p className=' capitalize text-red-500'>Hurry, Only 1 left!</p>

                                    </div>
                                    {/* <!-- Heading container> */}

                                    {/* <!-- offer continer> */}
                                    <div>
                                        <h1 className=' my-3 text-lg font-bold capitalize'>Available offers</h1>
                                        <ul className='flex flex-col gap-2'>
                                            <li className=' flex gap-3 items-center'>
                                                <SellIcon className=' text-green-600' />
                                                <p>Buy this Product and Get Extra ₹500 Off on Two-Wheelers</p>
                                            </li>
                                            <li className=' flex gap-3 items-center'>
                                                <SellIcon className=' text-green-600' />
                                                <p>Buy this Product and Get Extra ₹500 Off on Two-Wheelers</p>
                                            </li>
                                            <li className=' flex gap-3 items-center'>
                                                <SellIcon className=' text-green-600' />
                                                <p>Buy this Product and Get Extra ₹500 Off on Two-Wheelers</p>
                                            </li>
                                            <li className=' flex gap-3 items-center'>
                                                <SellIcon className=' text-green-600' />
                                                <p>Buy this Product and Get Extra ₹500 Off on Two-Wheelers</p>
                                            </li>

                                        </ul>
                                    </div>
                                    {/* <!-- offer continer> */}

                                    {/* <!-- features container> */}
                                    <div className=' my-4'>
                                        <h1 className=' my-3 text-lg font-bold capitalize'>Key Feaures</h1>
                                        <ul className='flex flex-col gap-2'>
                                            {
                                                product.features &&
                                                    product.features.length > 0 ?
                                                    product.features.map((elem, index) => {
                                                        return (
                                                            <li className=' flex gap-3 items-center'>
                                                                <RadioButtonCheckedIcon className=' text-gray-600' />
                                                                <p>Buy this Product and Get Extra ₹500 Off on Two-Wheelers</p>
                                                            </li>
                                                        )
                                                    })
                                                    : <h1>No Features Available</h1>
                                            }



                                        </ul>
                                    </div>
                                    {/* <!-- features container> */}

                                    {/*  <!-- Review container> */}
                                    <div className=' border border-b-0 my-4'>
                                        <div className=' flex border-b p-4 font-bold items-center justify-between'>
                                            <h1 className=' text-xl'>Reviews And Ratings</h1>
                                            <button className=' px-8 py-2 bg-[#fb641b] text-white '>Rate Product</button>
                                        </div>

                                        {
                                            product.reviews &&
                                                product.reviews.length > 0 ?
                                                product.reviews.map((elem, index) => {
                                                    return (
                                                        <div className=' p-4 flex flex-col gap-4 border-b'>
                                                            <div className=' flex items-center gap-3'>
                                                                <Avatar />
                                                                <h1 className=' font-bold'> Mahesh Patil </h1>
                                                                <div className=' font-bold flex gap-1 w-fit items-center text-sm bg-green-700 text-white py-[.1rem] px-2 rounded-sm'>
                                                                    <h1>4.5</h1>
                                                                    <StarIcon fontSize='24px' />
                                                                </div>
                                                            </div>
                                                            <p className=' text-sm font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, excepturi?</p>
                                                        </div>

                                                    )
                                                })
                                                : <div className=' p-4 border-b'>
                                                    <h1 className=' text-lg font-semibold text-center'>No Reviews</h1>
                                                </div>
                                        }



                                    </div>
                                    {/*  <!-- Review container> */}

                                    {/* <!-- Product Description> */}
                                    <div className=' border'>

                                        <div className='p-4 flex items-center border-b font-bold'>
                                            <h1 className=' text-2xl'>Product Description</h1>
                                        </div>
                                        <p className='p-4 text-sm leading-6'>
                                            {product.decr}
                                        </p>

                                    </div>
                                    {/* <!-- Product Description> */}

                                </div>
                                {/* <!-- right container ends> */}

                            </div>
                            <Productslider />

                            <Productslider />

                        </div>

                    </>)
            }

        </>
    )
}

export default ProductDetials