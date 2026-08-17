import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Auth } from "../context/AuthContext";
import { toast } from "react-toastify";

const LoginPage = () => {

    const {register, handleSubmit, reset, formState: {errors, inValid}} = useForm()

    const {loggedinUser, setLoggedinUser, registeredUsers} = useContext(Auth)

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

    let formSubmit = (data) => {
 
        localStorage.setItem("loggedinUser", JSON.stringify(data)) 

        let user = registeredUsers.find(
					(val) => val.userid === data.userid && val.password === data.password,
				)
        
        if(!user){
            toast.error("User ID not found or invalid credentials")
            reset();
            return
        }  
        setLoggedinUser(user)
        localStorage.setItem("loggedinUser", JSON.stringify(user))
        toast.success("Logged in")
        navigate("/main")
        console.log("user ---->>",user)

        reset()
    }

    let navigate = useNavigate()

    const handleLogin = (e) => {
        
        console.log("User ID:", userId);
        console.log("Password:", password);




    };

    const handleRegister = () => {
        console.log("Go to register page");
        navigate("/register");
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
            
            {/* Heading */}
            <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
                Welcome Back
            </h1>
            <p className="text-gray-500 mt-2">
                Please login to your account
            </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
            
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
                {...register("userid", {required: "Email id is required"})}
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
                {...register("password", {"required":"Please enter your password"})}
                />
            </div>

            {/* Login Button */}
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg 
                        font-semibold hover:bg-blue-700 transition duration-200"
                        
            >
                Login
            </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-4 text-sm text-gray-400">
                OR
            </span>
            <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Register Button */}
    

            <p className="text-center text-sm text-gray-500 mt-4">
            Don't have an account?{" "}
            <button
                onClick={handleRegister}
                className="text-blue-600 font-semibold hover:underline"
            >
                Register
            </button>
            </p>

        </div>
        </div>
    );
};

export default LoginPage;