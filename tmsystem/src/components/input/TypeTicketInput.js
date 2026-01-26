import styles from './TypeTicketInput.module.css'

import { useLocation } from 'react-router-dom'

function TypeTicketInput({ value, onChange }) {

    const location = useLocation()
    const { departmentData, category } = location.state
    const subCategoryForSelectedCategory = departmentData.subcategories[category] || []

    const handleTicketSelected = (e) => {
        const selectedValue = e.target.value

        if (!selectedValue) {
            localStorage.removeItem('additionalInputs')
            onChange('')
            return
        }

        const selectedOption = e.target.options[e.target.selectedIndex]
        const jsonData = selectedOption.getAttribute('data-fullobject')

        if (!jsonData) {
            console.warn('[TMSYSTEM] Ticket mal formatado, selecione as opções novamente.')
            onChange(selectedValue)
            return
        }

        try {
            const fullSubCategory = JSON.parse(jsonData)

            const additionalInputsData = {
                dynamicFields: fullSubCategory.dynamicFields,
                requireAnyDesk: fullSubCategory.requireAnyDesk,
                requiresDescription: fullSubCategory.requiresDescription
            }

            localStorage.setItem('additionalInputs', JSON.stringify(additionalInputsData))
            onChange(selectedValue)
        } catch (error) {
            console.log(error)
            onChange(selectedValue)
        }
    }

    return (

        <div className={styles.info_tickets}>
            <select
                onChange={handleTicketSelected}
                value={value}
                required>
                <option
                    value=''
                    disabled>Selecione uma subcategoria
                </option>
                {subCategoryForSelectedCategory.map((subcategory) => (
                    <option
                        key={subcategory.value}
                        value={subcategory.value}
                        data-fullobject={JSON.stringify(subcategory)}>
                        {subcategory.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default TypeTicketInput