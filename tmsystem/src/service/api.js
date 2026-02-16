import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
    withCredentials: true,
    timeout: 10000
})

api.interceptors.request.use(
    config => {
        if (process.env.NODE_ENV === 'development') {
            console.log(`${config.method?.toUpperCase()} ${config.url}`)
        }

        if (config.method === 'get') {
            config.params = {
                ...config.params,
                _t: Date.now()
            }
        }
        return config
    },
    error => {
        console.error('Erro na requisição', error)
        return Promise.reject(error)
    }
)

api.interceptors.response.use(
    response => {
        if (process.env.NODE_ENV === 'development') {
            console.log(`${response.config.method?.toUpperCase()} ${response.config.url}`, response.data)
        }
        return response
    },
    error => {
        if (!error.response) {
            alert('Erro de conexão.')
            return Promise.reject(error)
        }

        if (error.response.status === 401) {
            alert('Sessão expirada. Faça o login novamente.')
            window.location.replace('/auth')
        }

        if (error.response.status === 403) {
            alert('Você não tem permissão para isso.')
        }

        if (error.response.status === 500) {
            alert('Erro no servidor. Tente novamente mais tarde.')
        }

        console.error('Error', {
            status: error.response.status,
            data: error.response.data,
            url: error.config?.url
        })

        return Promise.reject(error)
    }
)

export default api