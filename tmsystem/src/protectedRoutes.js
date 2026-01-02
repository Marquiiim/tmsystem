// import { Navigate, Outlet } from "react-router-dom";
import { useEffect, /*useState*/ } from "react";
import axios from 'axios'

const ProtectedRoutes = () => {

    // const [isAutheticated, setIsAuthenticated] = useState(null)
    // const [loading, setLoading] = useState(true)


    useEffect(() => {
        try {
            const response = axios.post('http://localhost:5000/api/auth/verify-token', {}, { withCredentials: true })
            console.log('Resposta:', response.data);
        } catch (error) {
            console.log(error)
        }
    }, [])

}

export default ProtectedRoutes