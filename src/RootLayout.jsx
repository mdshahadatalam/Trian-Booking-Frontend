import React from 'react'
import { Outlet } from 'react-router'
import { Footer } from './Component/Footer'

export const RootLayout = () => {
  return (
    <>
     <Outlet/>
     <Footer/>
    </>
  )
}
