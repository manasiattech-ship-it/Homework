import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router'

const Home = () => {
  return (
    <div>  
        <div className='w-[10%] h-screen bg-red-400 flex flex-col '>
            <p1 className='p-5'> Memeberplan</p1>
            <p1 className='p-5'> Payments</p1>
          
          </div> 
    </div>
  )
}

export default Home
