/** @format */

import "../src/App.css";
import About from "./Components/About";
import Services from "./Components/Services";

import Subscription from "./Components/Subscription";
import Creativeshowcase from "./Components/Creativeshowcase";

import Fotter from "./Components/Fotter";
import { NavDemo } from "./Components/NavDemo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { User_SIgnup } from "./Components/User_SIgnup";
import { Getotp } from "./Components/Getotp";

import { Head_nav } from "./Components/Head_nav";

import { User_login } from "./Components/User_login";
import { store } from "./Components/redux/Store";
import { Provider } from "react-redux";
import { View } from "./Components/redux/View";

export default function App() {
  return (
    <>
      <Provider store={store}>
       
        <Router>
        <View/>
        <User_login/>
          <NavDemo />
          <Head_nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-us' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/subscription' element={<Subscription />} />
            <Route path='/portfolio' element={<Creativeshowcase />} />
            <Route path='/sign-up' element={<User_SIgnup />} />
            <Route path='/get-otp' element={<Getotp />} />
            <Route path='/log-in' element={<User_login />} />
          </Routes>
          <Fotter />
        </Router>
      </Provider>
    </>
  );
}
