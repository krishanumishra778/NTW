import { Link } from "react-router-dom"


export const Email = () => {

    const inpHandler = () =>{

    }

    const formHandler = (event) =>{
        event.preventDefault();
    }
  return (
    <div>
         <div> <div className='grid md:grid-cols-2'>
            <div className='  bg-white '>
                <h1 className='text-2xl text-center font-bold mt-12'>Email</h1>

                <div className='p-8 max-w-[400px] mx-auto'>
                    <form className='' onSubmit={formHandler} >
                    <div className='relative z-0 w-full mb-6 group'>
                            <label
                                htmlFor='password'
                                className='block mb-4 xs:text-mp sm:text-tp md:text-p text-gray-900 dark:text-white'>
                             Registered Email id
                            </label>
                            <input
                                type='email'
                                name='Email'
                                id='email'
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 absolute
              h-8'
                                placeholder='Enter Valid Email'
                                // required
                                onChange={inpHandler}


                            />

                          
                        </div>

                       

                       
                        <button
                            type='submit'
                            className='text-white bg-[#00B2FF] hover:bg-[#00b3ffd3] xs:text-mp sm:text-tp md:text-p rounded-lg  w-full  mt-12 px-5 py-2.5 text-center  '>
                         <Link to='/forgot-password'>  Forgot Password </Link>
                        </button>
                        

                    </form>
                </div>
            </div>

            <div className='hidden md:block'>
                <img src='./images/sign_up_side_img.jpg' alt='' className='' />
            </div>
        </div>
        </div>
    </div>
  )
}