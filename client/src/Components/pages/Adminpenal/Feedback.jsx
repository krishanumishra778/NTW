// eslint-disable-next-line no-unused-vars
import React from 'react'

import axios from 'axios';
import { MdOutlineStarOutline } from "react-icons/md";

import { Link } from 'react-router-dom';
const Feedback = () => {
    //     axios.get('http://localhost:4000/review')
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
    return (
        <div className="mx-auto flex justify-center max-w-[1300px] ">

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
                    <Link to="" className="py-1 hover:bg-[#0091CF] rounded-full hover:font-bold">
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

                <div className='py-5'>
                    <img className='mx-auto' src="logo/next tech waves logo.png" alt='' />
                </div>

                <div className='overflow-y-scroll h-[85vh] '>

                    <hr className=' bg-black  h-[2.5px]' />
                    <div
                        className='flex m-8 gap-5 items-center cursor-pointer'>
                        <div>
                            <img className='rounded-full w-12' src="./images/user.png" alt="" />
                        </div>
                        <div className=''>
                            <p className='leading-5 font-bold ]'>Default Name</p>
                            <p className='flex'><   MdOutlineStarOutline />
                                <MdOutlineStarOutline />
                                <MdOutlineStarOutline /><MdOutlineStarOutline />
                                <MdOutlineStarOutline />

                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Feedback
