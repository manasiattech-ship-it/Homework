import React from 'react'
import { useState } from 'react';

const Register = ({setToggle, setUsers, users}) => {
    
const [formData, setFormData] = useState({name:"", email:"", password: "", image:""
})  

const handleChange = (e) => { 

    let {name, value} = e.target;
    setFormData({...formData, [name]:value}) 

}
const handleSubmit = (e) =>{  
    e.preventDefault() 
    setUsers([...users,formData ])
    setFormData({name: "", email: "", password: "", image:""})

}
  return  (
  <div className='bg-white w-100 p-6 rounded-xl flex flex-col gap-4'>
    <h1>Register</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4' action=""> 
        <input className='p-2 border border-gray-400' type='text' placeholder='Name' name="name" value={formData.name} onChange={handleChange} required></input>
        <input className='p-2 border border-gray-400' type='text' placeholder='Email' value={formData.email} onChange={handleChange} name="email" required></input>
        <input className='p-2 border border-gray-400' type='password' placeholder='Password' value={formData.password} onChange={handleChange} name="password" required></input>
                <input className='p-2 border border-gray-400' type='password' placeholder='url' value={formData.image} onChange={handleChange} name="image" required></input>
        <button className='p-2 bg-blue-600 text-white rounded'>Register</button>
      </form>
      <p>Alreay have an account? <span className='text-blue-600 cursor-pointer' onClick={() => {setToggle(true)}}>Login here</span></p>
  </div>
  )
}

export default Register
