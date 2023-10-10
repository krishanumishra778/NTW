import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, logout } from '../../actions/userAction';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const Settings = () => {
    
   

    return (
        <div className='pt-4'>
            <div className=' mx-auto w-[350px] border-2 p-2  '>
                <img className='rounded-full  mx-auto' src="images/user.png" alt="Image Alt Tech" />
                <p className="mt-4 text-center font-bold">Krishanu kaundilya</p>

                <div className='flex justify-between pt-3'>
                    <div>
                        <h1 className='text-[#656565]'>you don't have any plan</h1>
                    </div>
                    <div>
                        <h1 className='text-[#656565]'>__ Days Left</h1>
                    </div>
                </div>

                <div className='pt-3'>
                    <h1 className='pt-1 text-[#656565]'>Setting</h1>
                    <div className='pt-3'>
                        <div className='border-b-2  w-[full]'></div>
                        {isAuthenticated ? (
                            <button className='text-[#656565] pt-3' onClick={logoutUser}>Logout</button>
                        ) : (
                            <button className='text-[#656565] pt-3' onClick={loginUser}>Login</button>
                        )}
                    </div>
                </div>
            </div>
        </div>

        {showSettings && (
          <div className='pt-3'>
            <h1 className='pt-1 text-[#656565]'>Settings</h1>
            <div className='pt-3'>
              <h1 className='text-[#656565] pt-3'>Logout</h1>
            </div>
          </div>
        )}
      // </div>
    // </div>
  // );
};
