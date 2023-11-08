/** @format */

// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Subscription = () => {
  const [countryName, setCountryName] = useState(null);
  const [subscribeData, setSubscribeData] = useState({});
  const { isAuthenticated, user, loading } = useSelector(state => state.user);
  const [changePrice, setChangePrice] = useState(false);
  const price = () => {
    // console.log(changePrice);
    if (changePrice == true) {
      setChangePrice(false);
    } else {
      setChangePrice(true);
    }
  };
  const [isShowMore1, setIsShowMore1] = useState(false);
  const [isShowMore2, setIsShowMore2] = useState(false);
  const [isShowMore3, setIsShowMore3] = useState(false);

  const toggleReadMoreLess = cardNumber => {
    if (cardNumber === 1) {
      setIsShowMore1(!isShowMore1);
    } else if (cardNumber === 2) {
      setIsShowMore2(!isShowMore2);
    } else if (cardNumber === 3) {
      setIsShowMore3(!isShowMore3);
    }
  };

  useEffect(() => {
    if (user) {
      if (changePrice) {
        if (user.country == "India") {
          document.getElementById("price1").innerHTML = "₹6,06,819.10";
          document.getElementById("price2").innerHTML = "₹10,11,365.10";
          document.getElementById("price3").innerHTML = "₹6,06,819.10";
          document.getElementById("price4").innerHTML = "₹10,11,365.10";
        } else if (user.country == "United States of America") {
          document.getElementById("price1").innerHTML = " $8,097.30";
          document.getElementById("price2").innerHTML = " $13,497.30";
          document.getElementById("price3").innerHTML = " $8,097.30";
          document.getElementById("price4").innerHTML = " $13,497.30";
          
        } else if (user.country == "Germany") {
          document.getElementById("price1").innerHTML = "EUR 7,342.20";
          document.getElementById("price2").innerHTML = "EUR 12,237.30";
          document.getElementById("price3").innerHTML = "EUR 7,342.20";
          document.getElementById("price4").innerHTML = "EUR 12,237.30";
        } else if (user.country == "Switzerland") {
          document.getElementById("price1").innerHTML = "CHF 7,935.25";
          document.getElementById("price2").innerHTML = "CHF 13,260.33 ";
          document.getElementById("price3").innerHTML = "CHF 7,935.25";
          document.getElementById("price4").innerHTML = "CHF 13,260.33 ";
        } else if (user.country == "United Arab Emirates") {
          document.getElementById("price1").innerHTML = " AED 29,986.35";
          document.getElementById("price2").innerHTML = " AED 49,977.55";
          document.getElementById("price3").innerHTML = " AED 29,986.35";
          document.getElementById("price4").innerHTML = " AED 49,977.55";
        } else {
          document.getElementById("price1").innerHTML = " $8,097.30";
          document.getElementById("price2").innerHTML = "$13,497.30";
          document.getElementById("price3").innerHTML = " $8,097.30";
          document.getElementById("price4").innerHTML = "$13,497.30";
        }
      } else {
        if (user.country == "India") {
          document.getElementById("price1").innerHTML = "₹2,24,999.00";
          document.getElementById("price2").innerHTML = "₹3,74,999.00";
          document.getElementById("price3").innerHTML = "₹2,24,999.00";
          document.getElementById("price4").innerHTML = "₹3,74,999.00";
        } else if (user.country == "United States of America") {
          document.getElementById("price1").innerHTML = " $2999";
          document.getElementById("price2").innerHTML = "$4999";
          document.getElementById("price3").innerHTML = " $2999";
          document.getElementById("price4").innerHTML = "$4999";
        } else if (user.country == "Germany") {
          document.getElementById("price1").innerHTML = "EUR 2,700.22";
          document.getElementById("price2").innerHTML = "EUR 4,050.33 ";
          document.getElementById("price3").innerHTML = "EUR 2,700.22";
          document.getElementById("price4").innerHTML = "EUR 4,050.33 ";
        } else if (user.country == "Switzerland") {
          document.getElementById("price1").innerHTML = "CHF 2,911.58";
          document.getElementById("price2").innerHTML = "CHF 7,935.25";
          document.getElementById("price3").innerHTML = "CHF 2,911.58";
          document.getElementById("price4").innerHTML = "CHF 7,935.25";
        } else if (user.country == "United Arab Emirates") {
          document.getElementById("price1").innerHTML = "AED 11,038.17";
          document.getElementById("price2").innerHTML = "AED 16,557.25";
          document.getElementById("price3").innerHTML = "AED 11,038.17";
          document.getElementById("price4").innerHTML = "AED 16,557.25";
        } else {
          document.getElementById("price1").innerHTML = "$2999";
          document.getElementById("price2").innerHTML = "$4999";
          document.getElementById("price3").innerHTML = "$2999";
          document.getElementById("price4").innerHTML = "$4999";
        }
      }
    } else {
      if (changePrice) {
        document.getElementById("price1").innerHTML = " $8,097.30";
        document.getElementById("price2").innerHTML = " $13,497.30";
        document.getElementById("price3").innerHTML = " $8,097.30";
        document.getElementById("price4").innerHTML = " $13,497.30";
      } else {
        document.getElementById("price1").innerHTML = "$2999";
        document.getElementById("price2").innerHTML = "$4999";
        document.getElementById("price3").innerHTML = "$2999";
        document.getElementById("price4").innerHTML = "$4999";
      }
    }
  }, [changePrice, user]);

  const makePayment = async e => {
    const date = new Date();
    const theDayOfTheMonthOnNextWeek = date.getDate() + 1;
    date.setDate(theDayOfTheMonthOnNextWeek);
    console.log(date);
    const { data } = await axios.post(
      "http://localhost:4000/create-checkout-session",
      { id: "65420b058023c6bb66ee79e0" },
      {
        withCredentials: true,
      }
    );
    console.log(data);
    if (data.success) {

      if (changePrice) {
        if (e.target.value == "standard") {
          const { data } = await axios.post(
            `http://localhost:4000/subscribe/${user._id}`,
            {
              plan: `${e.target.value} (quartaly)`,
            },
            {
              withCredentials: true,
            }
          );
        } else {
          const { data } = await axios.post(
            `http://localhost:4000/subscribe/${user._id}`,
            {
              plan: `${e.target.value} (quarterly)`,
              remain_days: "123",
            },
            {
              withCredentials: true,
            }
          );
        }
      } else {
        if (e.target.value == "standard") {
          const { data } = await axios.post(
            `http://localhost:4000/subscribe/${user._id}`,
            {
              plan: `${e.target.value} (monthly)`,
              remain_days: "123",
            },
            {
              withCredentials: true,
            }
          );
        } else {
          const { data } = await axios.post(
            `http://localhost:4000/subscribe/${user._id}`,
            {
              plan: `${e.target.value} (monthly)`,
              remain_days: "123",
            },
            {
              withCredentials: true,
            }
          );
        }
      }

      // const stripe = await loadStripe(
      //   "pk_test_51O64xKSIWvRI9Ne7vTGnXsMs5Rm0voJfiGC3k8rUEWBP24D90lmK2M7RT9S7QHt1fjDS9uMqi3bIX6bJyyoIbE3w00HZD1drGj"
      // );

      // const result = stripe.redirectToCheckout({
      //   sessionId: data.id,
      // });

      // if (result.error) {
      //   console.log(result.error);
      // }
    } else {
      console.log(data);
      toast.error(data.message);
    }
  };

  return (
    <>
      <div className='my-10 md:py-12  bg-[url(images/bg-banner.png)] bg-no-repeat bg-cover mx-[15px] px-[10px]'>
        <div>
          <p className='text-[#00B2FF]  sm:text-tt  xs:text-mt md:text-title lg:text-center text-left font-[600]  '>
            Buy Our Subscription and Enjoy Unlimited Designs
          </p>
          <p className='sm:text-mp xs:text-tp md:text-p md:text-center text-left text-[#494949] pt-2 '>
            We offer competitive pricing and top-tier quality to meet the needs
            of startups, large businesses, and individuals.
          </p>
          <p className='sm:text-tt  xs:text-mt md:text-title font-[600] md:text-center text-left pt-2 text-[#494949]'>
            Pricing &amp; Plans for UI/UX Design&amp; Development
          </p>

          <div className='flex  justify-center  gap-2 '>
            <p className='sm:text-mp xs:text-tp md:text-p text-center pt-2 inline  '>
              Bill Monthly
            </p>

            <label className='relative flex mt-2  align-middle items-center cursor-pointer  '>
              <input
                type='checkbox'
                defaultValue
                className='sr-only peer '
                onClick={price}
              />
              <div className="w-11 h-6  bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute xs:after:top-[2px] md:after:top-[3px]  after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className=' text-sm font-medium text-gray-900 dark:text-gray-300' />
            </label>

            <p className='sm:text-mp xs:text-tp md:text-p text-center pt-2 inline'>
              {" "}
              Bill quarterly
            </p>
          </div>
          {/* big screen card start */}
          <div className='xs:hidden sm:block'>
            <div className='max-w-[1300px]   mx-auto mt-8 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-4'>
              {/*  */}
              <div className='  pt-2  border-2 rounded-xl  bg-[#FFF]'>
                <p className='sm:text-mp xs:text-tp md:text-p font-[700] text-center'>
                  STANDARD PLAN
                </p>
                <p className='sm:text-mc xs:text-tc md:text-c text-center'>
                  Subscription plan for startup’s
                </p>

                <p
                  className='sm:text-mc xs:text-tc md:text-c font-[600] text-center'
                  id='price1'></p>
                <ul className='pt-6 px-6'>
                  <li className='list-disc sm:text-mc xs:text-tc md:text-c '>
                    Includes 5 UI Design Projects in a month
                  </li>
                  <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                    one project at a time{" "}
                  </li>
                  <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                    1 revision for each design.{" "}
                  </li>
                  <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                    Unlimited stock photos Included iStock.{" "}
                  </li>
                  <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                    Basic prototyping included{" "}
                  </li>
                  <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                    1 Web Flow Development.{" "}
                  </li>
                  <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                    1 HTML, CSS, Bootstrap, Tailwind, React.js .{" "}
                  </li>
                  <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                    Additional pages can be added at Rs.400/page.{" "}
                  </li>
                  <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                    Email support.
                  </li>
                </ul>
                <div className='text-center'>

                  <button
                    className=' bg-[#00B2FF]  rounded-3xl   px-[20px] py-[5px]  sm:text-mp xs:text-tp md:text-p  text-[#fff]  mt-8 mb-1  hover:bg-[#00b3ffd8]'
                    value={"standard"}>
                    <Link to="/paymentcheckoutpage">
                      Book Now
                    </Link>
                  </button>
                </div>
                <div className='text-center text-[#AEAEAE] sm:text-mc xs:text-tc md:text-c'>
                  <button className=' underline hover:text-[#00b3ffd8]'>
                    Customize
                  </button>
                  <p>Term’s &amp; Condition</p>
                </div>
              </div>
              {/*  */}
              {/*  */}
              <div className=' pt-2 border-2 rounded-xl bg-[#FFF] shadow-lg shadow-[#76c9ed]'>
                <p className='sm:text-mp xs:text-tp md:text-p font-[700] text-center'>
                  PRO PLAN
                </p>
                <p className='sm:text-mc xs:text-tc md:text-c text-center'>
                  Subscription plan for Large Business
                </p>
                <p
                  className='sm:text-mc xs:text-tc md:text-c font-[600] text-center'
                  id='price2'></p>
                <ul className='pt-6 px-6'>
                  <li className='list-disc sm:text-mc xs:text-tc md:text-c '>
                    Includes 10 UI Design Projects per month.
                  </li>
                  <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                    one project at a time{" "}
                  </li>
                  <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                    Unlimited stock photos Included iStock.{" "}
                  </li>
                  <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                    2 revision for each design.{" "}
                  </li>
                  <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                    Basic prototyping included{" "}
                  </li>
                  <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                    Wireframing included.{" "}
                  </li>
                  <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                    2 Web Flow Development.{" "}
                  </li>
                  <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                    1 HTML, CSS, Bootstrap, Tailwind, React.js .{" "}
                  </li>
                  <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                    Additional pages can be added at Rs.400/page.{" "}
                  </li>
                  <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                    Priority email support.
                  </li>
                </ul>
                <div className='text-center'>
                  <button
                    className='bg-[#00B2FF]  rounded-3xl   px-[20px] py-[5px]  sm:text-mp xs:text-tp md:text-p  text-[#fff]  mt-1 mb-1   hover:bg-[#00b3ffd8]  '
                    value={"pro"}
                  >
                    <Link to="/paymentcheckoutpage">
                      Book Now
                    </Link>


                  </button>
                </div>
                <div className='text-center text-[#AEAEAE] sm:text-mc xs:text-tc md:text-c'>
                  <button className=' underline hover:text-[#00b3ffd8]'>
                    Customize
                  </button>
                  <p>Term’s &amp; Condition</p>
                </div>
              </div>
              {/*  */}
              {/*  */}
              <div className='  pt-2  border-2 rounded-xl   bg-[#FFF]'>
                <p className='sm:text-mp xs:text-tp md:text-p font-[700] text-center'>
                  Custom package
                </p>
                <p className='sm:text-mc xs:text-tc md:text-c text-center'>
                  Subscription plan for Individual or local business.
                </p>
                {/* <p class="sm:text-mc xs:text-tc md:text-c font-[600]">₹34,999/- Per page</p> */}
                <ul className='pt-6 px-6'>
                  <li className='list-disc sm:text-mc xs:text-tc md:text-c '>
                    Price: Customized based on requirements.
                  </li>
                  <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                    Perfect for Local venders with unique needs.
                  </li>
                  <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                    Unlimited UI Design Projects{" "}
                  </li>
                  <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                    Unlimited stock photos Included iStock.{" "}
                  </li>
                  <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                    prototyping and wireframing. (if needed){" "}
                  </li>
                  <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                    Custom web development projects.
                  </li>
                  <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                    HTML, CSS, Bootstrap, Tailwind, React.js, or in Webflow as
                    per Budget..{" "}
                  </li>
                  <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                    Priority support with quick response times.{" "}
                  </li>
                </ul>
                <div className='text-center'>
                  <button className=' bg-[#00B2FF]  rounded-3xl   px-[20px] py-[5px]  sm:text-mp xs:text-tp md:text-p  text-[#fff] xs:mt-2 lg:mt-[60px]   hover:bg-[#00b3ffd8] '>
                    <Link to="/maincontactus">
                      Contact Us
                    </Link>
                  </button>
                </div>
                <div className='text-center text-[#AEAEAE] sm:text-mc xs:text-tc md:text-c'>
                  <p>Term’s &amp; Condition</p>
                </div>
              </div>
            </div>
          </div>

          {/* big screen card end */}

          {/* <<<<<<<<<</>>>>>>>>>>>>>> */}

          {/* Mobile read more card start */}
          <div className='max-w-[1300px]  xs:block sm:hidden mx-auto mt-8 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  '>
            {/*  */}
            <div className='  pt-2 mt-2 border-2 rounded-xl  bg-[#FFF]'>
              <p className='sm:text-mp xs:text-tp md:text-p font-[700] text-center'>
                Startup’s
              </p>
              <p className='sm:text-mc xs:text-tc md:text-c text-center'>
                Subscription plan for startup’s
              </p>
              <p
                  className='sm:text-mc xs:text-tc md:text-c font-[600] text-center'
                  id='price3'></p>
             
              
              <ul className='pt-6 px-6'>
                <li className='list-disc sm:text-mc xs:text-tc md:text-c '>
                  Includes 5 UI Design Projects in a month
                </li>
                <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                  one project at a time{" "}
                </li>
                <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                  1 revision for each design.{" "}
                </li>
                <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                  Unlimited stock photos Included iStock.{" "}
                </li>
                {isShowMore1 && (
                  <p>
                    <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                      Basic prototyping included{" "}
                    </li>
                    <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                      1 Web Flow Development.{" "}
                    </li>
                    <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                      1 HTML, CSS, Bootstrap, Tailwind, React.js .{" "}
                    </li>
                    <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                      Additional pages can be added at Rs.400/page.{" "}
                    </li>
                    <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                      Email support.
                    </li>
                  </p>
                )}

                <button
                  onClick={() => toggleReadMoreLess(1)}
                  className='font-bold text-[#00B2FF] my-1'>
                  {isShowMore1 ? "Read Less" : "Read More..."}
                </button>
              </ul>
              <div className='text-center'>

                <Link to="/paymentcheckoutpage">
                <button  className=' bg-[#00B2FF]  rounded-3xl   px-[20px] py-[5px]  sm:text-mp xs:text-tp md:text-p  text-[#fff]  my-1   hover:bg-[#00b3ffd8] '>
                      Book Now

                </button>
                    </Link>
              </div>
              <div className='text-center text-[#AEAEAE] sm:text-mc xs:text-tc md:text-c'>
                <button className=' underline hover:text-[#00B2FF]'>
                  Customize
                </button>
                <p>Term’s &amp; Condition</p>
              </div>
            </div>
            {/*  */}
            {/*  */}
            <div className=' pt-2 mt-2 border-2 rounded-xl bg-[#FFF]'>
              <p className='sm:text-mp xs:text-tp md:text-p font-[700] text-center'>
                Large Business
              </p>
              <p className='sm:text-mc xs:text-tc md:text-c text-center'>
                Subscription plan for Large Business
              </p>
              <p
                  className='sm:text-mc xs:text-tc md:text-c font-[600] text-center'
                  id='price4'></p>
              <ul className='pt-6 px-6'>
                <li className='list-disc sm:text-mc xs:text-tc md:text-c '>
                  Includes 10 UI Design Projects per month.
                </li>
                <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                  one project at a time{" "}
                </li>
                <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                  Unlimited stock photos Included iStock.{" "}
                </li>
                <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                  2 revision for each design.{" "}
                </li>
                {isShowMore2 && (
                  <p>
                    <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                      Basic prototyping included{" "}
                    </li>
                    <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                      Wireframing included.{" "}
                    </li>
                    <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                      2 Web Flow Development.{" "}
                    </li>
                    <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                      1 HTML, CSS, Bootstrap, Tailwind, React.js .{" "}
                    </li>
                    <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                      Additional pages can be added at Rs.400/page.{" "}
                    </li>
                    <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                      Priority email support.
                    </li>
                  </p>
                )}

                <button
                  onClick={() => toggleReadMoreLess(2)}
                  className='font-bold text-[#00B2FF] my-1'>
                  {isShowMore2 ? "Read Less" : "Read More..."}
                </button>
              </ul>
              <div className='text-center'>
                  <Link to="/paymentcheckoutpage">
                <button className=' bg-[#00B2FF]  rounded-3xl   px-[20px] py-[5px]  sm:text-mp xs:text-tp md:text-p  text-[#fff]  my-1   hover:bg-[#00b3ffd8] '>
                 
                      Book Now
                </button>
                    </Link>
              </div>
              <div className='text-center text-[#AEAEAE] sm:text-mc xs:text-tc md:text-c'>
                <button className=' underline hover:text-[#00B2FF]'>
                  Customize
                </button>
                <p>Term’s &amp; Condition</p>
              </div>
            </div>
            {/*  */}
            {/*  */}
            <div className='  pt-2 mt-2 border-2 rounded-xl   bg-[#FFF]'>
              <p className='sm:text-mp xs:text-tp md:text-p font-[700] text-center'>
                Custom package
              </p>
              <p className='sm:text-mc xs:text-tc md:text-c text-center'>
                Subscription plan for Individual or local business.
              </p>
              {/* <p class="sm:text-mc xs:text-tc md:text-c font-[600]">₹34,999/- Per page</p> */}
              <ul className='pt-6 px-6'>
                <li className='list-disc sm:text-mc xs:text-tc md:text-c '>
                  Price: Customized based on requirements.
                </li>
                <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                  Perfect for Local venders with unique needs.
                </li>
                <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                  Unlimited UI Design Projects{" "}
                </li>
                <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                  Unlimited stock photos Included iStock.{" "}
                </li>
                {isShowMore3 && (
                  <p>
                    <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                      prototyping and wireframing. (if needed){" "}
                    </li>
                    <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                      Custom web development projects.
                    </li>
                    <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                      HTML, CSS, Bootstrap, Tailwind, React.js, or in Webflow as
                      per Budget..{" "}
                    </li>
                    <li className='list-disc sm:text-mc xs:text-tc md:text-c pt-2'>
                      Priority support with quick response times.{" "}
                    </li>
                  </p>
                )}

                <button
                  onClick={() => toggleReadMoreLess(3)}
                  className='font-bold text-[#00B2FF] my-1'>
                  {isShowMore3 ? "Read Less" : "Read More..."}
                </button>
              </ul>
              <div className='text-center'>
                  <Link to="/maincontactus">
                <button className=' bg-[#00B2FF]  rounded-3xl   px-[20px] py-[5px]  sm:text-mp xs:text-tp md:text-p  text-[#fff]  my-1   hover:bg-[#00b3ffd8] '>
                    Contact us
                </button>
                    </Link>
              </div>
              <div className='text-center text-[#AEAEAE] sm:text-mc xs:text-tc md:text-c'>
                <p>Term’s &amp; Condition</p>
              </div>
            </div>
          </div>
          {/* Mobile read more card end */}
        </div>
      </div>
    </>
  );
};

export default Subscription;
