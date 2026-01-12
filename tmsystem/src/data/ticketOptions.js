export const departmentOptions = {
    ti: {
        categories: [
            { value: 'hardware', label: 'Problemas de Hardware' },
            { value: 'software', label: 'Problemas de Software' },
            { value: 'network', label: 'Rede e Internet' },
            { value: 'access', label: 'Acesso e Contas' },
            { value: 'system', label: 'Sistemas Corporativos' }
        ],
        priorities: [
            { value: 'critical', label: 'Crítico', color: 'red' },
            { value: 'high', label: 'Alta', color: 'orange' },
            { value: 'medium', label: 'Média', color: 'yellow' },
            { value: 'low', label: 'Baixa', color: 'green' }
        ],
        subcategories: {
            hardware: [
                { value: 'computer', label: 'Computador/Notebook' },
                { value: 'printer', label: 'Impressora/Scanner' },
                { value: 'peripheral', label: 'Periféricos' },
                { value: 'monitor', label: 'Monitor' }
            ],
            software: [
                { value: 'os', label: 'Sistema Operacional' },
                { value: 'office', label: 'Pacote Office' },
                { value: 'antivirus', label: 'Antivírus' },
                { value: 'specific', label: 'Software Específico' }
            ]
        }
    }
};