import React from 'react'

export const TotalVisitors = () => {


    // Replace this with your actual data or logic for the circular graph
    const percentage = 75; // Example: 75%


    return (
        <div className="mx-auto flex justify-center max-w-[1300px] pt-1">
            <div className=" bg-[#00B2FF] h-[100vh] text-white w-[20%] text-center pt-13 pb-16">

                <ul className='flex flex-col gap-12 py-14 lg:text-[17px] md:text-[13px] sm:text-[10px]'>
                    <li className="  font-bold  py-1 active:bg-[#0091CF] rounded-full">Message</li>
                    <li className="active:bg-[#0091CF]         py-2 rounded-full ">Total Subscriber</li>
                    <li className="bg-[#0091CF]    py-1 rounded-full">Total Visitor's</li>
                    <li className="active:bg-[#0091CF]   py-1 rounded-full">Total Costumers</li>
                    <li className="active:bg-[#0091CF]   py-1 rounded-full">feedback & review</li>
                    <li className="active:bg-[#0091CF]   py-1 rounded-full">Affiliate marketars</li>
                    <li className="active:bg-[#0091CF]   py-1 rounded-full">Active Subscription</li>
                    <li className="active:bg-[#0091CF]   py-1 rounded-full">Paused Subscription</li>
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


                <div className='bg-white shadow-lg  shadow-gray-400 mx-auto  mt-4 rounded-lg w-[96%]'>
                    <div className='flex justify-between px-5'>
                        <h1>Order</h1>
                        <h1>Download</h1>
                    </div>
                    <hr className=' bg-black  h-[1.5px]' />
                    {/* ><<<<<<<<<<<<<<<<<<<<<<<< */}

                </div>

                <div className="w-24 h-24 rounded-full border-4 border-[#00B2FF] mx-auto relative">
                    <div className="absolute inset-0 bg-[#00B2FF] rounded-full clip-path-full" style={{ clipPath: `polygon(0 0, 100% 0, 100% ${percentage}%, 0 100%)` }}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl text-white">{percentage}%</span>
                    </div>
                </div>

            </div>
        </div>
    );
}
