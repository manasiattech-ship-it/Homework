import React, { useContext } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router'
import { Auth } from '../context/AuthContext';

const ProtectedRoute = () => { 
      const {loggedinUser} = useContext(Auth);
      console.log(loggedinUser)
      if(!loggedinUser) {  
          return <Navigate to={"/login"} />
      }
      
    return <Outlet />
}

export default ProtectedRoute