import React, { useEffect } from 'react'
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { MdNavbar } from '../layout/MdNavbar';



export const Pages = () => {

  const [showModal, setShowModal] = React.useState(false);

  // const handleOpen = () => setOpen(!open);




  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const toggleAccordion = () => setIsAccordionOpen(!isAccordionOpen);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className=' max-w-[1300px] xs:w-[90%] sm:w-[80%] md:w-[70%] mx-auto ' >
    <MdNavbar/>
      <div className='bg-opacity-1 flex justify-center '>
        <div className='pt-6 absolute '>
          <img className='rounded-full' src="./images/user.png" alt="" />
        </div>
        <div className='pl-12 pt-7 relative'>
          <img className='absolute pt-1.5 pl-1.5 z-[1]' onClick={() => setShowModal(true)} src='./images/Vector7.png' alt="" />
          <div>
            <img src="./images/Ellipse54.png" alt="" />
          </div>
        </div>
      </div>




      {/* <div className='mt-8 mb-6 xs:text-mp sm:text-tp md:text-p'>

        <h1 className='text-[#00B2FF] mt-[10%] pl-2  border-[2px]  rounded-md py-4 w-full' onClick={windowWidth <= 1536 ? toggleAccordion : undefined} style={{ cursor: windowWidth <= 728 ? 'pointer' : 'default' }}> Edit Profile</h1>
        {windowWidth > 1536 ? (
          <div className=' '>
            <h1 className='pt-5   '><Link className='' to="/changepassword">Change Password</Link></h1>
            <h1 className='pt-4'><Link to='/pages'>Help</Link></h1>
            <h1 className='pt-4'>Log Out</h1>
          </div>
        ) : isAccordionOpen && (
          <div className=' border-2'>
            <h1 className='pt-4  border pl-2'><Link to="/changepassword">Change Password</Link></h1>
            <h1 className='pt-4  border pl-2'><Link to='/pages'>Help</Link></h1>
            <h1 className='pt-4  border pl-2'>Log Out</h1>
          </div>
        )}
      </div> */}








      {/* ><<<<  MODEL  START  <<<<< */}
      {showModal && (
        <>
          <div className="fixed inset-0 mt-[10%] z-50 sm:w-[55%] xs:w-[80%] md:w-[40%] xl:w-[30%] 2xl:w-[20%] mx-auto ">
            <div className="relative  mx-auto ">
              <div className="flex flex-col  ">
                <div className='bg-white  text-center rounded-md shadow-lg outline-none font-[500]'>
                 <div>
                 <p className='my-4 text-[#000] xs:text-mp sm:text-tp md:text-p font-bold'>Change profile Picture</p>
                 </div>
                  <hr className='py-[0.5px] bg-[#AEAEAE]' />
                  
                  <div className='relative'>
                    <p className='my-4 text-[red] xs:text-mp sm:text-tp md:text-p'>Upload New Profile Picture</p>
                    <input type="file" className='absolute top-[-5px] xs:left-[8%]   cursor-pointer opacity-0 ' />
                  </div>
                  <hr className='py-[0.5px] bg-[#AEAEAE]' />
                <div>
                <p className='my-4 text-[#00B2FF] xs:text-mp sm:text-tp md:text-p cursor-pointer  '>Remove Current Profile Picture</p>
                </div>
                  <hr className='py-[0.5px] bg-[#AEAEAE]' />
                  <div className="flex justify-center gap-2 border-blueGray-200 py-3">
                    <button
                      className="text-[#fff] bg-[black] rounded-md uppercase px-2 py-1 xs:text-mc sm:text-tc md:text-c mr-1 mb-1 transition-all duration-150 ease-linear outline-none focus:outline-none background-transparent"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-[#00B2FF] text-white uppercase px-2 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mb-1 transition-all duration-150 ease-linear xs:text-mc sm:text-tc md:text-c"
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
         
        </>
      )}
      {/* ><<<<   MODEL  END    <<<<<<<< */}


      <div className=''>
        <form action="" className=''>
          <div className='pt-24'>
            <label className='' htmlFor=""> How May We Assist You Today?</label>
            <textarea name="" id=""  className=' pl-2 mt-2  w-full rounded-lg border-2 border-[#D9D9D9]'></textarea>
            {/* <input className='pt-4 h-60 w-full rounded-lg border-2 border-[#D9D9D9]' type="text" /> */}
          </div>
          <div className='flex justify-end  '>
            <button type='submit' className='text-white text-center p-2 bg-[#00B2FF] rounded-3xl px-[20px] py-[6px] sm:text-mp xs:text-tp md:text-p my-5 hover:bg-[#00b3ffd8] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 '>Save Changes</button>
          </div>
        </form>
      </div>

    </div>
  )
}

