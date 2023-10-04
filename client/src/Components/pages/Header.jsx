import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Menus = ['You dont have any plan ', 'Settings', 'log Out'];
const Header = () => {
  const [text] = useTypewriter({
    words: ["UI/UX Design and Development", "Web Development", "No Code Web Development", "Web Design"],
    loop: {},
  });



  const [open, setOpen] = useState(false);


  const handleMouseEnter = () => {
    setOpen(true);
  };
  const handleMouseLeave = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (open && !e.target.closest('.menu-container')) {
        setOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [open]);
  return (
    <>
      <div className='max-w-[1300px] mx-auto' data-aos="fade-down">
        <div className="py-[20px] hidden md:block ">
          <div className='grid  mx-4 '>

            <div className='absolute h-screen  flex justify-center z-20'>
              <div className='relative menu-container'>
                <div
                  // ><>></>
                  className='h-14 w-14 object-cover  border-gray-400 rounded-full cursor-pointer'
                  style={{ backgroundColor: 'white' }}
                  onMouseEnter={handleMouseEnter}
                >
                  <img
                    src="./images/user.png"
                    alt=''
                    className='h-full w-full object-cover rounded-full'
                  />
                </div>
                <div
                  className='absolute ml-16 top-16 '
                  style={{ display: open ? 'block' : 'none' }}
                >
                  <div className='bg-white mt-3 p-4 w-[350px] shadow-xl rounded-md  '>
                    <div className='flex justify-center'>
                      <img
                        src="./images/user.png"
                        alt=''
                        className='h-16 w-16 object-cover rounded-full'
                      />
                    </div>
                    <p className='text-center mt-2 text-lg font-bold overflow-hidden whitespace-nowrap'>
                      Krishanu Kaundilya
                    </p>
                    <ul>
                      {Menus.map((menu, index) => (
                        <li
                          onClick={() => setOpen(false)}
                          className={`p-2 text-[14px]  text-gray-500 cursor-pointer ${index === 2 ? 'border-t border-gray-400 mx-auto' : ''
                            } ${index === 2 ? 'mb-2' : ''} hover:text-blue-500 transition duration-300 ${index === 0 ? 'mt-4' : ''
                            } ${index === 1 ? 'settings-menu-item' : ''}`}
                          key={menu}
                        >
                          {index === 1 ? <Link to='/Editprofile'>{menu}</Link> : menu}
                        </li>

                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='mx-auto'>
              <img src="logo/next tech waves logo.png" alt='' />
            </div>
            <div></div>
          </div>



        </div>

        <div className="max-w-[1340px] px-[15px] pt-9 mx-auto flex md:flex justify-between xs:flex-col-reverse sm:flex-col-reverse lg:flex-row xl:flex-row 2xl:flex-row">
          <div className="lg:w-[60%]">
            <h1 className="font-[600] sm:text-tt xs:text-mt md:text-title text-[#494949] inline leading-10">
              Unlock Your Digital Potential with Our Comprehensive Digital Solutions:
              <p className="font-[600] inline sm:text-tt xs:text-mt md:text-title text-[#00B2FF] leading-10">
                {text} <span className='text-[#00B2FF] w-[2px]'><Cursor /></span>
              </p>
            </h1>
            <p className="sm:text-mp xs:text-tp md:text-p pt-4 leading-6">Get every aspect of your
              digital
              needs handled in one location. All your digital requirements. We can assist you in growing your business digitally regardless of how big
              or
              small it is.</p>
            <button className="bg-[#00B2FF] rounded rounded-3xl px-[20px] py-[5px] sm:text-mp xs:text-tp md:text-p text-[#fff] my-5 hover:bg-[#00b3ffd8] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">Express
              your needs</button>
          </div>
          <div className="my-6 lg:w-[50%] md:my-15 durat">
            <img src="images/home img.png" alt='' className="sm:mx-auto home_img" />
          </div>
        </div>

      </div>
    </>
  )
}

export default Header;
