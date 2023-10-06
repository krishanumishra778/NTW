
import React, { useEffect } from 'react'
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
// import { AiFillEyeInvisible } from "react-icons/ai";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export const Pages = () => {

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




  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);


  return (
    <div className='m-6'>
      <nav className=" hidden   md:block my-2 px-4 " data-aos="fade-down">
        <div className=" mx-auto flex justify-between items-center">
          <div className="md:hidden">
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
        {/* .... icon  */}
        <div >
          <div className='pt-6 absolute  '>
            <img className='rounded-full' src="./images/user.png" alt="" />
          </div >
          <div className=' pl-12 pt-7 relative    ' >
            <img className='absolute  pt-1.5 pl-1.5 z-[1] ' onClick={handleOpen} src='./images/Vector7.png' alt="" />
            <div className=''><img src="./images/Ellipse54.png" alt="" />

            </div>
            {/* .,,,,,,,modal.,,,,,,,,,,, */}
            <Dialog open={open} handler={handleOpen}>
              <DialogHeader>Its a simple dialog.</DialogHeader>
              <DialogBody divider>
                The key to more success is to have a lot of pillows. Put it this way,
                it took me twenty five years to get these plants, twenty five years of
                blood sweat and tears, and I&apos;m never giving up, I&apos;m just
                getting started. I&apos;m up to something. Fan luv.
              </DialogBody>
              <DialogFooter>
                <Button
                  variant="text"
                  color="red"
                  onClick={handleOpen}
                  className="mr-1"
                >
                  <span>Cancel</span>
                </Button>
                <Button variant="gradient" color="green" onClick={handleOpen}>
                  <span>Confirm</span>
                </Button>
              </DialogFooter>
            </Dialog>



          </div>
        </div>
        {/* .... */}

      </div>
      {/* ><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
      <div className='md:pl-48 mt-10'>

        <div className=''>
          <h1 className='pb-4'>How May We Assist You Today?</h1>
          <div className='relative'>
            <input className='border-2 pt-4 pb-48 w-10/12 rounded-lg pr-10 border-[#D9D9D9]' type='text' />
            {/* <img src='./images/Vector.png' alt='' className='absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none' /> */}
          </div>
        </div>

        {/* ><><</> */}

        <div className='  flex justify-end w-10/12 pt-6  '>
          <button className='text-white text-center   p-2 bg-[#00B2FF]  rounded-3xl px-[20px] py-[6px] sm:text-mp xs:text-tp md:text-p  my-5 hover:bg-[#00b3ffd8] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 '>Save Changes</button>
        </div>
      </div>



    </div>
  )
}


