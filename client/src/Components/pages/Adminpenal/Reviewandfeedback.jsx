import axios from 'axios'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Reviewandfeedback = async () => {
 const data  =  await axios.get('http://localhost:4000/review')
 console.log(data)
  
  
 const { user } = useSelector(state => state.user)
 const navigate = useNavigate()
 useEffect(() => {
     if (user.role !== 'admin') {
         toast.error('you are not Autorised')
         navigate("/")
     }
     console.log(user)
 }, [user])
   
//   const [star , setStar] = useState([])
  return (
    <>
        <div className="mx-auto flex justify-center max-w-[1300px]">
            <div className=" bg-[#00B2FF] h-[100vh]   text-white w-[20%] text-center ">

                <ul className='flex flex-col gap-8 pt-[80px]  lg:text-[17px] md:text-[13px] sm:text-[10px]'>
                    <Link to="/adminpanel" className="  font-bold bg-[#0091CF] py-1 rounded-full ">
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

                <div className='overflow-y-scroll h-[85.5vh] '>
                    <hr className=' bg-black  h-[2.5px]' />
                    <div className='flex m-8 gap-5 items-center'>
                        <div>
                            <img className='rounded-full w-12' src="./images/user.png" alt="" />
                        </div>
                        <div className=''>
                            <p className='leading-5 font-bold ]'>Jackson chain</p>
                            <p className='' >we love  your designs .................and fantastic </p>
                        </div>
                    </div>
                   
                </div>
            </div>

        </div>
    </>
  )
}

export default Reviewandfeedback
