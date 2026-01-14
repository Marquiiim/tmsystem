import { departmentOptions } from '../../../data/ticketOptions'

import Layout from '../../../layout/layout'
import TicketForm from '../../../components/form/ticketForm'

function rhPage() {

    return (
        <Layout>
            <TicketForm
                typeTicket={departmentOptions.rh}
                priority={departmentOptions.rh}
                departmentKey={departmentOptions.rh.name} />
        </Layout>
    )
}

export default rhPage