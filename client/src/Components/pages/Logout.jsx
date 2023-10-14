import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux"

export const Logout = () => {
    const { isAuthenticated, user } = useSelector((state) => state.user);

    return (
        <>
            <div className='bg-white pt-5  w-[350px] shadow-xl rounded-md'>
                <div className='flex justify-center'>
                    <img
                        src={isAuthenticated ? "./images/user.png" : "./images/userp.png"} alt=''


                        className='h-12 w-12 object-cover rounded-full'
                    />
                </div>
                <div className='pt-10 pb-7'>
                <ul>
                    <li className='my-3 px-3 text-[#656565] hover:text-[#00B2FF'>
                        <Link to="/login">Sign-in</Link>
                    </li>
                    <hr />
                    <li className='my-3 px-3 text-[#656565] hover:text-[#00B2FF'>
                        <Link to="/Sign-Up">Sign-Up</Link>
                    </li>
                </ul>
                </div>
                <hr />
            </div>
        </>
    );
};
