import React from 'react'
import { NavLink } from 'react-router'

const NavBar = () => {
  return (
    <>
    <div className='flex justify-center gap-5 p-4 bg-black '>
      
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/services">Serices</NavLink>

    </div>
    
         <div className='w-[10%] h-screen bg-red-400 flex flex-col '>
            <p1 className='p-5'> Memeberplan</p1>
            <p1 className='p-5'> Payments</p1>
          
          </div> 
      </>
  )
}

export default NavBar
