import { useEffect, useState } from 'react';
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { MdNavbar } from '../layout/MdNavbar';
import { useDispatch, useSelector } from "react-redux"
import { logout, updateProfile } from '../../actions/userAction';
import axios from 'axios';
import toast from 'react-hot-toast';

export const Editprofile = () => {
  const { isAuthenticated, user, loading } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [file, setFile] = useState(null)

  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [userData, setUserData] = useState({
    name: "",
    email: user?.email,
    company: "",
    profile: ""
  })

  const imageChange = (e) => {
    setFile(e.target.files[0])
  }

  const uploadImage = async (e) => {
    e.preventDefault()
    const formdata = new FormData()
    formdata.append('file', file)
    console.log(file)
    const { data } = await axios.post('http://localhost:4000/upload/image', formdata, { withCredentials: true })
    if (data.success) {
      toast.success(data.message)
      setShowModal(false)
      navigate('/editprofile')
    } else {
      toast.error(data.message)
    }

  }

  const savechange = async (e) => {
    e.preventDefault();
    // console.log(inputdata)
    dispatch(updateProfile(userData))

  }

  const handleEditProfileClick = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (user) {
      setUserData({
        name: user?.name,
        email: user?.email,
        company: user?.company,
        profile: user?.profile
      })
    }

  }, [user])


  return (
    <>
      <div className='max-w-[1300px] xs:w-[90%] sm:w-[80%] md:w-[70%] mx-auto'>
        <MdNavbar />
        <div className='bg-opacity-1 flex justify-center '>
          <div className='pt-6 absolute '>
            <img className='rounded-full w-[100px] h-[100px] '
              src={isAuthenticated && userData.profile ? `http://localhost:4000/public/images/${userData?.profile}` : "./images/userp.png"}
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
                  {isAuthenticated ? (<h1 className='pt-4 px-2 cursor-pointer' onClick={() => { dispatch(logout()), navigate("/") }}  >
                    Log Out
                  </h1>) : (<h1 className='pt-4 px-2 cursor-pointer' onClick={() => { navigate("/login") }}  >
                    Log In
                  </h1>)}

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

                    <form onSubmit={uploadImage}>
                      <div className='relative'>
                        <p className='my-4 text-[red] xs:text-mp sm:text-tp md:text-p'>Upload New Profile Picture</p>
                        <input type="file" className='absolute top-[-5px] xs:left-[5%] sm:left-[12%] md:left-[18%] lg:left-[25%] 
                      xl:left-[30%] cursor-pointer opacity-0'
                          onChange={imageChange} />
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
                          type="submit"

                        >
                          Save Changes
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Change User Name section */}
        <div className={`pt-7 ${isOpen ? 'pt-72' : ''}`}>
          <form action="" className='xs:text-mp sm:text-tp md:text-p' onSubmit={savechange}>
            <div>
              <label htmlFor="">Change User Name</label>
              <input className=' w-full rounded-lg border-2  border-[#D9D9D9]' type="text" name='name' value={userData.name} onChange={(e) => {
                setUserData({ ...userData, [e.target.name]: e.target.value })
              }} required />
            </div>
            <div className='pt-5'>
              <label htmlFor=""> Your  E-Mail Address</label>
              <input className='border-2  w-full bg-gray-100 rounded-lg border-[#D9D9D9] ' value={user?.email} disabled type="text" required />
            </div>
            <div className='pt-5'>
              <label htmlFor="">Your company Name</label>
              <input className='border-2 w-full rounded-lg border-[#D9D9D9]' type="text" name='company' value={userData.company} onChange={(e) => {
                setUserData({ ...userData, [e.target.name]: e.target.value })
              }} required />
            </div>
            <div className='flex justify-end'>
              <button disabled={loading}


                type='submit'
                className='text-white bg-[#00B2FF] hover:bg-[#00b3ffd3] hover:font-bold xs:text-mp sm:text-tp md:text-p w-full px-5 py-2.5 text-center  my-4 rounded-lg'>
                {loading ? (
                  <svg width="25" height="25" className="mx-auto" viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
                    <g fill="none" fillRule="evenodd" transform="translate(1 1)" strokeWidth="2">
                      <circle cx="22" cy="22" r="16" strokeOpacity="0">
                        <animate attributeName="r"
                          begin="1.5s" dur="3s"
                          values="16;22"
                          calcMode="linear"
                          repeatCount="indefinite" />
                        <animate attributeName="stroke-opacity"
                          begin="1.5s" dur="3s"
                          values="1;0" calcMode="linear"
                          repeatCount="indefinite" />
                        <animate attributeName="stroke-width"
                          begin="1.5s" dur="3s"
                          values="2;0" calcMode="linear"
                          repeatCount="indefinite" />
                      </circle>
                      <circle cx="22" cy="22" r="16" strokeOpacity="0">
                        <animate attributeName="r"
                          begin="3s" dur="3s"
                          values="16;22"
                          calcMode="linear"
                          repeatCount="indefinite" />
                        <animate attributeName="stroke-opacity"
                          begin="3s" dur="3s"
                          values="1;0" calcMode="linear"
                          repeatCount="indefinite" />
                        <animate attributeName="stroke-width"
                          begin="3s" dur="3s"
                          values="2;0" calcMode="linear"
                          repeatCount="indefinite" />
                      </circle>
                      <circle cx="22" cy="22" r="18">
                        <animate attributeName="r"
                          begin="0s" dur="1.5s"
                          values="18;1;2;3;4;5;18"
                          calcMode="linear"
                          repeatCount="indefinite" />
                      </circle>
                    </g>
                  </svg>
                ) : "Save Changes"}

              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
