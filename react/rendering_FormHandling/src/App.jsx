import React, { useState } from 'react'
import Contact from './components/Contact'
import About from './components/About'
import Card from './components/Card'

function App() {
    console.log("render!!!")
      const [user, setUser] = useState({name: "", email:"", password:""})
 
            console.log(user)
    const handleChange = (e) => {
      let {name, value} = e.target
          setUser({...user, [name]: value

        })

    }
 
  return (
    <div className='flex flex-col gap-5 w-60'>
 
      <input name="name" onChange ={handleChange} type="text" className='border-2'  placeholder='Name' />
      <input name="email" onChange ={handleChange} type="text" className='border-2' placeholder='Email' />
      <input name="password" onChange ={handleChange} type="text" className='border-2' placeholder='Password' />
        This is my name = {user.name}
        This is my email = {user.email}
        This is my password = {user.password}

      <button className='border-2'>Submit</button>
    </div>
  )
}

export default App
