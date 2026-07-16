import React from 'react'
import logo from '../assets/react.svg'

const Navbar = ({setToggle}) => {
  return (
    <div className='p-4 flex justify-between items-center bg-black text-white rounded'>
      
      <div>
        <img className='rounded' width={35} src={logo} alt="Logo" />
        </div>
      <div className='flex gap-6 font-semibold'>
        <p>HOme</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <button className='p-2 text-white rounded bg-blue-700 cursor-pointer' onClick={() =>setToggle((prev) => !prev)}>Create user</button>
    </div>
  )
}

export default Navbar
