import React, { useContext } from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router'
import { Auth } from '../context/AuthContext'
import { toast } from 'react-toastify'

const NavBar = () => {
  let navigate = useNavigate()
  
  const {setLoggedInUser} = useContext(Auth)
  const handleLogout = () => {
    setLoggedInUser(null)
    localStorage.removeItem("loggedInUser")
    toast.warn("User logged out!")
    navigate("/")
  }
         
  return (
		<div className="h-full border-r border-red-500 bg-gray-50 p-4 flex flex-col justify-between ">
			<div className="flex flex-col gap-10">
				<h1 className="text-3xl font-semibold">E-comm</h1>

				<div className="flex flex-col gap-6">
					<NavLink
						to="/main"
						end
						className={({isActive}) =>
							isActive ? "font-bold text-red-500" : "text-black"
						}
					>
						Home
					</NavLink>

					<NavLink
						to="/main/users"
						className={({isActive}) =>
							isActive ? "font-bold text-red-500" : "text-black"
						}
					>
						Users
					</NavLink>

					<NavLink
						to="/main/products"
						className={({isActive}) =>
							isActive ? "font-bold text-red-500" : "text-black"
						}
					>
						Products
					</NavLink>
				</div>
			</div>
			<button
				onClick={handleLogout}
				className="py-3 bg-red-600 text-white rounded cursor-pointer"
			>
				Logout
			</button>
		</div>
	)
}

export default NavBar
