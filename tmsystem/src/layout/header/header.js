import styles from './header.module.css'

import { FiLogOut, FiHome } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

function Header() {

    return (
        <header className={styles.container}>
            <div className={styles.content}>
                <h1>
                    Ticket Management System
                </h1>
                <ul>
                    <li>
                        <FiHome /> Início
                    </li>
                    <li>
                        <CgProfile /> Perfil
                    </li>
                    <li>
                        <FiLogOut /> Deslogar
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header