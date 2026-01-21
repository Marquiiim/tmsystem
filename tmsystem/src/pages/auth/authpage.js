import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import styles from './authpage.module.css';

function Authpage() {

    const [typeForm, setTypeForm] = useState(true)
    const [typeError, setTypeError] = useState('')
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    async function authType(e) {
        e.preventDefault()

        setTypeError('')
        setError(false)
        const form = e.currentTarget
        const formData = new FormData(form)
        const authData = Object.fromEntries(formData)

        try {
            const endpoint = typeForm ? '/login' : '/register'
            const response = await axios.post(`http://localhost:5000/api/auth${endpoint}`, authData, { withCredentials: true })
            if (response?.data?.redirectTo) navigate(response.data.redirectTo, { replace: true })
        } catch (error) {
            setTypeError(error?.response?.data?.message)
            setError(true)
        }
    }

    return (
        <section className={styles.container}>
            <form className={styles.container_form}
                onSubmit={(e) => authType(e)}>
                <h1 className={styles.container_form_title}>
                    Ticket Management System - {typeForm ? 'Logar' : 'Registrar'}
                </h1>
                {error &&
                    <p className={styles.error_message}>
                        {typeError}
                    </p>
                }
                <div className={styles.container_form_inputs}>
                    {typeForm ? (
                        <>
                            <input type="email" name='email' placeholder="E-mail" required />
                            <input type="password" name='password' placeholder="Senha" required />
                        </>
                    ) : (
                        <>
                            <input type="number" name='companyCode' placeholder="Código da empresa" required />
                            <input type="text" name='name' placeholder="Nome" required />
                            <input type="email" name='email' placeholder="E-mail" required />
                            <input type="password" name='password' placeholder="Senha" required />
                            <input type="password" name='confirmPassword' placeholder="Confirmar senha" required />
                        </>
                    )
                    }
                </div>
                <div className={styles.container_form_buttons}>
                    <button type="submit">
                        {typeForm ? 'LOGAR' : 'REGISTRAR'}
                    </button>
                    <button onClick={() => setTypeForm(!typeForm)}>
                        {typeForm ? 'NÃO TENHO UMA CONTA' : 'VOLTAR PARA LOGAR'}
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Authpage;