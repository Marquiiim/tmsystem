import styles from './TypeTicketInput.module.css'
import { useState } from "react"

function TypeTicketInput({ data }) {
    const { categories, subcategories } = data
    const [selectedCategory, setSelectedCategory] = useState('')

    return (
        <div className={styles.info_tickets}>
            <select className={styles.type_ticket} name='type-ticket' value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} required>
                <option value=''>Selecione uma categoria</option>
                {categories.map(({ value, label }, index) => (
                    <option key={index} value={value}>
                        {label}
                    </option>
                ))}
            </select>
            <select className={styles.sub_type_ticket} name='sub-type-ticket' required disabled={!selectedCategory}>
                <option value=''>{selectedCategory ? 'Selecione uma subcategoria' : 'Primeiro selecione uma categoria'}</option>
                {selectedCategory &&
                    subcategories[selectedCategory]?.map(({ value, label }, index) => (
                        <option key={index} value={value}>
                            {label}
                        </option>
                    ))}
            </select>

            <input placeholder='Seu acesso remoto AnyDesk/TeamViewer' required />

            <input placeholder='(OPCIONAL) Descreve seu erro ou problema' />

            {selectedCategory === 'improvements' &&
                <input placeholder='Descreva sua sugestão de melhoria para o módulo' />
            }
        </div>
    )
}

export default TypeTicketInput