
export const Email = () => {

    const inpHandler = () =>{

    }
  return (
    <div>
         <div> <div className='grid md:grid-cols-2'>
            <div className='  bg-white '>
                <h1 className='text-2xl text-center font-bold mt-12'>Email</h1>

                <div className='p-8 max-w-[400px] mx-auto'>
                    <form className='' >
                    <div className='relative z-0 w-full mb-6 group'>
                            <label
                                htmlFor='password'
                                className='block mb-4 xs:text-tp md:text-[p]  font-medium text-gray-900 dark:text-white'>
                             Registered Email id
                            </label>
                            <input
                                type='email'
                                name='Email'
                                id='email'
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 absolute
              h-8'
                                placeholder='Enter Valid Email'
                                required
                                onChange={inpHandler}


                            />

                          
                        </div>

                       

                       
                        <button
                            type='submit'
                            className='text-white bg-blue-800 rounded-lg text-sm w-full  mt-12 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 '>
                           Forgot Password
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
