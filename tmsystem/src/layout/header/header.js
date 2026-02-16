import api from '../../service/api';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './header.module.css'

import { FiLogOut, FiHome, FiTag, FiSettings } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

function Header() {
    const navigate = useNavigate()

    const handleLogout = useCallback(async () => {
        try {
            const response = await api.post('/api/sessions/logout', {})
            if (response.status === 204) navigate('/auth', { replace: true })
        } catch (error) {
            alert(error.response?.data?.message || '[TMSYSTEM] Erro ao deslogar da conta.')
        }
    }, [navigate])

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
                            navigate('/mycallings')
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