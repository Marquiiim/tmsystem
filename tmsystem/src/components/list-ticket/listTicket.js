import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import { departmentOptions } from '../../data/ticketOptions';
import Layout from '../../layout/layout'
import styles from './listTicket.module.css'

function ListTicket() {

    const { department } = useParams()
    const navigate = useNavigate()
    const [departmentData, setDepartmentData] = useState(null)

    useEffect(() => {
        if (departmentOptions[department]) {
            setDepartmentData(departmentOptions[department])
        } else {
            navigate('/ticket')
        }
    }, [department, navigate])

    const handleCategoryClick = (categoryValue) => {
        navigate(`/ticket/${department}/new?category=${categoryValue}`)
    }

    if (!departmentData) {
        return (
            <div className="loader">
                <div className="justify-content-center jimu-primary-loading"></div>
            </div>
        )
    }

    return (
        <Layout>
            <section className={styles.container}>
                <h3>
                    CENTRAL DE CHAMADOS {departmentData.name}
                </h3>
                <ul className={styles.content_list}>
                    {departmentData.categories.map((category) => (
                        <li key={category.value} onClick={() => handleCategoryClick(category.value)}>
                            <h4>
                                {category.label}
                            </h4>
                            <p>
                                {category.description}
                            </p>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}

export default ListTicket