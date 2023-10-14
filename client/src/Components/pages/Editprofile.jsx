import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { MdNavbar } from '../layout/MdNavbar';
import { useSelector } from "react-redux"

export const Editprofile = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);



  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
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

  const handleEditProfileClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className='max-w-[1300px] xs:w-[90%] sm:w-[80%] md:w-[70%] mx-auto'>
        <MdNavbar />
        <div className='bg-opacity-1 flex justify-center '>
          <div className='pt-6 absolute '>
            <img className='rounded-full '
              src={isAuthenticated ? "./images/user.png" : "./images/userp.png"}
              alt="" />
          </div>
          <div className='pl-12 pt-7 relative '>
            <img
              className='absolute pt-1.5 pl-1.5 z-[1] cursor-pointer '
              onClick={() => setShowModal(true)}
              src='./images/Vector7.png'
              alt=""
            />
            <div>
              <img src="./images/Ellipse54.png" alt="" />
            </div>
          </div>
        </div>

        {/* Edit Profile button */}
        <div className='pt-20'>
          <div className='rounded-lg'>
            <button
              onClick={handleEditProfileClick}
              className='p-3 w-full flex items-center justify-between font-bold text-lg rounded-lg border-2 active:border-white duration-300 active:text-white'
            >
              <div className='flex items-center'>
                <span className='mr-2'>Edit profile</span>
              </div>
              {isOpen ? (
                <AiOutlineCaretUp />
              ) : (
                <AiOutlineCaretDown />
              )}
            </button>
            {isOpen && (
              <div
                className='absolute md:w-[70%] sm:w-[80%] xs:w-[90%] bg-white border border-gray-300 rounded-lg transition-all duration-300'
                style={{ transform: isOpen ? 'translateY(0)' : 'translateY(-100%)' }}
              >
                {/* Dropdown content */}
                <div className='pt-5'>
                  <Link className='px-2 text-blue-500 font-bold' to='/editprofile'>
                    Edit Profile
                  </Link>
                </div>
                <div className='pt-2'>
                  <hr className='border-2' />
                  <h1 className='pt-5 px-2 cursor-pointer' onClick={() => { navigate("/changepassword") }} >
                    Change Password
                  </h1>
                </div>
                <div className='py-3'>
                  <hr className='border-2' />
                  <h1 className='pt-4 px-2 cursor-pointer' onClick={() => { navigate("/pages") }}  >
                    Help
                  </h1>
                </div>
                <div className='py-3'>
                  <hr className='border-2' />
                  <h1 className='pt-4 px-2 cursor-pointer' onClick={() => { navigate("/") }}  >
                    LogOut
                  </h1>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal start */}
        {showModal && (
          <>
            {/* Background overlay */}
            <div className="fixed inset-0 z-40 bg-black opacity-50" onClick={() => setShowModal(false)}></div>

            <div className="fixed inset-0 mt-[10%] z-50 sm:w-[55%] xs:w-[80%] md:w-[40%] xl:w-[30%] 2xl:w-[30%] mx-auto ">
              <div className="relative  mx-auto ">
                <div className="flex flex-col  ">
                  <div className='bg-white  text-center rounded-md shadow-lg outline-none font-[500] py-5'>
                    <div>
                      <p className='my-4 text-[#000] xs:text-mp sm:text-tp md:text-p font-bold'>Change profile Picture</p>
                    </div>
                    <hr className='py-[0.5px] bg-[#AEAEAE]' />

                    <div className='relative'>
                      <p className='my-4 text-[red] xs:text-mp sm:text-tp md:text-p'>Upload New Profile Picture</p>
                      <input type="file" className='absolute top-[-5px] xs:left-[5%] sm:left-[12%] md:left-[18%] lg:left-[25%] 
                      xl:left-[30%] cursor-pointer opacity-0' />
                    </div>
                    <hr className='py-[0.5px] bg-[#AEAEAE]' />
                    <div className='relative'>
                      <p className='my-4 text-[#00B2FF] xs:text-mp sm:text-tp md:text-p cursor-pointer  '>Remove Current Profile Picture</p>
                      <input type="file" className='absolute top-[-5px] xs:left-[5%] sm:left-[12%] md:left-[18%] lg:left-[25%] 
                      xl:left-[30%] cursor-pointer opacity-0' />
                    </div>
                    <hr className='py-[0.5px] bg-[#AEAEAE]' />
                    <div className="flex justify-center gap-2 border-blueGray-200 py-3">
                      <button
                        className="text-[#fff] bg-[black] rounded-md uppercase px-2 py-1 xs:text-mc 
                        sm:text-tc md:text-c mr-1 mb-1 transition-all duration-150 
                        ease-linear outline-none focus:outline-none background-transparent"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Cancel
                      </button>
                      <button
                        className="bg-[#00B2FF] text-white uppercase px-2 rounded-md shadow hover:shadow-lg 
                        outline-none focus:outline-none mb-1 transition-all duration-150 
                        ease-linear xs:text-mc sm:text-tc md:text-c"
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

        {/* Change User Name section */}
        <div className={`pt-7 ${isOpen ? 'pt-72' : ''}`}>
          <form action="" className='xs:text-mp sm:text-tp md:text-p' >
            <div>
              <label htmlFor="">Change User Name</label>
              <input className='pt-4 w-full rounded-lg border-2  border-[#D9D9D9]' type="text" />
            </div>
            <div className='pt-5'>
              <label htmlFor="">Change E-Mail</label>
              <input className='border-2 pt-4 w-full rounded-lg border-[#D9D9D9] ' type="text" />
            </div>
            <div className='pt-5'>
              <label htmlFor="">Your company Name</label>
              <input className='border-2 pt-4 w-full rounded-lg border-[#D9D9D9]' type="text" />
            </div>
            <div className='flex justify-end'>
              <button type='submit' className='text-white text-center p-2 bg-[#00B2FF] rounded-3xl px-[20px] py-[6px] sm:text-mp xs:text-tp md:text-p my-5 hover:bg-[#00b3ffd8]  '>Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
