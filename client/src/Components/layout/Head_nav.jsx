import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
// import { LOGOUT_SUCCESS } from '../../constants/userConstants';
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { logout } from '../../actions/userAction';
export const Head_nav = () => {

  const dispatch = useDispatch()
  const [myModal, setMyModal] = useState(true)

  const { isAuthenticated, user } = useSelector((state) => state.user);

  // javascript///////////////////////////

  const Menus = ['you dont have any plan ', 'Settings', 'log Out'];

  const [open, setOpen] = useState(false);


  const handleMouseEnter = () => {
    setOpen(true);
  };



  const navLinks = document.querySelector('.nav-links')
  function ontogglemenu(e) {
    e.name = e.name === 'menu' ? 'close' : 'menu'
    navLinks.classList.toggle('top-[9%]')
  }

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
 
  return (
    <>



      {/* <<<<<<<<<<<<<<<<   Navbar     start   >>>>>>>>>>>>>>>>>>>>>>> */}


      <nav className=" block md:hidden  my-2 px-4 relative main-container" >

        <div className=" mx-auto flex justify-between items-center  relative z-10 ">
          <div className="md:hidden">


            {/* Mobile menu button */}
            <button className="text-[black]" onClick={() => {
              const modal = document.getElementById("myNav")
              modal.showModal()
            }}>
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
              {/* <ion-icon onclick="ontogglemenu(this)" name="menu" class="text-3xl cursor-pointer md:hidden"></ion-icon> */}

            </button>

          </div>
          <div className="max-w-[70%]">
            <img src="logo/next tech waves logo.png" alt="" />

          </div>
          <div
            className='h-12 w-12 object-cover  border-gray-400 rounded-full cursor-pointer'
            style={{ backgroundColor: 'white' }}

          >
            <img
              src={isAuthenticated ? "./images/user.png" : "./images/userp.png"} alt=''
              className='h-full w-full  rounded-full'
              onClick={() => {
                const modal = document.getElementById('myModal')
                modal.showModal()
              }}
            />

          </div>

          {/* logout section */}
          <dialog
            className='absolute mt-0 w-full mt-[10%]'
            id='myModal'
          >
            {isAuthenticated ? (
              <>
                <div>
                  <div className='flex justify-end'>
                    <button className='py-3 sm:px-4 text-[25px] rounded-sm ' onClick={() => {
                      const modal = document.getElementById("myModal")
                      modal.close()
                    }}><AiOutlineClose /></button>
                  </div>
                </div>

                <div className='flex justify-center'>

                  <img
                    src={isAuthenticated ? "./images/user.png" : "./images/userp.png"}
                    alt=''
                    className='h-12 w-12 object-cover rounded-full'
                  />

                </div>

                <p className='text-center mt-2   font-bold overflow-hidden whitespace-nowrap'>
                  {user?.name}
                </p>
                <ul>
                  <div className='grid grid-cols-3 mt-14  xs:px-2 sm:px-4 text-[#656565] xs:text-mp sm:text-tp md:text-p '>
                    <p className='col-span-2'>You dont have any plan</p>
                    <p className='flex justify-end sm:pr-6 '>__Day's left</p>

                  </div>

                  <li className='my-3  xs:px-2 sm:px-4 text-[#656565] hover:text-[#00B2FF]'><Link to="/editprofile">Settings</Link></li>
                </ul>
                <hr />
                {/* < Link className='text-[#656565] inline-block px-3 py-4 hover:text-[#00B2FF]'>log in</Link> */}
                < Link className='text-[#656565]  inline-block  xs:px-2 sm:px-4 py-4 ' onClick={() => {
                  dispatch(logout())
                  const modal = document.getElementById("myModal")
                  modal.close()
                }} >log Out</Link>

                {/* ><<<<<<<<< */}


                {/* >><>< */}
              </>
            ) : (<><div className='w-full shadow-md '>


              <div className='flex justify-end'>
                <button className='py-3 px-4 text-[25px] rounded-sm ' onClick={() => {
                  const modal = document.getElementById("myModal")
                  modal.close()
                }}><AiOutlineClose /></button>

              </div>

              <div className='flex justify-center pt-10 '>
                <img
                  src={isAuthenticated ? "./images/user.png" : "./images/userp.png"} alt=''
                  className='h-12 w-12 object-cover rounded-full'
                />
              </div>

              <div className='pt-20 pb-7'>

                <ul>
                  <li className='my-3 cursor-pointer border-0  px-3 text-[#656565] '>
                    <Link to="/login" className='hover:text-[#00B2FF]'>Sign-in</Link>
                  </li>
                  <hr />
                  <li className='my-3 cursor-pointer border-0 px-3 text-[#656565]'>
                    <Link to="/Sign-Up" >Sign-Up</Link>
                  </li>
                </ul>
              </div>

            </div></>)}
          </dialog>
          {/* logout section end  */}

        </div>



        <dialog id='myNav' className='w-full mt-20'>

          <div className="md:hidden pl-10 pb-8 ">
            <div className='flex justify-end'>
              <button className='p-2 px-4 ml-5 rounded-sm text-[25px] ' onClick={() => {
                const modal = document.getElementById("myNav")
                modal.close()
              }}><AiOutlineClose /></button>
            </div>
            <ul className="mt-2 space-y-6 font-bold ">
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
              <hr className='' />
              <li>
                <Link to='/sign-up' onClick={toggleMobileMenu}>Sign-Up</Link>
              </li>
            </ul>
          </div>

        </dialog>

      </nav >

      {/* <<<<<<<<<<<<<<<<   Navbar    End    >>>>>>>>>>>>>>>>>>>>>>> */}
    </>
  )
}
