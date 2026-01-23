import styles from './TypeTicketInput.module.css'

import { useLocation } from 'react-router-dom'
import { useState } from 'react'

function TypeTicketInput() {

    const location = useLocation()
    const { departmentData, category } = location.state

    const subCategoryForSelectedCategory = departmentData.subcategories[category] || []

    const handleTicketSelected = (e) => {
        const selectedOption = e.target.options[e.target.selectedIndex]
        const jsonData = selectedOption.getAttribute('data-fullobject')

        if (!jsonData) throw new Error('[TMSYSTEM] Ticket mal formatado, selecione as opções novamente.')

        try {
            const fullSubCategory = JSON.parse(jsonData)

            const additionalInputsData = {
                dynamicFields: fullSubCategory.dynamicFields,
                requireAnyDesk: fullSubCategory.requireAnyDesk,
                requiresDescription: fullSubCategory.requiresDescription
            }

            localStorage.setItem('additionalInputs', JSON.stringify(additionalInputsData))
        } catch (error) {
            console.log(error)
        }
    }

    return (

        <div className={styles.info_tickets}>
            <select onChange={(e) => handleTicketSelected(e)}>
                <option value=''>Selecione uma subcategoria</option>
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