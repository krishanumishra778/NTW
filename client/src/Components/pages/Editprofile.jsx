
import React, { useEffect } from 'react'
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Editprofile = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);


    return (
        <div className='m-6'>
            <nav className="bg-gray-50 hidden   md:block my-2 px-4 " data-aos="fade-down">
                <div className=" mx-auto flex justify-between items-center">
                    <div className="md:hidden">
                        {/* Mobile menu button */}
                        <button className="text-[black]" onClick={toggleMobileMenu}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
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
                    <div className="max-w-[70%] mx-auto">
                        <img src="logo/next tech waves logo.png" alt="" />
                    </div>
                    <div className=' max-w-[10%] cursor-pointer'><img className='rounded-full' src="./images/user.png" alt="" /></div>


                </div>
                {isMobileMenuOpen && (
                    <div className="md:hidden">
                        <ul className="mt-2 space-y-2 ">
                            <li>
                                <a href="#" className='text-p' onClick={toggleMobileMenu}>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={toggleMobileMenu}>
                                    About us
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={toggleMobileMenu}>
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={toggleMobileMenu}>
                                    Recharge & Plans
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={toggleMobileMenu}>
                                    Our Portfolio
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={toggleMobileMenu}>
                                    Sign-up
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>


            {/* // ><<<<<<<<<<<<<<<<<<<<<<<<<<< */}

            <div className='grid grid-cols-2 '>
                <div>
                    <h1 className='text-[#00B2FF] pt-6'>Edit Profile</h1>
                    <h1 className='pt-4'>Change Password</h1>
                    <h1 className='pt-4'>Help</h1>
                    <h1 className='pt-4'>Log Out</h1>
                </div>
                <div className='pt-6'>
                    <img className='rounded-full' src="./images/user.png" alt="" />
                </div>

            </div>
            {/* ><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
            <div className='pl-48'>
                <div className=''>
                    <h1 className='pb-4'>Change User Name</h1>
                    <input className='border-4 pt-4 w-10/12 rounded-lg' type="text" />
                </div>

                {/* ><><</> */}
                <div className='pt-5'>
                    <h1 className='pb-4'>Change E-Mail</h1>
                    <input className='border-4 pt-4 w-10/12 rounded-lg' type="text" />
                </div>
                {/* ><><></></> */}
                <div className='pt-5'>
                    <h1 className='pb-4'>Your company Name</h1>
                    <input className='border-4 pt-4 w-10/12 rounded-lg' type="text" />
                </div>
                <div className='  flex justify-end w-10/12 pt-10 '>
                    <button className='text-white text-center bg-blue-500 rounded-lg w-32  p-2 '>Save Changes</button>
                </div>
            </div>



        </div>
    )
}
