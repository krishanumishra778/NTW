import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Paymentcheckoutpage = () => {


    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <div className='max-w-[1300px] xs:w-[90%] sm:w-[80%] md:w-[70%] mx-auto'>

            <nav className="   my-2 xs:px-2 md:px-4 relative main-container">
                <div className="  flex justify-between items-center gap-1 ">
                    <div className="">
                        {/* Mobile menu button */}
                        <button className="text-[black]" onClick={toggleMobileMenu}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="22"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                    <div className="max-w-[65%]">
                        <img src="logo/next tech waves logo.png" alt="" />
                    </div>
                    
                    <div className='cursor-pointer'>
                        <button 
                            type='submit'
                            className='text-white text-center bg-[#00B2FF] rounded-full xs:text-[9px] sm:text-[14px]  xs:py-[5px] xs:px-[3px]  sm:px-2 md:text-[16px] '
                        >
                            Book a call
                        </button>

                    </div>
                    {/* ........................... */}
                </div>
                {isMobileMenuOpen && (
                    <div className="">
                        <ul className="mt-2 space-y-2 ">
                            <li>
                                <Link to='/' onClick={toggleMobileMenu}> Home</Link>
                            </li>
                            <li>
                                <Link to='/about-us' onClick={toggleMobileMenu}> About Us</Link>
                            </li>
                            <li>
                                <Link to='/services' onClick={toggleMobileMenu}> Services</Link>
                            </li>
                            <li>
                                <Link to='/subscription' onClick={toggleMobileMenu}> Recharge & Plans</Link>
                            </li>
                            <li>
                                <Link to='/portfolio' onClick={toggleMobileMenu}> Our Portfolio</Link>
                            </li>
                            <li>
                                <Link to='/sign-up' onClick={toggleMobileMenu}>Sign-Up</Link>
                            </li>
                        </ul>
                    </div>

                )}
            </nav>
            {/* section 2  start*/}
            <div >
                <h1 className="text-[#00B2FF] px-4 font-[600] py-4 sm:text-tt   xs:text-mt md:text-title xs:text-center   mt-8 mb-4 sm:mb-1">You’re almost there! Complete your order</h1>
            </div>
            {/* section 2  end  */}
            {/* ><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}

            {/* section 3 start  */}

            <div className='bg-white mt-10  rounded-md shadow-2xl outline-none ' >
                <div className='flex flex-row md:flex-col justify-evenly' >

                    <div className="grid md:grid-cols-4 gap-4 px-5 py-1">
                        <div className=''>Product</div>
                        <div className=''>Pricing</div>
                        <div className=''>Months</div>
                        <div className=' '>Renew</div>
                    </div>
                    <hr className=' bg-gray-300 h-[2.5px]' />
                    <div className="grid md:grid-cols-4 gap-4 px-5 py-4">
                        <div className='text-sm'>Standard plan</div>
                        <div className='text-sm'>$2999</div>
                        <div className='text-sm'>one month</div>
                        <div className='text-sm xs:text-sm'
                        >renewal date: December 3, 2023
                        </div>
                    </div>
                </div>
                <hr className='px-2 bg-gray-300 h-[2.5px] ' />

                <div className="grid grid-cols-2 mx-auto  xs:py-4 md:py-3 px-5 gap-3">

                    <div className='bg-white rounded-md shadow-lg outline-none' >
                        <h1 className='xs:py-1 sm:py-2 text-center  xs:text-[11px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-[#494949]'>Apply Promo Code</h1>
                    </div>
                    <div className='cursor-pointer sm:gap-5 xs:gap-0'>
                        <button
                            type='submit'
                            className='text-white text-center  bg-[#00B2FF] rounded-md  xs:text-[11px] sm:text-[14px] md:text-[16px] lg:text-[18px] xs:py-1 sm:py-2 xs:px-2 sm:px-3'
                        >
                            Apply
                        </button>
                    </div>
                </div>
            </div>
            {/* section 4 start  */}

            <div className='bg-gray-100 md:w-[60%] sm:w-[80%] xs:w-[95%]  mt-14 rounded-xl shadow-lg outline-none'>
                <div>

                    <h1 className="text-[#00B2FF] px-4 font-[600] py-4 sm:text-tt  xs:text-mt md:text-title xs:text-center   mt-8 mb-4 sm:mb-1">Proceed to Payment:-</h1>

                </div>
                <hr className=' bg-[#000] h-[2.5px] ' />
                <div className='flex justify-between px-12 py-6'>
                    <h1>Sub total</h1>
                    <h1>$2999</h1>
                </div>
                <div className='flex justify-between px-12 '>
                    <h1>Promocode</h1>
                    <h1>$0</h1>
                </div>

                <hr className=' bg-[#000] h-[2.5px] mt-6' />
                <div className='flex justify-between px-12 mt-6'>
                    <h1>total</h1>
                    <h1>$2999</h1>
                </div>
                <div className='cursor-pointer py-7 px-5'>
                    <button
                        type='submit'
                        className='text-white text-center font-bold bg-[#00B2FF] rounded-md w-full  py-3'
                    >
                        Proceed to Payment
                    </button>
                </div>

            </div>
        </div>
    )
}
