import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import Layout from '../../layout/layout'
import styles from './profilepage.module.css'
import axios from 'axios'

function Profilepage() {

    const location = useLocation()
    const [userData, setUserData] = useState([])

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/users/search-profile', { withCredentials: true })
                setUserData(response.data.user)
            } catch (error) {
                console.log(error)
            }
        }
        fetchUserProfile()
    }, [location.pathname])

    return (
        <Layout>
            <section className={styles.container}>
                <div className={styles.content}>
                    <div>
                        CRACHÁ TMSYSTEM
                    </div>
                    <div className={styles.list_user_info}>
                        <ul>
                            <li>
                                ID
                                <span>
                                    {userData.id || 'N/A'}
                                </span>
                            </li>
                            <li>
                                NOME
                                <span>
                                    {userData.name || 'N/A'}
                                </span>
                            </li>
                            <li>
                                EMAIL
                                <span>
                                    {userData.email || 'N/A'}
                                </span>
                            </li>
                            <li>
                                FUNÇÃO
                                <span>
                                    {userData.role || 'N/A'}
                                </span>
                            </li>
                            <li>
                                SETOR
                                <span>
                                    {userData.department_slug || 'N/A'}
                                </span>
                            </li>
                            <li>
                                CONTA CRIADA EM
                                <span>
                                    {new Date(userData.created_at).toLocaleDateString('pt-BR') || 'N/A'}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Profilepage