import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdNavbar } from '../layout/MdNavbar';
import toast from 'react-hot-toast';
import { useSelector } from "react-redux"

export const Pages = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);



  const navigate = useNavigate()

  const [showModal, setShowModal] = React.useState(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const toggleAccordion = () => setIsAccordionOpen(!isAccordionOpen);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
   

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message Send Successfully")
    navigate("/editprofile")
  };

  return (
    <div className='max-w-[1300px] xs:w-[90%] sm:w-[80%] md:w-[70%] mx-auto'>
      <MdNavbar />
      <div className='bg-opacity-1 flex justify-center '>
        <div className='pt-6 absolute '>
          <img className='rounded-full'
              src={isAuthenticated ? "./images/user.png" : "./images/userp.png"}
              alt="" />
        </div>
        <div className='pl-12 pt-7 relative'>
          <img className='absolute pt-1.5 pl-1.5 z-[1] cursor-pointer' onClick={() => setShowModal(true)} src='./images/Vector7.png' alt="" />
          <div>
            <img src="./images/Ellipse54.png" alt="" />
          </div>
        </div>
      </div>

      {/* Modal Code - Omitted for brevity */}

      <div className=''>
        <form action="" className='' onSubmit={handleSubmit}>
          <div className='pt-24'>
            <label className='' htmlFor="">How May We Assist You Today?</label>
            <textarea name="" id="" required className='pl-2 mt-2 w-full rounded-lg border-2 border-[#D9D9D9] pt-2'></textarea>
          </div>
          <div className='flex justify-end '>
            <button
              type='submit'
              className='text-white text-center p-2 bg-[#00B2FF] rounded-3xl px-[20px] py-[6px] sm:text-mp xs:text-tp md:text-p my-5 hover:bg-[#00b3ffd8]  '

            >
              Submit
            </button>
          </div>
        </form>
      </div>


    </div>
  );
};
