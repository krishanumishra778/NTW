// eslint-disable-next-line no-unused-vars
import React from 'react'

const Creativeshowcase = () => {
    return (
        <>
            <div className>
                <div className="my-5">
                    <p className="text-center text-[#00B2FF]  sm:text-tt  xs:text-mt md:text-title font-[600] py-2">Explore Our
                        Creative Showcase</p>
                    <p className="sm:text-mp xs:text-tp md:text-p sm:text-center text-[#494949]">Experience a Gallery of
                        Remarkable
                        UI/UX Designs and Web Templates, Crafted for Excellence.</p>
                </div>
                <div className=" py-2">
                    <div className="md:max-w-[80%] border-2 bg-[#F5F5F5] rounded-[20px] mx-auto py-2  text-center">
                        <nav className="container mx-auto  items-center">
                            <ul className="space-x-4 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4  ">
                                <li className="my-2 md:my-0"><a href="#" className=" text-[#494949]  hover:text-[#fff] hover:bg-[#00B2FF] active:bg[#4E6BFF] px-6 py-2 rounded-full xs:border-2 sm:border-none">All
                                    Product</a></li>
                                <li className="my-2 md:my-0"><a href="#" className="text-[#494949]  hover:text-[#fff] hover:bg-[#00B2FF] px-4 py-2 rounded-full  xs:border-2 sm:border-none">Mobile
                                    App design</a></li>
                                <li className="my-2 md:my-0"><a href="#" className="text-[#494949]  hover:text-[#fff] hover:bg-[#00B2FF] px-6 py-2 rounded-full  xs:border-2 sm:border-none">Web
                                    Design</a></li>
                                <li className="my-2 md:my-0"><a href="#" className="text-[#494949] hover:text-[#fff] hover:bg-[#00B2FF] px-6 py-2 rounded-full  xs:border-2 sm:border-none">Web
                                    Banner</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className=" my-6 px-[10px]">
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 xs:grid-cols-1 gap-1">
                            <div className>
                                <img src="images/creative1.png" alt='loading image' />
                            </div>
                            <div className>
                                <img src="images/creative2.png" alt='loading image' />
                            </div>
                            <div className="border-2 mx-auto md:row-span-2">
                                <img src="images/creative3.png" alt='loading image' />
                            </div>
                            <div className="md:col-span-2 ">
                                <img src="images/creative4.png" alt='loading image' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Creativeshowcase