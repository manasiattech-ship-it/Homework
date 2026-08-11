import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { Auth } from '../context/AuthContext';

const ProtectedRoute = () => {
    const {loggedInUser} = useContext(Auth);
    if(!loggedInUser){
      Navigate("/")
    }
  return <Outlet />
}

export default ProtectedRoute
