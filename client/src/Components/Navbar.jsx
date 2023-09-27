// eslint-disable-next-line no-unused-vars
import React from 'react'

const Navbar = () => {
    return (
        <>
        
        {/*  */}
            <div className="max-w-[90%] mx-auto fixed bottom-[15px] left-0 right-0  w-full   border border[black] bg-[#F5F5F5] rounded-full  z-[1]">
                <nav>
                    <ul className='flex justify-between px-2 py-2'>
                        <li className=' rounded-full hover:text-[#FFF] px-4 py-1 lg:text-p md:text-tp sm:text-mp hover:bg-[#00B2FF] active:bg-[#00B2FF] ' >Home
                        </li>
                        <li className='  rounded-full hover:text-[#FFF] px-2 py-1 lg:text-p md:text-tp sm:text-mp hover:bg-[#00B2FF] '>About Us</li>
                        <li className='  rounded-full hover:text-[#FFF] px-4 py-1 lg:text-p md:text-tp sm:text-mp hover:bg-[#00B2FF] '>Services</li>
                        <li className='  rounded-full hover:text-[#FFF] px-1 py-1 lg:text-p md:text-tp sm:text-mp hover:bg-[#00B2FF] '> Recharge & Plans</li>
                       
                        <li className='  rounded-full hover:text-[#FFF] px-2 py-1 lg:text-p md:text-tp sm:text-mp hover:bg-[#00B2FF] '>Our Portfolio</li>
                        <li className='  rounded-full hover:text-[#FFF] px-4 py-1 lg:text-p md:text-tp sm:text-mp hover:bg-[#00B2FF] '>Sign-up </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar