import { useContext, useState } from "react"; 
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Auth } from "../context/AuthContext";

const RegisterPage = () => { 

    
    const {register, handleSubmit, reset, formState:{errors, invalid}} = useForm();

    const {registeredUsers, setRegisteredUsers} = useContext(Auth)


    const [name, setName] = useState("");
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    let navigate = useNavigate()

    const handleRegister = (data) => {
 
        if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
        }

 
        console.log(data)
        let users = [...registeredUsers, data]
        setRegisteredUsers(users)
        localStorage.setItem("registeredUsers", JSON.stringify(users))
        
        // After successful registration
        navigate("/login");
    };

    const handleLogin = () => {
        navigate("/login");
    };

    return (
			<div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
				<div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
					{/* Heading */}
					<div className="text-center mb-8">
						<h1 className="text-3xl font-bold text-gray-800">Create Account</h1>

						<p className="text-gray-500 mt-2">Register a new account</p>
					</div>

					{/* Register Form */}
					<form onSubmit={handleSubmit(handleRegister)} className="space-y-5">
						{/* Name */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Name
							</label>

							<input
								type="text"
								placeholder="Enter your name"
								className="w-full px-4 py-3 border border-gray-300 rounded-lg
                            outline-none focus:ring-2 focus:ring-blue-500
                            focus:border-blue-500"
								{...register("name", {required: "Please enter your name"})}
							/>
						</div>

						{/* User ID */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								User ID
							</label>

							<input
								type="text"
								placeholder="Enter your user ID"
								className="w-full px-4 py-3 border border-gray-300 rounded-lg
                            outline-none focus:ring-2 focus:ring-blue-500
                            focus:border-blue-500"
								{...register("userid", {required: "Please enter User ID"})}
							/>
						</div>

						{/* Password */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Password
							</label>

							<input
								type="password"
								placeholder="Enter your password"
								className="w-full px-4 py-3 border border-gray-300 rounded-lg
                            outline-none focus:ring-2 focus:ring-blue-500
                            focus:border-blue-500"
								{...register("password", {required: "Please enter a Password"})}
							/>
						</div>

						{/* Confirm Password */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Confirm Password
							</label>

							<input
								type="password"
								placeholder="Confirm your password"
								className="w-full px-4 py-3 border border-gray-300 rounded-lg
                            outline-none focus:ring-2 focus:ring-blue-500
                            focus:border-blue-500"
							{...register("confirmpassword", {required: "Please enter the same value in Confirm Password"})}
							/>
						</div>

						{/* Register Button */}
						<button
							type="submit"
							className="w-full bg-blue-600 text-white py-3 rounded-lg
                        font-semibold hover:bg-blue-700
                        transition duration-200"
						>
							Register
						</button>
					</form>

					{/* Divider */}
					<div className="flex items-center my-6">
						<div className="flex-1 h-px bg-gray-300"></div>

						<span className="px-4 text-sm text-gray-400">OR</span>

						<div className="flex-1 h-px bg-gray-300"></div>
					</div>

					{/* Login Button */}

					<p className="text-center text-sm text-gray-500 mt-4">
						Already have an account?{" "}
						<button
							onClick={handleLogin}
							className="text-blue-600 font-semibold hover:underline"
						>
							Login
						</button>
					</p>
				</div>
			</div>
		)
};

export default RegisterPage;