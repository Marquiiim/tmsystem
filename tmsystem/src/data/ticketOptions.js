export const departmentOptions = {
    ti: {
        name: "Suporte de TI",
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
    },

    rh: {
        name: "Recursos Humanos",
        categories: [
            { value: 'payroll', label: 'Folha de Pagamento' },
            { value: 'benefits', label: 'Benefícios' },
            { value: 'documentation', label: 'Documentação' },
            { value: 'vacation', label: 'Férias e Afastamentos' },
            { value: 'admission', label: 'Admissão/Desligamento' },
            { value: 'training', label: 'Treinamento e Desenvolvimento' }
        ],
        priorities: [
            { value: 'high', label: 'Alta', color: 'orange' },
            { value: 'medium', label: 'Média', color: 'yellow' },
            { value: 'low', label: 'Baixa', color: 'green' }
        ],
        subcategories: {
            payroll: [
                { value: 'salary', label: 'Cálculo Salarial' },
                { value: 'overtime', label: 'Horas Extras' },
                { value: 'advance', label: 'Adiantamento' },
                { value: 'discount', label: 'Descontos' },
                { value: 'report', label: 'Relatórios de Folha' },
                { value: 'correction', label: 'Retificação' }
            ],
            benefits: [
                { value: 'health', label: 'Plano de Saúde' },
                { value: 'dental', label: 'Plano Odontológico' },
                { value: 'meal', label: 'Vale Refeição/Alimentação' },
                { value: 'transport', label: 'Vale Transporte' },
                { value: 'childcare', label: 'Auxílio Creche' },
                { value: 'scholarship', label: 'Bolsa de Estudos' }
            ],
            documentation: [
                { value: 'workcard', label: 'Carteira de Trabalho' },
                { value: 'certificate', label: 'Certidões' },
                { value: 'contract', label: 'Contrato/Aditivo' },
                { value: 'fgts', label: 'FGTS' },
                { value: 'declaration', label: 'Declarações' },
                { value: 'history', label: 'Histórico Funcional' }
            ],
            vacation: [
                { value: 'schedule', label: 'Agendamento' },
                { value: 'balance', label: 'Saldo' },
                { value: 'sell', label: 'Venda de Férias' },
                { value: 'sick', label: 'Atestado Médico' },
                { value: 'maternity', label: 'Licença Maternidade' },
                { value: 'paternity', label: 'Licença Paternidade' }
            ],
            admission: [
                { value: 'onboarding', label: 'Integração' },
                { value: 'uniform', label: 'Uniforme/EPI' },
                { value: 'access', label: 'Acessos/Credenciais' },
                { value: 'resignation', label: 'Desligamento' },
                { value: 'clearance', label: 'Processo de Rescisão' },
                { value: 'feedback', label: 'Feedback de Desligamento' }
            ],
            training: [
                { value: 'internal', label: 'Treinamento Interno' },
                { value: 'external', label: 'Treinamento Externo' },
                { value: 'mandatory', label: 'Treinamentos Obrigatórios' },
                { value: 'development', label: 'Desenvolvimento' },
                { value: 'evaluation', label: 'Avaliação de Treinamento' },
                { value: 'budget', label: 'Solicitação de Verba' }
            ]
        }
    },

    sesmt: {
        name: "Segurança do Trabalho (SESMT)",
        categories: [
            { value: 'inspection', label: 'Inspeções de Segurança' },
            { value: 'epi', label: 'EPI/EPC' },
            { value: 'accident', label: 'Acidentes de Trabalho' },
            { value: 'health', label: 'Saúde Ocupacional' },
            { value: 'environment', label: 'Monitoramento Ambiental' },
            { value: 'training', label: 'Treinamentos de Segurança' }
        ],
        priorities: [
            { value: 'critical', label: 'Crítico', color: 'red' },
            { value: 'high', label: 'Alta', color: 'orange' },
            { value: 'medium', label: 'Média', color: 'yellow' },
            { value: 'low', label: 'Baixa', color: 'green' }
        ],
        subcategories: {
            inspection: [
                { value: 'routine', label: 'Inspeção de Rotina' },
                { value: 'periodic', label: 'Inspeção Periódica' },
                { value: 'special', label: 'Inspeção Especial' },
                { value: 'risk', label: 'Análise de Risco' },
                { value: 'ppe', label: 'Verificação de EPC' }
            ],
            epi: [
                { value: 'request', label: 'Solicitação de EPI' },
                { value: 'delivery', label: 'Entrega/Devolução' },
                { value: 'defective', label: 'EPI Defeituoso' },
                { value: 'calibration', label: 'Calibração' },
                { value: 'training', label: 'Treinamento de Uso' }
            ],
            accident: [
                { value: 'register', label: 'Registro de Acidente' },
                { value: 'investigation', label: 'Investigação' },
                { value: 'report', label: 'Comunicação ao MTE' },
                { value: 'action', label: 'Plano de Ação' },
                { value: 'statistics', label: 'Estatísticas' }
            ],
            health: [
                { value: 'medical', label: 'Exames Médicos' },
                { value: 'pcso', label: 'PCMSO' },
                { value: 'ergonomics', label: 'Análise Ergonômica' },
                { value: 'vaccine', label: 'Vacinação' },
                { value: 'mental', label: 'Saúde Mental' }
            ],
            environment: [
                { value: 'noise', label: 'Ruído' },
                { value: 'temperature', label: 'Temperatura' },
                { value: 'chemical', label: 'Produtos Químicos' },
                { value: 'illumination', label: 'Iluminação' },
                { value: 'ventilation', label: 'Ventilação' }
            ],
            training: [
                { value: 'nr', label: 'Treinamento de NR' },
                { value: 'cipa', label: 'CIPA' },
                { value: 'brigade', label: 'Brigada de Incêndio' },
                { value: 'firstaid', label: 'Primeiros Socorros' },
                { value: 'awareness', label: 'Conscientização' }
            ]
        }
    },

    management: {
        name: "Gerência",
        categories: [
            { value: 'budget', label: 'Aprovação de Orçamentos' },
            { value: 'strategy', label: 'Planejamento Estratégico' },
            { value: 'policy', label: 'Definição de Políticas' },
            { value: 'decision', label: 'Tomada de Decisão' },
            { value: 'results', label: 'Gestão de Resultados' },
            { value: 'supervision', label: 'Supervisão Geral' }
        ],
        priorities: [
            { value: 'strategic', label: 'Estratégico', color: 'purple' },
            { value: 'high', label: 'Alta', color: 'orange' },
            { value: 'medium', label: 'Média', color: 'yellow' }
        ],
        subcategories: {
            budget: [
                { value: 'approval', label: 'Aprovação de Verba' },
                { value: 'revision', label: 'Revisão Orçamentária' },
                { value: 'investment', label: 'Investimentos' },
                { value: 'cost', label: 'Controle de Custos' },
                { value: 'forecast', label: 'Previsão Orçamentária' }
            ],
            strategy: [
                { value: 'planning', label: 'Planejamento Anual' },
                { value: 'goals', label: 'Definição de Metas' },
                { value: 'swot', label: 'Análise SWOT' },
                { value: 'market', label: 'Análise de Mercado' },
                { value: 'innovation', label: 'Inovação' }
            ],
            policy: [
                { value: 'creation', label: 'Criação de Política' },
                { value: 'revision', label: 'Revisão de Política' },
                { value: 'compliance', label: 'Conformidade' },
                { value: 'procedure', label: 'Procedimentos Internos' },
                { value: 'regulation', label: 'Regulamentos' }
            ],
            decision: [
                { value: 'analysis', label: 'Análise de Cenário' },
                { value: 'meeting', label: 'Reunião de Diretoria' },
                { value: 'authorization', label: 'Autorização Especial' },
                { value: 'partnership', label: 'Parcerias' },
                { value: 'crisis', label: 'Gestão de Crise' }
            ],
            results: [
                { value: 'kpi', label: 'Indicadores (KPIs)' },
                { value: 'report', label: 'Relatórios Gerenciais' },
                { value: 'audit', label: 'Auditoria Interna' },
                { value: 'performance', label: 'Desempenho Organizacional' },
                { value: 'dashboard', label: 'Painéis de Controle' }
            ],
            supervision: [
                { value: 'coordination', label: 'Coordenação' },
                { value: 'alignment', label: 'Alinhamento de Equipes' },
                { value: 'evaluation', label: 'Avaliação de Gestores' },
                { value: 'communication', label: 'Comunicação Corporativa' },
                { value: 'leadership', label: 'Desenvolvimento de Liderança' }
            ]
        }
    },

    admin: {
        name: "Administração",
        categories: [
            { value: 'purchasing', label: 'Compras e Licitações' },
            { value: 'financial', label: 'Financeiro' },
            { value: 'contracts', label: 'Contratos' },
            { value: 'inventory', label: 'Patrimônio e Almoxarifado' },
            { value: 'billing', label: 'Faturamento' },
            { value: 'process', label: 'Processos Administrativos' }
        ],
        priorities: [
            { value: 'high', label: 'Alta', color: 'orange' },
            { value: 'medium', label: 'Média', color: 'yellow' },
            { value: 'low', label: 'Baixa', color: 'green' }
        ],
        subcategories: {
            purchasing: [
                { value: 'quote', label: 'Cotação' },
                { value: 'order', label: 'Ordem de Compra' },
                { value: 'bidding', label: 'Licitação' },
                { value: 'supplier', label: 'Cadastro de Fornecedor' },
                { value: 'receiving', label: 'Recebimento de Material' }
            ],
            financial: [
                { value: 'accounts', label: 'Contas a Pagar/Receber' },
                { value: 'payment', label: 'Pagamento' },
                { value: 'banking', label: 'Operações Bancárias' },
                { value: 'cash', label: 'Controle de Caixa' },
                { value: 'tax', label: 'Impostos e Tributos' }
            ],
            contracts: [
                { value: 'creation', label: 'Elaboração de Contrato' },
                { value: 'renewal', label: 'Renovação' },
                { value: 'termination', label: 'Rescisão' },
                { value: 'addendum', label: 'Aditivo' },
                { value: 'analysis', label: 'Análise Jurídica' }
            ],
            inventory: [
                { value: 'control', label: 'Controle de Estoque' },
                { value: 'asset', label: 'Patrimônio' },
                { value: 'depreciation', label: 'Depreciação' },
                { value: 'maintenance', label: 'Manutenção de Bens' },
                { value: 'disposal', label: 'Baixa de Material' }
            ],
            billing: [
                { value: 'invoice', label: 'Emissão de Nota Fiscal' },
                { value: 'receivable', label: 'Contas a Receber' },
                { value: 'collection', label: 'Cobrança' },
                { value: 'report', label: 'Relatório Financeiro' },
                { value: 'revenue', label: 'Faturamento' }
            ],
            process: [
                { value: 'document', label: 'Documentação' },
                { value: 'archiving', label: 'Arquivamento' },
                { value: 'protocol', label: 'Protocolo' },
                { value: 'workflow', label: 'Fluxo de Trabalho' },
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
            { value: 'structure', label: 'Estrutura Predial' },
            { value: 'furniture', label: 'Mobiliário' },
            { value: 'preventive', label: 'Manutenção Preventiva' }
        ],
        priorities: [
            { value: 'emergency', label: 'Emergência', color: 'red' },
            { value: 'high', label: 'Alta', color: 'orange' },
            { value: 'medium', label: 'Média', color: 'yellow' },
            { value: 'low', label: 'Baixa', color: 'green' }
        ],
        subcategories: {
            electrical: [
                { value: 'light', label: 'Iluminação' },
                { value: 'outlet', label: 'Tomadas' },
                { value: 'panel', label: 'Quadro de Energia' },
                { value: 'generator', label: 'Gerador' },
                { value: 'surge', label: 'Proteção contra Surto' }
            ],
            hydraulic: [
                { value: 'plumbing', label: 'Encanamento' },
                { value: 'leak', label: 'Vazamento' },
                { value: 'drain', label: 'Esgoto' },
                { value: 'water', label: 'Abastecimento de Água' },
                { value: 'heater', label: 'Aquecedor' }
            ],
            air: [
                { value: 'repair', label: 'Reparo' },
                { value: 'cleaning', label: 'Limpeza' },
                { value: 'gas', label: 'Recarga de Gás' },
                { value: 'filter', label: 'Troca de Filtro' },
                { value: 'installation', label: 'Instalação' }
            ],
            structure: [
                { value: 'doors', label: 'Portas e Fechaduras' },
                { value: 'windows', label: 'Janelas' },
                { value: 'ceilings', label: 'Forros' },
                { value: 'floors', label: 'Pisos' },
                { value: 'painting', label: 'Pintura' }
            ],
            furniture: [
                { value: 'desk', label: 'Mesas' },
                { value: 'chair', label: 'Cadeiras' },
                { value: 'cabinet', label: 'Armários' },
                { value: 'shelf', label: 'Prateleiras' },
                { value: 'repair', label: 'Conserto' }
            ],
            preventive: [
                { value: 'schedule', label: 'Agendamento' },
                { value: 'inspection', label: 'Inspeção' },
                { value: 'calibration', label: 'Calibração' },
                { value: 'cleaning', label: 'Limpeza Técnica' },
                { value: 'report', label: 'Relatório Técnico' }
            ]
        }
    },

    supervision: {
        name: "Supervisão",
        categories: [
            { value: 'coordination', label: 'Coordenação de Equipes' },
            { value: 'monitoring', label: 'Monitoramento Operacional' },
            { value: 'problems', label: 'Solução de Problemas' },
            { value: 'quality', label: 'Controle de Qualidade' },
            { value: 'productivity', label: 'Avaliação de Produtividade' },
            { value: 'compliance', label: 'Conformidade Operacional' }
        ],
        priorities: [
            { value: 'high', label: 'Alta', color: 'orange' },
            { value: 'medium', label: 'Média', color: 'yellow' },
            { value: 'low', label: 'Baixa', color: 'green' }
        ],
        subcategories: {
            coordination: [
                { value: 'schedule', label: 'Escala de Trabalho' },
                { value: 'task', label: 'Distribuição de Tarefas' },
                { value: 'meeting', label: 'Reunião de Equipe' },
                { value: 'handover', label: 'Passagem de Turno' },
                { value: 'replacement', label: 'Substituição' }
            ],
            monitoring: [
                { value: 'performance', label: 'Desempenho' },
                { value: 'indicators', label: 'Indicadores Operacionais' },
                { value: 'attendance', label: 'Controle de Ponto' },
                { value: 'dashboards', label: 'Painéis de Monitoramento' },
                { value: 'alerts', label: 'Alertas' }
            ],
            problems: [
                { value: 'troubleshooting', label: 'Diagnóstico' },
                { value: 'solution', label: 'Proposta de Solução' },
                { value: 'escalation', label: 'Escalação' },
                { value: 'followup', label: 'Acompanhamento' },
                { value: 'prevention', label: 'Prevenção' }
            ],
            quality: [
                { value: 'inspection', label: 'Inspeção de Qualidade' },
                { value: 'standards', label: 'Padrões Operacionais' },
                { value: 'audit', label: 'Auditoria Interna' },
                { value: 'feedback', label: 'Feedback de Qualidade' },
                { value: 'improvement', label: 'Melhoria Contínua' }
            ],
            productivity: [
                { value: 'efficiency', label: 'Eficiência' },
                { value: 'metrics', label: 'Métricas de Produção' },
                { value: 'optimization', label: 'Otimização' },
                { value: 'bottleneck', label: 'Gargalos' },
                { value: 'report', label: 'Relatório de Produtividade' }
            ],
            compliance: [
                { value: 'norms', label: 'Normas Internas' },
                { value: 'procedures', label: 'Procedimentos' },
                { value: 'safety', label: 'Segurança Operacional' },
                { value: 'documentation', label: 'Documentação' },
                { value: 'training', label: 'Capacitação' }
            ]
        }
    },

    services: {
        name: "Serviços e Apoio",
        categories: [
            { value: 'cleaning', label: 'Limpeza e Conservação' },
            { value: 'security', label: 'Portaria e Vigilância' },
            { value: 'support', label: 'Serviços de Apoio' },
            { value: 'gardening', label: 'Jardinagem' },
            { value: 'waste', label: 'Coleta de Resíduos' },
            { value: 'organization', label: 'Organização de Ambientes' }
        ],
        priorities: [
            { value: 'high', label: 'Alta', color: 'orange' },
            { value: 'medium', label: 'Média', color: 'yellow' },
            { value: 'low', label: 'Baixa', color: 'green' }
        ],
        subcategories: {
            cleaning: [
                { value: 'routine', label: 'Limpeza de Rotina' },
                { value: 'deep', label: 'Limpeza Profunda' },
                { value: 'windows', label: 'Limpeza de Vidros' },
                { value: 'carpet', label: 'Limpeza de Carpete' },
                { value: 'bathrooms', label: 'Banheiros' }
            ],
            security: [
                { value: 'access', label: 'Controle de Acesso' },
                { value: 'surveillance', label: 'Monitoramento' },
                { value: 'visitors', label: 'Cadastro de Visitantes' },
                { value: 'rounds', label: 'Rondas' },
                { value: 'emergency', label: 'Procedimentos de Emergência' }
            ],
            support: [
                { value: 'cafeteria', label: 'Copa/Cafeteria' },
                { value: 'supplies', label: 'Suprimentos' },
                { value: 'mail', label: 'Correio' },
                { value: 'reception', label: 'Recepcionista' },
                { value: 'events', label: 'Apoio a Eventos' }
            ],
            gardening: [
                { value: 'lawn', label: 'Grama' },
                { value: 'plants', label: 'Plantas e Jardins' },
                { value: 'pruning', label: 'Poda' },
                { value: 'irrigation', label: 'Irrigação' },
                { value: 'pest', label: 'Controle de Pragas' }
            ],
            waste: [
                { value: 'collection', label: 'Coleta' },
                { value: 'separation', label: 'Separação' },
                { value: 'recycling', label: 'Reciclagem' },
                { value: 'disposal', label: 'Descarte' },
                { value: 'hazardous', label: 'Resíduos Perigosos' }
            ],
            organization: [
                { value: 'layout', label: 'Organização de Layout' },
                { value: 'storage', label: 'Armazenamento' },
                { value: 'signage', label: 'Sinalização' },
                { value: 'inventory', label: 'Inventário' },
                { value: 'optimization', label: 'Otimização de Espaço' }
            ]
        }
    }
};