import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import api from '../../service/api';
import './protectedRoutes.css'

const ProtectedRoutes = () => {

    const [isAutheticated, setIsAuthenticated] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const verifyToken = async () => {
            try {
                const response = await api.get('/api/sessions/private-routes')
                setIsAuthenticated(response?.data?.valid || false)
            } catch (error) {
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