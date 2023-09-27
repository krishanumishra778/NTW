// eslint-disable-next-line no-unused-vars
import React from 'react'

const Fotter = () => {
    return (
        <div>
            <div className=" xs:max-w-[99%] md:max-w-[95%] mx-auto py-5 mt-6 sm:grid grid-cols-2 gap-4 px-4">
                <div className>
                    <div>
                        <img src="logo/next tech waves logo.png" alt />
                    </div>
                    <div className="grid grid-cols-4 xs:max-w-[40%] sm:max-w-[30%] gap-2 mt-2 ">
                        <img src="icons/insta.png" alt />
                        <img src="icons/be.png" alt className="my-auto" />
                        <img src="icons/lin.png" alt />
                        <img src="icons/x.png" alt />
                    </div>
                </div>
                <div className=" sm:text-right  text-center">
                    <div className="  py-1  mt-5 flex  ml-auto">
                        <input type="email" className=" w-[70%] bg-[#F5F5F5] rounded-full pl-2  h-[35px]" placeholder="E-mail" />
                        <button className=" bg-[#00B2FF] rounded rounded-3xl text-[#fff]   px-[20px] py-[5px]  sm:text-mp xs:text-tp md:text-p   transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#00b3ffd8] duration-300">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Fotter