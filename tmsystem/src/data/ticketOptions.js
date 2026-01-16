export const departmentOptions = {
    ti: {
        name: "Suporte de TI",
        categories: [
            { value: 'hardware', label: 'Problemas de Hardware' },
            { value: 'software', label: 'Problemas de Software' },
            { value: 'network', label: 'Rede e Internet' },
            { value: 'access', label: 'Acesso e Contas' },
            { value: 'system', label: 'Sistemas Corporativos' }
        ],
        priorities: [
            { value: 'urgent', label: 'Urgente', color: 'red' },
            { value: 'high', label: 'Alta', color: 'orange' },
            { value: 'medium', label: 'Média', color: 'yellow' },
            { value: 'low', label: 'Baixa', color: 'green' }
        ],
        subcategories: {
            hardware: [
                { value: 'computer', label: 'Computador/Notebook', requiresDescription: true, requireAnyDesk: true },
                { value: 'printer', label: 'Impressora/Scanner', requiresDescription: true },
                { value: 'peripheral', label: 'Periféricos' },
                { value: 'monitor', label: 'Monitor', requiresDescription: true }
            ],
            software: [
                { value: 'os', label: 'Sistema Operacional', requiresDescription: true },
                { value: 'office', label: 'Pacote Office', requireAnyDesk: true },
                { value: 'antivirus', label: 'Antivírus', requireAnyDesk: true },
                { value: 'specific', label: 'Software Específico', requiresDescription: true, requireAnyDesk: true }
            ],
            network: [
                { value: 'internet', label: 'Internet', requiresDescription: true },
                { value: 'wifi', label: 'Wi-Fi', requiresDescription: true },
                { value: 'vpn', label: 'VPN' },
                { value: 'server', label: 'Servidor', requiresDescription: true }
            ],
            access: [
                { value: 'password', label: 'Reset de Senha' },
                { value: 'account', label: 'Criação de Conta' },
                { value: 'email', label: 'E-mail Corporativo' },
                { value: 'block', label: 'Desbloqueio de Usuário' },
                { value: 'license', label: 'Licenças de Software', requireAnyDesk: true }
            ],
            system: [
                { value: 'tmsys', label: 'Atualização de cargo no sistema' },
                { value: 'erp', label: 'ERP', requiresDescription: true },
                { value: 'crm', label: 'CRM', requiresDescription: true },
                { value: 'backup', label: 'Backup', requireAnyDesk: true },
                { value: 'report', label: 'Relatórios', requiresDescription: true }
            ]
        }
    },

    rh: {
        name: "Recursos Humanos",
        categories: [
            { value: 'payroll', label: 'Folha de Pagamento' },
            { value: 'benefits', label: 'Benefícios' },
            { value: 'documentation', label: 'Documentação' },
            { value: 'vacation', label: 'Férias e Afastamentos' },
            { value: 'admission', label: 'Admissão/Desligamento' }
        ],
        priorities: [
            { value: 'high', label: 'Alta', color: 'orange' },
            { value: 'medium', label: 'Média', color: 'yellow' },
            { value: 'low', label: 'Baixa', color: 'green' }
        ],
        subcategories: {
            payroll: [
                { value: 'salary', label: 'Cálculo Salarial', requiresDescription: true },
                { value: 'overtime', label: 'Horas Extras', requiresDescription: true },
                { value: 'advance', label: 'Adiantamento' },
                { value: 'correction', label: 'Retificação', requiresDescription: true }
            ],
            benefits: [
                { value: 'health', label: 'Plano de Saúde', requiresDescription: true },
                { value: 'dental', label: 'Plano Odontológico' },
                { value: 'meal', label: 'Vale Refeição/Alimentação' },
                { value: 'transport', label: 'Vale Transporte' }
            ],
            documentation: [
                { value: 'workcard', label: 'Carteira de Trabalho' },
                { value: 'certificate', label: 'Certidões' },
                { value: 'contract', label: 'Contrato/Aditivo' },
                { value: 'declaration', label: 'Declarações' }
            ],
            vacation: [
                { value: 'schedule', label: 'Agendamento' },
                { value: 'balance', label: 'Saldo' },
                { value: 'sick', label: 'Atestado Médico' },
                { value: 'maternity', label: 'Licença Maternidade' },
                { value: 'paternity', label: 'Licença Paternidade' }
            ],
            admission: [
                { value: 'onboarding', label: 'Integração', requiresDescription: true },
                { value: 'uniform', label: 'Uniforme/EPI' },
                { value: 'access', label: 'Acessos/Credenciais' },
                { value: 'resignation', label: 'Desligamento' }
            ]
        }
    },

    sesmt: {
        name: "Segurança do Trabalho",
        categories: [
            { value: 'inspection', label: 'Inspeções de Segurança' },
            { value: 'epi', label: 'EPI/EPC' },
            { value: 'accident', label: 'Acidentes de Trabalho' },
            { value: 'health', label: 'Saúde Ocupacional' },
            { value: 'training', label: 'Treinamentos' }
        ],
        priorities: [
            { value: 'high', label: 'Alta', color: 'orange' },
            { value: 'medium', label: 'Média', color: 'yellow' },
            { value: 'low', label: 'Baixa', color: 'green' }
        ],
        subcategories: {
            inspection: [
                { value: 'routine', label: 'Inspeção de Rotina' },
                { value: 'risk', label: 'Análise de Risco', requiresDescription: true },
                { value: 'ppe', label: 'Verificação de EPC' }
            ],
            epi: [
                { value: 'request', label: 'Solicitação de EPI' },
                { value: 'delivery', label: 'Entrega/Devolução' },
                { value: 'defective', label: 'EPI Defeituoso', requiresDescription: true }
            ],
            accident: [
                { value: 'register', label: 'Registro de Acidente', requiresDescription: true },
                { value: 'investigation', label: 'Investigação', requiresDescription: true }
            ],
            health: [
                { value: 'medical', label: 'Exames Médicos' },
                { value: 'ergonomics', label: 'Análise Ergonômica', requiresDescription: true }
            ],
            training: [
                { value: 'nr', label: 'Treinamento de NR' },
                { value: 'cipa', label: 'CIPA' },
                { value: 'firstaid', label: 'Primeiros Socorros' }
            ]
        }
    },

    admin: {
        name: "Administração",
        categories: [
            { value: 'purchasing', label: 'Compras' },
            { value: 'financial', label: 'Financeiro' },
            { value: 'inventory', label: 'Patrimônio' },
            { value: 'process', label: 'Processos' }
        ],
        priorities: [
            { value: 'high', label: 'Alta', color: 'orange' },
            { value: 'medium', label: 'Média', color: 'yellow' },
            { value: 'low', label: 'Baixa', color: 'green' }
        ],
        subcategories: {
            purchasing: [
                { value: 'quote', label: 'Cotação' },
                { value: 'order', label: 'Ordem de Compra', requiresDescription: true },
                { value: 'supplier', label: 'Cadastro de Fornecedor' }
            ],
            financial: [
                { value: 'accounts', label: 'Contas a Pagar/Receber' },
                { value: 'payment', label: 'Pagamento' },
                { value: 'tax', label: 'Impostos e Tributos', requiresDescription: true }
            ],
            inventory: [
                { value: 'control', label: 'Controle de Estoque' },
                { value: 'asset', label: 'Patrimônio' },
                { value: 'maintenance', label: 'Manutenção de Bens', requiresDescription: true }
            ],
            process: [
                { value: 'document', label: 'Documentação' },
                { value: 'archiving', label: 'Arquivamento' },
                { value: 'protocol', label: 'Protocolo' },
                { value: 'approval', label: 'Aprovações' }
            ]
        }
    },

    maintenance: {
        name: "Manutenção Predial",
        categories: [
            { value: 'electrical', label: 'Elétrica' },
            { value: 'hydraulic', label: 'Hidráulica' },
            { value: 'air', label: 'Ar Condicionado' },
            { value: 'structure', label: 'Estrutura' },
            { value: 'furniture', label: 'Mobiliário' }
        ],
        priorities: [
            { value: 'emergency', label: 'Emergência', color: 'red' },
            { value: 'high', label: 'Alta', color: 'orange' },
            { value: 'medium', label: 'Média', color: 'yellow' },
            { value: 'low', label: 'Baixa', color: 'green' }
        ],
        subcategories: {
            electrical: [
                { value: 'light', label: 'Iluminação', requiresDescription: true },
                { value: 'outlet', label: 'Tomadas', requiresDescription: true },
                { value: 'panel', label: 'Quadro de Energia', requiresDescription: true }
            ],
            hydraulic: [
                { value: 'plumbing', label: 'Encanamento', requiresDescription: true },
                { value: 'leak', label: 'Vazamento', requiresDescription: true },
                { value: 'water', label: 'Abastecimento de Água', requiresDescription: true }
            ],
            air: [
                { value: 'repair', label: 'Reparo', requiresDescription: true },
                { value: 'cleaning', label: 'Limpeza' },
                { value: 'filter', label: 'Troca de Filtro' }
            ],
            structure: [
                { value: 'doors', label: 'Portas e Fechaduras', requiresDescription: true },
                { value: 'windows', label: 'Janelas', requiresDescription: true },
                { value: 'painting', label: 'Pintura', requiresDescription: true }
            ],
            furniture: [
                { value: 'desk', label: 'Mesas', requiresDescription: true },
                { value: 'chair', label: 'Cadeiras', requiresDescription: true },
                { value: 'cabinet', label: 'Armários', requiresDescription: true },
                { value: 'repair', label: 'Conserto', requiresDescription: true }
            ]
        }
    },

    services: {
        name: "Serviços e Apoio",
        categories: [
            { value: 'cleaning', label: 'Limpeza' },
            { value: 'security', label: 'Portaria' },
            { value: 'support', label: 'Serviços de Apoio' },
            { value: 'gardening', label: 'Jardinagem' },
            { value: 'waste', label: 'Coleta' }
        ],
        priorities: [
            { value: 'high', label: 'Alta', color: 'orange' },
            { value: 'medium', label: 'Média', color: 'yellow' },
            { value: 'low', label: 'Baixa', color: 'green' }
        ],
        subcategories: {
            cleaning: [
                { value: 'routine', label: 'Limpeza de Rotina' },
                { value: 'deep', label: 'Limpeza Profunda', requiresDescription: true },
                { value: 'bathrooms', label: 'Banheiros' }
            ],
            security: [
                { value: 'access', label: 'Controle de Acesso' },
                { value: 'surveillance', label: 'Monitoramento' },
                { value: 'visitors', label: 'Cadastro de Visitantes' }
            ],
            support: [
                { value: 'cafeteria', label: 'Copa/Cafeteria' },
                { value: 'supplies', label: 'Suprimentos' },
                { value: 'mail', label: 'Correio' },
                { value: 'reception', label: 'Recepcionista' }
            ],
            gardening: [
                { value: 'lawn', label: 'Grama' },
                { value: 'plants', label: 'Plantas e Jardins' },
                { value: 'pruning', label: 'Poda', requiresDescription: true }
            ],
            waste: [
                { value: 'collection', label: 'Coleta' },
                { value: 'separation', label: 'Separação' },
                { value: 'recycling', label: 'Reciclagem' }
            ]
        }
    }
};