/** @format */

import React, { useState } from "react";
import axios from "axios";
import { AiFillEyeInvisible } from "react-icons/ai";
<<<<<<< HEAD
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useNavigate, Link } from "react-router-dom";
import { Layout } from "../layout/Layout";
=======

// import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
// import jwt_decode from "jwt-decode";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import { Layout } from "../layout/Layout";
>>>>>>> 2e1ba08ada91bf4390464fcdee7b8ad02cbe6403
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { loginuser } from "../redux/Action";

export const User_SIgnup = () => {
<<<<<<< HEAD
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userGoogleData, setUserGoogleData] = useState()
  const [userData, setUserData] = useState({
=======
  // const navigate = useNavigate();

  const [userData, setuserData] = useState({
>>>>>>> 2e1ba08ada91bf4390464fcdee7b8ad02cbe6403
    name: "",
    email: "",
    password: "",
    email_verified: false, // Changed "false" to a boolean value
  });

  const inpHandler = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const formHandler = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:4000/register", userData)
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message);
          // Dispatching loginuser action should be like this:
          // dispatch(loginuser(res.data)); // Assuming res.data contains user information
          navigate("/getotp");
        }
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message);
      });
  };

<<<<<<< HEAD

  const sendUserGoogleData=()=>{
    console.log(userGoogleData)
  }
  const showPwd = () => {
    const pwdInput = document.getElementById("pwd");
    if (pwdInput) {
      pwdInput.type = pwdInput.type === "password" ? "text" : "password";
=======
  const showpwd = () => {
    const pwdType = document.getElementById("pwd").type;
    if (pwdType === "password") {
      document.getElementById("pwd").type = "text";
    } else {

      document.getElementById("pwd").type = "password";
>>>>>>> 2e1ba08ada91bf4390464fcdee7b8ad02cbe6403
    }
  };

  return (
    <div className="max-w-full">
      <div className="grid md:grid-cols-2">
        <div className="bg-white">
          <h1 className="text-2xl text-center font-bold mt-10">Sign up</h1>
          <div className="p-8 max-w-[400px] mx-auto">
            <form className="form" onSubmit={formHandler}>
              <div className="relative z-0 w-full mb-6 group">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-8"
                  placeholder="nexttechwaves"
                  required
                  onChange={inpHandler}
                  value={userData.name}
                  minLength={3}
                />
              </div>

              <div className="relative z-0 w-full mb-6 group">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-8"
                  placeholder="email@nexttechwaves.com"
                  required
                  onChange={inpHandler}
                  value={userData.email}
                />
              </div>

<<<<<<< HEAD
              <div className="relative z-0 w-full mb-6 group">
=======
              {/* ><<><><</></> */}
              <div className='relative z-0 w-full mb-6 group'>
>>>>>>> 2e1ba08ada91bf4390464fcdee7b8ad02cbe6403
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="pwd"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 absolute h-8"
                  placeholder="******"
                  required
                  onChange={inpHandler}
                  value={userData.password}
                  minLength={5}
                  maxLength={10}
                />
                <AiFillEyeInvisible
                  onClick={showPwd}
                  className="relative left-[90%] top-2 cursor-pointer"
                />
              </div>
              {/* ................. */}
              <input
                type="hidden"
                name="email_verified"
                value={userData.email_verified}
              />

              <button
                type="submit"
                className="text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5 mb-5"
              >
                Submit
              </button>

              <div className="relative z-0 w-full mb-6 group text-center mt-2 text-blue-400">
                <Link to="/login">Already have an account?</Link>
              </div>

<<<<<<< HEAD
              <div className="relative z-0 w-full mb-6 group text-center mt-2">
                Connect with Google
              </div>

              <GoogleOAuthProvider
                clientId="693453829328-ovitjd596gvg88lnvovoeqs5eeud7kc7.apps.googleusercontent.com"
                className="w-full"
              >
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    console.log(credentialResponse);
                    const decodedUserData = jwt_decode(
                      credentialResponse.credential
                    );
                    console.log(decodedUserData);
                    axios.post("http://localhost:4000/google_login",decodedUserData).then((res)=>{
                      console.log(res)
                    }).catch(err=>{
                      console.log(err)
                    })
                    
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}

                  onClick={sendUserGoogleData}
                />
              </GoogleOAuthProvider>
=======

>>>>>>> 2e1ba08ada91bf4390464fcdee7b8ad02cbe6403
            </form>
          </div>
        </div>

        <div className="hidden md:block p-8">
          <img src="./images/sign_up_side_img.jpg" alt="" className="" />
        </div>
      </div>
    </div>
  );
};
