import React from 'react'
import { createBrowserRouter } from 'react-router'
import MainLayout from '../layout/MainLayout'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import Home from '../Pages/Home'
import About from '../Pages/About'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'register',
                element: <Register />,
            },
        ],
    },
])

export default router
