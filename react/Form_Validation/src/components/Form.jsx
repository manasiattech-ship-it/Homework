import React, { useState } from "react"
import {useForm} from "react-hook-form"
import { useEffect } from "react"


const Form = ({setUsers, setToggle, editUser, setEditUser}) => {



	let {
		register,
		handleSubmit,
		reset,
		formState: {errors},
	} = useForm({mode:"onChange",
		defaultValues:{
			name: "",
			email: "",
			mobile: "",
			image:""
		}
	})

		useEffect(() => {
		if(editUser){
			reset(editUser)
		}
	},[editUser, reset])



	let formSubmit = (data) => {

		if(editUser){
			setUsers((prev) => 
				prev.map((user) => 
					user.email === editUser.email ? data: user));

			setEditUser(null)
		}
		else{
			setUsers(prev => [...prev, data])
		}
		reset()
		setToggle(prev => !prev)
	}

	return (
		<div className="flex flex-col items-center gap-3">
			<h1 className="text-xl font-bold">CreateUser</h1>
			<form
				onSubmit={handleSubmit(formSubmit)}
				className="w-60 flex flex-col gap-3 p-4 rounded border-2 border-black"
			>
				<input
					{...register("name", {required: "Name is required", pattern:{
						value: /^\S+$/,
						message: "Blank spaces not allowed"
					}})}
					className="p-2 rounded outline-0 border border-black"
					type="text"
					placeholder="Name"
				></input>
				{errors.name && <p className="text-red-500">{errors.name.message}</p>}

				<input
					{...register("email", {required: "Email is required",
						pattern: {
							value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
							message: "Please enter valid email"
						},
					}

					)}
					className="p-2 rounded outline-0 border border-black"
					type="email"
					placeholder="Email"
				></input>
				{errors.email && <p className="text-red-500">{errors.email.message}</p>}

				<input
					{...register("mobile", {
						required: "Mobile is required",
						minLength: {value: 10, message: "Max 10 digits are required"} 
					})}
					className="p-2 rounded outline-0 border border-black"
					type="number"
					placeholder="Mobile"
				></input>
				{errors.mobile && (
					<p className="text-red-500">{errors.mobile.message}</p>
				)}

				<input
					{...register("image", {required: "Image is required"})}
					className="p-2 rounded outline-0 border borderblack"
					type="url"
					placeholder="Image"
				></input>
				{errors.image && <p className="text-red-500">{errors.image.message}</p>}

				<button className="p-2 bg-blue-700 text-white rounded cursor-pointer">
					{editUser ? "Edit User" : "Add User"}
				</button>
			</form>
		</div>
	)
}

export default Form
