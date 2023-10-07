

export const Preloader = () => {
    return (
        <div>
            <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-[1] z-50">

                <div className="flex items-center justify-center ">
                    <div className="border-2 xs:w-[50px] xs:h-[50px]  md:w-[80px] md:h-[80px] border-blue-400 rounded-[50%] xs:px-2  md:px-4 flex justify-center items-center  mr-1" data-aos="zoom-in"  data-aos-duration="3000">
                        <p className="xs:text-[50px] md:text-[80px] font-bold  ">N</p>
                    </div>
                    <div className="">
                        <div className="xs:text-mt sm:text-tt md:text-t"  data-aos="fade-down" data-aos-duration="2000" >
                            <p> <span className="">Welcome</span> to</p>
                        </div>
                        <div className="xs:text-mt sm:text-tt md:text-t " data-aos="fade-left" data-aos-duration="2000">
                            <p className="text-blue-400">Next Tech Waves</p>
                        </div>
                    </div></div>

            </div>
        </div>

     
    
   
  )
}
