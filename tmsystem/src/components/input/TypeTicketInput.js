import styles from './TypeTicketInput.module.css'

import { useLocation } from 'react-router-dom'

function TypeTicketInput() {

    const location = useLocation()
    const { subcategories } = location.state.departmentData

    return (

        <div className={styles.info_tickets}>
            <select>
                <option value=''>Selecione uma subcategoria</option>
                {Object.entries(subcategories).map(([categoryKey, categoryArray]) => (
                    <optgroup key={categoryKey} label={categoryKey.toUpperCase()}>
                        {categoryArray.map((subcategory) => (
                            <option key={subcategory.value} value={subcategory.value}>
                                {subcategory.label}
                            </option>
                        ))}
                    </optgroup>
                ))}
            </select>
        </div>
    )
}

export default TypeTicketInput