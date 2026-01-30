import styles from './ticketForm.module.css'
import Layout from '../../layout/layout'

import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

import PriorityInput from '../inputs/PriorityInput'
import TypeTicketInput from '../inputs/TypeTicketInput'
import RemoteInput from '../inputs/RemoteInput'
import DescriptionInput from '../inputs/DescriptionInput'

function TicketForm() {
    const location = useLocation()
    const { category, department, department_id } = location.state
    const [config, setConfig] = useState(null)
    const [formData, setFormData] = useState({
        department_id: department_id,
        category: category,
        subcategory: '',
        priority: '',
        anydesk: '',
        description: ''
    })

    useEffect(() => {
        localStorage.removeItem('additionalInputs')
    }, [])

    useEffect(() => {
        const updateConfig = () => {
            try {
                const data = localStorage.getItem('additionalInputs')
                setConfig(data ? JSON.parse(data) : null)
            } catch (error) {
                setConfig(null)
            }
        }

        updateConfig()

        const interval = setInterval(updateConfig, 1000)

        return () => clearInterval(interval)
    }, [])

    const handleChange = (fieldName, value) => {
        setFormData(prev => ({
            ...prev,
            [fieldName]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await axios.post('http://localhost:5000/api/tickets/create',
                {
                    department_id: formData.department_id,
                    category: formData.category,
                    subcategory: formData.subcategory,
                    priority: formData.priority,
                    description: formData.description,
                    anydesk: formData.anydesk
                },
                { withCredentials: true })

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Layout>
            <section className={styles.container}>
                <form className={styles.content} onSubmit={handleSubmit}>
                    <div className={styles.titles_content}>
                        <h3 className={styles.title_form}>
                            CENTRAL DE CHAMADOS - {department.toUpperCase()}
                        </h3>
                        <p className={styles.subtitle_form}>
                            CATEGORIA: {category.toUpperCase()}
                        </p>
                    </div>

                    <TypeTicketInput value={formData.subcategory} onChange={(value) => handleChange('subcategory', value)} />

                    <PriorityInput value={formData.priority} onChange={(value) => handleChange('priority', value)} />

                    {config?.requireAnyDesk && <RemoteInput value={formData.anydesk} onChange={(value) => handleChange('anydesk', value)} />}

                    {config?.requiresDescription && <DescriptionInput value={formData.description} onChange={(value) => handleChange('description', value)} />}

                    <button className={styles.button_submit} type='submit'>
                        Abrir ticket
                    </button>
                </form>
            </section>
        </Layout>
    )
}

export default TicketForm