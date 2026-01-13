import { departmentOptions } from '../../../data/ticketOptions'

import Layout from '../../../layout/layout'
import styles from './ti.module.css'

import PriorityInput from '../../../components/input/PriorityInput'
import TypeTicketInput from '../../../components/input/TypeTicketInput'

function tiPage() {

    return (
        <Layout>
            <section className={styles.container}>
                <form className={styles.content}>
                    <TypeTicketInput data={departmentOptions.ti} />
                    <PriorityInput data={departmentOptions.ti} />
                    <button className={styles.button_submit} type='submit'>
                        Abrir ticket
                    </button>
                </form>
            </section>
        </Layout>
    )
}

export default tiPage