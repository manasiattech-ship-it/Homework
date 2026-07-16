import React, { useState } from 'react'
import Navbar from './components/Navbar'
import UserCard from './components/UserCard'
import Form from './components/Form'

const App = () => {

  const [toggle, setToggle] = useState(true)
	const [users, setUsers] = useState([])
  const [editUser, setEditUser] = useState(null)

  return (
    <div className='p-3 h-screen flex flex-col gap-4'>
      <Navbar setToggle={setToggle}/>
      {toggle ? (
        <div className='flex gap-4'> 
        {users.map((user) => 
        <UserCard user={user} setUsers={setUsers} setToggle={setToggle} setEditUser={setEditUser} users={users}/>
       )}
        </div>
      ) : (
      <div className='flex h-[70%] justify-center items-center'>
        <Form setUsers={setUsers} setToggle={setToggle} editUser={editUser} setEditUser={setEditUser} />
      </div>
      )}
    </div>
  )
}

export default App
