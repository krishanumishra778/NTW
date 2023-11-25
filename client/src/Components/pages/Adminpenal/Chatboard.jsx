import React, { useEffect } from 'react'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const Chatboard = () => {

    const { user } = useSelector(state => state.user)
    const navigate = useNavigate()
    useEffect(() => {
        if (user.role !== 'admin') {
            toast.error('you are not Autorised')
            navigate("/")
        }
        // console.log(user)
    }, [user])
    return (
        <div className="mx-auto flex justify-center max-w-[1300px] pt-1 ">
            <div className=" bg-[#00B2FF]  text-white w-[20%] text-center pt-13 pb-16">

                <ul className='flex flex-col gap-12 py-28 lg:text-[17px] md:text-[13px] sm:text-[10px]'>
                    <li className="  font-bold bg-[#0091CF] py-2  rounded-full">Message</li>
                    <li className=" active:bg-[#0091CF] rounded-full ">Total Subscriber</li>
                    <li className="active:bg-[#0091CF] rounded-full">Total Visitor's</li>
                    <li className="active:bg-[#0091CF] rounded-full">Total Costumers</li>
                    <li className="active:bg-[#0091CF] rounded-full">Feedback & review</li>
                    <li className="active:bg-[#0091CF]   py-1 rounded-full">Affiliate marketars</li>

                    <li className="active:bg-[#0091CF] rounded-full">Active Subscription</li>
                </ul>
            </div>

            {/* ><<<<<<<<<<<<<< */}
            <div className='  w-[85%]  '>
                <div className=' flex m-8 gap-5 items-center'>
                    <div>
                        <img className='rounded-full w-12' src="./images/user.png" alt="" />
                    </div>
                    <div>
                        <p className='leading-5 font-bold'>Jackson chain</p>
                    </div>
                </div>
                <hr className=' bg-blue-300 s  h-[2.5px]' />
                {/* ................................... */}
                <div className=' flex m-8 gap-5 items-center'>
                    <div>
                        <img className='rounded-full w-12' src="./images/user.png" alt="" />
                    </div>
                    <div className='w-full h-10 bg-[#E4E3E3] rounded-full'>
                    </div>
                </div>
                {/* .....   2  .................. */}
                <div className=' flex m-8 gap-5 items-center'>

                    <div className='w-full h-10 bg-[#E4E3E3] rounded-full'>
                    </div>
                    <div>
                        <img className='rounded-full w-12' src="./images/user.png" alt="" />
                    </div>
                </div>
                {/* .....   3  .................. */}
                <div className=' flex m-8 gap-5 items-center'>
                    <div>
                        <img className='rounded-full w-12' src="./images/user.png" alt="" />
                    </div>
                    <div className='w-full h-10 bg-[#E4E3E3] rounded-full'>
                    </div>
                </div>
                {/* .....   4   .................. */}
                <div className=' flex m-8 gap-5 items-center'>
                    <div className='w-72 ml-auto h-10  bg-[#E4E3E3] rounded-full'>
                    </div>
                    <div>
                        <img className='rounded-full w-12' src="./images/user.png" alt="" />
                    </div>
                </div>
                {/* 5 */}
                <div className=' flex m-8 gap-5 items-center'>
                    <div>
                        <img className='rounded-full w-12' src="./images/user.png" alt="" />
                    </div>
                    <div className='w-32 h-10 bg-[#E4E3E3] rounded-full'>
                    </div>
                </div>
                {/* .....   6 .................. */}
                <div className=' flex m-8 gap-5 items-center'>

                    <div className='w-full  h-10 bg-[#E4E3E3] rounded-full'>
                    </div>
                    <div>
                        <img className='rounded-full w-12' src="./images/user.png" alt="" />
                    </div>
                </div>
                {/* .....   7 .................. */}
                <div className=' flex m-8 gap-5 items-center'>

                    <div
                        className='w-full  h-10 bg-[#E4E3E3] rounded-full'>
                        <img className=' w-12 pt-3 ml-auto mr-10' src="./images/Emoji.png" alt="" />
                    </div>
                    <div>
                        <img className='rounded-full w-12' src="./images/Chatbox.png" alt="" />
                    </div>
                </div>

            </div>

        </div>
    );
}
