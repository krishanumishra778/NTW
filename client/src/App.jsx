/** @format */

import "../src/App.css";
import { User_login } from "./Components/auth/User_login";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import About from "./Components/pages/About";
import { Home } from "./Components/layout/Home";
import Services from "./Components/pages/Services";
import Subscription from "./Components/pages/Subscription";
import Creativeshowcase from "./Components/pages/Creativeshowcase";
import { User_SIgnup } from "./Components/auth/User_SIgnup";
import { Getotp } from "./Components/auth/Getotp";
import { NavDemo } from "./Components/layout/NavDemo";
import { Head_nav } from "./Components/layout/Head_nav";
// import Fotter from "./Components/layout/Fotter";
import { Settings } from "./Components/pages/Settings";
import { Editprofile } from "./Components/pages/Editprofile";
import { Changepassword } from "./Components/pages/Changepassword";




export default function App() {
  return (
    <>

    
       

      <Router>

       <NavDemo/>
       <Head_nav/>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/subscription' element={<Subscription />} />
          <Route path='/portfolio' element={<Creativeshowcase />} />
          <Route path='/sign-up' element={<User_SIgnup />} />
          <Route path='/get-otp' element={<Getotp />} />
          <Route path='/log-in' element={< User_login/>} />
          <Route path="/Settings" element={< Settings/>}/>
          <Route path="/editprofile" element={ < Editprofile/>}/>
          <Route path="/changepassword" element={ < Changepassword/>}/>

        </Routes>
    
      </Router>

    </>
  );
}
