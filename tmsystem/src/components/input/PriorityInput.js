import styles from './PriorityInput.module.css'

import { useLocation } from 'react-router-dom'

function PriorityInput() {
    const location = useLocation()
    const { priorities } = location.state.departmentData
    return (
        <select className={styles.priority} name='priority' required>
            <option value=''>Selecione uma prioridade</option>
            {priorities.map((priority) => (
                <option key={priority.value} value={priority.value} className={`${styles.priority_option} ${styles[`${priority.color}`]}`}>
                    {priority.label}
                </option>
            ))}
        </select>
    )
}

export default PriorityInput