// eslint-disable-next-line no-unused-vars
import React from 'react'

const Fotter = (setFooterurl) => {
    return (
        // ><<<<<<<<<<   FOOTER  start  ><<<<<<<<<<<<<<<<< 
        <div>
            <div className=" xs:max-w-[1300px]  mx-auto py-5 mt-6 md:mb-12 sm:grid grid-cols-2 gap-4 px-4" data-aos="fade-down">
                <div >
                    <div>
                        <img src="logo/next tech waves logo.png" />
                    </div>
                    <div className="grid grid-cols-4 xs:max-w-[40%] sm:max-w-[30%] gap-2 mt-2 ">
                        <a href="">
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
                    <div className="  py-1  mt-5 flex  ml-auto">
                        <input type="email" className=" w-[70%] bg-[#F5F5F5] rounded-full pl-2  h-[35px]" placeholder="E-mail" />
                        <button className=" bg-[#00B2FF]  rounded-3xl text-[#fff]   px-[20px] py-[5px]  sm:text-mp xs:text-tp md:text-p   transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#00b3ffd8] duration-300">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
        // ><<<<<<<<<<   FOOTER  end  ><<<<<<<<<<<<<<<<< 

    )
}

export default Fotter