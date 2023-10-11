/** @format */
import  { useEffect } from "react";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

export const NavDemo = ( ) => {
  

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
        >
        <nav>
          <ul className='grid grid-cols-6 text-center  '>
           
              <Link className=' rounded-full hover:text-[#FFF]  py-2 lg:text-p font-[600] sm:text-[13px] hover:bg-[#00B2FF] active:bg-[#00B2FF] ' to='/' > Home</Link>
           
              <Link className='  rounded-full hover:text-[#FFF]  py-2 lg:text-p font-[600] sm:text-[13px] hover:bg-[#00B2FF] ' to='/about'  > About Us</Link>
           
              <Link className='  rounded-full hover:text-[#FFF]  py-2 lg:text-p font-[600] sm:text-[13px] hover:bg-[#00B2FF] ' to='/services'  > Services</Link>
           
             
              <Link className='  rounded-full hover:text-[#FFF]  py-2 lg:text-p font-[600] sm:text-[13px] hover:bg-[#00B2FF] ' to='/subscription'  > Recharge & Plans</Link>
           
              <Link   className='  rounded-full hover:text-[#FFF] py-2 lg:text-p font-[600] sm:text-[13px] hover:bg-[#00B2FF] ' to='/portfolio'  > Our Portfolio</Link>
          
              <Link className='  rounded-full hover:text-[#FFF]  py-2 lg:text-p font-[600] sm:text-[13px] hover:bg-[#00B2FF] ' to='/sign-up'  >Sign-Up</Link>
          
          </ul>
        </nav>
      </div>
    </>
  );
};
