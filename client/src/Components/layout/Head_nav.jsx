// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import { useState } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

export const Head_nav = () => {
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
    <>
      <nav className="bg-gray-50 block md:hidden  my-2 px-4 " data-aos="fade-down">
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
          <div className="max-w-[70%]">
            <img src="logo/next tech waves logo.png" alt="Next tech Waves" data-aos="fade-down" />
          </div>
          <div className=' max-w-[10%] cursor-pointer'><img src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" alt="" /></div>


        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <nav>
              <ul className="mt-2 space-y-2 ">
                <li>
                  <Link to='/' > Home</Link>

                </li>
                <li>
                  <Link to='/about-us'> About-Us</Link>
                </li>
                <li>
                  <Link to='/services' > Services</Link>
                </li>
                <li>
                  <Link to='/subscription' > Recharge & Plans</Link>
                </li>
                <li>
                  <Link to='/portfolio' > Our Portfolio</Link>
                </li>
                <li>
                  <Link to='/sign-up'> Sign-Up</Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </nav>
    </>
  )
}
