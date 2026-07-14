import React from 'react'
import Register from './Register'

const Login = ({setToggle}) => {
  return  (
  <div className='bg-white w-100 p-6 rounded-xl flex flex-col gap-4'>
    <h1>Login</h1>
      <form className='flex flex-col gap-4' action=""> 
        <input className='p-2 border border-gray-400' type='text' placeholder='Email'></input>
        <input className='p-2 border border-gray-400' type='password' placeholder='Password'></input>
        <button className='p-2 bg-blue-600 text-white rounded'>Login</button>
      </form>
      <p>Do not have an account? <span className='text-blue-600 cursor-pointer hove' onClick={()=> setToggle(false)}> Register here</span></p>
  </div>
  )
}

export default Login
