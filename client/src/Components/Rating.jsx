// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger';
ScrollTrigger
const Rating = () => {
    const [counton , setCounton] = useState(false);
    return (
        <>
            <div className=" bg-[url(images/rating-bg.png)] bg-no-repeat bg-cover py-[40px] mx-auto ">
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1  gap2 ">
                    <div className="text-center py-8  sm:text-tt  xs:text-mt md:text-title font-[600] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-180  ">
                       
                        <ScrollTrigger onEnter={()=>setCounton(true)} onExit={()=>setCounton(false)}>
                        <h1>
                            {counton &&   <CountUp start={0} end={100} duration={4} delay={0}/> }%
                          
                        </h1>
                        </ScrollTrigger>
                       
                        <p> Client Satisfaction</p>
                    </div>
                    <div className="text-center py-8  sm:text-tt  xs:text-mt md:text-title font-[600] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-180">
                    <ScrollTrigger onEnter={()=>setCounton(true)} onExit={()=>setCounton(false)}>
                        <h1>
                            {counton &&   <CountUp start={0} end={100} duration={4} delay={0}/> }%
                          
                        </h1>
                        </ScrollTrigger>
                        <p>Unique Design’s</p>
                    </div>
                    <div className="text-center py-8  sm:text-tt  xs:text-mt md:text-title font-[600] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-180">
                    <ScrollTrigger onEnter={()=>setCounton(true)} onExit={()=>setCounton(false)}>
                        <h1>
                            {counton &&   <CountUp start={0} end={97} duration={4} delay={0}/> }%
                          
                        </h1>
                        </ScrollTrigger>
                        <p> On Time Delivery</p>
                    </div>
                    <div className="text-center mx-auto ">
                        <img src="images/rating-img.png" alt className="max-w-[80%]  mx-auto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-180" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Rating
