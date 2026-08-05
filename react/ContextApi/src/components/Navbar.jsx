import React from 'react'
import { useState } from 'react'

const Navbar = ({setIsCartOpen}) => {
     
  return (
    <div className="flex items-center justify-between bg-black p-5 text-white rounded">
      <div>Logo</div>
      <div className='flex gap-10 text-xl'>
        <p onClick={() => setIsCartOpen(false)} className='cursor-pointer'>Home</p>
        <p onClick={() => setIsCartOpen(true)} className='cursor-pointer'>Cart</p>
      </div>
        <button>login</button>

    </div>
  )
}

export default Navbar
