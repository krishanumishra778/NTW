import React from 'react'

export const Whychooseus = () => {
    return (
        <div className=' max-w-[1300px] w-[100%] mx-auto  mt-4 py-5'>

            {/* ///////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////
            
            //////////////////////*/}
            <div className='w-[98%] max-w-[1300px] mx-auto hidden md:block'>
                <div className='text-center'>
                    <h1 className="text-[#00B2FF]   font-[600]   sm:text-tt  xs:text-mt md:text-title   ">
                        Why choose Us?
                    </h1>
                    <p className='xs:text-mt sm:text-tt md:text-t py-2'>Choosing us will save you money and time. What sets us apart?</p>
                    <p className='xs:text-mp sm:text-tp md:text-p md:w-[70%] mx-auto'>We are masters at our craft. Designing for our team is like knowing the back of their hands. But there’s much more</p>
                </div>

                <div className=' py-3 grid grid-cols-3 gap-3 max-w-[95%] mx-auto'>
                    <div className=' shadow-lg rounded-lg  shadow-[#848484] text-center p-8'>
                        <p>Rapid turnaround <p> time</p></p>
                    </div>
                    <div className=' shadow-lg rounded-lg  shadow-[#848484] text-center p-8 bg-[#00B2FF] text-[#fff]' >
                        <p>Pixel-perfect
                            <p> design </p> </p>
                    </div>
                    <div className=' shadow-lg rounded-lg  shadow-[#848484] text-center p-8'>
                        <p>
                            No hidden <p>   charges</p>
                        </p>
                    </div>
                </div>

            </div>
            {/* XXXXXXXXXXXXXXXXX */}
            <div className="md:hidden grid md:grid-cols-2 w-[98%] max-w-[1300px] mx-auto ">
                <div className=''>
                    <h1 className="text-[#00B2FF] font-[600] sticky top-44   sm:text-tt  xs:text-mt md:text-title xs:text-center md:text-left    mb-4 sm:mb-1 ">
                        Why choose Us?
                    </h1>
                </div>

                {/*  1  //// */}
                <div className='md:hidden'>

                    <div className=''>
                        <p className='xs:text-mt sm:text-tt md:text-t py-2 text-center'>Choosing us will save you money and time. What sets us apart?</p>
                        <p className='xs:text-mp sm:text-tp md:text-p md:w-[70%] mx-auto sm:text-center mb-2'>We are masters at our craft. Designing for our team is like knowing the back of their hands. But there’s much more</p>
                    </div>

                    <div className='bg-[#00B2FF]  rounded-md text-white p-5 sticky z-10 top-44 shadow-lg  shadow-[#848484] '>
                        <div className=''>
                            <p>Rapid turnaround time</p>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className='bg-[#00B2FF] rounded-md text-white p-5 my-5 sticky z-10 top-44  shadow-lg  shadow-[#848484] '>

                        <div className=''>
                            <p>
                                Pixel-perfect design
                            </p>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className='bg-[#00B2FF] rounded-md text-white p-5 sticky z-10 top-44 shadow-lg  shadow-[#848484] '>

                        <div className=''>
                            <p>No hidden charges</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
