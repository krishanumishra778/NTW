import React from 'react'
import Header from './Header'
import About from './About'
import Services from './Services'
import Founder from './Founder'
import Subscription from './Subscription'
import Creativeshowcase from './Creativeshowcase'
import Testimonials from './Testimonials'
import Rating from './Rating'
import Trusted from './Trusted'
import Contact from './Contact'
import Join from './Join'
import Fotter from './Fotter'

export const Home = () => {
  return (
    <div>
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
       
    </div>
  )
}
