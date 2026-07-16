import React from 'react'

const UserCard = ({user, setUsers, users, setToggle, setEditUser}) => {
    console.log(users)
    const handleEdit = () => {
        setEditUser(user) 
        setToggle((prev)=>!prev)
    }


  return (
    <div className='p-4 border border-red rounded flex flex-col gap-2'>
        <div className="h-40 w-40">
            <img className="object-cover h-full w-full rounded-xl" src={user.image}></img>
        </div>
        <div className='flex flex-col gap-1'>
            <h1> {user.name}</h1>
            <p className='text-sm'>{user.email}</p>
            <p className='text-sm'> {user.mobile}</p>
        </div>
        <div className='flex justify-between'>
            <button onClick={handleEdit} className='bg-yellow-700 text-white p-2 roubded'>Update</button>
            <button onClick={ () => setUsers(users?.filter((u) => u.name!==user.name))} className='bg-red-700 text-white p-2 roubded'>Delete</button>
        </div>
    </div>
  )
}

export default UserCard
