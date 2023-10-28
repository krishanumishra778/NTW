import React from 'react'
import { Link } from 'react-router-dom';

export const TotalVisitors = () => {


    // Replace this with your actual data or logic for the circular graph
    const percentage = 81;



    return (
        <div className="mx-auto flex justify-center max-w-[1300px] ">
            <div className=" bg-[#00B2FF] h-[100vh]   text-white w-[20%] text-center ">

                <ul className='flex flex-col gap-8 pt-[80px]  lg:text-[17px] md:text-[13px] sm:text-[10px]'>
                    <Link to="/adminpanel" className="py-1 hover:bg-[#0091CF] rounded-full hover:font-bold">
                        <li >Message</li>
                    </Link>

                    <Link to="/totalsubscriber" className="py-1 hover:bg-[#0091CF] rounded-full hover:font-bold">
                        <li >Total Subscriber</li>
                    </Link>

                    <Link to="/totalvisitors" className="  font-bold bg-[#0091CF] py-1 rounded-full " >
                        <li >Total Visitor's</li>
                    </Link>
                    <Link to="/totalcustomers" className="py-1 hover:bg-[#0091CF] rounded-full hover:font-bold ">
                        <li>Total Costumers</li>
                    </Link>
                    <Link to="" className="py-1 hover:bg-[#0091CF] rounded-full hover:font-bold">
                        <li >feedback & review</li>
                    </Link>
                    <Link to="" className="py-1 hover:bg-[#0091CF] rounded-full hover:font-bold">
                        <li >Affiliate marketars</li>
                    </Link>

                    <Link to="/totalactive" className="py-1 hover:bg-[#0091CF] rounded-full hover:font-bold ">
                        <li >Active Subscription</li>
                    </Link>
                    <Link to="" className="py-1 hover:bg-[#0091CF] hover:font-bold rounded-full ">
                        <li >Paused Subscription</li>
                    </Link>
                </ul>
            </div>

            {/* ><<<<<<<<<<<<<< */}
            <div className='  w-[85%]   border-2'>

                <div className='flex mt-6  items-center'>
                    <div className=' ml-auto'>
                        <img className='rounded-full w-12' src="./images/user.png" alt="" />
                    </div>
                    <div className='ml-2'>
                        <p className='leading-5 ]'>Krishanu Kaundilya</p>
                    </div>
                </div>
                {/* ><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}

                <div className='grid grid-cols-4 md:gap-3  '>
                    <div className='mx-auto  flex justify-center items-center gap-3 rounded-lg shadow-gray-400 shadow-lg bg-white py-10 xl:px-12 px-4'>
                        <div className=''>
                            <img className='' src="./images/graphicon.png" alt="" />
                        </div>
                        <div className=''>
                            <h1 className='leading-4'>total Users</h1>
                            <p className='text-[#AEAEAE] leading-4'>900</p>
                        </div>

                    </div>
                    {/* 2 */}
                    <div className='mx-auto md:gap-3 flex justify-center items-center  rounded-lg shadow-gray-400 shadow-lg bg-white  xl:px-12 px-4 '>
                        <div className=''>
                            <img className='' src="./images/graphmessageicon.png" alt="" />
                        </div>
                        <div className=''>
                            <h1 className='leading-4 lg:text-lg'>Total Orders</h1>
                            <p className='text-[#AEAEAE] leading-4'>650</p>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className='mx-auto md:gap-3 flex justify-center items-center  rounded-lg shadow-gray-400 shadow-lg bg-white  xl:px-12 px-4'>
                        <div className=''>
                            <img className='' src="./images/graphvector.png" alt="" />
                        </div>
                        <div className=''>
                            <h1 className='leading-4 lg:text-lg'>Active Orders</h1>
                            <p className='text-[#AEAEAE] leading-4'>500</p>
                        </div>
                    </div>
                    {/* 4 */}
                    <div className='mx-auto md:gap-3  flex justify-center items-center gap-3 rounded-lg shadow-gray-400 shadow-lg bg-white  xl:px-11 px-4'>
                        <div className=''>
                            <img className='' src="./images/graphtotalsign-up.png" alt="" />
                        </div>
                        <div className=''>
                            <h1 className='leading-4'>Total Sign-in</h1>
                            <p className='text-[#AEAEAE] leading-4'>259</p>
                        </div>
                    </div>
                </div>
                {/* .,.,.,.,.,.,.,.,.,.,.,.,.,.,. */}


                <div className='bg-white shadow-lg  shadow-gray-400 mx-auto  mt-8 rounded-lg w-[96%]'>
                    <div className='flex justify-between px-5'>
                        <h1>Order</h1>
                        <h1>Download</h1>
                    </div>
                    <hr className=' bg-black  h-[1.5px]' />
                    {/* ><<<<<<<<<<<<<<<<<<<<<<<< */}
                    <div className='flex justify-between px-5 py-5'>

                        <div className="w-24 h-24 rounded-full border-4 border-[#FF5B5B]  relative">
                            <div className="absolute inset-0 bg-[#FF5B5B] rounded-full clip-path-full" style={{ clipPath: `polygon(0 0, 100% 0, 100% ${percentage}%, 0 100%)` }}></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-4xl text-white">{percentage}%</span>
                            </div>
                            <h1 className='pt-24'>Total Order</h1>
                        </div>
                        {/* ,,,,,, */}
                        <div className="w-24 h-24 rounded-full border-4 border-[#00B074]  relative">
                            <div className="absolute inset-0 bg-[#00B074] rounded-full clip-path-full" style={{ clipPath: `polygon(0 0, 100% 0, 100% ${percentage}%, 0 100%)` }}></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-4xl text-white">{percentage}%</span>
                            </div>
                            {/* <h1 className='pt-24'>Customer Growth</h1> */}

                        </div>
                        {/* ,,,,,,, */}
                        <div className="w-24 h-24 rounded-full border-4 border-[#00B2FF]  relative">
                            <div className="absolute inset-0 bg-[#00B2FF] rounded-full clip-path-full" style={{ clipPath: `polygon(0 0, 100% 0, 100% ${percentage}%, 0 100%)` }}></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-4xl text-white">{percentage}%</span>
                            </div>
                            {/* <h1 className='pt-24'>Total Revenue</h1> */}

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}
