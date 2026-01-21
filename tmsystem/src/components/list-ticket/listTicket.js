import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { departmentOptions } from '../../data/ticketOptions';
import Layout from '../../layout/layout'
import styles from './listTicket.module.css'

function ListTicket() {

    const { department } = useParams()
    const navigate = useNavigate()
    const [departmentData, setDepartmentData] = useState(null)

    useEffect(() => {

        const deptData = departmentOptions[department]

        if (deptData) {
            setDepartmentData(deptData)
        } else {
            navigate('/home')
        }
    }, [department, navigate])

    const handleCategoryClick = (categoryValue) => {
        navigate(`/ticket/${department}/new`, {
            state: {
                department: department,
                category: categoryValue,
                departmentData: departmentData
            }
        })
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