import React, { useState } from 'react'
import Navbar from './components/Navbar'
import UserCard from './components/UserCard'
import Form from './components/Form'

const App = () => {

  const [toggle, setToggle] = useState(true)
	const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || []
  }
  
  )
  // const [editUser, setEditUser] = useState(null)
  const [updatedData, setUpdatedData] = useState(null)

  console.log(updatedData)

  console.log(users)
  return (
    <div className='p-3 h-screen flex flex-col gap-4'>
      <Navbar setToggle={setToggle}/>
      {toggle ? (
        <div className='flex gap-4'> 
        {users.map((user, index) => 
        <UserCard setUpdatedData={setUpdatedData} key={index} user={user} setUsers={setUsers} setToggle={setToggle} users={users}/>
       )}
        </div>
      ) : (
      <div className='flex h-[70%] justify-center items-center'>
        <Form setUsers={setUsers} setToggle={setToggle}  users={users} updatedData={updatedData} setUpdatedData ={setUpdatedData} />
      </div>
      )}
    </div>
  )
}

export default App
