import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { Auth } from '../context/AuthContext';

export const useAuth = () => {
      const {registeredUsers, setLoggedInUser, setRegisteredUsers} =
				useContext(Auth)
    
	let navigate = useNavigate()

	let {
		register,
		handleSubmit,
		reset,
		formState: {errors, isValid},
	} = useForm()
	//login logic

	let loginFormSubmit = (data) => {
		let user = registeredUsers.find((val) => {
			return val.email === data.email && val.password === data.password
		})

		if (!user) {
			toast.error("user not found or invalid credentials")
			reset()

			return
		}
		setLoggedInUser(user)
		localStorage.setItem("loggedInUser", JSON.stringify(user))
		toast.success("user loggedin")
		navigate("/main")
		reset()
	}
	//register logic
	let registerFormSubmit = (data) => {
		let arr = [...registeredUsers, data]
		setRegisteredUsers(arr)
		console.log(data)
		alert("User registered successfully")
		localStorage.setItem("registeredUsers", JSON.stringify(arr))
		reset()
		navigate("/")
	}

    return {
			navigate,
            register,
            handleSubmit,
			reset,
			errors,
			loginFormSubmit,
			registerFormSubmit,
		}
}
 
