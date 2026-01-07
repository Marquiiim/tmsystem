import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios'
import './protectedRoutes.css'

const ProtectedRoutes = () => {

    const [isAutheticated, setIsAuthenticated] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const verifyToken = async () => {
            try {
                const response = await axios.post('http://localhost:5000/api/auth/verify-token', {}, {
                    withCredentials: true
                })
                setIsAuthenticated(response?.data?.valid || false)
            } catch (error) {
                console.error('❌ Erro:', error.response?.data || error.message);
                setIsAuthenticated(false)
            } finally {
                setLoading(false)
            }
        }
        verifyToken()
    }, [])

    if (loading) {
        return (
            <div className="loader">
                <div className="justify-content-center jimu-primary-loading"></div>
            </div>
        )
    }

    if (!isAutheticated) {
        return <Navigate to='/auth' replace />
    }

    return <Outlet />
}

export default ProtectedRoutes