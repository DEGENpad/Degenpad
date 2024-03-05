import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { clx } from '../custom/clx'
import { Investor, News, Partner, SupportChain } from '../../view/Home'

const Layout = ({children}:{children?:React.ReactNode}) => {
    const classes = clx("w-[93%] lg:w-[90%] flex flex-col mx-auto pt-8");
  return (
    <section >
        <Header/>
        <Outlet/>
        <SupportChain/>
        <Investor/>
        <News/>
        {/* <Partner/> */}
        <Footer/>
    </section>
  )
}

export default Layout