import { departmentOptions } from '../../../data/ticketOptions'

import Layout from '../../../layout/layout'

import PriorityInput from '../../../components/input/PriorityInput'
import TypeTicketInput from '../../../components/input/TypeTicketInput'

function tiPage() {

    return (
        <Layout>
            <TypeTicketInput data={departmentOptions.ti} />
            <PriorityInput data={departmentOptions.ti} />
        </Layout>
    )
}

export default tiPage