/** @format */

import { useEffect, useState } from "react";
import axios from "axios";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/userAction";


export const User_Signup = () => {
  const dispatch = useDispatch()
  const { data, error } = useSelector(state => state.user)
  const navigate = useNavigate();

  const [userData, setuserData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    password: "",
    email_verified: false, // Changed "false" to a boolean value
  });

  const inpHandler = event => {
    setuserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };


  const formHandler = async event => {
    event.preventDefault();
    dispatch(register(userData))
   
  };
  // 
  const [showPassword, setShowPassword] = useState(true);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const showpwd = () => {
    const pwdType = document.getElementById("pwd").type;
    if (pwdType === "password") {
      document.getElementById("pwd").type = "text";
    } else {
      document.getElementById("pwd").type = "password";

    }
  };

  useEffect(() => {
    if (data?.success == false) {
      toast.error(data?.message)
    }
    else if (error) {
      toast.error(error)
    }
    else if (data?.success == true) {
      toast.success(data.message)
      navigate("/getotp")
    }
  }, [data, error, navigate])
  return (
    <div className='max-w-full'>
      <div className='grid md:grid-cols-2 '>
        <div className='bg-white '>
          <h1 className='text-2xl text-center font-bold mt-4'>Sign up</h1>
          <div className='p-8 max-w-[400px] mx-auto'>
            <form className='form' onSubmit={formHandler}>
              <div className='relative z-0 w-full group'>
                <label
                  htmlFor='name'
                  className='block mb-2 xs:text-mp sm:text-tp md:text-p text-gray-900 dark:text-white'>
                  Your name
                </label>
                <input
                  type='text'
                  name='name'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-8 mb-4'
                  placeholder='nexttechwaves'
                  required
                  onChange={inpHandler}
                  value={userData.name}
                  minLength={3}

                />
              </div>

              <div className='relative z-0 w-full mb-6 group'>
                <label
                  htmlFor='email'
                  className='block mb-2 xs:text-mp sm:text-tp md:text-p text-gray-900 dark:text-white'>
                  Your email
                </label>
                <input

                  type='email'
                  name='email'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-8'
                  placeholder='email@nexttechwaves.com'
                  required
                  onChange={inpHandler}
                  value={userData.email}
                />
              </div>
              {/* Company + country name */}
              <div className='relative z-0 w-full mb-6 group'>
                <label
                  htmlFor='name'
                  className='block mb-2 xs:text-mp sm:text-tp md:text-p text-gray-900 dark:text-white'>
                  Company Name
                </label>
                <input
                  type='text'
                  name='company'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                 h-8'
                  placeholder='enter company name'
                  required
                  onChange={inpHandler}
                  value={userData.company}
                  minLength={3}
                />
              </div>

              {/*  */}

              <div className='relative z-0 w-full mb-6 group'>
                <label
                  htmlFor='name'
                  className='block mb-2 xs:text-mp sm:text-tp md:text-p text-gray-900 dark:text-white'>
                  Country Name
                </label>
                <input
                  type='text'
                  name='country'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                 h-8'
                  placeholder='enter country name'
                  required
                  onChange={inpHandler}
                  value={userData.country}
                  minLength={3}
                />
              </div>

              {/* ><<><><</></> */}
              <div className='relative z-0 w-full mb-6 group'>
                <label
                  htmlFor='password'
                  className='block mb-2 xs:text-mp sm:text-tp md:text-p text-gray-900 dark:text-white'>
                  Your password
                </label>
                <input
                  type='password'
                  name='password'
                  id='pwd'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 absolute h-8'
                  placeholder='******'
                  required
                  onChange={inpHandler}
                  value={userData.password}
                  minLength={5}
                  maxLength={10}
                />
             
                  {showPassword ? (
        <AiFillEyeInvisible onClick={() => { togglePasswordVisibility(); showpwd(); }} className='relative left-[90%] top-2 cursor-pointer' />
      ) : (
        <AiFillEye onClick={() => { togglePasswordVisibility(); showpwd(); }}  className='relative left-[90%] top-2 cursor-pointer' />
      )}
              </div>
              {/* ................. */}
              <input
                type='hidden'
                name='email_verified'
                value={userData.email_verified}
              />

              <button
                type='submit'
                className='text-white bg-[#00B2FF] hover:bg-[#00b3ffd3] hover:font-bold xs:text-mp sm:text-tp md:text-p w-full px-5 py-2.5 text-center  my-4 rounded-lg'>
                Submit
              </button>


              <div className=" flex justify-center">

                <GoogleOAuthProvider
                  clientId='693453829328-ovitjd596gvg88lnvovoeqs5eeud7kc7.apps.googleusercontent.com'
                  className='w-full'>
                  <GoogleLogin
                    onSuccess={credentialResponse => {
                      console.log(credentialResponse);
                      const userData = jwt_decode(credentialResponse.credential);
                      // console.log(userData);
                      setuserData({ ...userData })
                      console.log(userData.email)
                      // console.log(userData.given_name);
                      // console.log(userData.family_name);

                      axios.post(
                        "http://localhost:4000/google_login",
                        userData.name,
                        userData.email
                      );
                    }}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                  />
                </GoogleOAuthProvider>
              </div>

              <div className='relative z-0 w-full  group text-center mt-2 text-[#494949]'>
                Already have an account?{" "}
                <Link to='/login' className='text-[#00B2FF]'>
                  {" "}
                  Sign-in
                </Link>
              </div>
            </form>
          </div>
        </div>

        <div className='hidden md:block p-8'>
          <img src='./images/sign_up_side_img.jpg' alt='' className='' />
        </div>
      </div>
    </div>
  );
};
