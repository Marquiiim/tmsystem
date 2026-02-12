import styles from './myCallings.module.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function MyCallings() {

    const navigate = useNavigate()
    const [typeEndpoint, setTypeEndpoint] = useState('/department-tickets')
    const [ticketsData, setTicketsData] = useState([])
    const [loading, setLoading] = useState(true)
    const [refresh, setRefresh] = useState(0)

    useEffect(() => {
        async function searchTicket() {
            setTicketsData([])
            try {
                const response = await axios.post(`http://localhost:5000/api/tickets${typeEndpoint}`, {}, { withCredentials: true })

                if (response.data?.success && Array.isArray(response.data.tickets)) setTicketsData(response.data.tickets)

            } catch (error) {
                console.log(error.message)
                setTicketsData([])
            } finally {
                setLoading(false)
            }
        }
        searchTicket()
    }, [typeEndpoint, refresh])

    const takeTicket = async (ticket_id) => {
        setLoading(true)
        try {
            await axios.post('http://localhost:5000/api/tickets/assume-ticket', { ticket_id: ticket_id }, { withCredentials: true })
            setRefresh(refresh + 1)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const cancelTicket = async (ticket_id) => {
        setLoading(true)
        try {
            await axios.post('http://localhost:5000/api/tickets/cancel-ticket', { ticket_id: ticket_id }, { withCredentials: true })
            setRefresh(refresh + 1)
        }
        catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return (
            <div className="loader">
                <div className="justify-content-center jimu-primary-loading"></div>
            </div>
        )
    }

    return (
        <section className={styles.container}>
            <header className={styles.content}>
                <ul className={styles.callings_type}>
                    <li onClick={() => setTypeEndpoint('/department-tickets')}>
                        Chamados do meu setor
                    </li>
                    <li onClick={() => setTypeEndpoint('/my-tickets')}>
                        Meus chamados abertos
                    </li>
                    <li onClick={() => setTypeEndpoint('/assumed-tickets')}>
                        Chamados assumidos por mim
                    </li>
                    <li onClick={() => navigate('/home', { replace: true })}>
                        Voltar
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
                                    <span className={styles.detailValue}>{ticket.department_name}</span>
                                </div>

                                <div className={styles.detailRow}>
                                    <span className={styles.detailLabel}>Solicitante:</span>
                                    <span className={styles.detailValue}>{ticket.requester_name}</span>
                                </div>

                                <div className={styles.detailRow}>
                                    <span className={styles.detailLabel}>Atribuído:</span>
                                    <span className={styles.detailValue}>
                                        {ticket.assigned_to_name || 'Aguardando suporte...'}
                                    </span>
                                </div>
                            </div>

                            <div className={styles.cardFooter}>
                                <span className={styles.date}>
                                    {new Date(ticket.created_at).toLocaleDateString('pt-BR')}
                                </span>
                                {typeEndpoint !== '/my-tickets' &&
                                    <button onClick={() => navigate(`/mycallings/${ticket.ticket_id}`)} className={styles.viewButton}>
                                        Ver detalhes
                                    </button>
                                }
                                {typeEndpoint === '/department-tickets' &&
                                    <button onClick={() => takeTicket(ticket.ticket_id)} className={styles.viewButton}>
                                        Assumir
                                    </button>
                                }
                                <button onClick={() => cancelTicket(ticket.ticket_id)} className={styles.viewButton}>
                                    Cancelar
                                </button>
                            </div>
                        </li>))}
                </ul>
            </div>
        </section>
    )
}

export default MyCallings