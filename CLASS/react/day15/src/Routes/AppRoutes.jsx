import React, { Children } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import About from '../pages/About'
import Services from '../pages/Services'
import Home from '../pages/Home'
import MainLayout from '../layout/MainLayout'
import AuthLayout from '../layout/AuthLayout'

const AppRoutes = () => {

  let router = createBrowserRouter([
    {
      path:"/", element:<MainLayout/>,
      children: [
      {path:"", element:<Home/>},
      {path:"about", element:<About />},
      {path:"services", element:<Services />}
    ]},
    {
      path: "/auth",
      element: <AuthLayout/>
    }
    ])


  return (
    <RouterProvider router={router}/>
  )
}

export default AppRoutes
