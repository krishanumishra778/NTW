// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'

import axios from 'axios';


import { Link } from 'react-router-dom';
const Feedback = () => {

    const [reviewdata, SetReviewdata] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:4000/get/review', {
            withCredentials: true,
        })
            .then(response => {
                // console.log(response.data);
                SetReviewdata(response?.data?.review)
            })
            .catch(error => {
                console.error(error);
            });

    }, [])
    return (
        <div className="mx-auto flex justify-center max-w-[1300px] ">

            <div className=" bg-[#00B2FF] h-[100vh]   text-white w-[20%] text-center ">

                <ul className='flex flex-col gap-10 pt-[80px]  lg:text-[17px] md:text-[13px] sm:text-[10px]'>
                    <Link to="/adminpanel" className="py-1 hover:bg-[#0091CF] rounded-full hover:font-bold">
                        <li >Message</li>
                    </Link>

                    <Link to="/totalsubscriber" className="  font-bold hover:bg-[#0091CF] py-1 rounded-full ">
                        <li >Total Subscriber</li>
                    </Link>

                    <Link to="/totalvisitors" className="py-1 hover:bg-[#0091CF] rounded-full hover:font-bold">
                        <li >Total Visitor's</li>
                    </Link>
                    <Link to="/totalcustomers" className="py-1 hover:bg-[#0091CF] rounded-full hover:font-bold ">
                        <li>Total Costumers</li>
                    </Link>
                    <Link to="/feedback" className="py-1 bg-[#0091CF] rounded-full hover:font-bold">
                        <li >Feedback & review</li>
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

                

                    {reviewdata?.map((items, index) => {
                        return (
                            <>
                                <hr className=' bg-black  h-[2.5px]' />
                                <div key={index}
                                    className='flex ml-6 my-2 gap-5 items-center cursor-pointer'>
                                    <div>
                                        <img className='rounded-full w-12' src="./images/user.png" alt="" />
                                    </div>
                                    <div className=' flex flex-col gap-1 py-2'>
                                        <p className='leading-5 font-bold ]'>{items.name}</p>
                                        <p className='flex'>
                                            {[...Array(5)].map((star, index) => {
                                                let currenrating = index + 1;
                                                return (
                                                    // eslint-disable-next-line react/jsx-key
                                                    <label key={index}>
                                                        <input
                                                            type="radio"
                                                            value={items?.rating}
                                                            className='hidden'
                                                        />
                                                        <FaStar className='cursor-pointer xs:text-[20px] sm:text-[30px] md:text-[35px]'
                                                            color={currenrating <= items?.rating ? "#ffc107" : "#e4e5e9"}
                                                        />

                                                    </label>
                                                );
                                            })}
                                        </p>


                                        <p className='leading-5 font-bold ]'>{items.comment}</p>
                                    </div>
                                </div>

                            </>
                        )
                    })}

                    <hr className=' bg-black  h-[2.5px]' />


                </div>
            </div>

        </div>
    )
}

export default Feedback
