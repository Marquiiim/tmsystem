import styles from './ticketForm.module.css'
import Layout from '../../layout/layout'

import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

import PriorityInput from '../input/PriorityInput'
import TypeTicketInput from '../input/TypeTicketInput'
import RemoteInput from '../input/RemoteInput'
import DescriptionInput from '../input/DescriptionInput'

function TicketForm() {
    const location = useLocation()
    const { category, department } = location.state
    const [config, setConfig] = useState(() => {
        const dataStorage = localStorage.getItem('additionalInputs')
        return dataStorage ? JSON.parse(dataStorage) : null
    })

    useEffect(() => {
        const loadData = () => {
            try {
                const dataStorage = localStorage.getItem('additionalInputs')
                if (dataStorage) {
                    const parsedData = JSON.parse(dataStorage)

                    if (JSON.stringify(parsedData) !== JSON.stringify(config)) setConfig(parsedData)
                } else {
                    setConfig(null)
                }
            } catch (error) {
                setConfig(null)
                console.log(error)
            }
        }

        loadData()
    }, [config])

    return (
        <Layout>
            <section className={styles.container}>
                <form className={styles.content}>
                    <div className={styles.titles_content}>
                        <h3 className={styles.title_form}>
                            CENTRAL DE CHAMADOS - {department.toUpperCase()}
                        </h3>
                        <p className={styles.subtitle_form}>
                            CATEGORIA: {category.toUpperCase()}
                        </p>
                    </div>

                    <TypeTicketInput />

                    <PriorityInput />

                    {config?.requireAnyDesk &&
                        <RemoteInput />
                    }

                    {config?.requiresDescription &&
                        <DescriptionInput />
                    }

                    <button className={styles.button_submit} type='submit'>
                        Abrir ticket
                    </button>
                </form>
            </section>
        </Layout>
    )
}

export default TicketForm