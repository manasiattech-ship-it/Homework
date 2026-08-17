import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import AppRoutes from './routes/AppRoutes'

import './index.css' 
import { AuthProvider } from './context/AuthContext'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById("root")).render(
	<AuthProvider>
		<AppRoutes />

		<ToastContainer />
	</AuthProvider>,
)
