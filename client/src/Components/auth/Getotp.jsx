/** @format */

import React, { useState } from "react";

import axios from "axios";

import {  useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
export const Getotp = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { error, user, isAuthenticated, logindata, email_verified , } = useSelector(
    (state) => state.user
  );
  const [otp, setOtp] = useState({
    otp: "",
  });
   
  const [loading , setLoading] = useState(false);
  const inpHandler = event => {
    setOtp({
      ...otp,
      [event.target.name]: event.target.value,
    });
  };

  const formHandler = event => {
    event.preventDefault();

    axios
      .post("http://localhost:4000/varify", otp, { withCredentials: true })
      .then(res => {
        if (res?.data?.success) {
          window.location.href = "/login";
          setLoading(false)
          toast.success(res?.data?.message);
        } else {
          window.location.href = "/getotp";
        }
      })
      .catch(err => {
        setLoading(false)

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
                onClick={() => {
                  setLoading(true)
                
                }}

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
                ) : "Continue"}

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
