import React from 'react'
import data from './footer.json'

const Footer = () => {
    return (
        <div className=' mt-4 flex flex-col w-full bg-secondary text-sm'>
        <div className=' flex p-14'>

            {/* left part start */}
            <div className=' w-3/5 flex capitalize text-[.8rem] font-thin gap-20 text-white'>

                {
                    data.map((elem, index) => {
                        return (

                            <div key={index} className=' flex flex-col gap-2'>
                                <h1 className=' text-sm uppercase text-gray-500'>{elem.menu}</h1>
                                <ul className=' flex-col flex gap-2'>
                                    {
                                        elem.suboption.map((e, i) => {
                                            return (
                                                <li key={i}>{e.title}</li>
                                            )
                                        })
                                    }


                                </ul>
                            </div>

                        )
                    })
                }


            </div>
            {/* left part end */}


            {/* right part */}
            <div className=' flex w-2/5  flex-1 px-4 border-l gap-2 text-[.8rem] text-white'>

                <div className=' flex flex-col gap-2'>
                    <h1 className=' text-sm uppercase  text-gray-500'>Mail Us</h1>
                    <p className='leading-6 font-medium'>Flipkart Internet Private Limited,
                        Buildings Alyssa, Begonia &

                        Clove Embassy Tech Village,

                        Outer Ring Road, Devarabeesanahalli Village,

                        Bengaluru, 560103,

                        Karnataka, India</p>
                </div>

                <div className=' flex flex-col gap-2'>
                    <h1 className=' text-sm uppercase text-gray-500'>Registered Office Address:</h1>
                    <p className='leading-6 font-medium'>Flipkart Internet Private Limited,
                        Buildings Alyssa, Begonia &

                        Clove Embassy Tech Village,

                        Outer Ring Road, Devarabeesanahalli Village,

                        Bengaluru, 560103,

                        Karnataka, India</p>
                </div>

            </div>
        </div>
          <div className=' border-t p-4 text-center text-white'>
          <h1>Built By Mahesh Patil -- @Alrights reserved-2022 </h1>
          </div>
        </div>
    )
}

export default Footer