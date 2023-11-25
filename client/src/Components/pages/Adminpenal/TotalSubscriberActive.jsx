import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
export const TotalSubscriberActive = () => {
    const [alluser, setAlluser] = useState([]);

    // [navigate, success]);
    const [showButton1, setShowButton1] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:4000/admin/users', {}, { withCredentials: true }).then((res) => {

            setAlluser(res?.data?.users)
            // console.log(res.data?.users)
            alluser?.subscription.planStatus


        }).catch((error) => {
            console.log(error)
        })
    }, [])


    const pausefun = () => {
        // console.log('pause')
    }

    const playfun = () => {
        // console.log('playu')
    }

    return (
        <div className="mx-auto flex justify-center max-w-[1300px]">
            <div className=" bg-[#00B2FF] h-[100vh] text-white w-[20%] text-center ">

                <ul className='flex flex-col gap-10 py-14 pt-[80px]  lg:text-[17px] md:text-[13px] sm:text-[10px]'>
                <Link to="/adminpanel" className="  font-bold hover:bg-[#0091CF] py-1 rounded-full ">
                        <li >Message</li>
                    </Link>

                    <Link to="/totalsubscriber" className="py-1 hover:bg-[#0091CF] rounded-full hover:font-bold">
                        <li >Total Subscriber</li>
                    </Link>

                    <Link to="/totalvisitors" className="py-1 hover:bg-[#0091CF] rounded-full hover:font-bold">
                        <li >Total Visitor's</li>
                    </Link>
                    <Link to="/totalcustomers" className="py-1 hover:bg-[#0091CF] rounded-full hover:font-bold ">
                        <li>Total Costumers</li>
                    </Link>
                    <Link to="/feedback" className="py-1 hover:bg-[#0091CF] rounded-full hover:font-bold">
                        <li >Feedback & review</li>
                    </Link>
                    <Link to="" className="py-1 hover:bg-[#0091CF] rounded-full hover:font-bold">
                        <li >Affiliate marketars</li>
                    </Link>

                    <Link to="/totalactive"  className="py-1 bg-[#0091CF] rounded-full hover:font-bold ">
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
                    {alluser.map((items, index) => {
                        return (
                            <>

                                <hr className=' bg-black  h-[2.5px]' />
                                <div className='flex justify-between mr-7 items-center'>

                                    <div className='flex m-8 gap-5 items-center '>
                                        <div>
                                            <img className='rounded-full w-12' src="./images/user.png" alt="" />
                                        </div>
                                        <div className=''>
                                            <p className='leading-5 font-bold ]'>{items.name}</p>
                                            <p className='' >we love  your designs </p>
                                        </div>
                                    </div>
                                    <div>
                                        {items?.subscription?.planStatus ? (
                                            <button
                                                className="  font-bold   bg-[#11C400]  text-white py-1 px-6"
                                                onClick={() => { pausefun() }}
                                            >
                                                Active
                                            </button>
                                        ) : (
                                            <button
                                                className="  font-bold   bg-[#FF1F1F]  text-white py-1 px-5"
                                                onClick={() => { playfun() }}
                                            >
                                                Paused
                                            </button>
                                        )}
                                    </div>
                                </div>

                            </>

                        )
                    })}
                    {/* 2 */}

                </div>
            </div>
        </div>


    );
}
