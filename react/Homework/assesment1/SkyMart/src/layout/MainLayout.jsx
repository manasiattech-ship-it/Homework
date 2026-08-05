import React from 'react'
import { Outlet, Link } from 'react-router'

const MainLayout = () => {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link> |
        <Link to='/about'>About</Link> |
        <Link to='/login'>Login</Link> |
        <Link to='/register'>Register</Link>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout
