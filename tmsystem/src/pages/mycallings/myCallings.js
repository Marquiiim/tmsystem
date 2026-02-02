import Layout from '../../layout/layout'
import styles from './myCallings.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

function MyCallings() {

    const [typeEndpoint, setTypeEndpoint] = useState(true)
    const [ticketsData, setTicketsData] = useState([])

    useEffect(() => {
        async function searchTicket() {
            try {
                const endpoint = typeEndpoint ? '/my-tickets' : '/department-tickets'
                const response = await axios.get(`http://localhost:5000/api/tickets${endpoint}`, { withCredentials: true })
                setTicketsData(response.data.myTickets)
            } catch (error) {
                console.log(error)
            }
        }
        searchTicket()
    }, [typeEndpoint])

    return (
        <Layout>
            <section className={styles.container}>
                <header className={styles.content}>
                    <ul className={styles.callings_type}>
                        <li onClick={() => setTypeEndpoint(false)}>
                            Meu setor
                        </li>
                        <li onClick={() => setTypeEndpoint(true)}>
                            Meus chamados
                        </li>
                    </ul>
                </header>
                <div className={styles.callings__list}>
                    <ul>
                        {ticketsData.map((ticket) => (
                            <li key={ticket.ticket_id} className={styles.ticketCard}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.ticketInfo}>
                                        <h3 className={styles.ticketTitle}>
                                            <span className={styles.ticketId}>#{ticket.ticket_id}</span>
                                            {ticket.description.length > 60
                                                ? `${ticket.description.substring(0, 60)}...`
                                                : ticket.description}
                                        </h3>
                                        {ticket.anydesk_id && (
                                            <span className={styles.anydeskId}>
                                                Anydesk: {ticket.anydesk_id}
                                            </span>
                                        )}
                                    </div>

                                    <div className={styles.ticketMeta}>
                                        <span
                                            className={styles.statusBadge}
                                            data-status={ticket.status}
                                        >
                                            {ticket.status}
                                        </span>
                                        <span
                                            className={styles.priorityBadge}
                                            data-priority={ticket.priority}
                                        >
                                            {ticket.priority}
                                        </span>
                                    </div>
                                </div>

                                <div className={styles.cardDetails}>
                                    <div className={styles.detailRow}>
                                        <span className={styles.detailLabel}>Categoria:</span>
                                        <span className={styles.detailValue}>
                                            {ticket.category}
                                            {ticket.subcategory && ` • ${ticket.subcategory}`}
                                        </span>
                                    </div>

                                    <div className={styles.detailRow}>
                                        <span className={styles.detailLabel}>Setor:</span>
                                        <span className={styles.detailValue}>{ticket.department}</span>
                                    </div>

                                    <div className={styles.detailRow}>
                                        <span className={styles.detailLabel}>Solicitante:</span>
                                        <span className={styles.detailValue}>{ticket.requester}</span>
                                    </div>

                                    <div className={styles.detailRow}>
                                        <span className={styles.detailLabel}>Atribuído:</span>
                                        <span className={styles.detailValue}>
                                            {ticket.assigned_to || 'Aguardando suporte'}
                                        </span>
                                    </div>
                                </div>

                                <div className={styles.cardFooter}>
                                    <span className={styles.date}>
                                        {new Date(ticket.created_at).toLocaleDateString('pt-BR')}
                                    </span>
                                    <button className={styles.viewButton}>
                                        Ver detalhes
                                    </button>
                                </div>
                            </li>))}
                    </ul>
                </div>
            </section>
        </Layout>
    )
}

export default MyCallings