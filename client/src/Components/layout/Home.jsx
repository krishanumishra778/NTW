import React from 'react'


import Header from '../pages/Header'
import About from '../pages/About'
import Services from '../pages/Services'
import Founder from '../pages/Founder'
import Subscription from '../pages/Subscription'
import Creativeshowcase from '../pages/Creativeshowcase'
import Testimonials from '../pages/Testimonials'
import Rating from '../pages/Rating'
import Trusted from '../pages/Trusted'

import Contact from '../pages/Contact'
import Join from '../pages/Join'
import Fotter from './Fotter'
import { NavDemo } from './NavDemo'

export const Home = () => {
  return (
    <div>
        <NavDemo/>
        <Header />
        <About />
        <Services />
        <Founder />
        <Subscription />
        <Creativeshowcase />
        <Testimonials />
        <Rating />
        <Trusted />
        <Contact />
        <Join />
        <Fotter/>
      

    </div>
  )
}
