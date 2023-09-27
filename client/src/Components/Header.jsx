
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Header = () => {
  const [text] = useTypewriter({
    words: ["UI/UX Design and Development", "Web Development", "No Code Web Development", "Web Design"],
    loop: {},
  });
  return (
    <div>
      <div className="py-[20px]">
        <img src="logo/next tech waves logo.png" alt='' className=" mx-auto" />
      </div>

      <div className=" max-w-[1340px] px-[15px]  pt-9  mx-auto flex md:flex justify-between sm:flex-col-reverse xs:flex-col-reverse sm:flex-col-reverse lg:flex-row xl:flex-row 2xl:flex-row">
        <div className="lg:w-[60%]">
          <h1 className="font-[600]  sm:text-tt  xs:text-mt md:text-title text-[#494949] inline leading-10">
            Unlock Your Digital Potential with Our Comprehensive Digital Solutions:
            <p className="font-[600] inline  sm:text-tt  xs:text-mt md:text-title  text-[#00B2FF]  leading-10"> {text}   <span className='text-[#00B2FF] w-[2px]'> <Cursor /></span> </p>
          </h1>
          <p className="  sm:text-mp xs:text-tp md:text-p pt-4 leading-6">Get every aspect of your
            digital
            needs handled in one location. all your
            digital requirements We can assist you in growing your business digitally regardless of how big
            or
            small it is.</p>
          <button className="bg-[#00B2FF] rounded rounded-3xl   px-[20px] py-[5px]  sm:text-mp xs:text-tp md:text-p  text-[#fff]  my-5 hover:bg-[#00b3ffd8] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#00b3ffd8] duration-300 ...">Express
            your needs</button>
        </div>
        <div className="my-6 lg:w-[50%] md:my-15  durat">
          <img src="images/home img.png" alt='' className="sm:mx-auto home_img" />
        </div>
      </div>
    </div>

  )
}

export default Header