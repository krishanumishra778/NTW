import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdNavbar } from '../layout/MdNavbar';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux"
import toast from 'react-hot-toast';
import { updatePassword, updateProfile } from '../../actions/userAction';
import axios from 'axios';

export const Changepassword = () => {
  const { isAuthenticated, user, data, error , loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [password, setpassword] = useState({
    oldpassword: "",
    newpassword: "",
    conformpassword: "",
  })
  const [file, setFile] = useState(null)
  const [userData, setUserData] = useState({
    name: "",
    email: user?.email,
    company: "",
    profile: ""
  })

  //CHANGE IMAGE //
  
  const imageChange = (e) => {
    setFile(e.target.files[0])
  }
  //UPLOADE IMAGE //

  const uploadImage = async (e) => {
    e.preventDefault()
    const formdata = new FormData()
    formdata.append('file', file)
    console.log(file)
    const { data } = await axios.post('http://localhost:4000/upload/image', formdata, { withCredentials: true })
    if (data.success) {
      toast.success(data.message)
      setShowModal(false)
      navigate('/changepassword')
    } else {
      toast.error(data.message)
    }

  }
  //REMOVE IMAGE //
  const removeImage = async () => {
    const { data } = await axios.put('http://localhost:4000/remove/image', {}, { withCredentials: true })
    console.log(data)
  }

  const savechange = async (e) => {
    e.preventDefault();
    // console.log(inputdata)
    dispatch(updateProfile(userData))

  }


  const showoldpwd = (Id) => {
    const pwdType = document.getElementById(Id).type;
    if (pwdType === "password") {
      document.getElementById(Id).type = "text";
    } else {
      document.getElementById(Id).type = "password";
    }

  };
  const [showaPassword, setShowaPassword] = useState(true);
  const [showbPassword, setShowbPassword] = useState(true);
  const [showcPassword, setShowcPassword] = useState(true);

  const AtogglePasswordVisibility = () => {
    setShowaPassword(!showaPassword);
  };
  const BtogglePasswordVisibility = () => {
    setShowbPassword(!showbPassword);
  };
  const CtogglePasswordVisibility = () => {
    setShowcPassword(!showcPassword);
  };

  const confirmpwd = (e) => {
    e.preventDefault();

    // console.log(password)
    if (password?.newpassword === password?.conformpassword) {
      dispatch(updatePassword(password))
      // console.log(data)

    } else {
      toast.error("New password and confirm password should be same")
    }
  }
  useEffect(() => {
    if (data?.success == false) {
      toast.error(data?.message)

    }
    else if (error) {
      toast.error(error)
    }
    else if (data?.success == true) {
      toast.success(data.message)
      isAuthenticated
      navigate("/login")
    }
  }, [data, error, isAuthenticated, navigate])

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
    <div className='max-w-[1300px] xs:w-[90%] sm:w-[80%] md:w-[70%] mx-auto '>
      <MdNavbar />
      <div className='bg-opacity-1 flex justify-center '>
        <div className='pt-6 absolute '>
        <img className='rounded-full w-[65px] h-[65px] '
              src={isAuthenticated && userData.profile ? `http://localhost:4000/public/images/${userData?.profile}` : "./images/userp.png"}
              alt="" />
        </div>
        <div className='pl-12 pt-7 relative '>
          <img className='absolute pt-1.5 pl-1.5 z-[1] cursor-pointer'
            onClick={() => setShowModal(true)} src='./images/Vector7.png' alt="" />
          <div>
            <img src="./images/Ellipse54.png" alt="" />
          </div>
        </div>
      </div>

      {/* // ><<<<<<<<<<<<<<<<<<<<<<<<<<< */}


      {/* ................model.................. */}
      <div className='' >

        {showModal && (
          <>
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
                        <p className='my-4 text-[#00B2FF] xs:text-mp sm:text-tp md:text-p cursor-pointer  
                        ' onClick={removeImage}>Remove Current Profile Picture</p>

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

      </div>


      {/* ><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
      <div className='w-[100%] mt-[10%] mx-auto xs:text-mp sm:text-tp md:text-p'>

        <form name='form' action="" className='' onSubmit={confirmpwd}>

          <div className='relative z-0 mb-10 group'>

            <label
              htmlFor='password'
              className='block mb-2 rounded-lg xs:text-mp sm:text-tp md:text-p   text-gray-900 '>
              Old Password
            </label>
            <input
              type='password'
              name='oldpassword'
              id='oldpwd'
              className='bg-gray-50 border-2 pt-4 border-[#D9D9D9] text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500 absolute
    h-10'
              placeholder='Enter Old Password'
              required
              onChange={(e) => {
                setpassword({
                  ...password, [e.target.name]: e.target.value
                })
              }}

            />

            {showaPassword ? (
              <AiFillEyeInvisible onClick={() => { AtogglePasswordVisibility(); showoldpwd("oldpwd"); }} className='relative md:left-[95%] xs:left-[90%] top-3' />
            ) : (
              <AiFillEye onClick={() => { AtogglePasswordVisibility(); showoldpwd("oldpwd"); }} className='relative md:left-[95%] xs:left-[90%] top-3' />
            )}

          </div>

          <div className='relative z-0 mb-6 group'>

            <label
              htmlFor='password'
              className='block mb-2 rounded-lg xs:text-mp sm:text-tp md:text-p   text-gray-900 '>
              New Password
            </label>
            <input
              type='password'
              name='newpassword'
              id='pwd'
              className='bg-gray-50 border-2 pt-4 border-[#D9D9D9] text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500 absolute
                h-10'
              placeholder='Set New Password'
              required
              onChange={(e) => {
                setpassword({
                  ...password, [e.target.name]: e.target.value
                })
              }}
            />

            {showbPassword ? (
              <AiFillEyeInvisible onClick={() => { BtogglePasswordVisibility(); showoldpwd("pwd"); }} className='relative md:left-[95%] xs:left-[90%] top-3' />
            ) : (
              <AiFillEye onClick={() => { BtogglePasswordVisibility(); showoldpwd("pwd"); }} className='relative md:left-[95%] xs:left-[90%] top-3' />
            )}
          </div>

          {/* ><><</> */}

          <div className='relative z-0 group pt-4 '>
            <label
              htmlFor='password'
              className='block mb-2 rounded-lg xs:text-mp sm:text-tp md:text-p  text-gray-900 '>
              Confirm New Password
            </label>
            <input
              type='password'
              name='conformpassword'
              id='pwd2'
              className='bg-gray-50 border-2 pt-4 border-[#D9D9D9] text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500 absolute
            h-10'
              placeholder='Confirm New password'
              required
              onChange={(e) => {
                setpassword({
                  ...password, [e.target.name]: e.target.value
                })
              }}
            />

            {showcPassword ? (
              <AiFillEyeInvisible onClick={() => { CtogglePasswordVisibility(); showoldpwd("pwd2"); }} className='relative md:left-[95%] xs:left-[90%] top-3' />
            ) : (
              <AiFillEye onClick={() => { CtogglePasswordVisibility(); showoldpwd("pwd2"); }} className='relative md:left-[95%] xs:left-[90%] top-3' />
            )}
          </div>

          {/* ><><></></> */}
          <div className='  flex justify-end  mt-6'>
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
                ) : "Change password"}

              </button>
          </div>
        </form>
      </div>
    </div>
  )
}
