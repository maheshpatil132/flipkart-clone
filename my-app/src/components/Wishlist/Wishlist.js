import React from 'react'
import Sidebar from '../User/Sidebar'
import Wishitem from './Wishitem'
import { useSelector } from 'react-redux'


const Wishlist = () => {
    const { user } = useSelector(state => state.User)

    const { wishItems } = useSelector(state => state.WishList)
    return (
        <div className=' flex gap-4 p-8'>
            {
                user &&

                <div>
                    <Sidebar user={user} />
                </div>
            }


            {/* <!-- right part> */}
            <div className=' flex-1  bg-white'>

                <div className=' flex-1 bg-white '>

                    {/* heading */}
                    <div className='p-6 border-b-2'>
                        <h1 className=' text-xl font-medium'> Wishlist ( {wishItems.length} )</h1>
                    </div>

                    {/* <!-- cart container > */}
                    <div className='flex flex-col'>
                        {
                            wishItems ? wishItems.map((elem, index) => {
                                return (
                                    <Wishitem data={elem} />
                                )
                            })
                                :
                                <>
                                    <h1>No Wish items</h1>
                                </>
                        }


                    </div>
                    {/* <!-- cart container > */}

                </div>

            </div>
            {/* <!-- right part> */}


        </div>
    )
}

export default Wishlist