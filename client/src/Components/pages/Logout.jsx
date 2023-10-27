import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux"

export const Logout = () => {
    const { isAuthenticated } = useSelector((state) => state.user);

    return (
        <div className='w-full shadow-md '>
            <div className='flex justify-center pt-10 '>
                <img
                    src={isAuthenticated ? "./images/user.png" : "./images/userp.png"} alt=''
                    className='h-12 w-12 object-cover rounded-full'
                />
            </div>
            <div className='pt-20 pb-7'>
                <ul>
                    <li className='my-3 cursor-pointer border-0  px-3 text-[#656565] '>
                        <Link to="/login" className='hover:text-[#00B2FF]'>Sign-in</Link>
                    </li>
                    <hr />
                    <li className='my-3 cursor-pointer border-0 px-3 text-[#656565]'>
                        <Link to="/Sign-Up" >Sign-Up</Link>
                    </li>
                </ul>
            </div>



        </div>
    );
};
