import { TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import dslr from '../../assets/dslr.webp'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { RemoveCart } from '../../actions/CartActions'







const CheckoutOrder = () => {

    const { Products } = useSelector(state => state.Cart)
    const dispatch = useDispatch()
    const [address, setAddress] = useState()
    const [pincode, setPincode] = useState()
    const [city, setCity] = useState()
    const [state, setState] = useState()
    const [country, setCountry] = useState()
    const [itemsprices, setItemsPrices] = useState(0)
    
    console.log(Products);


    const remove = (e) => {
        dispatch(RemoveCart(e._id))
    }

    let i = 0;
    
    useEffect(() => { 
       Products.forEach(element => {
            // i = i + Number(element.price)
            setItemsPrices(itemsprices + Number(element.price))
       });  
    }, [Products])


    return (
        <div className=' flex  p-6  gap-8 '>
            {/* left part */}
            <div className=' flex-1'>

                {/* <!-- Login Detials> */}
                <div className=' bg-white flex items-center p-5 py-3.5 gap-6'>
                    <div className=' h-6 w-6 font-bold bg-slate-100 p-3 flex items-center justify-center  text-primary'>
                        1
                    </div>

                    <div className=' flex flex-col items-start'>
                        <h1 className=' text-lg font-bold text-gray-500'>Mahesh</h1>
                    </div>

                    <div className=' ml-auto '>
                        <button className='px-8 border border-primary text-primary rounded-sm text-lg py-1.5'>Change</button>
                    </div>
                </div>
                {/* <!-- Login Detials> */}

                {/* <!-- Delivery Address> */}
                <div className=' bg-green-50'>

                    <div className=' bg-primary text-white flex items-center mt-4 p-5 py-2 gap-6'>
                        <div className=' h-6 w-6 font-bold bg-slate-100 p-3 flex items-center justify-center  text-primary'>
                            2
                        </div>
                        <div className=' flex flex-col items-start'>
                            <h1 className=' text-lg font-bold'>Delivery Address</h1>
                        </div>

                        <div className=' ml-auto '>
                            <button className='px-8 border border-primary text-primary rounded-sm text-lg py-1.5'>Change</button>
                        </div>
                    </div>

                    <div className='p-5 py-2'>

                        <form action="" className=' p-6 flex flex-col gap-6 mt-4 w-3/4'>
                            <h1 className=' text-lg font-bold'>Add Adress</h1>

                            <div className=' flex gap-4'>
                                <TextField
                                    label='address'
                                    variant='outlined'
                                    size='small'
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    fullWidth
                                    InputProps={{ className: 'bg-white' }}

                                />
                                <TextField
                                    label='pincode'
                                    variant='outlined'
                                    size='small'
                                    value={pincode}
                                    onChange={(e) => setPincode(e.target.value)}
                                    fullWidth
                                    InputProps={{ className: 'bg-white' }}
                                />
                            </div>

                            <div className=' flex gap-4'>

                                <TextField
                                    label='city'
                                    variant='outlined'
                                    size='small'
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    fullWidth
                                    InputProps={{ className: 'bg-white' }}
                                />
                                <TextField
                                    label='state'
                                    variant='outlined'
                                    size='small'
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                    fullWidth
                                    InputProps={{ className: 'bg-white' }}
                                />
                            </div>


                            <div className=' flex gap-4'>

                                <TextField
                                    label='country'
                                    variant='outlined'
                                    size='small'
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    fullWidth
                                    InputProps={{ className: 'bg-white' }}

                                />


                            </div>



                            <div className=' flex flex-col gap-2 p-2'>
                                <h1 className=' font-bold text-gray-500'>Address type</h1>
                                <div className=' flex gap-10'>

                                    <div className=' flex gap-3'>
                                        <input type="radio" />
                                        <label htmlFor="Home">Home (All day Delivery)</label>
                                    </div>
                                    <div className=' flex gap-3'>
                                        <input type="radio" />
                                        <label htmlFor="Home">Work (All day Delivery)</label>
                                    </div>

                                </div>

                            </div>

                            <button className=' px-12 rounded uppercase w-fit  bg-[#fb641b] text-lg font-bold py-3 text-white'>
                                Save And Delivery Here
                            </button>

                        </form>
                    </div>


                </div>
                {/* <!-- Delivery Address> */}

                {/* <!-- order summary> */}

                <div>

                    <div className=' bg-primary text-white flex items-center mt-4 p-5 py-2 gap-6'>
                        <div className=' h-6 w-6 font-bold bg-slate-100 p-3 flex items-center justify-center  text-primary'>
                            3
                        </div>
                        <div className=' flex flex-col items-start'>
                            <h1 className=' text-lg font-bold'>Order Summary</h1>
                        </div>

                        <div className=' ml-auto '>
                            <button className='px-8 border border-primary text-primary rounded-sm text-lg py-1.5'>Change</button>
                        </div>
                    </div>


                    <div className=' flex flex-col'>


                        {
                            Products && Products.map((elem) => {
                                return (
                                    <div className=' flex bg-white gap-5 p-5 py-4 border'>

                                        <div className=' flex flex-col w-32 gap-3'>
                                            <img className=' w-28 mx-auto' src={elem.images && elem.images[0].url} alt="" />
                                            <div className=' w-full rounded-2xl overflow-hidden flex'>
                                                <button className='  p-1 px-4 bg-slate-300 border-black'>+</button>
                                                <input type="text" className=' px-3 border w-full' />
                                                <button className='p-1 px-4 bg-slate-300 border-black'>-</button>
                                            </div>
                                        </div>


                                        <div className=' flex flex-col   gap-3 justify-between p-2 px-3'>
                                            <div className='flex flex-col gap-3 justify-center'>
                                                <h1 className=' font-semibold  text-base'>{elem.title}</h1>
                                                <h1 className=' font-bold text-base'>Rs. {elem.price}
                                                    <span className=' mx-2 text-gray-500 font-bold text-sm' >Rs. 69000</span>
                                                    <span className=' text-green-600 text-base'>69% off</span>
                                                </h1>
                                            </div>
                                        </div>

                                        <div className=' ml-auto'>
                                            <button onClick={() => remove(elem)} className=' px-8 py-2 border-red-500 border rounded-md'>Remove</button>
                                        </div>

                                    </div>

                                )
                            })
                        }




                    </div>



                </div>
                {/* <!-- order summary> */}

                {/* <!-- Payment Options> */}
                <div>

                    <div className=' bg-primary text-white flex items-center mt-4 p-5 py-2 gap-6'>
                        <div className=' h-6 w-6 font-bold bg-slate-100 p-3 flex items-center justify-center  text-primary'>
                            4
                        </div>
                        <div className=' flex flex-col items-start'>
                            <h1 className=' text-lg font-bold'>Payment Options</h1>
                        </div>

                        <div className=' ml-auto '>
                            <button className='px-8 border border-primary text-primary rounded-sm text-lg py-1.5'>Change</button>
                        </div>
                    </div>

                    <div className=' bg-white p-5 py-4'>
                        <button className='px-8 border border-primary text-primary rounded-sm text-lg py-1.5'>
                            Paytm
                        </button>
                    </div>

                </div>
                {/* <!-- Payment Options> */}

            </div>

            <div className=' bg-white w-96 h-fit sticky top-20'>
                <div className=' p-4 border-b'>
                    <h1 className=' text-lg font-bold text-gray-500'>Price Description</h1>
                </div>

                <div className=' p-4'>
                    <ul className=' border-dashed border-b border-black p-3'>
                        <li className=' flex justify-between py-2  text-lg'>
                            <h1>Price ( { Products.length} )</h1>
                            <h1> Rs. {itemsprices} </h1>
                        </li>
                        <li className=' flex justify-between  py-2 text-lg'>
                            <h1>Discount ( 1 item)</h1>
                            <h1>Rs.33000</h1>
                        </li>
                        <li className=' flex justify-between  py-2  text-lg'>
                            <h1>Dilivery Charges ( 1 item)</h1>
                            <h1>Rs.33000</h1>
                        </li>
                    </ul>
                    <div className='border-dashed border-b border-black p-3 font-bold text-xl flex items-center justify-between'>
                        <h1>Total Amount</h1>
                        <h1>Rs.28000</h1>
                    </div>
                    <div className=' p-3 text-green-400 text-base capitalize font-bold'>
                        <p>you will save Rs.2000 on this order</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutOrder