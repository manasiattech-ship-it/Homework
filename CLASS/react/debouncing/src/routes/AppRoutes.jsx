import React, { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from '../layouts/MainLayout'
let About = lazy(() => import('../pages/About'))  
import Contact from "../pages/Contact" 
import App from '../App.jsx'
const AppRoutes = () => {
    let router = createBrowserRouter([
			{
				path: "/",
				element: <MainLayout />,
				children: [
					{
						path: "",
						element: <App />,
					},
					{
						path: "/about",
						element: <About />,
					},
					{
						path: "/contact",
						element: <Contact />,
					},
				],
			},
		])
  return <RouterProvider router={router}/>
}

export default AppRoutes
