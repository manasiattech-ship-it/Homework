import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div className='h-screen p-2 grid grid-cols-[1fr_7fr]'> 
        <NavBar />
        <div className='h-screen p-2 overflow-auto'>
          <Outlet />
        </div>
      
    </div>
  )
}

export default MainLayout
