import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


export const NavDemo = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  

  return (
    <>
      <div className="max-w-[90%] w-[1540px] hidden md:block mx-auto fixed bottom-[15px] left-0 right-0 bg-[#494949] rounded-full z-[1]">
        <nav>
          <ul className="grid grid-cols-6 text-center">
            <Link className="rounded-full hover:text-[#FFF] py-4 lg:text-p font-[600] sm:text-[13px] hover:bg-[#00B2FF] active:bg-[#00B2FF] text-white" to="/">
              Home
            </Link>
            <Link className="rounded-full hover:text-[#FFF] py-4 lg:text-p font-[600] sm:text-[13px] hover:bg-[#00B2FF] text-white" to="/about">
              About Us
            </Link>
            <Link className="rounded-full hover:text-[#FFF] py-4 lg:text-p font-[600] sm:text-[13px] hover:bg-[#00B2FF] text-white" to="/services">
              Services
            </Link>
            <Link className="rounded-full hover:text-[#FFF] py-4 lg:text-p font-[600] sm:text-[13px] hover:bg-[#00B2FF] text-white" to="/subscription">
              Recharge & Plans
            </Link>
            <Link className="rounded-full hover:text-[#FFF] py-4 lg:text-p font-[600] sm:text-[13px] hover:bg-[#00B2FF] text-white" to="/portfolio">
              Our Portfolio
            </Link>
            {isAuthenticated && <Link className="rounded-full  py-4 lg:text-p font-[600] sm:text-[13px]  text-gray-300 leading-5" to="/">
              Templates
              <p className="leading-3 text-[13px]">( coming soon )</p>
            </Link>}


            {!isAuthenticated && (
              <Link className="rounded-full hover:text-[#FFF] hover:bg-[#00B2FF] py-4 lg:text-p font-[600] sm:text-[13px] hover-bg-[#00B2FF] text-white" to="/sign-up">
                Sign-Up
              </Link>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
};
