import React from 'react';
import { User_login } from '../auth/User_login';

export const Settings = () => {
    return (
        <div className='pt-4'>
            <div className=' mx-auto w-[350px] border-2 p-2  '>
                <img className='rounded-full  mx-auto' src="images/user.png" alt="Image Alt Tech" />
                <p className="mt-4 text-center font-bold">Krishanu kaundilya</p>

                <div className='flex justify-between pt-3'>
                    <div>
                        <h1 className='text-[#656565]'>you dont have any plan</h1>
                    </div>
                    <div>
                        <h1 className='text-[#656565]'>__ Days Left</h1>
                    </div>
                </div>

                <div className='pt-3'>
                    <h1 className='pt-1 text-[#656565]'>Setting</h1>
                    <div className='pt-3'>
                        <div className='border-b-2  w-[full] '></div>
                        <h1 className='text-[#656565] pt-3'>logout</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
