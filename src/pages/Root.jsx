import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Root = () => {
  return (
    <div>
      <Navbar/>
      <Outlet />
      <p>footer </p>
    </div>
  )
}

export default Root
