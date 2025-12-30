import styles from './layout.module.css'

import Header from './header/header'
import Footer from './footer/footer'

function Layout({ children }) {

    return (
        <div className={styles.content_layout}>
            <Header />

            <main className={styles.container_children_layout}>
                {children}
            </main>

            <Footer />
        </div>
    )
}

export default Layout