// eslint-disable-next-line no-unused-vars
import axios from 'axios';
import {  useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { FaStar } from 'react-icons/fa'
const Starrating = () => {

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [comment, setInputdata] = useState("");
    // const [msg, setMsg] = useState("");

    const inputHandler = (e) => {
        setInputdata(e.target.value)
    }
    
    const [isComponentOpen, setIsComponentOpen] = useState(true);
    if (!isComponentOpen) {
        return null;
    }
    const sendmsg = (e) => {
        e.preventDefault();
        if (rating === null) {
            toast.error("Please provide rating")
        } else (

            // console.log(comment)
            // console.log(rating)
            axios.post('http://localhost:4000/review', { rating, comment }, { withCredentials: true }).then(res => {
                setIsComponentOpen(false);
                // console.log(res)
                
            })
        )

    }

    // useEffect(()=>{
    //   if(res.data.success === false){
        
    //   }
    // },[])
    return (
        <>

            <div className=' bg-white py-2     '>
                <div className='mx-auto  flex justify-center '>

                    <form action="" onSubmit={sendmsg} className='border-2 rounded-lg '>

                        <div>
                            <p className='text-center font-bold xs:text-[14px] sm:text-[16px] md:text-[18px] py-2'>Rate US</p>
                        </div>
                        <div className=' bg-black h-[0.5px]'></div>
                        <div className='flex gap-2 md:px-8 xs:py-2 md:py-4 justify-center'>

                            {[...Array(5)].map((star, index) => {
                                const currenrating = index + 1;
                                return (
                                    // eslint-disable-next-line react/jsx-key
                                    <label key={index}>
                                        <input
                                            type="radio"
                                            value={currenrating}
                                            onClick={() => {
                                                setRating(currenrating)
                                            }}
                                            required
                                            className='hidden'
                                        />
                                        <FaStar className='cursor-pointer xs:text-[20px] sm:text-[30px] md:text-[35px]' color={currenrating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                            onMouseEnter={() => setHover(currenrating)}
                                            onMouseLeave={() => setHover(null)} />

                                    </label>
                                );
                            })}
                        </div>
                        <div className=' bg-black h-[0.5px]'></div>

                        <div className='text-center '>
                            <p className='py-2 font-bold xs:text-[14px] sm:text-[15px] md:text-[18px] px-2'>Your Feedback Inspires Us to Excel</p>
                            <textarea name="" id="" rows={3} className='w-[85%]  border-black rounded-md px-2 py-1 ' onChange={inputHandler} required></textarea>
                        </div>
                        <div className='flex justify-center gap-4 pb-2'>
                            <button className='bg-black text-[#fff] py-[2px] px-3  rounded-lg xs:text-[12px] sm:text-[14px] md:text-[16px]' onClick={() => setIsComponentOpen(false)} >Not Now</button>
                            <button className='bg-[#00B2FF] text-[#fff] py-[2px] px-4 rounded-lg xs:text-[12px] sm:text-[14px] md:text-[16px]' type='submit'>Submit</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Starrating
