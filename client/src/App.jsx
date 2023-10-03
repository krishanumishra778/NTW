/** @format */

import "../src/App.css";
import { User_login } from "./Components/auth/User_login";

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";



<<<<<<< Updated upstream
import { User_login } from "./Components/User_login";
import { store } from "./Components/redux/Store";
import { Provider } from "react-redux";
import { View } from "./Components/redux/View";
=======
import About from "./Components/pages/About";
import { Home } from "./Components/layout/Home";
import Services from "./Components/pages/Services";
import Subscription from "./Components/pages/Subscription";
import Creativeshowcase from "./Components/pages/Creativeshowcase";
import { User_SIgnup } from "./Components/auth/User_SIgnup";
import { Getotp } from "./Components/auth/Getotp";

>>>>>>> Stashed changes

export default function App() {
  return (
    <>
<<<<<<< Updated upstream
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
=======
      <Router>

       

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/subscription' element={<Subscription />} />
          <Route path='/portfolio' element={<Creativeshowcase />} />
          <Route path='/sign-up' element={<User_SIgnup />} />
          <Route path='/get-otp' element={<Getotp />} />
          <Route path='/log-in' element={< User_login/>} />
        </Routes>
      
      </Router>
>>>>>>> Stashed changes
    </>
  );
}
