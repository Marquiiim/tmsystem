import axios from 'axios'
import { useState } from 'react';

import styles from './authpage.module.css';

function Authpage() {
    return (
        <section className={styles.container}>
            <form className={styles.container_form}
                onSubmit={(e) => e.preventDefault()}>
                <h1 className={styles.container_form_title}>
                    Ticket Management System
                </h1>
                <div className={styles.container_form_inputs}>
                    <input type="text" placeholder="E-mail" />
                    <input type="password" placeholder="Senha" />
                </div>
                <div className={styles.container_form_buttons}>
                    <button type="submit">
                        LOGIN
                    </button>
                    <button>-
                        NÃO TENHO UMA CONTA
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Authpage;