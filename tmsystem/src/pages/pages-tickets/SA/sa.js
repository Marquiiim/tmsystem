import { departmentOptions } from '../../../data/ticketOptions'

import Layout from '../../../layout/layout'
import TicketForm from '../../../components/form/ticketForm'

function tiPage() {

    return (
        <Layout>
            <TicketForm
                typeTicket={departmentOptions.services}
                priority={departmentOptions.services}
                departmentKey={departmentOptions.services.name} />
        </Layout>
    )
}

export default tiPage