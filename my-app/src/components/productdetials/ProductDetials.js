import React, { useEffect, useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
import SellIcon from '@mui/icons-material/Sell';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Avatar } from '@mui/material';
import Category from '../layout/categories/Category';
import Productslider from '../home/productslider/Productslider';
import { useNavigate, useParams } from 'react-router-dom';
import { ClearError, Reset_Review, getproddetials, newReview } from '../../actions/ProductActions';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../layout/Loader/Loader';
import MetaData from '../layout/MetaData';
import { AddCart } from '../../actions/CartActions';
import { useSnackbar } from 'notistack'
import { Box, Typography } from '@mui/material'
import Modal from '@mui/material/Modal';
import Rating from '@mui/material/Rating';

const ProductDetials = () => {
    const [open, setOpen] = useState(false)
    const [review, setReview] = useState('')
    const [value, setValue] = React.useState(2);
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { product, loading  , error} = useSelector(state => state.ProductDetial)
    const { success, error: reviewError } = useSelector((state) => state.newReview);
    const { user } = useSelector((state) => state.User);
    const { enqueueSnackbar } = useSnackbar()

    const AddToCart = () => {
        dispatch(AddCart(product, 1))
        enqueueSnackbar("Product Added in Cart", { variant: 'success' })
        navigate('/cart')
    }


    const buynow = () => {
        dispatch(AddCart(product, 1));
        navigate('/checkout')
    }

    const handleReview = (e) => {
       setReview(e.target.value)
    }

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '0.01px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const submitreview = () => {

        if (value === 0 || !review.trim()) {
            enqueueSnackbar("Empty Review", { variant: "error" });
            return;
        }

        if( user === null){
            enqueueSnackbar("Please Login First to Submit the Review", { variant: "error" });
            setReview('')
            setOpen(false)
            return;
        }
        const formData = new FormData();
        formData.set("rating", value);
        formData.set("comment", review);
        formData.set("productid", product._id);
        formData.set("name", user.name);

        dispatch(newReview(formData))
        setReview('')
        setOpen(false);
    }


    useEffect(() => {
        if (error) {
            enqueueSnackbar(error, { variant: "error" });
            dispatch(ClearError())
        }
        if (reviewError) {
            enqueueSnackbar(reviewError, { variant: "error" });
            dispatch(ClearError())
        }
        if (success) {
            enqueueSnackbar("Review Submitted Successfully", { variant: "success" });
            dispatch(Reset_Review())
        }
        dispatch(getproddetials(id))
        // eslint-disable-next-line
    }, [dispatch, id, error, reviewError, success, enqueueSnackbar]);

    useEffect(() => {
        dispatch(getproddetials(id))
        window.scrollTo(0, 0)
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
                                        <img loading='lazy' className='hover:scale-105 cursor-pointer transition-all mx-auto w-80' src={product && product.images && product.images[0].url} alt="" />
                                        <div className=' my-8 flex items-center gap-4 justify-between'>
                                            <button 
                                                disabled={ product && product.stock === 0 } 
                                                onClick={() => AddToCart()} 
                                                className={` ${product && product.stock === 0 ? 'bg-slate-400' : 'bg-[#fb641b]' } rounded w-full bg-[#ff9f00] text-lg font-bold text-white py-3`}> 
                                                <ShoppingCartIcon /> Add to cart
                                            </button>
                                            <button  
                                            disabled={ product && product.stock === 0 } 
                                            onClick={() => buynow()} 
                                            className={`w-full ${product && product.stock === 0 ? 'bg-slate-400' : 'bg-[#fb641b]' } rounded text-lg font-bold py-3 text-white`}><ShoppingBagIcon /> Buy Now
                                            </button>
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
                                                <h1>{product.rating && product.rating.toFixed(2)}</h1>
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

                                            <del className=' mx-4 text-gray-500 font-bold text-sm' > Rs.{product.cureted_price}</del>
                                            <span className=' text-green-600 text-base'>
                                            { (((product.cureted_price - product.price)/product.cureted_price) * 100).toFixed(2) }%
                                            </span>
                                        </h1>
                                        <p className='  text-lg font-bold capitalize '><span>Stock : </span> 
                                        
                                        { product.stock === 0 ? <span className='text-red-400'>out of stock</span> : product.stock} </p>
                                        <p className='  text-lg font-bold capitalize '><span>category : </span> {product.category} </p>

                                    </div>
                                    {/* <!-- Heading container> */}

                                    {/* <!-- offer continer> */}
                                    <div className=' border my-4'>
                                        <h1 className=' border-b p-3 text-lg font-bold capitalize'>Available offers</h1>
                                        <ul className='flex flex-col p-4 gap-3'>
                                            <li className=' flex gap-3 items-center'>
                                                <SellIcon className=' text-green-600' />
                                                <p>Buy this Product and Get Extra ₹500 Off </p>
                                            </li>
                                            <li className=' flex gap-3 items-center'>
                                                <SellIcon className=' text-green-600' />
                                                <p>Buy this Product and Get Extra 10% cashback </p>
                                            </li>
                                            <li className=' flex gap-3 items-center'>
                                                <SellIcon className=' text-green-600' />
                                                <p>Bank OfferFlat ₹200 off on HDFC Bank Credit/Debit Card on 3 months EMI Txns, Min Txn Value ₹10,000</p>
                                            </li>
                                            <li className=' flex gap-3 items-center'>
                                                <SellIcon className=' text-green-600' />
                                                <p>Partner OfferSign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹10,000* </p>
                                            </li>

                                        </ul>
                                    </div>
                                    {/* <!-- offer continer> */}

                                    {/* <!-- features container> */}
                                    <div className=' border my-4'>
                                        <h1 className='border-b p-3  text-lg font-bold capitalize'>Key Features</h1>
                                        <ul className='flex flex-col p-3 gap-2'>
                                            {
                                                product.features &&
                                                    product.features.length > 0 ?
                                                    product.features.map((elem, index) => {
                                                        return (
                                                            <li key={index} className=' flex gap-3 items-start'>
                                                                <RadioButtonCheckedIcon fontSize='small' color='success' className=' text-gray-600' />
                                                                <p className=' text-base'>{elem}</p>
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
                                            <button onClick={handleOpen} className=' rounded px-8 py-2 bg-[#fb641b] text-white '>Rate Product</button>
                                        </div>

                                        <Modal
                                            open={open}
                                            onClose={handleClose}
                                            aria-labelledby="modal-modal-title"
                                            aria-describedby="modal-modal-description"
                                        >
                                            <Box sx={style}>
                                                <Typography id="modal-modal-title" variant="h5" component="h2">
                                                    Add Reviews and Ratings
                                                </Typography>

                                                <Rating
                                                    name="simple-controlled"
                                                    value={value}
                                                    onChange={(event, newValue) => {
                                                        setValue(newValue);
                                                    }}
                                                />

                                                <textarea 
                                                value={review} 
                                                rows={5}
                                                onChange={(e)=>handleReview(e)}
                                                className=' p-2 border-black border-2 w-full'  />
                                                <button 
                                                    onClick={submitreview}
                                                    className=' bg-orange-400 text-white rounded p-1 px-6 my-2'>
                                                    submit
                                                </button>
                                                <button 
                                                 onClick={handleClose}
                                                 className=' mx-4 bg-red-500 text-white rounded p-1 px-6 my-2'>cancel</button>

                                            </Box>
                                        </Modal>

                                        {
                                            product.reviews &&
                                                product.reviews.length > 0 ?
                                                product.reviews.map((elem, index) => {
                                                    return (
                                                        <div key={index} className=' p-4 flex flex-col gap-4 border-b'>
                                                            <div className=' flex items-center gap-3'>
                                                                <Avatar />
                                                                <h1 className=' font-bold capitalize'> {elem.name} </h1>
                                                                <div className=' font-bold flex gap-1 w-fit items-center text-sm bg-green-700 text-white py-[.1rem] px-2 rounded-sm'>
                                                                    <h1>{elem.rate}</h1>
                                                                    <StarIcon fontSize='24px' />
                                                                </div>
                                                            </div>
                                                            <p className=' text-sm font-medium'>
                                                                {elem.Comment}
                                                            </p>
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
                            <Productslider category={product.category} title={product.category} />

                            {/* <Productslider category={product.category} page={2} /> */}

                        </div>



                    </>)

            }

        </>
    )
}

export default ProductDetials