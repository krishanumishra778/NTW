import React from 'react';

const Testimonials = () => {
  return (
    <>
      <div className="max-w-[1300px] mx-auto px-4 my-6">
        <h1 className="text-center text-[#00B2FF] sm:text-tt xs:text-mt md:text-title font-[600]">Client’s Testimonials</h1>
        <p className="pt-4 sm:text-mp xs:text-tp md:text-p md:text-center text-[#494949] lg:max-w-[60%] mx-auto">
          We love when our clients give positive feedback. To earn that positive feedback, only the Next Tech Waves family must work by heart
        </p>
        <div className="lg:flex">
          <div className="mx-auto">
            <div className="">
              <img className="pt-10 sm:mx-auto lg:ml-auto sm:max-w-[40%] lg:max-w-[70%]" src="images/krish-2.jpg" alt='' />
            </div>
          </div>
          <div className="">
            <p className="pt-10 sm:text-mp xs:text-tp md:text-p  text-[#494949] lg:max-w-[95%]">
              “Currently, we are working with Next Tech Waves, and the service and the UI design for our website they are providing to us are fantastic. They are always there to help you out, and the price range they are providing is literally mind-blowing.”
            </p>
            <div className="flex justify-between items-center">
              <span className="lg:mt-[85px]">
                <p className="xs:text-[20px] sm:text-[26px] font-[400] underline">Akshay Shukla</p>
                <h4 className="sm:text-mp xs:text-tp md:text-p">Founder of Crawl Digitall</h4>
              </span>
              <span className="lg:mt-12 pt-2">
                <span className="xs:text-right sm:text-center">
                  <img src="images/trusted1.png" alt='' className="xs:max-w-[80%]" />
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
