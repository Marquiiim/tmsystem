import axios from 'axios'
import { useState } from 'react';

import styles from './authpage.module.css';

function Authpage() {

    // VARIÁVEIS DE CONTROLE
    const [typeForm, setTypeForm] = useState(true)

    function authType(e) {
        e.preventDefault()

        
    }

    return (
        <section className={styles.container}>
            <form className={styles.container_form}
                onSubmit={(e) => authType(e)}>
                <h1 className={styles.container_form_title}>
                    Ticket Management System - {typeForm ? 'Logar' : 'Registrar'}
                </h1>
                <div className={styles.container_form_inputs}>
                    {typeForm ? (
                        <>
                            <input type="email" placeholder="E-mail" required />
                            <input type="password" placeholder="Senha" required />
                        </>
                    ) : (
                        <>
                            <input type="number" placeholder="Código da empresa" required />
                            <input type="text" placeholder="Nome" required />
                            <input type="email" placeholder="E-mail" required />
                            <input type="password" placeholder="Senha" required />
                            <input type="password" placeholder="Confirmar senha" required />
                        </>
                    )
                    }
                </div>
                <div className={styles.container_form_buttons}>
                    <button type="submit">
                        {typeForm ? 'LOGAR' : 'REGISTRAR'}
                    </button>
                    <button onClick={() => !typeForm ? setTypeForm(true) : setTypeForm(false)}>
                        {typeForm ? 'NÃO TENHO UMA CONTA' : 'VOLTAR PARA LOGAR'}
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Authpage;