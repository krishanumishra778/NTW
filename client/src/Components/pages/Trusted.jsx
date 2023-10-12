// eslint-disable-next-line no-unused-vars
import React from 'react'

const Trusted = () => {
  return (
    <>
      <div className=" max-w-[1400px] mx-auto my-[20px]" data-aos="fade-down">
        <div className="text-[#00B2FF] text-center sm:text-tt  xs:text-mt md:text-title font-[600] mb-4">
          <p>Trusted By Brand’s</p>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 justify-between  gap-2 ">
          <div className="mx-auto">
            <img src="images/trusted1.png" alt='' />
          </div>
          <div className="mx-auto ">
          <img className='lg:pt-4 py-14' src="images/technomize-black-text-logo.png" alt='' />
          </div>
          <div className="mx-auto">
            <img className='lg:pt-0 pt-5' src="images/trusted2.png" alt='' />
          </div>
          <div className="mx-auto ">
            <img src="images/trusted3.png" alt='' />
          </div>
        </div>
      </div>

    </>
  )
}

export default Trusted