
import "../src/App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { User_login } from "./Components/auth/User_login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Components/layout/Home";
import { User_Signup } from "./Components/auth/User_Signup";
import { Getotp } from "./Components/auth/Getotp";
import { Editprofile } from "./Components/pages/Editprofile";
import { Changepassword } from "./Components/pages/Changepassword";
import { Pages } from "./Components/pages/Pages";
import { useState } from "react";

import { Forgot_password } from "./Components/auth/Forgot_password/Forgot_password";
import { Email } from "./Components/auth/Forgot_Password/Email";

import { useEffect } from "react";
import { Preloader } from "./Components/pages/Preloader";
import { LoadUser } from "./actions/userAction";
import { useSelector } from "react-redux";
import store from "./store";
import { Mainabout } from "./Components/layout/Mainabout/Mainabout";
import { Mainservice } from "./Components/layout/Mainservice.jsx/Mainservice";
import { Mainplans } from "./Components/layout/Mainplans/Mainplans";
import { Ourportfolio } from "./Components/layout/Ourportfolio/Ourportfolio";
import Contact from "./Components/pages/Contact";
import Maincontactus from "./Components/layout/Maincontactus/Maincontactus";
import AdminPanel from "./Components/pages/Adminpenal/Adminpenal";
import { Chatboard } from "./Components/pages/Adminpenal/Chatboard";
import { TotalSubscriber } from "./Components/pages/Adminpenal/TotalSubscriber";
import { TotalVisitors } from "./Components/pages/Adminpenal/TotalVisitors";
import { TotalCustomers } from "./Components/pages/Adminpenal/TotalCustomers";
import { TotalSubscriberActive } from "./Components/pages/Adminpenal/TotalSubscriberActive";
export default function App() {
  // ><<<<<<><
  const { isAuthenticated, loading, user } = useSelector((state) => state.user);

  useEffect(() => {
    store.dispatch(LoadUser());
    // console.log(isAuthenticated)
  }, []);


  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000); 
    // ////////////SCROLL-ANIMATION////////////
    AOS.init({
      offset: 100, // Adjust this value as needed
      duration: 1000, // Animation duration
      easing: 'ease', // Easing type
      once: true, // Only animate elements once
    });
  }, []);

  return (
    <>
      {isLoading ? <Preloader /> : null}
      <Router>

       

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
          {/* ///////////////   ADMIN PANEL ROUTER /////////////// */}
          <Route path="/adminpanel" element={<AdminPanel/>}/>
          <Route path="/chatboard" element={<Chatboard/>}/>
          <Route path="/totalsubscriber" element={<TotalSubscriber/>}/>
          <Route path="/totalvisitors" element={<TotalVisitors/>}/>
          <Route path="/totalcustomers" element={<TotalCustomers/>}/>
          <Route path="/totalactive" element={<TotalSubscriberActive/>}/>
          
        </Routes>

      </Router>

    </>
  );
}
