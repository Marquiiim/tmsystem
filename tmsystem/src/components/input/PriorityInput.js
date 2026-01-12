function priorityInput({ data }) {
    return (
        <select name='priority' required>
            <option value='critic'>
                Crítico
            </option>
            <option value='high'>
                Alta
            </option>
            <option value='medium'>
                Média
            </option>
            <option value='low'>
                Baixa
            </option>
        </select>
    )
}

export default priorityInput