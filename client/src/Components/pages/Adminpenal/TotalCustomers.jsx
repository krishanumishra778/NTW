import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export const TotalCustomers = () => {
    const navigate = useNavigate()

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

                    <Link to="/totalvisitors" className="py-1 hover:bg-[#0091CF] rounded-full hover:font-bold ">
                        <li >Total Visitor's</li>
                    </Link>
                    <Link to="/totalcustomers" className="  font-bold bg-[#0091CF] py-1 rounded-full " >
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
            <div className='  w-[85%]  '>

                <div className='py-5'>
                    <img className='mx-auto' src="logo/next tech waves logo.png" alt='' />
                </div>

                <div className='overflow-y-scroll h-[85.5vh] '>
                    <hr className=' bg-black  h-[2.5px]' />
                    <div onClick={() => {
                        navigate("/subscriberbiodata1")
                        console.log('next tech waves')
                    }} className='flex m-8 gap-5 items-center'>
                        <div>
                            <img className='rounded-full w-12' src="./images/user.png" alt="" />
                        </div>
                        <div className=''>
                            <p className='leading-5 font-bold ]'>Jackson chain</p>
                            <p className='' >we love  your designs </p>
                        </div>
                    </div>
                    {/* 2 */}

                    <hr className=' bg-black  h-[2.5px]' />
                    <div onClick={() => {
                        navigate("/subscriberbiodata1")
                        console.log('next tech waves')
                    }} className='flex m-8 gap-5 items-center'>
                        <div>
                            <img className='rounded-full w-12' src="./images/user.png" alt="" />
                        </div>
                        <div className=''>
                            <p className='leading-5 font-bold ]'>Jackson chain</p>
                            <p className='' >No plan</p>
                        </div>
                    </div>
                    {/* ><><>,      3   </> */}

                    <hr className=' bg-black  h-[2.5px]' />
                    <div onClick={() => {
                        navigate("/subscriberbiodata1")
                        console.log('next tech waves')
                    }} className='flex m-8 gap-5 items-center'>
                        <div>
                            <img className='rounded-full w-12' src="./images/user.png" alt="" />
                        </div>
                        <div className=''>
                            <p className='leading-5 font-bold ]'>Jackson chain</p>
                            <p className='' >No plan </p>
                        </div>
                    </div>

                    {/* ><><>,  4  </> */}
                    <hr className=' bg-black  h-[2.5px]' />
                    <div onClick={() => {
                        navigate("/subscriberbiodata1")
                        console.log('next tech waves')
                    }} className='flex m-8 gap-5 items-center'>
                        <div>
                            <img className='rounded-full w-12' src="./images/user.png" alt="" />
                        </div>
                        <div className=''>
                            <p className='leading-5 font-bold ]'>Jackson chain</p>
                            <p className='' >we love  your designs </p>
                        </div>
                    </div>

                    {/* ><><>,  5  </> */}

                    <hr className=' bg-black  h-[2.5px]' />
                    <div onClick={() => {
                        navigate("/subscriberbiodata1")
                        console.log('next tech waves')
                    }} className='flex m-8 gap-5 items-center'>
                        <div>
                            <img className='rounded-full w-12' src="./images/user.png" alt="" />
                        </div>
                        <div className=''>
                            <p className='leading-5 font-bold ]'>Jackson chain</p>
                            <p className='' >No plan</p>
                        </div>
                    </div>

                    {/* 6 */}
                    <hr className=' bg-black  h-[2.5px]' />
                    <div onClick={() => {
                        navigate("/subscriberbiodata1")
                        console.log('next tech waves')
                    }} className='flex m-8 gap-5 items-center'>
                        <div>
                            <img className='rounded-full w-12' src="./images/user.png" alt="" />
                        </div>
                        <div className=''>
                            <p className='leading-5 font-bold ]'>Jackson chain</p>
                            <p className='' >we love  your designs </p>
                        </div>
                    </div>
                    {/* 7 */}
                    <hr className=' bg-black  h-[2.5px]' />
                    <div onClick={() => {
                        navigate("/subscriberbiodata1")
                        console.log('next tech waves')
                    }} className='flex m-8 gap-5 items-center'>
                        <div>
                            <img className='rounded-full w-12' src="./images/user.png" alt="" />
                        </div>
                        <div className=''>
                            <p className='leading-5 font-bold ]'>Jackson chain</p>
                            <p className='' >we love  your designs </p>
                        </div>
                    </div>
                    {/* 8 */}
                    <hr className=' bg-black  h-[2.5px]' />
                    <div onClick={() => {
                        navigate("/subscriberbiodata1")
                        console.log('next tech waves')
                    }} className='flex m-8 gap-5 items-center'>
                        <div>
                            <img className='rounded-full w-12' src="./images/user.png" alt="" />
                        </div>
                        <div className=''>
                            <p className='leading-5 font-bold ]'>Jackson chain</p>
                            <p className='' >we love  your designs </p>
                        </div>
                    </div>
                    {/* 9 */}
                    <hr className=' bg-black  h-[2.5px]' />
                    <div onClick={() => {
                        navigate("/subscriberbiodata1")
                        console.log('next tech waves')
                    }} className='flex m-8 gap-5 items-center'>
                        <div>
                            <img className='rounded-full w-12' src="./images/user.png" alt="" />
                        </div>
                        <div className=''>
                            <p className='leading-5 font-bold ]'>Jackson chain</p>
                            <p className='' >we love  your designs </p>
                        </div>
                    </div>
                    {/* 10 */}
                    <hr className=' bg-black  h-[2.5px]' />
                    <div onClick={() => {
                        navigate("/subscriberbiodata1")
                        console.log('next tech waves')
                    }} className='flex m-8 gap-5 items-center'>
                        <div>
                            <img className='rounded-full w-12' src="./images/user.png" alt="" />
                        </div>
                        <div className=''>
                            <p className='leading-5 font-bold ]'>Jackson chain</p>
                            <p className='' >No plan </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
