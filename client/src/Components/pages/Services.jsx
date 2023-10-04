// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';
const Services = () => {
      useEffect(() => {
        AOS.init({
            offset:100,
            duration: 1500,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);
    return (
        <>
            <div className=" mx-auto xs:mt-5 lg:mt-20 bg-[url(images/bg-sub.png)] bg-no-repeat bg-cover py-8 md:px-[25px]" data-aos="fade-up">
                <div className=" xs:text-center md:text-left">
                    <h1 className="text-[#00B2FF] font-[600]  sm:text-tt  xs:text-mt md:text-title mb-4">
                        Services
                    </h1>
                </div>
                <div className="grid lg:grid-cols-3  xs:max-w-[95%] lg:max-w-[100%] pt-4 mx-auto">
                    <div className=" grid grid-cols-3  lg:p-0 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-180">
                        <div className=" xs:px-2 ">
                            <img src="images/service-ui.png" className=" xs:max-w-[90%] sm:max-w-[70%] md:max-w-[80%]  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  hover:rotate-36  ..." />
                        </div>
                        <div className="col-span-2 sm:pt-4">
                            <p className="text-[#494949] font-[600]  sm:text-tp  xs:text-mp md:text-p">UI/UX Design</p>
                            <p className="text-[#494949] ">Design improves user experiences.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 xs:pt-6 lg:p-0  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-180">
                        <div className="xs:px-2">
                            <img src="images/service-ui2.png" className="  xs:max-w-[90%]  sm:max-w-[70%] md:max-w-[80%]  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  hover:rotate-36  ..." />
                        </div>
                        <div className="col-span-2 sm:pt-4">
                            <p className="text-[#494949] font-[600]  sm:text-tp  xs:text-mp md:text-p">UI Development</p>
                            <p className="text-[#494949] ">HTML, CSS, React.js, Tailwind, Bootstrap – Your UI toolkit</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 xs:pt-6 lg:p-0  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-180">
                        <div className="xs:px-2">
                            <img src="images/Group 2193.png" className=" xs:max-w-[90%]    sm:max-w-[70%]  md:max-w-[80%] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  hover:rotate-36  ..." />
                        </div>
                        <div className="col-span-2 sm:pt-4">
                            <p className="text-[#494949] font-[600]  sm:text-tp  xs:text-mp md:text-p">Webflow Development
                            </p>
                            <p className="text-[#494949] ">Accelerate development speed using Webflow's low-code function.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Services