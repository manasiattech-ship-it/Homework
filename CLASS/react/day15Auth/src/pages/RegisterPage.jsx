import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Auth } from "../context/AuthContext";

export default function Register() {
    const {registeredUsers, setRegisteredUsers} = useContext(Auth);
    let {register, handleSubmit, reset, formState: {errors, isValid}} = useForm();
  
    let navigate = useNavigate()
    let formSubmit = (data) =>{
      let arr= [...registeredUsers, data]
      setRegisteredUsers(arr)
      console.log(data)
      alert("User registered successfully")
      localStorage.setItem("registeredUsers", JSON.stringify(arr))
      reset()
    }
    const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Create Account
            </h1>
            <p className="text-gray-500 mt-2">
              Register a new account
            </p>
          </div>

          {/* Register Form */}
          <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">

            {/* Name */}
            <div>

              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-lg border border-gray-300 px-4 py-3
                  text-gray-900 placeholder-gray-400
                  outline-none transition
                  focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  {...register("name", {required: "Name is required" })}
              />
              {errors.name && <p className="text-red-600">{errors.name.message}</p>}
            </div>

            {/* ID */}
            <div>
              <label
                htmlFor="userId"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                ID
              </label>

              <input
                id="userId"
                name="userId"
                type="text"
                placeholder="Enter your ID"
                className="w-full rounded-lg border border-gray-300 px-4 py-3
                  text-gray-900 placeholder-gray-400
                  outline-none transition
                  focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                {...register("email", {required: "Email id is required" })}
              />
              
              {errors.email && <p className="text-red-600">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
             >
                Password
              </label>

              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-20
                    text-gray-900 placeholder-gray-400
                    outline-none transition
                    focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                    {...register("password", {
                    required: "Password is required",
                 minLength:{
                    value: 6,
                    message:"minimum 6 characters is required"
                 }
                })}
                />

                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2
                    text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              
              {errors.password && <p className="text-red-600">{errors.password.message}</p>}
            </div>


            {/* Register Button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 py-3
                text-sm font-semibold text-white
                transition hover:bg-blue-700
                focus:outline-none focus:ring-2 focus:ring-blue-500
                focus:ring-offset-2"
            >
              Register
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-8 border-t border-gray-100 pt-6 text-center">
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <button
                href="/login"
                className="font-semibold text-blue-600 hover:text-blue-700"
                onClick={() => navigate("/")}
              >
                Login
              </button>
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-gray-400">
          © 2026 Your Company. All rights reserved.
        </p>
      </div>
    </div>
  );
}