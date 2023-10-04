// eslint-disable-next-line no-unused-vars
import React from 'react'

const Creativeshowcase = () => {
   
    const Allproduct = () => {
        setTimeout(() => {
        document.getElementById("mobiledesign").style = "display:block";
        document.getElementById("webbanner").style = "display:block";
        document.getElementById("webdesign").style = "display:block";
        document.getElementById("webdesign2").style = "display:block";
    }, 500);
    }
    // Allproduct();

    const mobileproduct = () => {
        setTimeout(() => {
        document.getElementById("mobiledesign").style = "display:block";
        document.getElementById("webbanner").style = "display:none";
        document.getElementById("webdesign").style = "display:none";
        document.getElementById("webdesign2").style = "display:none";
    }, 500);
    }


    const webdesign = () => {
        setTimeout(() => {
        document.getElementById("mobiledesign").style = "display:none";
        document.getElementById("webbanner").style = "display:none";
        document.getElementById("webdesign").style = "display:block";
        document.getElementById("webdesign2").style = "display:block";
    }, 500);
    }


    const webbanner = () => {
        setTimeout(() => {
        document.getElementById("mobiledesign").style = "display:none";
        document.getElementById("webbanner").style = "display:block";
        document.getElementById("webdesign").style = "display:none";
        document.getElementById("webdesign2").style = "display:none";
    },500);
    }

    return (
        <>
            <div data-aos="fade-down"  className='max-w-[1300px]  mx-auto '>
                <div className="my-5">
                    <p className="md:text-center text-[#00B2FF]  sm:text-tt  xs:text-mt md:text-title font-[600] py-2 px-4">Explore Our
                        Creative Showcase</p>
                    <p className="sm:text-mp xs:text-tp md:text-p md:text-center px-4 text-[#494949]">Experience a Gallery of
                        Remarkable
                        UI/UX Designs and Web Templates, Crafted for Excellence.</p>
                </div>
                <div className=" py-2">
                    <div className=" xs:max-w-[95%] sm:max-w-[80%]  bg-[#F5F5F5] rounded-[20px] mx-auto   text-center">
                        <nav className="mx-auto  items-center">
                            <ul className=" grid grid-cols-4 gap-1 ">
                            
                                <li className="  cursor-pointer  xs:text-[11px] sm:text-[14px] md:text-[16px]  hover:bg-[#00B2FF] rounded-full xs:py-1 sm:py-2 active:bg-red-500 " onClick={Allproduct} >All
                                    Product</li>
                                <li className="  cursor-pointer  xs:text-[11px] sm:text-[14px] md:text-[16px] hover:bg-[#00B2FF]  active:bg-[#40a1cb] rounded-full xs:py-1 sm:py-2" onClick={mobileproduct} >
                                    App design</li>
                                <li className="  cursor-pointer  xs:text-[11px] sm:text-[14px] md:text-[16px] hover:bg-[#00B2FF]  active:bg-[#40a1cb] rounded-full xs:py-1 sm:py-2" onClick={webdesign}>Web
                                    Design</li>
                                <li className="  cursor-pointer  xs:text-[11px] sm:text-[14px] md:text-[16px] hover:bg-[#00B2FF]  active:bg-[#40a1cb] rounded-full xs:py-1 sm:py-2 " onClick={webbanner} >Web
                                    Banner</li>

                            </ul>
                        </nav>
                    </div>
                    <div className=" my-6 px-[10px]">
                    
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 xs:grid-cols-1 gap-2 ">
                            <div id='mobiledesign' >
                                <img src="images/creative1.png" alt='Mobile design' className='hover:opacity-10 ' />
                            </div>
                            <div id='webbanner' >
                                <img src="images/creative2.png" alt='Web Banner' />
                            </div>
                            <div className="mx-auto md:row-span-2" id='webdesign' >
                                <img src="images/creative3.png" alt='Website design' />
                            </div>
                            <div className="md:col-span-2 " id='webdesign2' >
                                <img src="images/creative4.png" alt='Website design' />
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>

        </>
    )
}

export default Creativeshowcase