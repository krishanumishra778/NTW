import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios'; // Import axios here

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip as RechartsTooltip
} from "recharts";


const data0 = [
    {
        name: "Sunday",
        uv: 1000,
        pv: 2400,
        amt: 2400
    },
    {
        name: "Monday",
        uv: 800,
        pv: 1398,
        amt: 2210
    },
    {
        name: "Tuesday",
        uv: 2000,
        pv: 9800,
        amt: 2290
    },
    {
        name: "Wednesday",
        uv: 2780,
        pv: 3908,
        amt: 2000
    },
    {
        name: "Thursday",
        uv: 1890,
        pv: 4800,
        amt: 2181
    },
    {
        name: "Friday",
        uv: 1390,
        pv: 1800,
        amt: 1500
    },
    {
        name: "Saturday",
        uv: 3490,
        pv: 4300,
        amt: 2100
    }
];

ChartJS.register(ArcElement, Tooltip, Legend);


export const data = {
    // labels: ['#FF5B5B', 'rgba(255, 91, 91, 0.15)',],
    datasets: [
        {
            label: '# of Votes',
            data: [11, 3,],
            backgroundColor: [
                '#FF5B5B',
                'rgba(255, 91, 91, 0.15)',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',

            ],
            borderWidth: 0,
        },
    ],
};
// <>>>>>>>>    2    >>>>>>></>
export const data1 = {
    // labels: ['#FF5B5B', 'rgba(255, 91, 91, 0.15)',],
    datasets: [
        {
            label: '# of Votes',
            data: [4, 11,],
            backgroundColor: [
                '#00B074',
                'rgba(0, 176, 116, 0.15',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',

            ],
            borderWidth: 0,
        },
    ],
};


// <>>>>>>>>    3    >>>>>>></>
export const data2 = {
    // labels: ['#FF5B5B', 'rgba(255, 91, 91, 0.15)',],
    datasets: [
        {
            label: '# of Votes',
            data: [10, 5,],
            backgroundColor: [
                '#2D9CDB',
                'rgba(45, 156, 219, 0.15',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',

            ],
            borderWidth: 0,
        },
    ],
};



