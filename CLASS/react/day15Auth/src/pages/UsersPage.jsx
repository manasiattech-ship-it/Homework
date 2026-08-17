import React, { useEffect, useState } from 'react'
import UserCard from '../components/UserCard'
import { axiosInstance } from '../config/axiosinstance'

const UsersPage = () => {
  const [userData, setUserData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  let getUsersData = async () => {
 
      try {
        let data = await axiosInstance.get("/users") 
        setUserData(data.data)
        setIsLoading(false)
      } catch (error) {
        console.log("error in the api") 
      } 

  }

  useEffect(()=>{
      getUsersData() 
  }, [])

  if (isLoading) return <h1 className='text-4xl'>Loading...</h1>
  return (
    <div className='grid grid-cols-4 gap-5'>
     {
      userData.map((val)=>{
       return <UserCard key={val.id} user={val}/> 
     })}
    </div>
  )
}

export default UsersPage
