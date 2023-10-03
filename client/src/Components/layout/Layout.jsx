import React from 'react'
import { NavDemo } from './NavDemo'
import { Head_nav } from './Head_nav'
import Fotter from './Fotter'

export const Layout = ({ children }) => {
    return (
        <>
            <NavDemo />
            <Head_nav />
            <main>
                {children}
            </main>
            <Fotter />
        </>
    )
}