export const TotalVisitors = () => {
    const [totaluser, setTotaluser] = useState("");

    useEffect(() => {



        axios.get('http://localhost:4000/admin/users').then((res) => {

            setTotaluser(res.data.users.length)

        }).catch((error) => {
            console.log(error)
        })
    })



    return (
        <div className="mx-auto flex justify-center max-w-[1300px] h-[100vh]">
            <div className=" bg-[#00B2FF] h-[100vh]   text-white w-[20%] text-center ">

                <ul className='flex flex-col gap-8 pt-[80px]  lg:text-[17px] md:text-[13px] sm:text-[10px]'>
                    <Link to="/adminpanel" className="py-1 hover:bg-[#0091CF] rounded-full hover:font-bold">
                        <li >Message</li>
                    </Link>

                    <Link to="/totalsubscriber" className="py-1 hover-bg-[#0091CF] rounded-full hover:font-bold">
                        <li >Total Subscriber</li>
                    </Link>

                    <Link to="/totalvisitors" className="font-bold bg-[#0091CF] py-1 rounded-full">
                        <li >Total Visitor's</li>
                    </Link>
                    <Link to="/totalcustomers" className="py-1  rounded-full hover:font-bold ">
                        <li>Total Customers</li>
                    </Link>
                    <Link to="" className="py-1 hover:bg-[#0091CF] rounded-full hover:font-bold">
                        <li >Feedback & Review</li>
                    </Link>
                    <Link to="" className="py-1 hover-bg-[#0091CF] rounded-full hover:font-bold">
                        <li >Affiliate Marketers</li>
                    </Link>

                    <Link to="/totalactive" className="py-1 hover-bg-[#0091CF] rounded-full hover:font-bold">
                        <li >Active Subscription</li>
                    </Link>
                 
                </ul>
            </div>

            {/* Main Content */}
            <div className='  w-[85%] h-[100vh]'>

                <div className='flex mt-6  items-center gap-4 px-6'>
                    <div className='ml-auto '>
                        <img className='rounded-full w-12' src="./images/user.png" alt="" />
                    </div>
                    <div className='ml-2'>
                        <p className='leading-5'>Krishanu Kaundilya</p>
                    </div>
                </div>

                <div className='grid grid-cols-4 md:gap-3 py-6 '>
                    <div className='mx-auto  flex justify-center items-center gap-3 rounded-lg shadow-gray-400 shadow-lg bg-white  xl:px-12 px-4'>
                        <div className=''>
                            <img src="./images/graphicon.png" alt="" />
                        </div>
                        <div className=''>
                            <h1 className='leading-4'>Total Users</h1>
                            <p className='text-[#AEAEAE] leading-4 ml-'>{totaluser}</p>
                        </div>
                    </div>

                    <div className='mx-auto md:gap-3 flex justify-center items-center  rounded-lg shadow-gray-400 shadow-lg bg-white xl:px-12 px-4 py-4'>
                        <div className=''>
                            <img src="./images/graphmessageicon.png" alt="" />
                        </div>
                        <div className=''>
                            <h1 className='leading-4 lg:text-lg'>Total Orders</h1>
                            <p className='text-[#AEAEAE] leading-4'>650</p>
                        </div>
                    </div>

                    <div className='mx-auto md:gap-3 flex justify-center items-center  rounded-lg shadow-gray-400 shadow-lg bg-white xl:px-12 px-4'>
                        <div className=''>
                            <img src="./images/graphvector.png" alt="" />
                        </div>
                        <div className=''>
                            <h1 className='leading-4 lg:text-lg'>Active Orders</h1>
                            <p className='text-[#AEAEAE] leading-4'>500</p>
                        </div>
                    </div>

                    <div className='mx-auto md:gap-3  flex justify-center items-center gap-3 rounded-lg shadow-gray-400 shadow-lg bg-white xl:px-11 px-4'>
                        <div className=''>
                            <img src="./images/graphtotalsign-up.png" alt="" />
                        </div>
                        <div className=''>
                            <h1 className='leading-4'>Total Sign-in</h1>
                            <p className='text-[#AEAEAE] leading-4'>259</p>
                        </div>
                    </div>
                </div>

                <div className='bg-white shadow-lg  shadow-gray-400 mx-auto  mt-5 rounded-lg w-[96%]'>
                    <div className='flex justify-between px-5'>
                        <h1>Order</h1>
                        <h1>Download</h1>
                    </div>
                    <hr className='bg-black h-[1.5px]' />

                    {/* Pie chart */}
                    <div className=' text-center py-1' style={{ display: 'flex', alignItems: "center", justifyContent: 'space-around', }} >
                        <div className='w-36'>
                            <Doughnut className='' data={data} width={20} height={20} /> {/* Customize the width and height */}
                            <h1 className=''>Total Order</h1>
                        </div>
                        <div className='w-36'>
                            <Doughnut className=' ' data={data1} width={20} height={20} /> {/* Customize the width and height */}
                            <h1>Customer Growth</h1>
                        </div>
                        <div className='w-36'>
                            <Doughnut className=' ' data={data2} width={20} height={20} /> {/* Customize the width and height */}
                            <h1>Total Revenue</h1>
                        </div>
                    </div>
                </div>
                {/* pie chart end  */}


                {/* graph start */}

                <div className=' shadow-gray-400 mx-auto  mt-4 rounded-lg w-[96%]'>
                    <div className='flex justify-between px-5'>
                        <h1>Chart Order</h1>
                        <h1>Download</h1>
                    </div>
                    <AreaChart
                        width={1000}
                        height={190}
                        data={data0}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <RechartsTooltip />
                        <Area type="monotone" dataKey="uv" stroke="#2D9CDB" strokeWidth={3} fill="#6EC8EF" />
                    </AreaChart>

                </div>
            </div>
        </div>
    );
}

export default TotalVisitors;
