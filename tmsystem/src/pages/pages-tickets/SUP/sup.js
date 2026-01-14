import { departmentOptions } from '../../../data/ticketOptions'

import Layout from '../../../layout/layout'
import TicketForm from '../../../components/form/ticketForm'

function tiPage() {

    return (
        <Layout>
            <TicketForm
                typeTicket={departmentOptions.supervision}
                priority={departmentOptions.supervision}
                departmentKey={departmentOptions.supervision.name} />
        </Layout>
    )
}

export default tiPage