
import React, { useEffect } from 'react'
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

import { Link } from 'react-router-dom';
export const Editprofile = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };


    const openModal = () => {
        setIsModalOpen(true);
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

        <div className='m-6 '>
            <nav className=" hidden   md:block my-2 px-4 " data-aos="fade-down">
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
                    <h1 className='text-[#00B2FF] pt-6'><Link to='/editprofile'> Edit Profile</Link></h1>

                    <h1 className='pt-4'><Link to="/changepassword" >changepassword</Link></h1>
                    <h1 className='pt-4'><Link to='/pages'>Help</Link></h1>
                    <h1 className='pt-4'>Log Out</h1>
                </div>

                {/* ><<<<<<<<<<<    icon*/}
                <div >
                    <div className='pt-6 absolute  '>
                        <img className='rounded-full' src="./images/user.png" alt="" />
                    </div >
                    <div className=' pl-12 pt-7 relative    ' >

                        <img className='absolute pt-1.5 pl-1.5 z-[1] ' onClick={handleOpen} variant="gradient" src='./images/Vector7.png' alt="" />

                        <div className=''><img src="./images/Ellipse54.png" alt="" />

                        </div>
                    </div>

                    {/* model */}
                    <Dialog className='mx-auto ' open={open} handler={handleOpen}> 
                        <DialogHeader>Its a simple dialog.</DialogHeader>
                        <DialogBody divider>
                            The key to more success is to have a lot of pillows. Put it this way,
                            it took me twenty five years to get these plants, twenty five years of
                            blood sweat and tears, and I&apos;m never giving up, I&apos;m just
                            getting started. I&apos;m up to something. Fan luv.
                        </DialogBody>
                        <DialogFooter className='text-white'>
                            <Button
                                variant="text"
                                color="white"
                                onClick={handleOpen}
                                className="bg-black"
                            >
                                <span>Cancel</span>
                            </Button>
                            <Button className='bg-blue-600' variant="gradient" color="green" onClick={handleOpen}>
                                <span>Confirm</span>
                            </Button>
                        </DialogFooter>
                    </Dialog>
                </div>



            </div>
            {/* ><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
            <div className='md:pl-48 mt-10'>
                <div className=''>
                    <h1 className='pb-4'>Change User Name</h1>
                    <input className='border-2 pt-4 w-10/12 rounded-lg border-[#D9D9D9]' type="text" />
                </div>

                {/* ><><</> */}
                <div className='pt-5'>
                    <h1 className='pb-4'>Change E-Mail</h1>
                    <input className='border-2 pt-4 w-10/12 rounded-lg border-[#D9D9D9]' type="text" />
                </div>
                {/* ><><></></> */}
                <div className='pt-5'>
                    <h1 className='pb-4'>Your company Name</h1>
                    <input className='border-2 pt-4 w-10/12 rounded-lg border-[#D9D9D9]' type="text" />
                </div>
                <div className='  flex justify-end w-10/12 pt-6  '>
                    <button className='text-white text-center   p-2 bg-[#00B2FF]  rounded-3xl px-[20px] py-[6px] sm:text-mp xs:text-tp md:text-p  my-5 hover:bg-[#00b3ffd8] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 '>Save Changes</button>
                </div>
            </div>
        </div>
    )
}

