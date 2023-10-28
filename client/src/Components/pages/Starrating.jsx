// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
const Starrating = () => {

    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    return (
        <>
      {rating}
            <div className=' bg-white py-2  border-2 rounded-lg w-[26%] mx-auto '>
                <div>
                    <p className='text-center font-bold text-[18px] py-2'>Rate US</p>
                </div>
                <div className=' bg-black h-[0.5px]'></div>
                <div className='flex gap-2 px-8 py-4'>

                    {[...Array(5)].map((star, index) => {
                        const currenrating = index + 1;
                        return (
                            // eslint-disable-next-line react/jsx-key
                            <label>
                                <input
                                    type="radio"
                                    name='rating'
                                    value={currenrating}
                                    onClick={() => {
                                        setRating(currenrating)
                                    }}
                                    className='hidden'
                                />
                                <FaStar className='cursor-pointer md:text-[50px]' color={currenrating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                    onMouseEnter={() => setHover(currenrating)}
                                    onMouseLeave={() => setHover(null)} />

                            </label>
                        );
                    })}
                </div>
                <div className=' bg-black h-[0.5px]'></div>

                <div className='text-center '>
                    <p className='py-2 font-bold text-[16px]'>Your Feedback Inspires Us to Excel</p>
                    <textarea name="" id="" rows={3} className='w-[85%]  border-black rounded-md'></textarea>
                </div>
                <div className='flex justify-center gap-4'>
                    <button className='bg-black text-[#fff] py-[2px] px-3  rounded-lg'>Not Now</button>
                    <button className='bg-[#00B2FF] text-[#fff] py-[2px] px-4 rounded-lg'>Submit</button>
                </div>

            </div>
        </>
    )
}

export default Starrating
