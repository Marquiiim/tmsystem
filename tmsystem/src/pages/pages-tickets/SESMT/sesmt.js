import { departmentOptions } from '../../../data/ticketOptions'

import Layout from '../../../layout/layout'
import TicketForm from '../../../components/form/ticketForm'

function tiPage() {

    return (
        <Layout>
            <TicketForm
                typeTicket={departmentOptions.sesmt}
                priority={departmentOptions.sesmt}
                departmentKey={departmentOptions.sesmt.name} />
        </Layout>
    )
}

export default tiPage