import React from 'react'

export const SubscriberBiodata = () => {

    return (
        <div className="mx-auto flex justify-center max-w-[1300px] pt-1 ">
            <div className=" bg-[#00B2FF]  text-white w-[20%] text-center pt-6  pb-16">

                <ul className='flex flex-col gap-16 py-14 lg:text-[17px] md:text-[13px] sm:text-[10px]'>
                    <li className="  font-bold active:bg-[#0091CF]   rounded-full">Message</li>
                    <li className=" bg-[#0091CF] py-2   rounded-full ">Total Subscriber</li>
                    <li className="active:bg-[#0091CF] rounded-full">Total Visitor's</li>
                    <li className="active:bg-[#0091CF] rounded-full">Total Costumers</li>
                    <li className="active:bg-[#0091CF] rounded-full">feedback & review</li>
                    <li className="active:bg-[#0091CF]   py-1 rounded-full">Affiliate marketars</li>

                    <li className="active:bg-[#0091CF] rounded-full">Active Subscription</li>
                    <li className="active:bg-[#0091CF]  rounded-full">Paused Subscription</li>
                </ul>
            </div>

            {/* ><<<<<<<<<<<<<< */}
            <div className='  w-[85%]  '>
                <div className='text-center'>
                    <div className=''>
                        <p className='text-[#00B2FF] py-4 font-bold'>User Profile</p>
                    </div>
                    {/* ><>< */}
                    <div>
                        <img className='rounded-full w-12 mx-auto' src="./images/user.png" alt="" />
                    </div>
                    {/* .,.,., */}
                    <div>
                        <h1 className='font-bold py-1'>Jackson chain</h1>
                        <h1 className=' text-[#AEAEAE]'>Basic 60day’s plan</h1>

                    </div>
                </div>
                {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
                <hr className=' bg-[#AEAEAE] mt-1 h-[2px]' />
                {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                {/* part 2  */}
                <div className='flex flex-col gap-6 px-12 py-10 '>
                    <div className='grid grid-cols-2 '>
                        <h1 className='font-bold'>Joining Date:-</h1>
                        <h6 className='text-[#AEAEAE]'>Tuesday,
                            <span className='pl-5'> 26/10/2023 </span></h6>
                    </div>
                    {/* 2 */}
                    <div className='grid grid-cols-2 '>
                        <h1 className='font-bold '>Buying subscription Date:-</h1>
                        <h6 className='text-[#AEAEAE]  '>Saturday,
                            <span className='pl-5'>31/10/2023</span></h6>
                    </div>
                    {/* 3 */}
                    <div className='grid grid-cols-2'>
                        <h1 className='font-bold'>Plan that currently active:-</h1>
                        <h6 className='text-[#AEAEAE]'>Basic 60 Day’s plan activated</h6>
                    </div>
                    {/* 4 */}
                    <div className='grid grid-cols-2'>
                        <h1 className='font-bold'>Total projects completed:-</h1>
                        <h6 className='text-[#AEAEAE]'>2 out of 5</h6>
                    </div>
                    {/* 5 */}
                    <div className='grid grid-cols-2'>
                        <h1 className='font-bold'>No. of Additional pages:-</h1>
                        <h6 className='text-[#AEAEAE]'>20</h6>
                    </div>
                    {/* 6 */}
                    <div className='grid grid-cols-2'>
                        <h1 className='font-bold'>Number of day’s remain:-</h1>
                        <h6 className='text-[#AEAEAE]'>32 day’s remain</h6>
                    </div>
                    {/* 7 */}
                    <div className='grid grid-cols-2'>
                        <h1 className='font-bold'>Company Name:-</h1>
                        <h6 className='text-[#AEAEAE]'>Leadon technologies</h6>
                    </div>
                    {/* 8 */}
                    <div className='grid grid-cols-2'>
                        <h1 className='font-bold'>CActivities:-</h1>
                        <h6 className='text-[#AEAEAE]'>offline</h6>
                    </div>
                    {/* 9 */}
                    <div className='grid grid-cols-2'>
                        <h1 className='font-bold'>Refer:- </h1>
                        <h6 className='text-[#AEAEAE]'>2</h6>
                    </div>
                    {/* 10 */}
                    <div className='grid grid-cols-2'>
                        <h1 className='font-bold'>project submitted history:- </h1>
                        <h6 className='text-[#AEAEAE]'>2 project submitted till date</h6>
                    </div>
                    {/* 11 */}
                    <div className='grid grid-cols-2'>
                        <h1 className='font-bold'>Paused or continue:-</h1>
                        <h6 className='text-[#AEAEAE]'><img className='inline-block' src="images/Vector11.png" alt="" />
                            <span className='pl-5'>Paused</span></h6>
                    </div>
                </div>







            </div>
        </div>
    );
}
