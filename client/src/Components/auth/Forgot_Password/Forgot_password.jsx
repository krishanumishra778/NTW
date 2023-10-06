// import { Link } from "react-router-dom"
import { AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";




export const Forgot_password = () => {
     
    // const [pwd , setPwd] = useState({

    // })

    const inpHandler = (event) => {
        event.preventDefault();
    }

    const showpwd = () => {
        const pwdType = document.getElementById("pwd").type;
        if (pwdType === "password") {
            document.getElementById("pwd").type = "text";
        } else {
            document.getElementById("pwd").type = "password";
        }
    };
    return (
        <div> <div className='grid md:grid-cols-2'>
            <div className='  bg-white '>
                <h1 className='text-2xl text-center font-bold mt-10'>Set  Password</h1>

                <div className='p-8 max-w-[400px] mx-auto'>
                    <form className='' >
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


                            />

                            <AiFillEyeInvisible
                                onClick={showpwd}
                                className='relative left-[90%] top-2'
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


                            />

                            <AiFillEyeInvisible
                                onClick={showpwd}
                                className='relative left-[90%] top-2'
                            />
                        </div>

                       
                        <button
                            type='submit'
                            className='text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 '>
                           Set Password
                        </button>
                        

                    </form>
                </div>
            </div>

            <div className='hidden md:block'>
                <img src='./images/sign_up_side_img.jpg' alt='' className='' />
            </div>
        </div>
        </div>
    )
}
