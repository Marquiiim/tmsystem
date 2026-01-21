import styles from './ticketForm.module.css'
import Layout from '../../layout/layout'

import { useLocation } from 'react-router-dom'

import PriorityInput from '../input/PriorityInput'
import TypeTicketInput from '../input/TypeTicketInput'

function TicketForm() {
    const location = useLocation()
    const { name } = location.state.departmentData
    return (
        <Layout>
            <section className={styles.container}>
                <form className={styles.content}>
                    <h3 className={styles.title_form}>
                        CENTRAL DE CHAMADOS - {name}
                    </h3>
                    <TypeTicketInput />
                    <PriorityInput />
                    <button className={styles.button_submit} type='submit'>
                        Abrir ticket
                    </button>
                </form>
            </section>
        </Layout>
    )
}

export default TicketForm