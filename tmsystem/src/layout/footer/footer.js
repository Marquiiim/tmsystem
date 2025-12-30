import styles from './footer.module.css'

function Footer() {

    return (
        <footer className={styles.container}>
            <div className={styles.content}>
                <h4>TMSystem</h4>
                <p>Beta | © 2024</p>
                <p>suporte@tmsystem.com</p>
                <p className={styles.status}>
                    Sistema Operacional
                </p>
            </div>
        </footer>
    )
}

export default Footer