import React from 'react'

import { Layout } from './Layout'
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

export const Home = () => {
  return (
    <div>
     
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
      

    </div>
  )
}
