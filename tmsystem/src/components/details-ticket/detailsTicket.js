import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

import styles from './detailsTicket.module.css';

function DetailsTicket() {
    const { ticket_id } = useParams()
    const [ticket, setTicket] = useState(null)

    useEffect(() => {
        async function fetchTicketDetails() {
            try {
                const response = await axios.post('http://localhost:5000/api/tickets/details-ticket', { ticket_id: ticket_id }, { withCredentials: true })
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        }

        fetchTicketDetails()
    }, [ticket_id])
    return (
        <div className={styles.detailsTicket}>
            <div className={styles.ticketHeader}>
                <div className={styles.headerMain}>
                    <h1 className={styles.ticketTitle}>
                        <span className={styles.ticketId}>#{ticket.ticket_id}</span>
                        {ticket.description}
                    </h1>

                    {ticket.anydesk_id && (
                        <div className={styles.anydeskSection}>
                            <span className={styles.anydeskLabel}>Anydesk ID:</span>
                            <code className={styles.anydeskCode}>{ticket.anydesk_id}</code>
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
                            {ticket.status}
                        </span>
                    </div>

                    <div className={styles.statusGroup}>
                        <span className={styles.priorityLabel}>Prioridade:</span>
                        <span
                            className={styles.priorityBadge}
                            data-priority={ticket.priority.toLowerCase()}
                        >
                            {ticket.priority}
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
                                {ticket.category}
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
                                {ticket.department}
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
                                {ticket.requester}
                            </span>
                        </div>
                        <div className={styles.infoRow}>
                            <span className={styles.infoLabel}>Responsável:</span>
                            <span className={styles.infoValue}>
                                {ticket.assigned_to || 'Aguardando atribuição'}
                            </span>
                        </div>
                        <div className={styles.infoRow}>
                            <span className={styles.infoLabel}>Criado por:</span>
                            <span className={styles.infoValue}>
                                {ticket.created_by || 'Sistema'}
                            </span>
                        </div>
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