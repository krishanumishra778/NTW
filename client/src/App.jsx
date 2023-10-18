/** @format */

import "../src/App.css";
import { User_login } from "./Components/auth/User_login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Components/layout/Home";
import { User_Signup } from "./Components/auth/User_Signup";
import { Getotp } from "./Components/auth/Getotp";

// import { Head_nav } from "./Components/layout/Head_nav";
// import Fotter from "./Components/layout/Fotter";

import { Editprofile } from "./Components/pages/Editprofile";
import { Changepassword } from "./Components/pages/Changepassword";
import { Pages } from "./Components/pages/Pages";
import { useState } from "react";

import { Forgot_password } from "./Components/auth/Forgot_password/Forgot_password";
import { Email } from "./Components/auth/Forgot_Password/Email";
//
import { useEffect } from "react";
import { Preloader } from "./Components/pages/Preloader";
import { LoadUser } from "./actions/userAction";
import { useSelector } from "react-redux";
import store from "./store";
import { Icon } from "./Components/pages/Icon";
import { Mainabout } from "./Components/layout/Mainabout/Mainabout";
import { Mainservice } from "./Components/layout/Mainservice.jsx/Mainservice";
import { Mainplans } from "./Components/layout/Mainplans/Mainplans";
import { Ourportfolio } from "./Components/layout/Ourportfolio/Ourportfolio";
import Contact from "./Components/pages/Contact";
import Maincontactus from "./Components/layout/Maincontactus/Maincontactus";
export default function App() {
  // ><<<<<<><
  const { isAuthenticated, loading, user } = useSelector((state) => state.user);

  useEffect(() => {
    store.dispatch(LoadUser());
    console.log(isAuthenticated)
  }, []);


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
      {isLoading ? <Preloader /> : null}
      <Router>

        {/* <Head_nav /> */}

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<Mainabout />} />
          <Route path='/services' element={<Mainservice />} />
          <Route path='/subscription' element={<Mainplans />} />
          <Route path='/portfolio' element={<Ourportfolio />} />
          <Route path='/sign-up' element={<User_Signup />} />
          <Route path='/getotp' element={<Getotp />} />
          <Route path='/login' element={<User_login />} />

          <Route path='/editprofile' element={<Editprofile />} />
          <Route path='/changepassword' element={<Changepassword />} />
          <Route path='/pages' element={<Pages />} />
          <Route path='/email' element={<Email />} />
          <Route path='/forgot-password' element={<Forgot_password />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/maincontactus" element={<Maincontactus />}></Route>

        </Routes>

      </Router>

    </>
  );
}
