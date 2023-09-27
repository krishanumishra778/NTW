import Header from "./Components/Header";
import '../src/App.css'
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
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <About/>
    <Services/>
    <Founder/>
    <Subscription/>
    <Creativeshowcase/>
    <Testimonials/>
    <Rating/>
    <Trusted/>
    <Contact/>
    <Join/>
    <Fotter/>
    </>
    
  )
}