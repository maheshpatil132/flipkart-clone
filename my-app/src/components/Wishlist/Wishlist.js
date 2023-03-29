import React from 'react'
import Sidebar from '../User/Sidebar'
import Wishitem from './Wishitem'

const Wishlist = () => {
    return (
        <div className=' flex gap-4 p-8'>
            <div>

            <Sidebar />
            </div>

            {/* <!-- right part> */}
            <div className=' flex-1  bg-white'>

                <div className=' flex-1 bg-white '>

                    {/* heading */}
                    <div className='p-6 border-b-2'>
                        <h1 className=' text-xl font-medium'> Wishlist (0)</h1>
                    </div>

                    {/* <!-- cart container > */}
                    <div className='flex flex-col'>
                        <Wishitem/>
                        <Wishitem/>
                        <Wishitem/>
                    </div>
                    {/* <!-- cart container > */}

                </div>

            </div>
            {/* <!-- right part> */}


        </div>
    )
}

export default Wishlist