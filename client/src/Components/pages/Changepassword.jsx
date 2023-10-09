import { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import { MdNavbar } from '../layout/MdNavbar';
import { AiFillEyeInvisible } from "react-icons/ai";
import Aos from "aos";

export const Changepassword = () => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);


  const showpwd = () => {
    const pwdType = document.getElementById("pwd").type;
    if (pwdType === "password") {
      document.getElementById("pwd").type = "text";
    } else {
      document.getElementById("pwd").type = "password";
    }

  };

  const showpwd2 = () => {
    console.log("click")
    const pwdType = document.getElementById("pwd").type;
    if (pwdType === "password") {
      document.getElementById("pwd2").type = "text";
    } else {
      document.getElementById("pwd2").type = "password";
    }

  };

  const confirmpwd = (e) => {
    e.preventDefault();

    let pwd = document.getElementById("pwd").value;
    let pwd2 = document.getElementById("pwd2").value;
    // console.log(pwd ,pwd2)
    if (pwd === pwd2) {
      alert("Password Change ");
      navigate("/editprofile")
    } else {
      alert("Confirmatoin failed");
      form.reset()
    }
  }


  return (
    <div className='max-w-[1300px] xs:w-[90%] sm:w-[80%] md:w-[70%] mx-auto '>
      <MdNavbar />
      <div className='bg-opacity-1 flex justify-center '>
        <div className='pt-6 absolute '>
          <img className='rounded-full' src="./images/user.png" alt="" />
        </div>
        <div className='pl-12 pt-7 relative'>
          <img className='absolute pt-1.5 pl-1.5 z-[1]'
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

      </div>


      {/* ><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
      <div className='w-[100%] mt-[10%] mx-auto xs:text-mp sm:text-tp md:text-p'>

        <form name='form' action="" className='' onSubmit={confirmpwd}>
          <div className='relative z-0 mb-6 group'>

            <label
              htmlFor='password'
              className='block mb-2 rounded-lg xs:text-mp sm:text-tp md:text-p   text-gray-900 dark:text-white'>
              New password
            </label>
            <input
              type='password'
              name='password'
              id='pwd'
              className='bg-gray-50 border-2 pt-4 border-[#D9D9D9] text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 absolute
                h-10'
              placeholder='Set New Password'
              required

            />
            <AiFillEyeInvisible
              onClick={showpwd}
              className='relative md:left-[95%] xs:left-[90%] top-3'
            />
          </div>

          {/* ><><</> */}

          <div className='relative z-0 group pt-7 '>
            <label
              htmlFor='password'
              className='block mb-2 rounded-lg xs:text-mp sm:text-tp md:text-p  text-gray-900 dark:text-white'>
              Confirm New password
            </label>
            <input
              type='password'
              name='password'
              id='pwd2'
              className='bg-gray-50 border-2 pt-4 border-[#D9D9D9] text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 absolute
            h-10'
              placeholder='Confirm New password'
              required

            />
            <AiFillEyeInvisible
              onClick={showpwd2}
              className='relative md:left-[95%]  xs:left-[90%] top-3'
            />
          </div>

          {/* ><><></></> */}
          <div className='  flex justify-end  mt-6'>
            <button type='submit' className='text-white text-center   p-2 bg-[#00B2FF]  rounded-3xl px-2 py-[6px] sm:text-mp xs:text-tp md:text-p  my-5 hover:bg-[#00b3ffd8]  '>Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  )
}
