import React from 'react'
import { Navigate, Outlet } from 'react-router'

const ProtectedRoute = () => {
    const {loggedInUser} = useContext(Auth);
    if(!loggedInUser){
      Navigate("/")
    }
  return <Outlet />
}

export default ProtectedRoute
