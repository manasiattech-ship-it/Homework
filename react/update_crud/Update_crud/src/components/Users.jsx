import React, { useState } from 'react'

const Users = () => {
    const [users, setUsers] = useState([
  { id: 1, name: "John", age: 24 },
  { id: 2, name: "Sarah", age: 29 },
  { id: 3, name: "Mike", age: 31 },
]);

const handleClick = () => {
    console.log("inddd")
    const editedUser = {
        id: 2,
        name: "Sarah Johnson",
        age: 30,
        };

        setUsers((prev) => {
            return prev.map((user) =>{
                return user.id === editedUser.id ? {...user, ...editedUser} : user
            })
        })
}
  return (
    <div>
        {      
            users.map((user) => {    
                    return (
                    <div key={user.id}>
                        {user.name} - {user.age}
                        </div>  
                    )
      })}
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Users
