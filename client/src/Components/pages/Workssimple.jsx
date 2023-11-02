import React from 'react'

export const Workssimple = () => {
    return (
        <div class="grid md:grid-cols-2 w-[98%] max-w-[1300px] mx-auto">
            <div>
                <h1 className="text-[#00B2FF] font-[600]  sm:text-tt  xs:text-mt md:text-title xs:text-center md:text-left    mb-4 sm:mb-1 ">
                    How it works? <span className='text-[#494949]'>Simple</span>
                </h1>
            </div>
            {/*  1  //// */}
            <div className=''>
                <div className='bg-[#00B2FF] rounded-md text-white p-5'>
                    <div>
                        <h1 className='text-xl'>1</h1>
                        <p>We’ll jump on a call together, learn more about
                            your business, goals and ambitions , and then
                            explore how we can help you with unlimited Webflow development.
                        </p>
                    </div>
                </div>
                {/* 2 */}
                <div className='bg-[#00B2FF] rounded-md text-white p-5 my-5'>

                    <div className=''>
                        <h1 className='text-xl'>2</h1>
                        <p className='text-xl '>We'll get going in as little as 24 hours
                        </p>
                        <div className='py-3'>
                            <span className=''>
                                We can start in as quick as 24 hours, and jump straight into your first Webflow tasks
                            </span>

                        </div>
                    </div>
                </div>
                {/* 3 */}
                <div className='bg-[#00B2FF] rounded-md text-white p-5'>

                    <div>
                        <h1 className='text-xl'>3</h1>
                        <p className='text-xl'>Unlimited Webflow on tap
                        </p>

                        <div className='py-3'>
                            <span className=''>
                                We’ll deliver unlimited Webflow to meet your deadlines. No stress, no hassle, just top-tier Webflow at your fingertips!
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
