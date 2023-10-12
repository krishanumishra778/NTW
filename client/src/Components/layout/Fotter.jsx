// eslint-disable-next-line no-unused-vars
import axios from 'axios'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'



const Fotter = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState({
        email: ""
    })

    const inpHandler = (e) => {
        setEmail({
            ...email, [e.target.name]: e.target.value
        })
    }

    const formHandler = async (e) => {
        e.preventDefault()
        const res = await axios.post('http://localhost:4000/email/subscription', email)
        if (res.data.success) {
            toast.success(res.data.message)
            setEmail({
                email: ""
            })
            navigate('/')
        } else {
            toast.error(res.data.message)
            setEmail({
                email: ""
            })
        }
    }
    return (
        // ><<<<<<<<<<   FOOTER  start  ><<<<<<<<<<<<<<<<< 
        <div>
            <div className=" xs:max-w-[1300px]  mx-auto py-5 mt-6 md:mb-12 sm:grid grid-cols-2 gap-4 px-4" data-aos="fade-down">
                <div >
                    <div>
                        <img className='' src="logo/next tech waves logo.png" />
                    </div>
                    <div className="flex justify-between mb-5 items-center w-[50%] md:w-[40%] lg:w-[30%]  mt-2 pl-2 mx-auto sm:mx-0 sm:gap-2  ">
                        <a className='' href="">
                            <img src="icons/insta.png" />
                        </a>
                        <a href="">
                            <img src="icons/be.png" className="my-auto" />
                        </a>
                        <a href="">
                            <img src="icons/lin.png" />
                        </a>
                        <a href="">
                            <img src="icons/x.png" />
                        </a>
                    </div>
                </div>
                <div className=" sm:text-right  text-center">
                    <form onSubmit={formHandler}>
                        <div className="  py-1  mt-5 flex  ml-auto">
                            <input type="email" className=" w-[70%] bg-[#F5F5F5] rounded-full pl-2  h-[35px] ml-1" placeholder="E-mail" onChange={inpHandler} name='email' value={email.email}
                                required />

                            <button type='submit' className=" bg-[#00B2FF]  rounded-3xl text-[#fff]  ml-1 px-[20px] py-[5px]  sm:text-mp xs:text-tp md:text-p  hover:bg-[#00b3ffd8] " >Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        // ><<<<<<<<<<   FOOTER  end  ><<<<<<<<<<<<<<<<< 

    )
}

export default Fotter