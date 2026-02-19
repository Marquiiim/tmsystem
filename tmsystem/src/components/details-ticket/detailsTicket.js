import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../service/api';

import styles from './detailsTicket.module.css';

function DetailsTicket() {
    const { ticket_id } = useParams()
    const [loading, setLoading] = useState(true)
    const [ticket, setTicket] = useState(null)

    useEffect(() => {
        async function fetchTicketDetails() {
            try {
                const response = await api.post('/api/tickets/details-ticket', { ticket_id })
                console.log(response.data.ticket)
                setTicket(response.data.ticket)
            } catch (error) {
                alert(error.response?.data?.message || '[TMSYSTEM] Erro ao processar solicitação')
            } finally {
                setLoading(false)
            }
        }
        fetchTicketDetails()
    }, [ticket_id])

    if (loading) {
        return (
            <div className="loader">
                <div className="justify-content-center jimu-primary-loading"></div>
            </div>
        )
    }

    return (
        <div className={styles.detailsTicket}>
            <div className={styles.ticketHeader}>
                <div className={styles.headerMain}>
                    <h1 className={styles.ticketTitle}>
                        <span className={styles.ticketId}>#{ticket.ticket_id || 'N/A'}</span>
                        {ticket.description || 'N/A'}
                    </h1>

                    {ticket.anydesk_id && (
                        <div className={styles.anydeskSection}>
                            <span className={styles.anydeskLabel}>Anydesk ID:</span>
                            <code className={styles.anydeskCode}>{ticket.anydesk_id || 'N/A'}</code>
                        </div>
                    )}
                </div>

                <div className={styles.statusContainer}>
                    <div className={styles.statusGroup}>
                        <span className={styles.statusLabel}>Status:</span>
                        <span
                            className={styles.statusBadge}
                            data-status={ticket.status.toLowerCase()}
                        >
                            {ticket.status || 'N/A'}
                        </span>
                    </div>

                    <div className={styles.statusGroup}>
                        <span className={styles.priorityLabel}>Prioridade:</span>
                        <span
                            className={styles.priorityBadge}
                            data-priority={ticket.priority.toLowerCase()}
                        >
                            {ticket.priority || 'N/A'}
                        </span>
                    </div>
                </div>
            </div>

            <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                    <div className={styles.infoHeader}>
                        <h3 className={styles.infoTitle}>
                            Informações do Chamado
                        </h3>
                    </div>
                    <div className={styles.infoContent}>
                        <div className={styles.infoRow}>
                            <span className={styles.infoLabel}>Categoria:</span>
                            <span className={styles.infoValue}>
                                {ticket.category || 'N/A'}
                            </span>
                        </div>
                        <div className={styles.infoRow}>
                            <span className={styles.infoLabel}>Subcategoria:</span>
                            <span className={styles.infoValue}>
                                {ticket.subcategory || 'Não especificada'}
                            </span>
                        </div>
                        <div className={styles.infoRow}>
                            <span className={styles.infoLabel}>Setor:</span>
                            <span className={styles.infoValue}>
                                {ticket.department_name || 'N/A'}
                            </span>
                        </div>
                    </div>
                </div>

                <div className={styles.infoCard}>
                    <div className={styles.infoHeader}>
                        <h3 className={styles.infoTitle}>
                            Pessoas Envolvidas
                        </h3>
                    </div>
                    <div className={styles.infoContent}>
                        <div className={styles.infoRow}>
                            <span className={styles.infoLabel}>Solicitante:</span>
                            <span className={styles.infoValue}>
                                {ticket.requester_name || 'N/A'}
                            </span>
                        </div>
                        <div className={styles.infoRow}>
                            <span className={styles.infoLabel}>Responsável:</span>
                            <span className={styles.infoValue}>
                                {ticket.assigned_to_name || 'Aguardando atribuição'}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.feedbackCompact}>
                <h3 className={styles.feedbackTitle}>
                    Feedback Técnico
                </h3>

                <div className={styles.feedbackContent}>
                    <div className={styles.feedbackRow}>
                        <span className={styles.feedbackLabel}>Status:</span>
                        <span
                            className={styles.statusBadge}
                            data-status={ticket.status?.toLowerCase()}
                        >
                            {'N/A'}
                        </span>
                    </div>

                    <div className={styles.feedbackRow}>
                        <span className={styles.feedbackLabel}>Motivo:</span>
                        <span className={styles.feedbackValue}>
                            {ticket.status_reason || 'Nenhum motivo registrado'}
                        </span>
                    </div>
                </div>
            </div>

            <div className={styles.additionalInfo}>
                <div className={styles.additionalCard}>
                    <h3 className={styles.additionalTitle}>
                        Informações Adicionais
                    </h3>
                    <div className={styles.additionalContent}>
                        <div className={styles.additionalRow}>
                            <span className={styles.additionalLabel}>Data de Criação:</span>
                            <span className={styles.additionalValue}>
                                {new Date(ticket.created_at).toLocaleDateString('pt-BR', {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit'
                                })}
                            </span>
                        </div>
                        <div className={styles.additionalRow}>
                            <span className={styles.additionalLabel}>Última Atualização:</span>
                            <span className={styles.additionalValue}>
                                {new Date(ticket.updated_at).toLocaleDateString('pt-BR', {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit'
                                })}
                            </span>
                        </div>
                        {ticket.closed_at && (
                            <div className={styles.additionalRow}>
                                <span className={styles.additionalLabel}>Data de Fechamento:</span>
                                <span className={styles.additionalValue}>
                                    {new Date(ticket.closed_at).toLocaleDateString('pt-BR', {
                                        day: '2-digit',
                                        month: '2-digit',
                                        year: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsTicket;