import React, { useEffect } from 'react'
import Sidebar from '../User/Sidebar'
import Wishitem from './Wishitem'
import empty from '../../assets/emptywish.png'
import { useSelector } from 'react-redux'


const Wishlist = () => {
    const { user } = useSelector(state => state.User)

    const { wishItems } = useSelector(state => state.WishList)

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return (
        <div className=' flex gap-4 p-8'>
            {
                user &&

                <div>
                    <Sidebar user={user} />
                </div>
            }


            {/* <!-- right part> */}
            <div className=' flex-1 flex  bg-white'>

                <div className=' flex-1 flex flex-col bg-white '>

                    {/* heading */}
                    <div className='p-6 border-b-2'>
                        <h1 className=' text-xl font-medium'> Wishlist ( {wishItems.length} )</h1>
                    </div>

                    {/* <!-- cart container > */}
                    <div className='flex flex-col w-full h-full flex-1'>
                        {
                            wishItems.length > 0 ? wishItems.map((elem, index) => {
                                return (
                                    <Wishitem data={elem} />
                                )
                            })
                                :
                                <>
                                    <div className=' flex-col gap-2 flex w-full h-full justify-center items-center'>
                                        <img src={empty} alt="empty" />
                                        <h1 className=' mt-4 font-bold text-2xl'>Empty Wishlist</h1>
                                        <p>You have no items in your wishlist. Start adding!</p>
                                    </div>
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