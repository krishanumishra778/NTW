/** @format */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";


export const NavDemo = ( {setNavurl}) => {
  


  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1500,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <div
        className='max-w-[90%] w-[1540px] hidden md:block mx-auto fixed bottom-[15px] left-0 right-0     border border[black] bg-[#F5F5F5] rounded-full  z-[1]'
        data-aos='zoom-in'>
        <nav>
          <ul className='flex justify-between px-2 '>
            <li className=' rounded-full hover:text-[#FFF] px-4 py-1 lg:text-p md:text-tp sm:text-mp hover:bg-[#00B2FF] active:bg-[#00B2FF] '>
              <Link to='/' onClick={ ()=>{setNavurl("/")}} > Home</Link>
            </li>
            <li className='  rounded-full hover:text-[#FFF] px-2 py-1 lg:text-p md:text-tp sm:text-mp hover:bg-[#00B2FF] '>
              <Link to='/about-us' onClick={ ()=>{setNavurl("/about-us")}} > About Us</Link>
            </li>
            <li className='  rounded-full hover:text-[#FFF] px-4 py-1 lg:text-p md:text-tp sm:text-mp hover:bg-[#00B2FF] '>
              <Link to='/services' onClick={ ()=>{setNavurl("/services")}} > Services</Link>
            </li>
            <li className='  rounded-full hover:text-[#FFF] px-1 py-1 lg:text-p md:text-tp sm:text-mp hover:bg-[#00B2FF] '>
              {" "}
              <Link to='/subscription' onClick={ ()=>{setNavurl("/subscription")}} > Recharge & Plans</Link>
            </li>

            <li className='  rounded-full hover:text-[#FFF] px-2 py-1 lg:text-p md:text-tp sm:text-mp hover:bg-[#00B2FF] '>
              <Link to='/portfolio' onClick={ ()=>{setNavurl("/portfolio")}} > Our Portfolio</Link>
            </li>
            <li className='  rounded-full hover:text-[#FFF] px-4 py-1 lg:text-p md:text-tp sm:text-mp hover:bg-[#00B2FF] '>
              <Link to='/sign-up' onClick={ ()=>{setNavurl("/sign-up")}} >Sign-Up</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
