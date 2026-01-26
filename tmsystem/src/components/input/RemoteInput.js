import styles from './RemoteInput.module.css'

function RemoteInput({ value, onChange }) {

    const handleRemote = (e) => {
        const remoteValue = e.target.value
        onChange(remoteValue)
    }

    return (
        <input
            type="text"
            placeholder="Digite seu acesso remoto (Apenas números e traços)"
            className={styles.remote_access_input}
            onChange={handleRemote}
            value={value}
            required />
    )
}

export default RemoteInput