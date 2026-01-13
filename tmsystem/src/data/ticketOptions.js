export const departmentOptions = {
    ti: {
        categories: [
            { value: 'hardware', label: 'Problemas de Hardware' },
            { value: 'software', label: 'Problemas de Software' },
            { value: 'network', label: 'Rede e Internet' },
            { value: 'access', label: 'Acesso e Contas' },
            { value: 'system', label: 'Sistemas Corporativos' },
            { value: 'improvements', label: 'Melhorias' }
        ],
        priorities: [
            { value: 'urgent', label: 'Urgente', color: 'red' },
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
            ],
            network: [
                { value: 'internet', label: 'Internet' },
                { value: 'wifi', label: 'Wi-Fi' },
                { value: 'vpn', label: 'VPN' },
                { value: 'server', label: 'Servidor' },
                { value: 'domain', label: 'Domínio' },
                { value: 'voip', label: 'Telefonia VOIP' }
            ],
            access: [
                { value: 'password', label: 'Reset de Senha' },
                { value: 'account', label: 'Criação de Conta' },
                { value: 'permission', label: 'Permissões de Acesso' },
                { value: 'email', label: 'E-mail Corporativo' },
                { value: 'folder', label: 'Acesso à Pastas' },
                { value: 'block', label: 'Desbloqueio de Usuário' },
                { value: 'license', label: 'Licenças de Software' },
                { value: 'remote', label: 'Acesso Remoto' }
            ],
            system: [
                { value: 'erp', label: 'ERP' },
                { value: 'crm', label: 'CRM' },
                { value: 'bi', label: 'Business Intelligence' },
                { value: 'database', label: 'Banco de Dados' },
                { value: 'backup', label: 'Backup' },
                { value: 'cloud', label: 'Sistemas em Nuvem' },
                { value: 'mobile', label: 'Sistemas Móveis' },
                { value: 'report', label: 'Relatórios' },
                { value: 'integration', label: 'Integração entre Sistemas' }
            ],
            improvements: [
                { value: 'usab', label: 'Usabilidade' },
                { value: 'perf', label: 'Performance' },
                { value: 'func', label: 'Funcionalidade' },
                { value: 'auto', label: 'Automação' },
                { value: 'sec', label: 'Segurança' },
                { value: 'acess', label: 'Acessibilidade' }
            ]
        }
    }
};