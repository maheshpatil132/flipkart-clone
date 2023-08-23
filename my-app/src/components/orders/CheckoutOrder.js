import { TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { RemoveCart } from '../../actions/CartActions'
import CheckoutItem from './CheckoutItem'
import { useNavigate} from 'react-router-dom'
import { Axios } from '../../Axios'






const CheckoutOrder = () => {

    const { Products } = useSelector(state => state.Cart)
    const dispatch = useDispatch()
    const [address, setAddress] = useState()
    const [pincode, setPincode] = useState()
    const [city, setCity] = useState()
    const [state, setState] = useState()
    const [country, setCountry] = useState()
    const [itemsprices, setItemsPrices] = useState(0)
    const [quatity, setQuatity] = useState(1)
    const [step, setStep] = useState(1)
    const [shippingInfo , setShippingInfo] = useState({})
    const navigate = useNavigate() 

    const shippingprice = 100;
    const taxprice = 100;
    const remove = (e) => {
        dispatch(RemoveCart(e._id))
    }

    // let shippingInfo = {} ;
    
    
    const savedelivery = (e) =>{
        e.preventDefault()
        if(step === 1){
         setShippingInfo( {
                address,
                pincode,
                city,
                state,
                country
            } )
            setStep(2);       
        }
    }



    const Checkout = async() =>{
         
        if(step != 2){
            return alert('Step 2 Is Remaining')
        }

        if(Products.length < 1){
            return;
        }


        const orderinfo = {
            shipinginfo: shippingInfo,
            itemsprice: itemsprices,
            shipingprice:shippingprice,
            taxprice:taxprice,
            totalprice : itemsprices + shippingprice + taxprice,

            orderitems : Products.map((e)=>{
                return {
                    name : e.data.title,
                    product:e.data._id,
                    quantity:e.quantity,
                    image: e.data.images[0].url,
                    price: e.data.price
                }
            })

        }

        sessionStorage.setItem('order' , JSON.stringify(orderinfo));

         const {data : {key}} = await Axios.get('/process/publishkey')
         const {data:{order}} = await Axios.post('/process/payment', {
            amount : taxprice + itemsprices + shippingprice
         })

         console.log(key);

         var options = {
            key: `${key}`, // Enter the Key ID generated from the Dashboard
            amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "Flipkart Dummy Payment",
            description: "Test Transaction",
            // image: "https://example.com/your_logo",
            order_id: `${order.id}`, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            callback_url: "https://flipkart-api.vercel.app/paymentverification",
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

    let sum
    useEffect(() => { 
    //  if(Products.length > 0){
    //      setItemsPrices(()=> Products.reduce(( acc , {price}) => {
    //         console.log(price);
    //         return acc.price + price
    //    } ))  
    //  }
     sum =0;
     for(let i=0; i<Products.length; i++){
        sum += Products[i].data.price * Products[i].quantity
     }

     setItemsPrices(sum)
//    window.scrollTo(0,0)
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

                        <form onSubmit={(e)=>savedelivery(e)} action="" className=' p-6 flex flex-col gap-6 mt-4 w-3/4'>
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



                            <div className=' flex flex-col gap-2 p-2'>
                                <h1 className=' font-bold text-gray-500'>Address type</h1>
                                <div className=' flex gap-10'>

                                    <div className=' flex gap-3'>
                                        <input type="radio" readOnly/>
                                        <label htmlFor="Home">Home (All day Delivery)</label>
                                    </div>
                                    <div className=' flex gap-3'>
                                        <input type="radio" readOnly />
                                        <label htmlFor="Home">Work (All day Delivery)</label>
                                    </div>

                                </div>

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
                                    <CheckoutItem quantity={elem.quantity} elem={elem.data}/>
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
                        <button type='submit' onClick={()=>Checkout()} className='px-8 border border-primary text-primary rounded-sm text-lg py-1.5'>
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
                        <li className=' flex justify-between  py-2  text-lg'>
                            <h1>Dilivery Charges</h1>
                            <h1>Rs. {shippingprice}</h1>
                        </li>
                        <li className=' flex justify-between  py-2 text-lg'>
                            <h1>Tax</h1>
                            <h1>Rs. {taxprice}</h1>
                        </li>
                    </ul>
                    <div className='border-dashed border-b border-black p-3 font-bold text-xl flex items-center justify-between'>
                        <h1>Total Amount</h1>
                        <h1>Rs. {itemsprices + shippingprice + taxprice}</h1>
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