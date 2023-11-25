import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const SubscriberBiodata = () => {
    const { singleuser } = useSelector(state => state.user);
    console.log(singleuser)
    return (
        <div className="mx-auto flex justify-center max-w-[1300px]  ">
            <div className=" bg-[#00B2FF] h-[100vh]   text-white w-[20%] text-center ">

                <ul className='flex flex-col gap-10 pt-[80px]  lg:text-[17px] md:text-[13px] sm:text-[10px]'>
                    <Link to="/adminpanel" className="py-1 hover:bg-[#0091CF] rounded-full hover:font-bold">
                        <li >Message</li>
                    </Link>

                    <Link to="/totalsubscriber" className="  font-bold bg-[#0091CF] py-1 rounded-full ">
                        <li >Total Subscriber</li>
                    </Link>

                    <Link to="/totalvisitors" className="py-1 hover:bg-[#0091CF] rounded-full hover:font-bold">
                        <li >Total Visitor's</li>
                    </Link>
                    <Link to="/totalcustomers" className="py-1 hover:bg-[#0091CF] rounded-full hover:font-bold ">
                        <li>Total Costumers</li>
                    </Link>
                    <Link to="/feedback" className="py-1 hover:bg-[#0091CF] rounded-full hover:font-bold">
                        <li >feedback & review</li>
                    </Link>
                    <Link to="" className="py-1 hover:bg-[#0091CF] rounded-full hover:font-bold">
                        <li >Affiliate marketars</li>
                    </Link>

                    <Link to="/totalactive" className="py-1 hover:bg-[#0091CF] rounded-full hover:font-bold ">
                        <li >Active Subscription</li>
                    </Link>

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
                        <h1 className='font-bold py-1'>{singleuser?.user?.name}</h1>
                        <h1 className=' text-[#AEAEAE]'>Basic 60day’s plan</h1>

                    </div>
                </div>
                {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
                <hr className=' bg-[#AEAEAE] mt-1 h-[2px]' />
                {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                {/* part 2  */}
                <div className='flex flex-col gap-3 px-12 pt-2 '>
                    <div className='grid grid-cols-2 '>
                        <h1 className='font-bold'>Joining Date:-</h1>
                        <h6 className='text-[#AEAEAE]'>
                            <span className=''> {singleuser?.user?.subscription?.joiningDate
                            }</span></h6>
                    </div>
                    {/* 2 */}
                    <div className='grid grid-cols-2 '>
                        <h1 className='font-bold '>Buying subscription Date:-</h1>
                        <h6 className='text-[#AEAEAE]  '>
                            <span className=''>SUBSCRIPTION BYING DATE</span></h6>
                    </div>
                    {/* 3 */}
                    <div className='grid grid-cols-2'>
                        <h1 className='font-bold'>Plan that currently active:-</h1>
                        <h6 className='text-[#AEAEAE]'>Basic 60 Day’s plan activated</h6>
                    </div>
                    {/* 4 */}
                    <div className='grid grid-cols-2'>
                        <h1 className='font-bold'>Total projects completed:-</h1>
                        <h6 className='text-[#AEAEAE]'>2 out of {singleuser?.user?.subscription?.completedProject}</h6>
                    </div>
                    {/* 5 */}
                    <div className='grid grid-cols-2'>
                        <h1 className='font-bold'>No. of Additional pages:-</h1>
                        <h6 className='text-[#AEAEAE]'>{singleuser?.user?.subscription?.additionalPages
                        }</h6>
                    </div>
                    {/* 6 */}
                    <div className='grid grid-cols-2'>
                        <h1 className='font-bold'>Number of day’s remain:-</h1>
                        <h6 className='text-[#AEAEAE]'>32 day’s remain</h6>
                    </div>
                    {/* 7 */}
                    <div className='grid grid-cols-2'>
                        <h1 className='font-bold'>Company Name:-</h1>
                        <h6 className='text-[#AEAEAE]'>{singleuser?.user?.company}</h6>
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
