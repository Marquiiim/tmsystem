import styles from './ticketForm.module.css'

import PriorityInput from '../input/PriorityInput'
import TypeTicketInput from '../input/TypeTicketInput'

function TicketForm({ typeTicket, priority, departmentKey }) {

    return (
        <section className={styles.container}>
            <form className={styles.content}>
                <h3 className={styles.title_form}>
                    CENTRAL DE CHAMADOS - {departmentKey}
                </h3>
                <TypeTicketInput data={typeTicket} />
                <PriorityInput data={priority} />
                <button className={styles.button_submit} type='submit'>
                    Abrir ticket
                </button>
            </form>
        </section>
    )
}

export default TicketForm