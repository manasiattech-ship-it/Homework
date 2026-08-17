import { createBrowserRouter, RouterProvider } from "react-router";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import AuthLayout from "../layouts/AuthLayout";
import RegisterPage from "../pages/RegisterPage";
import ProtectedRoutes from "./ProtectedRoute/";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <AuthLayout />,
		children: [
			{
				path: "login",
				element: <LoginPage />,
			},
			{
				path: "register",
				element: <RegisterPage />,
			},
		],
	},
	{
		path: "/main",
		element: <ProtectedRoute />,
		children: [
			{
				path: "",
				element: <MainPage />,
			},
		],
	},
])


const AppRoutes = () => {
    return <RouterProvider router={router} />
}

export default AppRoutes