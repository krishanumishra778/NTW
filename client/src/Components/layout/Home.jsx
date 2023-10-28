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

import { Head_nav } from './Head_nav'
import { Logout } from '../pages/Logout'
import { Icon } from '../pages/Icon'
import { useSelector } from 'react-redux'
// import AdminPanel from '../pages/Adminpenal/Adminpenal'
// import { SubscriberBiodata } from '../pages/Adminpenal/SubscriberBiodata'
// import { TotalSubscriber } from '../pages/Adminpenal/TotalSubscriber'
// import { Chatboard } from '../pages/Adminpenal/Chatboard'
// import { TotalCustomers } from '../pages/Adminpenal/TotalCustomers'
// import { TotalSubscriberActive } from '../pages/Adminpenal/TotalSubscriberActive'
// import { TotalVisitors } from '../pages/Adminpenal/TotalVisitors'


export const Home = () => {
  const { isAuthenticated, loading, user } = useSelector((state) => state.user);
  return (




    <div>

      <NavDemo />
      <Head_nav />
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
      {/* <Graph /> */}
      {/* <AdminPanel />
      <SubscriberBiodata />
      <TotalSubscriber />
      <Chatboard />
      <TotalCustomers />
      <TotalSubscriberActive />
      <TotalVisitors/> */}
      <Join />
      <Fotter />
      {isAuthenticated ? <Icon />
        : ""}

    </div>
  )
}
