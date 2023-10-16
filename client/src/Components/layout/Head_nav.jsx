// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
// import { LOGOUT_SUCCESS } from '../../constants/userConstants';


import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { Logout } from '../pages/Logout';
import { logout } from '../../actions/userAction';
export const Head_nav = () => {
  const dispatch = useDispatch()
  const { isAuthenticated, user } = useSelector((state) => state.user);
  // const [isDialogOpen, setIsDialogOpen] = useState(false);


  // const openDialog = () => {
  //   setIsDialogOpen(true);
  // };

  // const closeDialog = () => {
  //   setIsDialogOpen(false);
  // };

  // javascript///////////////////////////

  const Menus = ['you dont have any plan ', 'Settings', 'log Out'];

  const [open, setOpen] = useState(false);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (open && !e.target.closest('.menu-container')) {
        setOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [open]);
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



      {/* <<<<<<<<<<<<<<<<   Navbar     start   >>>>>>>>>>>>>>>>>>>>>>> */}


      <nav className=" block md:hidden  my-2 px-4 relative main-container" data-aos="fade-down">

        <div className=" mx-auto flex justify-between items-center  relative z-10 ">
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
          <div
            className='h-12 w-12 object-cover  border-gray-400 rounded-full cursor-pointer'
            style={{ backgroundColor: 'white' }}
            onClick={() => {
              const modal = document.getElementById('myModal')
              modal.showModal()
            }}
          >
            <img
              src={isAuthenticated ? "./images/user.png" : "./images/userp.png"} alt=''
              className='h-full w-full object-cover rounded-full'
            />
          </div>
          <dialog
            className='absolute mt-0 w-full mt-[10%]'
            id='myModal'
          >
            {isAuthenticated ? (<>

              <div className='flex justify-center'>

                <img
                  src={isAuthenticated ? "./images/user.png" : "./images/userp.png"}
                  alt=''
                  className='h-12 w-12 object-cover rounded-full'
                />
              </div>
              <p className='text-center mt-2  text-lg font-bold overflow-hidden whitespace-nowrap'>
                Krishanu Kaundilya
              </p>
              <ul>
                <div className='grid grid-cols-3 mt-2 px-3 text-[#656565]'>
                  <p className='col-span-2'>You dont have any plan</p>
                  <p>__Day's left</p>

                </div>

                <li className='my-3 px-3 text-[#656565] hover:text-[#00B2FF]'><Link to="/editprofile">Settings</Link></li>
              </ul>
              <hr />
              {/* < Link className='text-[#656565] inline-block px-3 py-4 hover:text-[#00B2FF]'>log in</Link> */}
              < Link className='text-[#656565]  inline-block px-3 py-4 ' onClick={() => dispatch(logout()) }>log Out</Link>
            </>) : <Logout />}
          </dialog>
          {/* <div className='  xs:max-w-[10%] sm:max-w-[6%] cursor-pointer ' onMouseEnter={handleMouseEnter} onMouseDown={handleMouseLeave}>
            { <img className='rounded-full '
           src={isAuthenticated ? "./images/user.png" : "./images/userp.png"} alt=''
           />}
          </div>

          <div
            className='absolute  top-16 z-20 right-0  w-full'
            style={{ display: open ? 'block' : 'none' }}
          >
            <div className='bg-white mt-3 h-72 bg-opacity-100 md:w-[350px] w-full shadow-xl rounded-md  '>
              < hr className='w-full mb-2  bg-[gray]' />
              <div className='flex justify-center'>
             s
              </div>
              <p className='text-center mt-2 text-lg font-bold overflow-hidden whitespace-nowrap'>
                Krishanu Kaundilya
              </p>
              <ul>
                {Menus.map((menu, index) => (
                  <li
                    onClick={() => setOpen(false)}
                    className={`p-2 text-[14px]  text-gray-500 cursor-pointer ${index === 2 ? 'border-t  border-gray-400  mx-auto' : ''
                      } ${index === 2 ? 'mb-2' : ''} hover:text-blue-500 transition duration-300 ${index === 0 ? 'mt-4' : ''
                      } ${index === 1 ? 'settings-menu-item' : ''}`}
                    key={menu}
                  >
                    {index === 1 ? <Link to='/editprofile'>{menu}</Link> : menu}
                  </li>

                ))}

              </ul>
            </div>
          </div> */}
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <ul className="mt-2 space-y-2 ">
              <li>
                <Link to='/' onClick={toggleMobileMenu}> Home</Link>
              </li>
              <li>
                <Link to='/about' onClick={toggleMobileMenu}> About Us</Link>
              </li>
              <li>
                <Link to='/services' onClick={toggleMobileMenu}> Services</Link>
              </li>
              <li>
                <Link to='/subscription' onClick={toggleMobileMenu}> Recharge & Plans</Link>
              </li>
              <li>
                <Link to='/portfolio' onClick={toggleMobileMenu}> Our Portfolio</Link>
              </li>
              <li>
                <Link to='/sign-up' onClick={toggleMobileMenu}>Sign-Up</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
      {/* <<<<<<<<<<<<<<<<   Navbar    End    >>>>>>>>>>>>>>>>>>>>>>> */}
    </>
  )
}
