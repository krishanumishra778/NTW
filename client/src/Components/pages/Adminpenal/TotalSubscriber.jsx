import axios, { all } from 'axios';
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Singleuserid } from '../../../actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

export const TotalSubscriber = () => {
    const navigate = useNavigate()
    const dispacth = useDispatch()
    const [alluser, setAlluser] = useState([]);
    // console.log(alluser)

    useEffect(() => {
        axios.get('http://localhost:4000/admin/users', {}, { withCredentials: true }).then((res) => {

            setAlluser(res?.data?.users)
            // console.log(res.data?.users)

        }).catch((error) => {
            console.log(error)
        })
    }, [])
    // console.log(alluser)
    const Singleuser = (id) => {
        // console.log(id)
        dispacth(Singleuserid(id))
        // window.location.href="/subscriberbiodata"
        navigate("/subscriberbiodata")
    }

    const { user } = useSelector(state => state.user)

    useEffect(() => {
        if (user.role !== 'admin') {
            toast.error('you are not Autorised')
            navigate("/")
        }
        // console.log(user)
    }, [navigate, user])
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
                    <Link to="/feedback" className="py-1 hover:bg-[#0091CF] rounded-full hover:font-bold">
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
                    {alluser.map((items, index) => {
                        return (
                            <>
                                <hr className=' bg-black  h-[2.5px]' />
                                <div onClick={() => {
                                    Singleuser(items?._id)
                                }} key={index} className='flex m-8 gap-5 items-center cursor-pointer'>
                                    <div>
                                        <img className='rounded-full w-12' src="./images/user.png" alt="" />
                                    </div>
                                    <div className=''>
                                        <p className='leading-5 font-bold ]'>{items.name}</p>
                                        <p className=''>we love  your designs .......... </p>
                                    </div>
                                </div>
                            </>

                        )
                    })}

                </div>
            </div>

        </div>
    );
}
