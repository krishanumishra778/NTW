/** @format */

import "../src/App.css";
import { User_login } from "./Components/auth/User_login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/pages/About";
import { Home } from "./Components/layout/Home";
import Services from "./Components/pages/Services";
import Subscription from "./Components/pages/Subscription";
import Creativeshowcase from "./Components/pages/Creativeshowcase";
import { User_Signup } from "./Components/auth/User_Signup";
import { Getotp } from "./Components/auth/Getotp";
import { NavDemo } from "./Components/layout/NavDemo";
import { Head_nav } from "./Components/layout/Head_nav";
// import Fotter from "./Components/layout/Fotter";
import { Settings } from "./Components/pages/Settings";
import { Editprofile } from "./Components/pages/Editprofile";
import { Changepassword } from "./Components/pages/Changepassword";
import { Pages } from "./Components/pages/Pages";
import { useState } from "react";
import Contact from "./Components/pages/Contact";
import Join from "./Components/pages/Join";
import Fotter from "./Components/layout/Fotter";
import { Forgot_password } from "./Components/auth/Forgot_password/Forgot_password";
import { Email } from "./Components/auth/Forgot_Password/Email";
// 
import {  useEffect } from 'react';
import { Preloader } from "./Components/pages/Preloader";




export default function App() {

  // const location = useLocation();

  const [navurl, setNavurl] = useState()
  // console.log(navurl);


  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading with a setTimeout
    setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Change this to the actual loading time or condition

    // Add other side effects or data fetching here
  }, []);


  return (
    <>
     {isLoading ? <Preloader /> : <null />}
      <Router>

        


        {navurl !== "/sign-up" && <NavDemo setNavurl={setNavurl} />}

        <Head_nav />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/subscription' element={<Subscription />} />
          <Route path='/portfolio' element={<Creativeshowcase />} />
          <Route path='/sign-up' element={<User_Signup />} />
          <Route path='/getotp' element={<Getotp />} />
          <Route path='/login' element={< User_login />} />
          <Route path="/Settings" element={< Settings />} />
          <Route path="/editprofile" element={< Editprofile />} />
          {/* <Route path="/changepassword" element={ < Changepassword/>}/> */}
          <Route path="/changepassword" element={< Changepassword />} />
          <Route path="/pages" element={< Pages />} />
          <Route path="/email" element={<Email/>} />
          <Route path="/forgot-password" element={<Forgot_password/>}></Route>

        </Routes>
        <Contact />
        <Join />
        <Fotter />
      </Router>

    </>
  );
}
