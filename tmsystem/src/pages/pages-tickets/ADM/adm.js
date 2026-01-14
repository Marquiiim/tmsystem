import { departmentOptions } from '../../../data/ticketOptions'

import Layout from '../../../layout/layout'
import TicketForm from '../../../components/form/ticketForm'

function tiPage() {

    return (
        <Layout>
            <TicketForm
                typeTicket={departmentOptions.admin}
                priority={departmentOptions.admin}
                departmentKey={departmentOptions.admin.name} />
        </Layout>
    )
}

export default tiPage