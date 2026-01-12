import { useState } from "react"

function TypeTicketInput({ data }) {
    const { categories, subcategories } = data
    const [selectedCategory, setSelectedCategory] = useState('')

    return (
        <div>
            <select name='type-ticket' value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} required>
                <option value=''>Selecione uma categoria</option>
                {categories.map(({ value, label }, index) => (
                    <option key={index} value={value}>
                        {label}
                    </option>
                ))}
            </select>
            <select name='sub-type-ticket' required disabled={!selectedCategory}>
                <option value=''>{selectedCategory ? 'Selecione uma subcategoria' : 'Primeiro selecione uma categoria'}</option>
                {selectedCategory &&
                    subcategories[selectedCategory]?.map(({ value, label }, index) => (
                        <option key={index} value={value}>
                            {label}
                        </option>
                    ))}
            </select>
        </div>
    )
}

export default TypeTicketInput