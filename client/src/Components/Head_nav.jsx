// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import  { useState } from 'react';

import AOS from 'aos';
  import 'aos/dist/aos.css';
export const Head_nav = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
      useEffect(() => {
        AOS.init({
            offset:100,
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
            <img src="logo/next tech waves logo.png" alt="" />
        </div>
        <div className='border-2 max-w-[10%] cursor-pointer'><img src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" alt="" /></div>
       
        
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
    </>
  )
}
