import React, { useContext } from 'react'
import { useState } from 'react'
import { MyStore } from '../context/MyContext'
const Navbar = () => {
    let {setShowCart} = useContext(MyStore)
  
  return (
    <div className='bg-black flex items-center justify-between p-5'>
      <h1> Logo</h1>
      <div className='flex gap-10 text-xl'>
        <h1 onClick={() => setShowCart(false)}> Home</h1>
        <h1 onClick={() => setShowCart(true)}> Cart</h1>
      </div>
      <button>
        Login
      </button>

    </div>
  )
}

export default Navbar
