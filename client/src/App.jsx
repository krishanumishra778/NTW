/** @format */

import Header from "./Components/Header";
import "../src/App.css";
import About from "./Components/About";
import Services from "./Components/Services";
import Founder from "./Components/Founder";
import Subscription from "./Components/Subscription";
import Creativeshowcase from "./Components/Creativeshowcase";
import Rating from "./Components/Rating";
import Trusted from "./Components/Trusted";
import Contact from "./Components/Contact";
import Join from "./Components/Join";
import Testimonials from "./Components/Testimonials";
import Fotter from "./Components/Fotter";
import { NavDemo } from "./Components/NavDemo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { User_SIgnup } from "./Components/User_SIgnup";
import { Email_varification } from "./Components/Email_varification";
import { Getotp } from "./Components/Getotp";

export default function App() {
  return (
    <>
      <Router>
        <NavDemo/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/subscription' element={<Subscription />} />
          <Route path='/portfolio' element={<Creativeshowcase />} />
          <Route path='/sign-up' element={<User_SIgnup />} />
          <Route path='/email-varify' element={<Email_varification />} />
          <Route path='/get-otp' element={<Getotp />} />
         
        </Routes>
        <Fotter/>
      </Router>
    </>
  );
}
