import styles from './DescriptionInput.module.css'

function DescriptionInput() {

    return (
        <textarea placeholder="Descreva seu problema nesse campo" className={styles.description_input} />
    )
}

export default DescriptionInput