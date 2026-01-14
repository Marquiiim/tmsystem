import { departmentOptions } from '../../../data/ticketOptions'

import Layout from '../../../layout/layout'
import TicketForm from '../../../components/form/ticketForm'

function tiPage() {

    return (
        <Layout>
            <TicketForm
                typeTicket={departmentOptions.management}
                priority={departmentOptions.management}
                departmentKey={departmentOptions.management.name} />
        </Layout>
    )
}

export default tiPage