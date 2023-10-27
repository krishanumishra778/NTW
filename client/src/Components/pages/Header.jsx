/** @format */

import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "./Logout";
import { logout } from "../../actions/userAction";
import toast from "react-hot-toast";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated, success, user } = useSelector(state => state.user);
  const [text] = useTypewriter({
    words: [
      "UI/UX Design and Development",
      "Web Development",
      "No Code Web Development",
      "Web Design",
    ],
    loop: {},
  });

  const [open, setOpen] = useState(false);

  const handleMouseEnter = () => {
    setOpen(true);
  };
  // const handleMouseLeave = () => {
  //   setOpen(false);
  // };

  useEffect(() => {
    const handleClickOutside = e => {
      if (open && !e.target.closest(".menu-container")) {
        setOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  const logout_user = () => {
    dispatch(logout());
  };
  useEffect(() => {
    if (success === true) {
      toast.success("Logout Successfully");
      navigate("/");
    }
  }, [navigate, success]);
  return (
    <>
      <div className='max-w-[1300px] mx-auto'>
        <div className='py-[20px] hidden md:block '>
          <div className='grid  mx-4 '>
            <div className='absolute h-screen  flex justify-center  z-20'>
              <div className='relative menu-container'>
                <div
                  className='h-12 w-12 object-cover  border-gray-400 rounded-full cursor-pointer'
                  style={{ backgroundColor: "white" }}
                  onMouseEnter={handleMouseEnter}>
                  <img
                    src={
                      isAuthenticated
                        ? "./images/user.png"
                        : "./images/userp.png"
                    }
                    alt=''
                    className='h-full w-full object-cover rounded-full'
                  />
                </div>
                <div
                  className='absolute ml-16 top-16   w-[350px] bg-white '
<<<<<<< HEAD
                  style={{ display: open ? 'block' : 'none' }}
                >
                  {isAuthenticated ? (<div className='bg-white mt-3   shadow-xl rounded-md '>

                    <div className='flex justify-center'>

                      <img
                        src={isAuthenticated ? "./images/user.png" : "./images/userp.png"}
                        alt=''
                        className='h-12 w-12 object-cover rounded-full'
                      />
                    </div>
                    <p className='text-center mt-2  text-lg font-bold overflow-hidden whitespace-nowrap'>
                      {user?.name}
                    </p>
                    <ul>
                      <div className='grid grid-cols-3 mt-2 px-3 text-[#656565]'>
                        <p className='col-span-2'>You dont have any plan</p>
                        <p>__Day's left</p>

=======
                  style={{ display: open ? "block" : "none" }}>
                  {isAuthenticated ? (
                    <div className='bg-white mt-3   shadow-xl rounded-md '>
                      <div className='flex justify-center'>
                        <img
                          src={
                            isAuthenticated
                              ? "./images/user.png"
                              : "./images/userp.png"
                          }
                          alt=''
                          className='h-12 w-12 object-cover rounded-full'
                        />
>>>>>>> 05fc136c8ee0876c0ea35943900947d4b5a6d9bf
                      </div>
                      <p className='text-center mt-2  text-lg font-bold overflow-hidden whitespace-nowrap'>
                        {user?.name}
                      </p>
                      <ul>
                        <div className='grid grid-cols-3 mt-2 px-3 text-[#656565]'>
                          <p className='col-span-2'>You dont have any plan</p>
                          <p>__Day's left</p>
                        </div>
                        <div className='grid grid-cols-3 mt-2 px-3 text-[#656565]'>
                          <p className='col-span-2'>Project Completed</p>
                          <p className='text-center'>3/5</p>
                          <p className='py-2 hover:text-[#00B2FF]'>Resume</p>

                        </div>

                        <li className='my-3 px-3 text-[#656565] hover:text-[#00B2FF]'>
                          <Link to='/editprofile'>Settings</Link>
                        </li>
                      </ul>
                      <hr />
                      {/* < Link className='text-[#656565] inline-block px-3 py-4 hover:text-[#00B2FF]'>log in</Link> */}
                      <Link
                        className='text-[#656565]  inline-block px-3 py-4 '
                        onClick={logout_user}>
                        log Out
                      </Link>
                    </div>
                  ) : (
                    <Logout />
                  )}
                </div>
              </div>
            </div>
            <div className='mx-auto'>
              <img src='logo/next tech waves logo.png' alt='' />
            </div>
            <div></div>
          </div>
        </div>

        <div className='max-w-[1340px] px-[15px] pt-9 mx-auto flex md:flex justify-between xs:flex-col-reverse sm:flex-col-reverse lg:flex-row xl:flex-row 2xl:flex-row'>
          <div className='lg:w-[60%]'>
            <h1 className='font-[600] sm:text-tt xs:text-mt md:text-title text-[#494949] inline leading-10'>
              Unlock Your Digital Potential with Our Comprehensive Digital
              Solutions:
              <p className='font-[600] inline sm:text-tt xs:text-mt md:text-title text-[#00B2FF] leading-10'>
                {text}{" "}
                <span className='text-[#00B2FF] w-[2px]'>
                  <Cursor />
                </span>
              </p>
            </h1>
            <p className='sm:text-mp xs:text-tp md:text-p pt-4 leading-6'>
              Get every aspect of your digital needs handled in one location.
              All your digital requirements. We can assist you in growing your
              business digitally regardless of how big or small it is.
            </p>
            <Link to='/maincontactus'>
              <button className='bg-[#00B2FF]  rounded-3xl px-[20px] py-[5px] sm:text-mp xs:text-tp md:text-p text-[#fff] my-5 hover:bg-[#00b3ffd8]  ...'>
                Express your needs
              </button>
            </Link>
          </div>
          <div className='my-6  lg:w-[50%] md:my-15 durat'>
            <img
              src='images/home img.png'
              alt=''
              className='sm:mx-auto home_img  '
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
