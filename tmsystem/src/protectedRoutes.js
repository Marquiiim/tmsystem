// import { Navigate, Outlet } from "react-router-dom";
import { useEffect, /*useState*/ } from "react";
import axios from 'axios'

const ProtectedRoutes = () => {

    // const [isAutheticated, setIsAuthenticated] = useState(null)
    // const [loading, setLoading] = useState(true)


    useEffect(() => {
        const verifyToken = () => {
            try {
                const response = axios.post('http://localhost:5000/api/auth/verify-token', {}, {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                console.log('Resposta:', response.data);
            } catch (error) {
                console.error('❌ Erro:', error.response?.data || error.message);
            }
        }
        verifyToken()
    }, [])

}

export default ProtectedRoutes