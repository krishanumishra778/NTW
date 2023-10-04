/** @format */

import  { useEffect } from "react";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

export const NavDemo = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1500,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <div
        className='max-w-[90%] hidden md:block mx-auto fixed bottom-[15px] left-0 right-0      bg-[#F5F5F5] rounded-full  z-[1]'
        data-aos='zoom-in'>
          <nav className="mx-auto  items-center">
                            <ul className=" grid grid-cols-6  text-center">
                                <li className="  cursor-pointer  xs:text-[11px] sm:text-[14px] md:text-[15px] xl:text-[20px]  hover:bg-[#00B2FF] active:bg-[#40a1cb] rounded-full xs:py-1 sm:py-2 2xl:py-3"  >
                                <Link to='/' > Home</Link>
                                  </li>
                                <li className="  cursor-pointer  xs:text-[11px] sm:text-[14px] md:text-[15px] hover:bg-[#00B2FF]  active:bg-[#40a1cb] rounded-full xs:py-1 sm:py-2 xl:text-[20px] 2xl:py-3"  >
                                <Link to='/about-us'> About-Us</Link> </li>
                                <li className="  cursor-pointer  xs:text-[11px] sm:text-[14px] md:text-[15px] hover:bg-[#00B2FF]  active:bg-[#40a1cb] rounded-full xs:py-1 sm:py-2 xl:text-[20px] 2xl:py-3"> <Link to='/services' > Services</Link></li>
                                <li className="  cursor-pointer  xs:text-[11px] sm:text-[14px] md:text-[14px] hover:bg-[#00B2FF]  active:bg-[#40a1cb] rounded-full xs:py-1 sm:py-2 xl:text-[20px] 2xl:py-3 "  > <Link to='/subscription' > Recharge & Plans</Link> </li>
                                  <li className="  cursor-pointer  xs:text-[11px] sm:text-[14px] md:text-[15px] hover:bg-[#00B2FF]  active:bg-[#40a1cb] rounded-full xs:py-1 sm:py-2 xl:text-[20px] 2xl:py-3 "  > <Link to='/portfolio' > Our Portfolio</Link></li>

                                  <li className="  cursor-pointer  xs:text-[11px] sm:text-[14px] md:text-[15px] hover:bg-[#00B2FF]  active:bg-[#40a1cb] rounded-full xs:py-1 sm:py-2 xl:text-[20px] 2xl:py-3"  >    <Link to='/sign-up'> Sign-Up</Link></li>
                                    
                            </ul>
                        </nav>
      </div>
    </>
  );
};
