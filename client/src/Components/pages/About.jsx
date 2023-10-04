// eslint-disable-next-line no-unused-vars
import React from 'react'

const About = () => {
  return (
<>
  <div className=" w-[98%] mx-auto   px-4 grid lg:grid-cols-3" data-aos="fade-down" >
    <div className=" flex gap-1  mx-auto  ">
      <div >
        <img src="images/about-I.png" alt='Next Tech Waves' className="rounded lg:my-5 xs:my-2" />
        <img src="images/about-II.png" alt='Next Tech Waves' className="rounded lg:my-5" />
      </div>
      <div className="flex items-center lg:mx-4">
        <img src="images/about-III.png" alt='Next Tech Waves' className="rounded" />
      </div>
    </div>
    <div className="  items-center lg:col-span-2 flex flex-col justify-center lg:px-4  ">
      <div className="flex flex-col justify-center">
        <h1 className="text-[#00B2FF] font-[600]  sm:text-tt  xs:text-mt md:text-title xs:text-center md:text-left  xs:mt-5 ">
          About Us
        </h1>
        <p className="text-[#494949] font-[600]  sm:text-tt  xs:text-mt md:text-title">We are committed to
          creating <span className="text-[#00B2FF] font-[600]  sm:text-tt  xs:text-mt md:text-title">satisfying
            experiences</span></p>
        <p className="text-[#494949] font-[400]  sm:text-mp xs:text-tp md:text-p lg:py-2">We are a
          UI/UX Design
          Company that loves modern design
          thinking.
          We strive to create designs that captivate today's audience because we are aware of what
          speaks to them. You
          will be impressed by our creative approach to design, which undoubtedly awakens curiosity
          and amazement.</p>
      </div>
    </div>
  </div>
</>

  )
}

export default About