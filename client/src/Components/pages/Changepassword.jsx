
import React, { useEffect } from 'react'
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { AiFillEyeInvisible } from "react-icons/ai";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export const Changepassword = () => {

  const [showModal, setShowModal] = React.useState(false);


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






  const showpwd = () => {
    const pwdType = document.getElementById("pwd").type;
    if (pwdType === "password") {
      document.getElementById("pwd").type = "text";
    } else {
      document.getElementById("pwd").type = "password";
    }
  };


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
          <div className=' max-w-[10%] cursor-pointer'><img className='rounded-full' src="./images/user.png" alt="" />
          </div>
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
        {/* ......  icon */}
        <div >
          <div className='pt-6 absolute  '>
            <img className='rounded-full' src="./images/user.png" alt="" />
          </div >
          <div className=' pl-12 pt-7 relative    ' >
            <img className='absolute  pt-1.5 pl-1.5 z-[1] ' onClick={() => setShowModal(true)} variant="gradient" src='./images/Vector7.png' alt="" />
            <div className=''><img src="./images/Ellipse54.png" alt="" />

            </div>

            {/* ................model.................. */}

            {showModal ? (
              <>
              <div className="fixed inset-0 mt-[10%] z-50 sm:w-[40%] xs:w-[80%]  mx-auto">
                <div className="relative  mx-auto ">
                  <div className="flex flex-col  ">
    
                    <div className='bg-white  text-center rounded-md shadow-lg outline-none font-bold'>
    
                      <p className='my-4 text-[#000]'>Change profile Picture</p>
                      <hr className='py-[0.5px] bg-[#AEAEAE]' />
                      <p className='my-4 text-[red]'>Upload New Profile Picture</p>
                      <hr className='py-[0.5px] bg-[#AEAEAE]' />
                      <p className='my-4 text-[#00B2FF]'>Remove Current Profile Picture</p>
                      <hr className='py-[0.5px] bg-[#AEAEAE]' />
                      <div className="flex justify-center gap-2 py-2 border-t border-blueGray-200 rounded-b">
                        <button
                          className="text-[#fff] bg-[black] rounded-md uppercase font-bold px-4  sm:text-sm mr-1 mb-1 transition-all duration-150 ease-linear outline-none focus:outline-none background-transparent"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Cancle
                        </button>
                        <button
                          className="bg-[#00B2FF] text-white uppercase font-bold px-4 py-2 rounded-md  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 transition-all duration-150 ease-linear text-xs sm:text-sm"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fixed inset-0 bg-black opacity-25 z-40"></div>
            </> 
                       ) : null}

          </div>
        </div>
        {/* ..... */}
        
      </div>
      {/* ><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
      <div className='md:pl-48 mt-10'>

        <div className='relative z-0 w-10/12 mb-6 group'>
          <label
            htmlFor='password'
            className='block mb-2 rounded-lg text-sm font-medium  text-gray-900 dark:text-white'>
            New password
          </label>
          <input
            type='password'
            name='password'
            id='pwd'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 absolute
                h-8'
            placeholder='******'
            required

          />
          <AiFillEyeInvisible
            onClick={showpwd}
            className='relative md:left-[95%] xs:left-[90%] top-2'
          />
        </div>

        {/* ><><</> */}

        <div className='relative z-0 w-10/12 mb-6 group pt-7'>
          <label
            htmlFor='password'
            className='block mb-2 rounded-lg text-sm font-medium  text-gray-900 dark:text-white'>
            New password
          </label>
          <input
            type='password'
            name='password'
            id='pwd'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 absolute
                h-8'
            placeholder='******'
            required

          />
          <AiFillEyeInvisible
            onClick={showpwd}
            className='relative md:left-[95%]  xs:left-[90%] top-2'
          />
        </div>


        {/* ><><></></> */}
        <div className='  flex justify-end w-10/12 pt-6  '>
          <button className='text-white text-center   p-2 bg-[#00B2FF]  rounded-3xl px-[20px] py-[6px] sm:text-mp xs:text-tp md:text-p  my-5 hover:bg-[#00b3ffd8] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 '>Save Changes</button>
        </div>
      </div>



    </div>
  )
}


