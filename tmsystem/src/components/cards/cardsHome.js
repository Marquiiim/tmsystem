import { Link } from 'react-router-dom';

import styles from './cardsHome.module.css'

function cardsHome({ title, description, path }) {

    return (
        <li className={styles.card}>
            <Link to={path}>
                <h3>
                    {title}
                </h3>
                <p>
                    {description}
                </p>
            </Link>
        </li>
    )
}

export default cardsHome