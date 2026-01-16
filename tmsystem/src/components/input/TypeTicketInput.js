import styles from './TypeTicketInput.module.css'
import { useState } from "react"

function TypeTicketInput({ data }) {
    const { categories, subcategories } = data
    const [selectedCategory, setSelectedCategory] = useState('')
    const [selectedSubCategory, setSelectedSubCategory] = useState('')

    const currentSub = selectedCategory && selectedSubCategory ? subcategories[selectedCategory]?.find(sub => sub.value === selectedSubCategory) : null

    return (
        <div className={styles.info_tickets}>
            <select className={styles.type_ticket}
                name='type-ticket' value={selectedCategory}
                onChange={(e) => {
                    setSelectedCategory(e.target.value)
                    setSelectedSubCategory('')
                }}
                required>
                <option value=''>Selecione uma categoria</option>
                {categories.map(({ value, label }, index) => (
                    <option key={index} value={value}>
                        {label}
                    </option>
                ))}
            </select>

            <select className={styles.sub_type_ticket}
                name='sub-type-ticket'
                onChange={(e) => setSelectedSubCategory(e.target.value)}
                disabled={!selectedCategory}
                required>
                <option value=''>{selectedCategory ? 'Selecione uma subcategoria' : 'Primeiro selecione uma categoria'}</option>
                {selectedCategory &&
                    subcategories[selectedCategory]?.map(({ value, label, requiresDescription, requireAnyDesk }, index) => (
                        <option key={index} value={value}>
                            {label}
                        </option>
                    ))}
            </select>

            {currentSub?.requiresDescription && (
                <div className={styles.description_container}>
                    <textarea
                        className={styles.description_input}
                        placeholder="Descreva o seu problema."
                        rows={6}
                        required
                        name="subcategory-description"
                    />
                </div>
            )}

            {currentSub?.requiresDescription && (
                <input
                    className={styles.remote_access_input}
                    placeholder="Digite seu acesso remoto AnyDesk"
                    required
                    name="subcategory-description"
                />
            )}
        </div>
    )
}

export default TypeTicketInput