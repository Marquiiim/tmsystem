import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import styles from './header.module.css'

import { FiLogOut, FiHome, FiTag, FiSettings } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

function Header() {

    const navigate = useNavigate()

    async function handleLogout() {
        try {
            const response = await axios.post('http://localhost:5000/api/sessions/logout', {}, { withCredentials: true })
            if (response.status === 204) navigate('/auth', { replace: true })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <header className={styles.container}>
            <div className={styles.content}>
                <h1>
                    <FiSettings /> Ticket Management System
                </h1>
                <ul className={styles.list_header}>
                    <li>
                        <button type='button' onClick={(e) => {
                            e.preventDefault()
                            navigate('/home')
                        }}>
                            <FiHome /> Início
                        </button>
                    </li>
                    <li>
                        <button type='button' onClick={(e) => {
                            e.preventDefault()
                            navigate('/profile')
                        }}>
                            <CgProfile /> Perfil
                        </button>
                    </li>
                    <li>
                        <button type='button' onClick={(e) => {
                            e.preventDefault()
                            navigate('/profile')
                        }}>
                            <FiTag /> Meus Chamados
                        </button>
                    </li>
                    <li>
                        <button type='button' onClick={handleLogout}>
                            <FiLogOut /> Deslogar
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header