import styles from './dialog.module.css'
import api from '../../service/api'
import { useCallback, useEffect, useRef } from 'react'

function Dialog({ newStatus, ticketInfo, onSuccess, onClose }) {
    const { ticket_id } = ticketInfo
    const inputRef = useRef(null)
    const toggleStatus = useCallback(async (customReason) => {
        let reason = customReason

        if (!reason) reason = inputRef.current?.value || 'Aguardando feedback do problema...'
        if (!reason.trim()) return

        try {
            await api.post('/api/tickets/change-status', { ticket_id, newStatus, reason })
            onSuccess()
            onClose()
        } catch (error) {
            alert(error.response?.data?.message || '[TMSYSTEM] Erro ao processar solicitação')
        }
    }, [newStatus, ticket_id, onSuccess, onClose])

    useEffect(() => {
        if (newStatus === 'em_andamento') toggleStatus()
    }, [newStatus, toggleStatus])

    if (newStatus === 'em_andamento') return null

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h2>
                    Alterar o status do chamado para: {newStatus.toUpperCase()}
                </h2>
                <div>
                    <small>
                        # {ticketInfo.ticket_id} - {ticketInfo.category} / {ticketInfo.subcategory}
                    </small>
                    <p>
                        {ticketInfo.description}
                    </p>
                </div>
                <input
                    ref={inputRef}
                    type='text'
                    placeholder='Motivo da alteração para esse status selecionado'
                    autoFocus
                    required />
                <button onClick={() => toggleStatus(inputRef.current?.value)}>
                    Alterar status
                </button>
                <button onClick={onClose}>
                    Cancelar
                </button>
            </div>
        </div>
    )
}

export default Dialog