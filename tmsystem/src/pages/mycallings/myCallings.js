import styles from './myCallings.module.css'
import { useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../service/api'

const ENDPOINTS = {
    DEPARTMENT: '/department-tickets',
    MY_TICKETS: '/my-tickets',
    ASSUMED: '/assumed-tickets'
}

const MODULE_TITLES = {
    [ENDPOINTS.DEPARTMENT]: 'CHAMADOS DO MEU SETOR',
    [ENDPOINTS.MY_TICKETS]: 'MEUS CHAMADOS ABERTOS',
    [ENDPOINTS.ASSUMED]: 'CHAMADOS ASSUMIDOS POR MIM'
}

function MyCallings() {
    const navigate = useNavigate()
    const [typeEndpoint, setTypeEndpoint] = useState(ENDPOINTS.DEPARTMENT)
    const [ticketsData, setTicketsData] = useState([])
    const [loading, setLoading] = useState(true)
    const [refresh, setRefresh] = useState(0)

    useEffect(() => {
        const searchTicket = async () => {
            setLoading(true)
            try {
                const response = await api.post(`/api/tickets${typeEndpoint}`, {})

                if (response.data?.success && Array.isArray(response.data.tickets)) {
                    setTicketsData(response.data.tickets)
                } else {
                    setTicketsData([])
                }
            } catch (error) {
                console.error(error.response?.data?.message || '[TMSYSTEM] Erro ao processar solicitação')
                setTicketsData([])
            } finally {
                setLoading(false)
            }
        }

        searchTicket()
    }, [typeEndpoint, refresh])

    const takeTicket = useCallback(async (ticket_id) => {
        setLoading(true)
        try {
            await api.post('/api/tickets/assume-ticket', { ticket_id })
            setRefresh(prev => prev + 1)
        } catch (error) {
            alert(error.response?.data?.message || '[TMSYSTEM] Erro ao processar solicitação')
        } finally {
            setLoading(false)
        }
    }, [])

    const toggleStatus = useCallback(async (e, ticket_id) => {
        if (!e?.target?.value) return
        const newStatus = e.target.value

        try {
            await api.post('/api/tickets/toggle-status', { ticket_id, newStatus })
            setRefresh(prev => prev + 1)
        } catch (error) {
            alert(error.response?.data?.message || '[TMSYSTEM] Erro ao processar solicitação')
            e.target.value = ''
        }
    }, [])

    const cancelTicket = useCallback(async (ticket_id) => {
        setLoading(true)
        try {
            await api.post('/api/tickets/cancel-ticket', { ticket_id })
            setRefresh(prev => prev + 1)
        }
        catch (error) {
            alert(error.response?.data?.message || '[TMSYSTEM] Erro ao processar solicitação')
        } finally {
            setLoading(false)
        }
    }, [])

    if (loading && ticketsData.length === 0) {
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
                    <li onClick={() => setTypeEndpoint(ENDPOINTS.DEPARTMENT)}>
                        Chamados do meu setor
                    </li>
                    <li onClick={() => setTypeEndpoint(ENDPOINTS.MY_TICKETS)}>
                        Meus chamados abertos
                    </li>
                    <li onClick={() => setTypeEndpoint(ENDPOINTS.ASSUMED)}>
                        Chamados assumidos por mim
                    </li>
                    <li onClick={() => navigate('/home', { replace: true })}>
                        Voltar
                    </li>
                </ul>
            </header>

            <div className={styles.callings__list}>
                {ticketsData.length > 0 ? (
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
                                    {typeEndpoint === '/assumed-tickets' &&
                                        <select onChange={(e) => toggleStatus(e, ticket.ticket_id)}
                                            className={styles.toggleStatusButton}
                                            defaultValue={ticket?.status || ''}>
                                            <option value=''>Alterar status</option>
                                            <option value='em_andamento'>Em andamento</option>
                                            <option value='resolvido'>Resolvido</option>
                                            <option value='fechado'>Fechado</option>
                                            <option value='cancelado'>Cancelado</option>
                                        </select>
                                    }
                                    <button onClick={() => cancelTicket(ticket.ticket_id)} className={styles.viewButton}>
                                        Cancelar
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className={styles.ticketsNotFound}>
                        <h2>
                            {MODULE_TITLES[typeEndpoint]}
                        </h2>
                        <span className={styles.emoji}>
                            📭
                        </span>
                        <h3>
                            Nenhum chamado encontrado
                        </h3>
                        <p>
                            Não há chamados disponíveis neste módulo no momento.
                        </p>
                    </div>
                )}
            </div>
        </section>
    )
}

export default MyCallings