// eslint-disable-next-line no-unused-vars
import React from 'react'

const Contact = () => {
  return (
    <>
       <div className=" bg-[url(images/Contact.png)] bg-no-repeat bg-cover object-contain my-[40px]">
  <div className="text-center">
    <p className="text-[#00B2FF] text-center sm:text-tt  xs:text-mt md:text-title font-[600]">Contact Us</p>
    <p className="sm:text-mp xs:text-tp md:text-p text-[#494949]">We would be more than happy to speak with you.
    </p>
  </div>
  <div className="max-w-[95%] mx-auto sm:py-4 my-4">
    <form action>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-4  s">
        <div className>
          <label className="block m:text-mp xs:text-tp md:text-p text-[#000] font-[600]" htmlFor="nm">Name</label>
          <input type="text" id="nm" className=" border w-full border-[#AEAEAE] rounded-full border focus:border-[#00B2FF] outline-none px-2" />
        </div>
        <div className>
          <label className="block m:text-mp xs:text-tp md:text-p text-[#000] font-[600]" htmlFor="cn">Contact
            No.</label>
          <input type="number" id="cn" className="w-full border border-[#AEAEAE] rounded-full border focus:border-[#00B2FF] outline-none px-2" />
        </div>
        <div className>
          <label className="block m:text-mp xs:text-tp md:text-p text-[#000] font-[600]" htmlFor="eid">E-mail</label>
          <input type="email" id="eid" className="w-full border border-[#AEAEAE] rounded-full border focus:border-[#00B2FF] outline-none px-2" />
        </div>
        <div className>
          <label className="block m:text-mp xs:text-tp md:text-p text-[#000] font-[600]" htmlFor="help">How we
            can help you</label>
          <input type="text" id="help" className="w-full border border-[#AEAEAE] rounded-full border focus:border-[#00B2FF] outline-none px-2" />
        </div>
      </div>
      <div className="text-center my-8 ">
        <button className=" bg-[#00B2FF] rounded rounded-3xl   px-[20px] py-[5px]  sm:text-mp xs:text-tp md:text-p  text-[#fff]  hover:bg-[#00b3ffd8] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#00b3ffd8] duration-300 ...">Send
          Message</button>
      </div>
    </form>
  </div>
</div>

    </>
  )
}

export default Contact