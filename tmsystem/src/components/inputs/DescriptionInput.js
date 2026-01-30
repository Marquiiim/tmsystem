import styles from './DescriptionInput.module.css'

function DescriptionInput({ value, onChange }) {

    const handleDescription = (e) => {
        const descriptionValue = e.target.value
        onChange(descriptionValue)
    }

    return (
        <textarea
            placeholder="Descreva seu problema nesse campo"
            className={styles.description_input}
            onChange={handleDescription}
            value={value}
            required />
    )
}

export default DescriptionInput