/** @format */

import { useEffect, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login } from "../../actions/userAction";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import axios from "axios";


export const User_login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { error, user, isAuthenticated , data } = useSelector(
    (state) => state.user
  );
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
    dispatch(login(userData.email, userData.password));
  };

  const showpwd = () => {
    const pwdType = document.getElementById("pwd").type;
    if (pwdType === "password") {
      document.getElementById("pwd").type = "text";
    } else {
      document.getElementById("pwd").type = "password";
    }
  }; 
  const [showPassword, setShowPassword] = useState(true);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {

    // console.log(error)
    if (error) {

      toast.error(error);
      dispatch(clearErrors());
    }
    // if user login so redirect in account page
    if (isAuthenticated) {
      // console.log(user)
      toast.success('login SuccessFully...')
      navigate("/");
    }
  }, [dispatch, error, isAuthenticated, navigate, user]);
  const [messageShown, setMessageShown] = useState(false);
  useEffect(() => {
    if (typeof user?.message === "string" && !messageShown) {
      toast.success(user?.message);
      setMessageShown(true); // Set the state to indicate the message has been shown
    }
  }, [user?.message, messageShown]);

  

  return (

    <div className='grid md:grid-cols-2'>
      <div className='  bg-white '>
        <h1 className='text-2xl text-center font-bold mt-10'>Log In</h1>

        <div className='p-8 max-w-[400px] mx-auto'>
          <form className='' onSubmit={formHandler}>
            <div className='relative z-0 w-full mb-6 group'>
              <label
                htmlFor='email'
                className='block mb-2 xs:text-mp sm:text-tp md:text-p text-gray-900 dark:text-white'>
                Your email
              </label>
              <input
                id="useremail"
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
                className='block mb-2 xs:text-mp sm:text-tp md:text-p text-gray-900 dark:text-white'>
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

{showPassword ? (
        <AiFillEyeInvisible onClick={() => { togglePasswordVisibility(); showpwd(); }} className='relative left-[90%] top-2 cursor-pointer' />
      ) : (
        <AiFillEye onClick={() => { togglePasswordVisibility(); showpwd(); }}  className='relative left-[90%] top-2 cursor-pointer' />
      )}
            </div>

            <div className='relative z-0 w-full mb-3 pt-3 group flex
             justify-end pr-5 corsor-pointer'>
              <Link to="/email" className="text-[12px]"> Forgot password? </Link>
            </div>

            <button
              type='submit'
              className='text-white bg-[#00B2FF] hover:bg-[#00b3ffd3] xs:text-mp sm:text-tp md:text-p rounded-lg  w-full  px-5 py-2.5 text-center '>
              Log In
            </button>
            <div className=" flex justify-center my-6">

              <GoogleOAuthProvider
                clientId='693453829328-ovitjd596gvg88lnvovoeqs5eeud7kc7.apps.googleusercontent.com'
                className='w-full'>
                <GoogleLogin
                  onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                    const userdata = jwt_decode(credentialResponse.credential);
                    console.log(userdata);
                    setUserData({
                      ...userData,
                      email: userdata.email
                    });
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
            <div className='relative z-0 w-full mb-3 group text-center '>
              <span> Don't have an </span>
              <span> <Link to='/sign-up' className="text-blue-400"> Sign Up?</Link></span>
            </div>

          </form>
        </div>
      </div>

      <div className='hidden md:block '>
        <img src='./images/sign_up_side_img.jpg' alt='' className='' />
      </div>
    </div>

  );
};
