import { useState ,useEffect } from "react";
import { Link } from "react-router-dom";


export const Head = () => {
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
    <div>
        
        <div className=" max-w-[1300px] mx-auto py-[20px] hidden md:block " data-aos="zoom-in">
          <div className='grid  mx-4 '>

            <div className='absolute h-screen  flex justify-center z-20'>
              <div className='relative menu-container'>
                <div
                  // ><>></>
                  className='h-12 w-12 object-cover  border-gray-400 rounded-full cursor-pointer'
                  style={{ backgroundColor: 'white' }}
                  onMouseEnter={handleMouseEnter}
                >
                  <img
                    src="./images/user.png"
                    alt='User Profile'
                    className='h-full w-full object-cover rounded-full'
                  />
                </div>
                <div
                  className='absolute ml-16 top-16 '
                  style={{ display: open ? 'block' : 'none' }}
                >
                  <div className='bg-white mt-3  w-[350px] shadow-xl rounded-md  '>
                    <div className='flex justify-center'>
                      <img
                        src="./images/user.png"
                        alt=''
                        className='h-12 w-12 object-cover rounded-full'
                      />
                    </div>
                    <p className='text-center mt-2  text-lg font-bold overflow-hidden whitespace-nowrap'>
                      Krishanu Kaundilya
                    </p>
                    <ul>
                      <div className='grid grid-cols-3 mt-2 px-3 text-[#656565]'>
                        <p className='col-span-2'>You dont have any plan</p>
                        <p>__Day's left</p>

                      </div>

                      <li className='my-3 px-3 text-[#656565] hover:text-[#00B2FF]'><Link to="/editprofile">Settings</Link></li>
                    </ul>
                    <hr />
                    < Link className='text-[#656565] inline-block px-3 py-4 hover:text-[#00B2FF]'>log in</Link> 
                     < Link className='text-[#656565] inline-block px-3 py-4 hover:text-[#00B2FF]'>log Out</Link>
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
    </div>
  )
}
