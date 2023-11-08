import React, { useState } from 'react'
import { Link } from 'react-router-dom';
export const TotalSubscriberActive = () => {


    // [navigate, success]);
    const [showButton1, setShowButton1] = useState(true);
    const [showButton2, setShowButton2] = useState(true);
    const [showButton3, setShowButton3] = useState(true);
    const [showButton4, setShowButton4] = useState(true);
    const [showButton5, setShowButton5] = useState(true);
    const [showButton6, setShowButton6] = useState(true);
    const [showButton7, setShowButton7] = useState(true);
    const [showButton8, setShowButton8] = useState(true);
    const [showButton9, setShowButton9] = useState(true);
    const [showButton10, setShowButton10] = useState(true);



    const toggleButtons1 = () => {
        setShowButton1(!showButton1);
    };

    const toggleButtons2 = () => {
        setShowButton2(!showButton2);
    };

    const toggleButtons3 = () => {
        setShowButton3(!showButton3);
    };

    const toggleButtons4 = () => {
        setShowButton4(!showButton4);
    };

    const toggleButtons5 = () => {
        setShowButton5(!showButton5);
    };

    const toggleButtons6 = () => {
        setShowButton6(!showButton6);
    };

    const toggleButtons7 = () => {
        setShowButton7(!showButton7);
    };

    const toggleButtons8 = () => {
        setShowButton8(!showButton8);
    };

    const toggleButtons9 = () => {
        setShowButton9(!showButton9);
    };

    const toggleButtons10 = () => {
        setShowButton10(!showButton10);
    };

    return (
        <div className="mx-auto flex justify-center max-w-[1300px]">
            <div className=" bg-[#00B2FF] h-[100vh] text-white w-[20%] text-center ">

                <ul className='flex flex-col gap-8 py-14 pt-[80px]  lg:text-[17px] md:text-[13px] sm:text-[10px]'>
                <Link to="/adminpanel" className="  font-bold bg-[#0091CF] py-1 rounded-full ">
                        <li >Message</li>
                    </Link>

                    <Link to="/totalsubscriber" className="py-1 hover:bg-[#0091CF] rounded-full hover:font-bold">
                        <li >Total Subscriber</li>
                    </Link>

                    <Link to="/totalvisitors"  className="py-1 hover:bg-[#0091CF] rounded-full hover:font-bold">
                        <li >Total Visitor's</li>
                    </Link>
                    <Link to="/totalcustomers"  className="py-1 hover:bg-[#0091CF] rounded-full hover:font-bold ">
                        <li>Total Costumers</li>
                    </Link>
                    <Link to=""  className="py-1 hover:bg-[#0091CF] rounded-full hover:font-bold">
                        <li >feedback & review</li>
                    </Link>
                    <Link to=""  className="py-1 hover:bg-[#0091CF] rounded-full hover:font-bold">
                        <li >Affiliate marketars</li>
                    </Link>

                    <Link to="/totalactive"  className="py-1 hover:bg-[#0091CF] rounded-full hover:font-bold ">
                        <li >Active Subscription</li>
                    </Link>
                </ul>
            </div>

            {/* ><<<<<<<<<<<<<< */}
            <div className='  w-[85%]  '>

                <div className='py-5'>
                    <img className='mx-auto' src="logo/next tech waves logo.png" alt='' />
                </div>

                <div className='overflow-y-scroll h-[85.5vh] '>
                    <hr className=' bg-black  h-[2.5px]' />
                    <div className='flex justify-between mr-7 items-center'>

                        <div className='flex m-8 gap-5 items-center '>
                            <div>
                                <img className='rounded-full w-12' src="./images/user.png" alt="" />
                            </div>
                            <div className=''>
                                <p className='leading-5 font-bold ]'>Jackson chain</p>
                                <p className='' >we love  your designs </p>
                            </div>



                        </div>
                        <div>
                            {showButton1 ? (
                                <button
                                    className="  font-bold   bg-[#11C400]  text-white py-1 px-6"
                                    onClick={toggleButtons1}
                                >
                                    Active
                                </button>
                            ) : (
                                <button
                                    className="  font-bold   bg-[#FF1F1F]  text-white py-1 px-5"
                                    onClick={toggleButtons1}
                                >
                                    Paused
                                </button>
                            )}
                        </div>
                    </div>
                    {/* 2 */}

                    <hr className=' bg-black  h-[2.5px]' />
                    <div className='flex justify-between mr-7 items-center'>

                        <div className='flex m-8 gap-5 items-center '>
                            <div>
                                <img className='rounded-full w-12' src="./images/user.png" alt="" />
                            </div>
                            <div className=''>
                                <p className='leading-5 font-bold ]'>Jackson chain</p>
                                <p className='' >we love  your designs </p>
                            </div>

                        </div>
                        <div>
                            {showButton2 ? (
                                <button
                                    className="  font-bold   bg-[#11C400]  text-white py-1 px-6"
                                    onClick={toggleButtons2}
                                >
                                    Active
                                </button>
                            ) : (
                                <button
                                    className="  font-bold   bg-[#FF1F1F]  text-white py-1 px-5"
                                    onClick={toggleButtons2}
                                >
                                    Paused
                                </button>
                            )}
                        </div>
                    </div>
                    {/* ><><>,      3   </> */}

                    <hr className=' bg-black  h-[2.5px]' />
                    <div className='flex justify-between mr-7 items-center'>

                        <div className='flex m-8 gap-5 items-center '>
                            <div>
                                <img className='rounded-full w-12' src="./images/user.png" alt="" />
                            </div>
                            <div className=''>
                                <p className='leading-5 font-bold ]'>Jackson chain</p>
                                <p className='' >we love  your designs </p>
                            </div>

                        </div>
                        <div>
                            {showButton3 ? (
                                <button
                                    className="  font-bold   bg-[#11C400]  text-white py-1 px-6"
                                    onClick={toggleButtons3}
                                >
                                    Active
                                </button>
                            ) : (
                                <button
                                    className="  font-bold   bg-[#FF1F1F]  text-white py-1 px-5"
                                    onClick={toggleButtons3}
                                >
                                    Paused
                                </button>
                            )}
                        </div>
                    </div>

                    {/* ><><>,  4  </> */}
                    <hr className=' bg-black  h-[2.5px]' />
                    <div className='flex justify-between mr-7 items-center'>

                        <div className='flex m-8 gap-5 items-center '>
                            <div>
                                <img className='rounded-full w-12' src="./images/user.png" alt="" />
                            </div>
                            <div className=''>
                                <p className='leading-5 font-bold ]'>Jackson chain</p>
                                <p className='' >we love  your designs </p>
                            </div>

                        </div>
                        <div>
                            {showButton4 ? (
                                <button
                                    className="  font-bold   bg-[#11C400]  text-white py-1 px-6"
                                    onClick={toggleButtons4}
                                >
                                    Active
                                </button>
                            ) : (
                                <button
                                    className="  font-bold   bg-[#FF1F1F]  text-white py-1 px-5"
                                    onClick={toggleButtons4}
                                >
                                    Paused
                                </button>
                            )}
                        </div>
                    </div>

                    {/* ><><>,  5  </> */}

                    <hr className=' bg-black  h-[2.5px]' />
                    <div className='flex justify-between mr-7 items-center'>

                        <div className='flex m-8 gap-5 items-center '>
                            <div>
                                <img className='rounded-full w-12' src="./images/user.png" alt="" />
                            </div>
                            <div className=''>
                                <p className='leading-5 font-bold ]'>Jackson chain</p>
                                <p className='' >we love  your designs </p>
                            </div>

                        </div>
                        <div>
                            {showButton5 ? (
                                <button
                                    className="  font-bold   bg-[#11C400]  text-white py-1 px-6"
                                    onClick={toggleButtons5}
                                >
                                    Active
                                </button>
                            ) : (
                                <button
                                    className="  font-bold   bg-[#FF1F1F]  text-white py-1 px-5"
                                    onClick={toggleButtons5}
                                >
                                    Paused
                                </button>
                            )}
                        </div>
                    </div>
                    {/* 6 */}
                    <hr className=' bg-black  h-[2.5px]' />
                    <div className='flex justify-between mr-7 items-center'>

                        <div className='flex m-8 gap-5 items-center '>
                            <div>
                                <img className='rounded-full w-12' src="./images/user.png" alt="" />
                            </div>
                            <div className=''>
                                <p className='leading-5 font-bold ]'>Jackson chain</p>
                                <p className='' >we love  your designs </p>
                            </div>

                        </div>
                        <div>
                            {showButton6 ? (
                                <button
                                    className="  font-bold   bg-[#11C400]  text-white py-1 px-6"
                                    onClick={toggleButtons6}
                                >
                                    Active
                                </button>
                            ) : (
                                <button
                                    className="  font-bold   bg-[#FF1F1F]  text-white py-1 px-5"
                                    onClick={toggleButtons6}
                                >
                                    Paused
                                </button>
                            )}
                        </div>
                    </div>
                    {/* 7 */}
                    <hr className=' bg-black  h-[2.5px]' />
                    <div className='flex justify-between mr-7 items-center'>

                        <div className='flex m-8 gap-5 items-center '>
                            <div>
                                <img className='rounded-full w-12' src="./images/user.png" alt="" />
                            </div>
                            <div className=''>
                                <p className='leading-5 font-bold ]'>Jackson chain</p>
                                <p className='' >we love  your designs </p>
                            </div>

                        </div>
                        <div>
                            {showButton7 ? (
                                <button
                                    className="  font-bold   bg-[#11C400]  text-white py-1 px-6"
                                    onClick={toggleButtons7}
                                >
                                    Active
                                </button>
                            ) : (
                                <button
                                    className="  font-bold   bg-[#FF1F1F]  text-white py-1 px-5"
                                    onClick={toggleButtons7}
                                >
                                    Paused
                                </button>
                            )}
                        </div>
                    </div>
                    {/* 8 */}
                    <hr className=' bg-black  h-[2.5px]' />
                    <div className='flex justify-between mr-7 items-center'>

                        <div className='flex m-8 gap-5 items-center '>
                            <div>
                                <img className='rounded-full w-12' src="./images/user.png" alt="" />
                            </div>
                            <div className=''>
                                <p className='leading-5 font-bold ]'>Jackson chain</p>
                                <p className='' >we love  your designs </p>
                            </div>

                        </div>
                        <div>
                            {showButton8 ? (
                                <button
                                    className="  font-bold   bg-[#11C400]  text-white py-1 px-6"
                                    onClick={toggleButtons8}
                                >
                                    Active
                                </button>
                            ) : (
                                <button
                                    className="  font-bold   bg-[#FF1F1F]  text-white py-1 px-5"
                                    onClick={toggleButtons8}
                                >
                                    Paused
                                </button>
                            )}
                        </div>
                    </div>
                    {/* 9 */}
                    <hr className=' bg-black  h-[2.5px]' />
                    <div className='flex justify-between mr-7 items-center'>

                        <div className='flex m-8 gap-5 items-center '>
                            <div>
                                <img className='rounded-full w-12' src="./images/user.png" alt="" />
                            </div>
                            <div className=''>
                                <p className='leading-5 font-bold ]'>Jackson chain</p>
                                <p className='' >we love  your designs </p>
                            </div>

                        </div>
                        <div>
                            {showButton9 ? (
                                <button
                                    className="  font-bold   bg-[#11C400]  text-white py-1 px-6"
                                    onClick={toggleButtons9}
                                >
                                    Active
                                </button>
                            ) : (
                                <button
                                    className="  font-bold   bg-[#FF1F1F]  text-white py-1 px-5"
                                    onClick={toggleButtons9}
                                >
                                    Paused
                                </button>
                            )}
                        </div>
                    </div>
                    {/* 10 */}
                    <hr className=' bg-black  h-[2.5px]' />
                    <div className='flex justify-between mr-7 items-center'>

                        <div className='flex m-8 gap-5 items-center '>
                            <div>
                                <img className='rounded-full w-12' src="./images/user.png" alt="" />
                            </div>
                            <div className=''>
                                <p className='leading-5 font-bold ]'>Jackson chain</p>
                                <p className='' >we love  your designs </p>
                            </div>

                        </div>
                        <div>
                            {showButton10 ? (
                                <button
                                    className="  font-bold   bg-[#11C400]  text-white py-1 px-6"
                                    onClick={toggleButtons10}
                                >
                                    Active
                                </button>
                            ) : (
                                <button
                                    className="  font-bold   bg-[#FF1F1F]  text-white py-1 px-5"
                                    onClick={toggleButtons10}
                                >
                                    Paused
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
