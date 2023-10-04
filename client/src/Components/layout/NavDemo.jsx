/** @format */

import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

export const NavDemo = () => {
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
        className='max-w-[90%] w-[1340px] hidden md:block mx-auto fixed bottom-[15px] left-0 right-0     border border[black] bg-[#F5F5F5] rounded-full  z-[1]'
        data-aos='fade-down'>
        <nav>
          <ul className='flex justify-between px-2 py-2'>
            <li className=' rounded-full hover:text-[#FFF] px-4 py-1 lg:text-p md:text-tp sm:text-mp hover:bg-[#00B2FF] active:bg-[#00B2FF] '>
              <Link to='/'> Home</Link>
            </li>
            <li className='  rounded-full hover:text-[#FFF] px-2 py-1 lg:text-p md:text-tp sm:text-mp hover:bg-[#00B2FF] '>
              <Link to='/about-us'> About Us</Link>
            </li>
            <li className='  rounded-full hover:text-[#FFF] px-4 py-1 lg:text-p md:text-tp sm:text-mp hover:bg-[#00B2FF] '>
              <Link to='/services'> Services</Link>
            </li>
            <li className='  rounded-full hover:text-[#FFF] px-1 py-1 lg:text-p md:text-tp sm:text-mp hover:bg-[#00B2FF] '>
              {" "}
              <Link to='/subscription'> Recharge & Plans</Link>
            </li>

            <li className='  rounded-full hover:text-[#FFF] px-2 py-1 lg:text-p md:text-tp sm:text-mp hover:bg-[#00B2FF] '>
              <Link to='/portfolio'> Our Portfolio</Link>
            </li>
            <li className='  rounded-full hover:text-[#FFF] px-4 py-1 lg:text-p md:text-tp sm:text-mp hover:bg-[#00B2FF] '>
              <Link to='/sign-up'>Sign-Up</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
