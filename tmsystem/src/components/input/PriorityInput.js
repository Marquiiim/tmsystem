import styles from './PriorityInput.module.css'

import { useLocation } from 'react-router-dom'

function PriorityInput({ value, onChange }) {
    const location = useLocation()
    const { priorities } = location.state.departmentData

    const handlePrioritySelected = (e) => {
        const selectedValue = e.target.value
        onChange(selectedValue)
    }

    return (
        <select
            className={styles.priority}
            name='priority'
            onChange={handlePrioritySelected}
            value={value}
            required>
            <option
                value=''
                disabled>Selecione uma prioridade
            </option>
            {priorities.map((priority) => (
                <option
                    key={priority.value}
                    value={priority.value}
                    className={`${styles.priority_option} ${styles[`${priority.color}`]}`}>
                    {priority.label}
                </option>
            ))}
        </select>
    )
}

export default PriorityInput