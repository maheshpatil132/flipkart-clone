import { TextField } from '@mui/material'
import React from 'react'
import dslr from '../../assets/dslr.webp'







const CheckoutOrder = () => {



    return (
        <div className=' w-3/5 mx-auto '>

            {/* <!-- Login Detials> */}
            <div className=' bg-white flex items-center mt-4 p-5 py-3.5 gap-6'>
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
                                label='Name'
                                variant='outlined'
                                size='small'
                                fullWidth
                                InputProps={{ className: 'bg-white' }}

                            />
                            <TextField
                                label='10 digit Mobile Number'
                                variant='outlined'
                                size='small'
                                fullWidth
                                InputProps={{ className: 'bg-white' }}
                            />
                        </div>

                        <div className=' flex gap-4'>

                            <TextField
                                label='Name'
                                variant='outlined'
                                size='small'
                                fullWidth
                                InputProps={{ className: 'bg-white' }}
                            />
                            <TextField
                                label='10 digit Mobile Number'
                                variant='outlined'
                                size='small'
                                fullWidth
                                InputProps={{ className: 'bg-white' }}
                            />
                        </div>

                        <textarea className='p-3 border' rows={3} placeholder=' w-full Address (Area And Street)'>
                            ajaajjj
                        </textarea>

                        <div className=' flex gap-4'>

                            <TextField
                                label='Name'
                                variant='outlined'
                                size='small'
                                fullWidth
                                InputProps={{ className: 'bg-white' }}

                            />

                            <div className=' border bg-white p-2 w-full'>
                                <select name="state" id="state" className='px-3 w-full outline-none'>
                                    <option value="select">--select</option>
                                    <option value="one">one</option>
                                    <option value="two">three</option>
                                    <option value="select">Four</option>
                                    <option value="select">--select</option>
                                    <option value="select">--select</option>
                                    <option value="select">--select</option>
                                    <option value="select">--select</option>
                                    <option value="select">--select</option>
                                    <option value="select">--select</option>
                                    <option value="select">--select</option>
                                </select>

                            </div>

                        </div>

                        <div className=' flex gap-4'>

                            <TextField
                                label='Name'
                                variant='outlined'
                                size='small'
                                InputProps={{ className: 'bg-white' }}
                                fullWidth
                            />
                            <TextField
                                label='10 digit Mobile Number'
                                variant='outlined'
                                size='small'
                                InputProps={{ className: 'bg-white' }}
                                fullWidth
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

                <div className=' flex bg-white gap-5 p-5 py-4 border'>

                    <div className=' flex flex-col w-32 gap-3'>
                        <img className=' w-28 mx-auto' src={dslr} alt="" />
                        <div className=' w-full rounded-2xl overflow-hidden flex'>
                            <button className='  p-1 px-4 bg-slate-300 border-black'>+</button>
                            <input type="text" className=' px-3 border w-full' />
                            <button className='p-1 px-4 bg-slate-300 border-black'>-</button>
                        </div>
                    </div>


                    <div className=' flex flex-col   gap-3 justify-between p-2 px-3'>
                        <div className='flex flex-col gap-3 justify-center'>
                            <h1 className=' font-semibold  text-base'>Canon EOS 3000D DSLR Camera 1 Camera Body, 18 - 55 mm Lens </h1>
                            <h1 className=' font-bold text-base'>Rs. 61,460
                                <span className=' mx-2 text-gray-500 font-bold text-sm' >Rs. 69000</span>
                                <span className=' text-green-600 text-base'>69% off</span>
                            </h1>
                        </div>
                    </div>

                    <div className=' ml-auto'>
                        <h1>Delivered At sunday 7 pm</h1>
                    </div>

                </div>


                <div className=' flex bg-white gap-5 p-5 py-4 border'>

                    <div className=' flex flex-col w-32 gap-3'>
                        <img className=' w-28 mx-auto' src={dslr} alt="" />
                        <div className=' w-full rounded-2xl overflow-hidden flex'>
                            <button className='  p-1 px-4 bg-slate-300 border-black'>+</button>
                            <input type="text" className=' px-3 border w-full' />
                            <button className='p-1 px-4 bg-slate-300 border-black'>-</button>
                        </div>
                    </div>


                    <div className=' flex flex-col   gap-3 justify-between p-2 px-3'>
                        <div className='flex flex-col gap-3 justify-center'>
                            <h1 className=' font-semibold  text-base'>Canon EOS 3000D DSLR Camera 1 Camera Body, 18 - 55 mm Lens </h1>
                            <h1 className=' font-bold text-base'>Rs. 61,460
                                <span className=' mx-2 text-gray-500 font-bold text-sm' >Rs. 69000</span>
                                <span className=' text-green-600 text-base'>69% off</span>
                            </h1>
                        </div>
                    </div>

                    <div className=' ml-auto'>
                        <h1>Delivered At sunday 7 pm</h1>
                    </div>

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
    )
}

export default CheckoutOrder