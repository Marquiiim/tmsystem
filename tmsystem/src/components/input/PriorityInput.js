import styles from './PriorityInput.module.css'

function priorityInput({ data }) {
    const { priorities } = data
    return (
        <select className={styles.priority} name='priority' required>
            <option value=''>Selecione uma prioridade</option>
            {priorities.map(({ value, label, color }, index) => (
                <option key={index} value={value} className={`${styles.prority_option} ${styles[`${color}`]}`}>
                    {label}
                </option>
            ))}
        </select>
    )
}

export default priorityInput