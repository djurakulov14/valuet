import React from 'react'
import Aside from '../Components/Aside'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Header/>
        <Aside/>
        <Outlet/>
    </div>
  )
}

export default Layout