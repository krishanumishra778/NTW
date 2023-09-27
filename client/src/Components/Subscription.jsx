// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

const Subscription = () => {
    const [changePrice, setChangePrice] = useState(true);
    const price = () => {
        if (changePrice == true) {

            setChangePrice(false)
        } else {
            setChangePrice(true)
        }
    }


    return (
        <>
            <div className="my-10 md:py-12  bg-[url(images/bg-banner.png)] bg-no-repeat bg-cover mx-[15px] px-[10px]">
                <div>

                    <p className="text-[#00B2FF]  sm:text-tt  xs:text-mt md:text-title lg:text-center text-left font-[600]  ">
                        Buy
                        Our Subscription
                        and Enjoy Unlimited Designs</p>
                    <p className="sm:text-mp xs:text-tp md:text-p md:text-center text-left text-[#494949] pt-2 ">We offer
                        competitive
                        pricing and
                        top-tier quality to meet the needs of startups, large businesses, and individuals.
                    </p>
                    <p className="sm:text-tt  xs:text-mt md:text-title font-[600] md:text-center text-left pt-2 text-[#494949]">
                        Pricing &amp; Plans
                        for UI/UX Design&amp; Development
                    </p>
                    <div className="text-center mt-4">
                        <p className="sm:text-mp xs:text-tp md:text-p text-center pt-2 inline  ">Bill Monthly</p>
                        <label className="relative inline-flex items-center cursor-pointer inline ">
                            <input type="checkbox" defaultValue className="sr-only peer" onChange={price} />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                            </div>
                            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300" />
                        </label>
                        <p className="sm:text-mp xs:text-tp md:text-p text-center pt-2 inline"> Bill
                            quarterly</p>
                    </div>
                    <div className="max-w-[1250px] mt-8 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-4">
                        {/*  */}
                        <div className="  pt-2  border-2 rounded-xl  bg-[#FFF]">
                            <p className="sm:text-mp xs:text-tp md:text-p font-[700] text-center">Startup’s</p>
                            <p className="sm:text-mc xs:text-tc md:text-c text-center">Subscription plan for startup’s</p>

                            <p className="sm:text-mc xs:text-tc md:text-c font-[600] text-center">{changePrice ? "₹14,999/- Per Month" : "₹40,000/- Per three Month"}</p>
                            <ul className="pt-6 px-6">
                                <li className="list-disc sm:text-mc xs:text-tc md:text-c ">Includes 5 UI Design Projects in a
                                    month
                                </li>
                                <li className="list-disc sm:text-mc xs:text-tc md:text-c pt-2">
                                    one project at a time </li>
                                <li className="list-disc sm:text-mc xs:text-tc md:text-c pt-2">
                                    1 revision for each design. </li>
                                <li className="list-disc sm:text-mc xs:text-tc md:text-c pt-2">
                                    Unlimited stock photos Included iStock. </li>
                                <li className="list-disc sm:text-mc xs:text-tc md:text-c pt-2">Basic prototyping included </li>
                                <li className="list-disc sm:text-mc xs:text-tc md:text-c pt-2">1 Web Flow Development. </li>
                                <li className="list-disc sm:text-mc xs:text-tc md:text-c pt-2">1 HTML, CSS, Bootstrap, Tailwind,
                                    React.js . </li>
                                <li className="list-disc sm:text-mc xs:text-tc md:text-c pt-2">
                                    Additional pages can be added at Rs.400/page. </li>
                                <li className="list-disc sm:text-mc xs:text-tc md:text-c pt-2">Email support.</li>
                            </ul>
                            <div className="text-center">
                                <button className=" bg-[#00B2FF] rounded rounded-3xl   px-[20px] py-[5px]  sm:text-mp xs:text-tp md:text-p  text-[#fff]  mt-8 mb-1 hover:bg-[#00b3ffd8] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#00b3ffd8] duration-300 ... ">Contact
                                    Us</button>
                            </div>
                            <div className="text-center text-[#AEAEAE] sm:text-mc xs:text-tc md:text-c">
                                <button className=" underline">Customize</button>
                                <p>Term’s &amp; Condition</p>
                            </div>
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className=" pt-2 border-2 rounded-xl bg-[#FFF]">
                            <p className="sm:text-mp xs:text-tp md:text-p font-[700] text-center">Large Business</p>
                            <p className="sm:text-mc xs:text-tc md:text-c text-center">Subscription plan for Large Business</p>
                            <p className="sm:text-mc xs:text-tc md:text-c font-[600] text-center">₹34,999/- Per page </p>
                            <ul className="pt-6 px-6">
                                <li className="list-disc sm:text-mc xs:text-tc md:text-c ">Includes 10 UI Design Projects per
                                    month.
                                </li>
                                <li className="list-disc sm:text-mc xs:text-tc md:text-c pt-2">
                                    one project at a time </li>
                                <li className="list-disc sm:text-mc xs:text-tc md:text-c pt-2">
                                    Unlimited stock photos Included iStock. </li>
                                <li className="list-disc sm:text-mc xs:text-tc md:text-c pt-2">
                                    2 revision for each design. </li>
                                <li className="list-disc sm:text-mc xs:text-tc md:text-c pt-2">Basic prototyping included </li>
                                <li className="list-disc sm:text-mc xs:text-tc md:text-c pt-2">Wireframing included. </li>
                                <li className="list-disc sm:text-mc xs:text-tc md:text-c pt-2">2 Web Flow Development. </li>
                                <li className="list-disc sm:text-mc xs:text-tc md:text-c pt-2">1 HTML, CSS, Bootstrap, Tailwind,
                                    React.js . </li>
                                <li className="list-disc sm:text-mc xs:text-tc md:text-c pt-2">
                                    Additional pages can be added at Rs.400/page. </li>
                                <li className="list-disc sm:text-mc xs:text-tc md:text-c pt-2">Priority email support.</li>
                            </ul>
                            <div className="text-center">
                                <button className="bg-[#00B2FF] rounded rounded-3xl   px-[20px] py-[5px]  sm:text-mp xs:text-tp md:text-p  text-[#fff]  mt-1 mb-1 hover:bg-[#00b3ffd8] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#00b3ffd8] duration-300 ... ">Contact
                                    Us</button>
                            </div>
                            <div className="text-center text-[#AEAEAE] sm:text-mc xs:text-tc md:text-c">
                                <button className=" underline">Customize</button>
                                <p>Term’s &amp; Condition</p>
                            </div>
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className="  pt-2  border-2 rounded-xl   bg-[#FFF]">
                            <p className="sm:text-mp xs:text-tp md:text-p font-[700] text-center">Custom package</p>
                            <p className="sm:text-mc xs:text-tc md:text-c text-center">Subscription plan for Individual or local
                                business.</p>
                            {/* <p class="sm:text-mc xs:text-tc md:text-c font-[600]">₹34,999/- Per page</p> */}
                            <ul className="pt-6 px-6">
                                <li className="list-disc sm:text-mc xs:text-tc md:text-c ">Price: Customized based on
                                    requirements.
                                </li>
                                <li className="list-disc sm:text-mc xs:text-tc md:text-c pt-2">
                                    Perfect for Local venders with unique needs.</li>
                                <li className="list-disc sm:text-mc xs:text-tc md:text-c pt-2">
                                    Unlimited UI Design Projects </li>
                                <li className="list-disc sm:text-mc xs:text-tc md:text-c pt-2">
                                    Unlimited stock photos Included iStock. </li>
                                <li className="list-disc sm:text-mc xs:text-tc md:text-c pt-2">prototyping and wireframing. (if
                                    needed) </li>
                                <li className="list-disc sm:text-mc xs:text-tc md:text-c pt-2">Custom web development projects.
                                </li>
                                <li className="list-disc sm:text-mc xs:text-tc md:text-c pt-2">HTML, CSS, Bootstrap, Tailwind,
                                    React.js, or in Webflow as per Budget.. </li>
                                <li className="list-disc sm:text-mc xs:text-tc md:text-c pt-2">Priority support with quick
                                    response
                                    times. </li>
                            </ul>
                            <div className="text-center">
                                <button className=" bg-[#00B2FF] rounded rounded-3xl   px-[20px] py-[5px]  sm:text-mp xs:text-tp md:text-p  text-[#fff] xs:mt-1 md:mt-[60px] hover:bg-[#00b3ffd8] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#00b3ffd8] duration-300 ...">Contact
                                    Us</button>
                            </div>
                            <div className="text-center text-[#AEAEAE] sm:text-mc xs:text-tc md:text-c">
                                <p>Term’s &amp; Condition</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  */}
            </div>

        </>
    )
}

export default Subscription