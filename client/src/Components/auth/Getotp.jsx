/** @format */

import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Layout } from "../layout/Layout";
import toast from "react-hot-toast";
export const Getotp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState({
    otp: "",
  });

  const inpHandler = event => {
    setOtp({
      ...otp,
      [event.target.name]: event.target.value,
    });
  };

  const formHandler = event => {
    event.preventDefault();


    axios.post("http://localhost:4000/varify", otp).then(res => {
      if (res?.data?.success) {
        toast.success(res?.data?.message);
        navigate("/login");
      } else {
        navigate('/getotp')
      }
    }).catch((err) => {
      toast.error(err?.response?.data?.message);
    });

  };
  return (

    <div className='grid md:grid-cols-2'>
      <div className='  bg-white '>
        {/* <h1 className='text-2xl text-center font-bold mt-10'>Log In</h1> */}

        <div className='p-8 max-w-[400px] mx-auto'>
          <form className='' onSubmit={formHandler}>
            <div className='relative z-0 w-full mb-6 group'>
              <label
                htmlFor='otp'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Enter otp
              </label>
              <input
                type='number'
                name='otp'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
        h-8'
                placeholder='Enter otp here'
                required
                onChange={inpHandler}
                value={otp.otp}
              />
            </div>

            <button
              type='submit'
              className='text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 '>
              Send
            </button>
          </form>
        </div>
      </div>

      <div className='hidden md:block'>
        <img src='./images/sign_up_side_img.jpg' alt='' className='' />
      </div>
    </div>

  );
};
