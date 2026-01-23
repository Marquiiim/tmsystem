import styles from './RemoteInput.module.css'

function RemoteInput() {

    return (
        <input type="text" placeholder="Digite seu acesso remoto" className={styles.remote_access_input} />
    )
}

export default RemoteInput