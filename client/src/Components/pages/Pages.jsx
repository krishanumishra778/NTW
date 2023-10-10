import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { MdNavbar } from '../layout/MdNavbar';
import toast from 'react-hot-toast';

export const Pages = () => {
  const [showModal, setShowModal] = React.useState(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message Send Successfully")
  };

  return (
    <div className='max-w-[1300px] xs:w-[90%] sm:w-[80%] md:w-[70%] mx-auto'>
      <MdNavbar />
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

      {/* Modal Code - Omitted for brevity */}

      <div className=''>
        <form action="" className='' onSubmit={handleSubmit}>
          <div className='pt-24'>
            <label className='' htmlFor="">How May We Assist You Today?</label>
            <textarea name="" id="" className='pl-2 mt-2 w-full rounded-lg border-2 border-[#D9D9D9]'></textarea>
          </div>
          <div className='flex justify-end '>
            <button
              type='submit'
              className='text-white text-center p-2 bg-[#00B2FF] rounded-3xl px-[20px] py-[6px] sm:text-mp xs:text-tp md:text-p my-5 hover:bg-[#00b3ffd8] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 '

            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
