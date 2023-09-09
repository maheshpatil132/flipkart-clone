import { TextField } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CheckoutItem from './CheckoutItem'
import { useSnackbar } from 'notistack';
import { Axios } from '../../Axios'
import { save_shippingindfo } from '../../actions/CartActions';
import { NavLink, useNavigate } from 'react-router-dom';






const CheckoutOrder = () => {

    const { Products, shipinginfo } = useSelector(state => state.Cart)
    const { user } = useSelector(state => state.User)
    const [address, setAddress] = useState()
    const [pincode, setPincode] = useState()
    const [city, setCity] = useState()
    const [state, setState] = useState()
    const [country, setCountry] = useState()
    const [itemsprices, setItemsPrices] = useState(0)
    const [step, setStep] = useState(1)
    const { enqueueSnackbar } = useSnackbar();

    const dispatch = useDispatch();
    const navigate = useNavigate()
    


    const sum = useRef(0)
    let shippingprice = itemsprices * 5/100;
    let taxprice = itemsprices*18/100;


    // let shippingInfo = {} ;


    const savedelivery = (e) => {
        e.preventDefault()
        if (step === 1) {
            console.log(address , pincode , city , state , country);
            const shipinng_data = {
                address : address,
                pincode :  pincode,
                city : city,
                state : state,
                country :  country
            }
            dispatch(save_shippingindfo(shipinng_data))
            setStep(2);
        }

        enqueueSnackbar(' Detials saved Sucessfully', { variant: 'success' })
    }



    const Checkout = async () => {

        if (!user) {
            return enqueueSnackbar('Please Login First before placing the order', { variant: 'error' })
        }
        if (!shipinginfo.hasOwnProperty('address' , 'city' , 'pincode' , 'state')) {
            return enqueueSnackbar('Please Fill The Address Detials', { variant: 'error' })
        }

        if (Products.length < 1) {
            return;
        }


        const orderinfo = {
            shipinginfo: shipinginfo,
            itemsprice: itemsprices,
            shipingprice: shippingprice,
            taxprice: taxprice,
            totalprice: itemsprices + shippingprice + taxprice,

            orderitems: Products.map((e) => {
                return {
                    name: e.data.title,
                    product: e.data._id,
                    quantity: e.quantity,
                    image: e.data.images[0].url,
                    price: e.data.price
                }
            })

        }

        sessionStorage.setItem('order', JSON.stringify(orderinfo));

        const { data: { key } } = await Axios.get('/process/publishkey')
        const { data: { order } } = await Axios.post('/process/payment', {
            amount: taxprice + itemsprices + shippingprice
        })


        var options = {
            key: `${key}`, // Enter the Key ID generated from the Dashboard
            amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "Flipkart Dummy Payment",
            description: "Test Transaction",
            // image: "https://example.com/your_logo",
            order_id: `${order.id}`, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            callback_url: `${process.env.REACT_APP_BACKEND_URL}paymentverification`,
            // callback_url: "http://localhost:5000/paymentverification",
            prefill: {
                name: "Gaurav Kumar",
                email: "gaurav.kumar@example.com",
                contact: "9000090000"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                color: "#3399cc"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open()

        // navigate('/login?redirect=shipping')
    }

    useEffect(() => {
        sum.current = 0;
        for (let i = 0; i < Products.length; i++) {
            sum.current += Products[i].data.price * Products[i].quantity
        }
        setItemsPrices(sum.current)

        if(shipinginfo){
            setAddress(shipinginfo.address)
            setCountry(shipinginfo.country)
            setCity(shipinginfo.city)
            setPincode(shipinginfo.pincode)
            setState(shipinginfo.state)
        }
         
        if(Products.length <= 0){
            navigate('/cart')
        }


    }, [Products , shipinginfo , navigate])

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
                        <h1 className=' text-lg font-bold text-gray-500'>{user ? user.name : "Login"}</h1>
                    </div>

                    <div className=' ml-auto '>
                        {
                            !user ?
                                <NavLink to={'/login'}>
                                    <button
                                        className='px-8 border border-primary text-primary rounded-sm text-lg py-1.5
                                        hover:bg-primary hover:text-white transition-colors'>
                                        Login
                                    </button>
                                </NavLink>
                                :

                                <button className='px-8 border border-primary text-primary rounded-sm text-lg py-1.5'>
                                    Change
                                </button>
                        }
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

                        <form onSubmit={(e) => savedelivery(e)} action="" className=' p-6 flex flex-col gap-6 mt-4 w-3/4'>
                            <h1 className=' text-lg font-bold'>Add Adress</h1>

                            <div className=' flex gap-4'>
                                <TextField
                                    label='address'
                                    variant='outlined'
                                    size='small'
                                    value={address}
                                    required
                                    onChange={(e) => setAddress(e.target.value)}
                                    fullWidth
                                    InputProps={{ className: 'bg-white' }}

                                />
                                <TextField
                                    label='pincode'
                                    variant='outlined'
                                    size='small'
                                    value={pincode}
                                    required
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
                                    required
                                    onChange={(e) => setCity(e.target.value)}
                                    fullWidth
                                    InputProps={{ className: 'bg-white' }}
                                />
                                <TextField
                                    label='state'
                                    variant='outlined'
                                    size='small'
                                    value={state}
                                    required
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
                                    required
                                    onChange={(e) => setCountry(e.target.value)}
                                    fullWidth
                                    InputProps={{ className: 'bg-white' }}

                                />
                            </div>

                            <button type='submit' className=' px-12 rounded uppercase w-fit  bg-[#fb641b] text-lg font-bold py-3 text-white'>
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
                                    <CheckoutItem quantity={elem.quantity} elem={elem.data} />
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
                        <button type='submit' onClick={() => Checkout()} className='px-8 border border-primary text-primary rounded-sm text-lg py-1.5'>
                            Paytm
                        </button>
                    </div>

                </div>
                {/* <!-- Payment Options> */}

            </div>
{  
    Products.length > 0 &&
            <div className=' bg-white w-96 h-fit sticky top-20'>
                <div className=' p-4 border-b'>
                    <h1 className=' text-lg font-bold text-gray-500'>Price Description</h1>
                </div>

                <div className=' p-4'>
                    <ul className=' border-dashed border-b border-black p-3'>
                        <li className=' flex justify-between py-2  text-lg'>
                            <h1>Price ( {Products.length} )</h1>
                            <h1> Rs. {itemsprices.toFixed(2)} </h1>
                        </li>
                        <li className=' flex justify-between  py-2  text-lg'>
                            <h1>Dilivery Charges</h1>
                            <h1>Rs. {shippingprice.toFixed(2)}</h1>
                        </li>
                        <li className=' flex justify-between  py-2 text-lg'>
                            <h1>Tax</h1>
                            <h1>Rs. {taxprice.toFixed(2)}</h1>
                        </li>
                    </ul>
                    <div className='border-dashed border-b border-black p-3 font-bold text-xl flex items-center justify-between'>
                        <h1>Total Amount</h1>
                        <h1>Rs. {(itemsprices + shippingprice + taxprice).toFixed(2)}</h1>
                    </div>
                    <div className=' p-3 text-green-400 text-base capitalize font-bold'>
                        <p>you will save Rs.2000 on this order</p>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default CheckoutOrder