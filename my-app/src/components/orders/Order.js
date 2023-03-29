import React from 'react'
import dslr from '../../assets/dslr.webp'

const Order = () => {
    return (
        <div className=' bg-white p-6 flex mt-4 shadow-md'>
            <div className=' flex flex-1 items-start gap-10'>

                <div>
                    <img className=' w-32' src={dslr} alt="" />
                </div>

                {/* description */}
                <div className=' flex flex-col gap-1 capitalize'>
                    <h1 className=' text-lg font-semibold'>Camera Camera Camera Camera</h1>
                    <h2>quantity : <span>2</span></h2>
                    <h2>Price : <span>33000</span></h2>
                </div>
                {/* description */}

            </div>



            <div className=' flex w-96'>

                {/* <!-- Total Amount> */}
                <h1 className=' text-xl font-bold'>22,200</h1>
                {/* <!-- Total Amount> */}

                {/* order status */}
                <div className=' ml-auto capitalize space-y-3'>
                    <h1 className=' text-xl font-bold'>status</h1>
                    <h2 className=' text-orange-400 text-base font-bold'>pending</h2>
                </div>
                {/* order status */}

            </div>



        </div>
    )
}

export default Order