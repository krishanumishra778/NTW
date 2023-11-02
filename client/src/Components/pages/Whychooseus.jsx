import React from 'react'

export const Whychooseus = () => {
    return (
        <div className=' max-w-[1300px] w-[100%] m-auto py-10'>
            <h1 className="text-[#00B2FF] px-4 font-[600]  sm:text-tt  xs:text-mt md:text-title xs:text-center md:text-left  mt-8 mb-4 sm:mb-1">Why choose Us?</h1>
            <div className=" w-[100%] max-w-[1300px]   md:mx-auto  flex  flex-col mx-auto lg:flex-row ">
                <div className='md:w-full flex justify-center px-4'>
                    <img src="images/whychooseus3.png" alt='Next Tech Waves' className="rounded lg:my-5 xs:my-2" />
                </div>
                {/* ... */}
                <div className="md:ml-auto flex  h-2/3 justify-center align-middle py-20 w-full px-4  ">
                    <img src="images/whychooseus4.png" alt='Next Tech Waves' className="rounded  lg:my-5 xs:my-2" />
                </div>
            </div>
        </div>
    )
}
