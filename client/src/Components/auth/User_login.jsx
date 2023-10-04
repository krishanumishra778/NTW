/** @format */

import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { Link, json, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const User_login = () => {

  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const inpHandler = event => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const formHandler = event => {
    event.preventDefault();
    axios
      .post("http://localhost:4000/login", userData, { withCredentials: true })
      .then(res => {
        console.log(res)
        if (res.data.success) {
          toast.success(res.data.message)

        } else {
          toast.error(res.data.message)
        }
      })
      .catch(err => {
        toast.error(err);
      });
  };

  const showpwd = () => {
    const pwdType = document.getElementById("pwd").type;
    if (pwdType === "password") {
      document.getElementById("pwd").type = "text";
    } else {
      document.getElementById("pwd").type = "password";
    }
  };
  return (

    <div className='grid md:grid-cols-2'>
      <div className='  bg-white '>
        <h1 className='text-2xl text-center font-bold mt-10'>Log In</h1>

        <div className='p-8 max-w-[400px] mx-auto'>
          <form className='' onSubmit={formHandler}>
            <div className='relative z-0 w-full mb-6 group'>
              <label
                htmlFor='email'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Your email
              </label>
              <input
                type='email'
                name='email'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
            h-8'
                placeholder='email@nexttechwaves.com'
                required
                onChange={inpHandler}
                value={userData.email}
              />
            </div>

            <div className='relative z-0 w-full mb-6 group'>
              <label
                htmlFor='password'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Your password
              </label>
              <input
                type='password'
                name='password'
                id='pwd'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 absolute
                h-8'
                placeholder='******'
                required
                onChange={inpHandler}
                value={userData.pwd}

              />

              <AiFillEyeInvisible
                onClick={showpwd}
                className='relative left-[90%] top-2'
              />
            </div>

            <div className='relative z-0 w-full mb-3 pt-3 group text-center'>
              Forgot password?
            </div>

            <button
              type='submit'
              className='text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 '>
              Log In
            </button>
            <div className='relative z-0 w-full mb-3 group text-center pt-3'>
              <span> Don't have an </span>
              <span> <Link to='/sign-up' className="text-blue-400"> Sign Up?</Link></span>
            </div>


            {/* <div className='relative z-0 w-full mb-6 group text-center mt-2'>
              Log In with Google
            </div>

            <button className='text-black border-2 border-gray hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
              <span>
                {" "}
                <FcGoogle className='inline text-2xl ' />
              </span>
              <span className='pl-3'>Google</span>
            </button> */}
          </form>
        </div>
      </div>

      <div className='hidden md:block'>
        <img src='./images/sign_up_side_img.jpg' alt='' className='' />
      </div>
    </div>

  );
};
