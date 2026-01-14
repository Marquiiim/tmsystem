import { departmentOptions } from '../../../data/ticketOptions'

import Layout from '../../../layout/layout'
import TicketForm from '../../../components/form/ticketForm'

function tiPage() {

    return (
        <Layout>
            <TicketForm
                typeTicket={departmentOptions.maintenance}
                priority={departmentOptions.maintenance}
                departmentKey={departmentOptions.maintenance.name} />
        </Layout>
    )
}

export default tiPage