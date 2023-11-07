import { useState ,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../actions/userAction";
import { Logout } from "./Logout";


export const Head = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
    const [open, setOpen] = useState(false);
const dispatch = useDispatch();
const navigate = useNavigate();

  const handleMouseEnter = () => {
    setOpen(true);
  };
  const handleMouseLeave = () => {
    setOpen(false);
  };
  const logout_user = () => {
    dispatch(logout());
    navigate("/")
  };
  const [showButton1, setShowButton1] = useState(true);

  const toggleButtons = () => {
    setShowButton1(!showButton1);
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
  return (
    <div>
        
        <div className=" max-w-[1300px] mx-auto py-[20px] hidden md:block " >
          <div className='grid  mx-4 '>

            <div className='absolute h-screen  flex justify-center z-20'>
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
                          <p className='text-center'>3</p>

                          <div>
                            {showButton1 ? (
                              <button
                                className="  font-bold pt-2 "
                                onClick={toggleButtons}
                              >
                                Paused
                              </button>
                            ) : (
                              <button
                                className=" font-bold pt-2 "
                                onClick={toggleButtons}
                              >
                                Resume
                              </button>
                            )}
                          </div>

                        </div>



                        <li className='my-2 px-3 text-[#656565] hover:text-[#00B2FF]'>
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
              <img src="logo/next tech waves logo.png" alt='' />
            </div>
            <div></div>
          </div>

        </div>
    </div>
  )
}
