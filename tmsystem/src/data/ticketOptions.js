export const departmentOptions = {
    ti: {
        id: 1,
        name: "Suporte de TI",
        categories: [
            {
                value: 'hardware',
                label: 'Equipamentos',
                description: 'Computador, impressora, monitor ou outros equipamentos com problema'
            },
            {
                value: 'software',
                label: 'Programas e Aplicativos',
                description: 'Programas que não abrem, travam ou não funcionam direito'
            },
            {
                value: 'rede',
                label: 'Internet e Rede',
                description: 'Sem internet, Wi-Fi fraco ou problemas para acessar a rede da empresa'
            },
            {
                value: 'acesso',
                label: 'Acesso e Senhas',
                description: 'Esqueci minha senha, não consigo entrar ou preciso de um novo acesso'
            },
            {
                value: 'sistema',
                label: 'Sistemas da Empresa',
                description: 'Problemas com sistemas como ERP, CRM ou outros programas da empresa'
            }
        ],
        priorities: [
            { value: 'urgente', label: 'Urgente - Não consigo trabalhar', color: 'red' },
            { value: 'alto', label: 'Alta - Problema importante', color: 'orange' },
            { value: 'médio', label: 'Média - Problema que atrapalha', color: 'yellow' },
            { value: 'baixo', label: 'Baixa - Dúvida ou problema leve', color: 'green' }
        ],
        subcategories: {
            hardware: [
                {
                    value: 'computador',
                    label: 'Computador/Notebook',
                    requiresDescription: true,
                    requireAnyDesk: true
                },
                {
                    value: 'impressora',
                    label: 'Impressora',
                    requiresDescription: true
                },
                {
                    value: 'monitor',
                    label: 'Monitor/Tela',
                    requiresDescription: true
                },
                {
                    value: 'periféricos',
                    label: 'Mouse, Teclado ou Outros'
                }
            ],
            software: [
                {
                    value: 'os',
                    label: 'Windows/Computador',
                    requiresDescription: true
                },
                {
                    value: 'office',
                    label: 'Word, Excel ou Outlook',
                    requireAnyDesk: true
                },
                {
                    value: 'antivirus',
                    label: 'Antivírus/Segurança',
                    requireAnyDesk: true
                },
                {
                    value: 'especifico',
                    label: 'Outro Programa',
                    requiresDescription: true,
                    requireAnyDesk: true
                }
            ],
            rede: [
                {
                    value: 'internet',
                    label: 'Internet',
                    requiresDescription: true
                },
                {
                    value: 'wifi',
                    label: 'Wi-Fi',
                    requiresDescription: true
                },
                {
                    value: 'vpn',
                    label: 'VPN (Trabalhar de casa)'
                }
            ],
            acesso: [
                {
                    value: 'senha',
                    label: 'Esqueci minha senha'
                },
                {
                    value: 'conta',
                    label: 'Preciso de um novo acesso'
                },
                {
                    value: 'email',
                    label: 'Problema com E-mail'
                },
                {
                    value: 'block',
                    label: 'Minha conta está bloqueada'
                }
            ],
            sistema: [
                {
                    value: 'func',
                    label: 'Atualizar meu cargo/função'
                },
                {
                    value: 'erp',
                    label: 'ERP (Sistema principal)',
                    requiresDescription: true
                },
                {
                    value: 'crm',
                    label: 'CRM (Clientes)',
                    requiresDescription: true
                }
            ]
        }
    },

    rh: {
        id: 3,
        name: "Recursos Humanos",
        categories: [
            {
                value: 'contracheque',
                label: 'Salário e Pagamento',
                description: 'Problemas com salário, horas extras, adiantamentos ou pagamento errado'
            },
            {
                value: 'benefícios',
                label: 'Benefícios',
                description: 'Plano de saúde, vale-refeição, vale-transporte ou outros benefícios'
            },
            {
                value: 'documentação',
                label: 'Documentos',
                description: 'Preciso de carteira de trabalho, certidões, contrato ou declarações'
            },
            {
                value: 'férias_licenças',
                label: 'Férias e Licenças',
                description: 'Agendar férias, atestado médico, licença maternidade/paternidade'
            },
            {
                value: 'admissão',
                label: 'Entrada/Saída da Empresa',
                description: 'Sou novo na empresa ou estou me desligando'
            }
        ],
        priorities: [
            { value: 'alto', label: 'Alta - Resolver logo', color: 'orange' },
            { value: 'médio', label: 'Média - Pode esperar um pouco', color: 'yellow' },
            { value: 'baixo', label: 'Baixa - Sem pressa', color: 'green' }
        ],
        subcategories: {
            contracheque: [
                {
                    value: 'salário',
                    label: 'Salário errado/atrasado',
                    requiresDescription: true
                },
                {
                    value: 'horas extras',
                    label: 'Horas extras',
                    requiresDescription: true
                }
            ],
            benefícios: [
                {
                    value: 'plano de saúde',
                    label: 'Plano de Saúde',
                    requiresDescription: true
                },
                {
                    value: 'vale refeição',
                    label: 'Vale Refeição/Alimentação'
                }
            ],
            documentação: [
                {
                    value: 'carteira de trabalho',
                    label: 'Carteira de Trabalho'
                }
            ],
            férias_licenças: [
                {
                    value: 'agendar férias',
                    label: 'Agendar férias'
                },
                {
                    value: 'atestado médico',
                    label: 'Atestado Médico'
                }
            ],
            admissão: [
                {
                    value: 'integração',
                    label: 'Sou novo na empresa',
                    requiresDescription: true
                }
            ]
        }
    },

    sesmt: {
        id: 2,
        name: "Segurança do Trabalho",
        categories: [
            {
                value: 'inspeção',
                label: 'Vistoria/Inspeção',
                description: 'Preciso que verifiquem algum local ou equipamento de segurança'
            },
            {
                value: 'epi',
                label: 'EPI (Equipamento de Proteção)',
                description: 'Preciso de EPI novo, tamanho errado ou equipamento com defeito'
            },
            {
                value: 'acidente',
                label: 'Acidente ou Incidente',
                description: 'Ocorreu um acidente, quase acidente ou situação de risco'
            },
            {
                value: 'saúde',
                label: 'Saúde no Trabalho',
                description: 'Exames médicos, problema ergonômico ou questão de saúde'
            }
        ],
        priorities: [
            { value: 'alto', label: 'Alta - Risco/Urgente', color: 'orange' },
            { value: 'médio', label: 'Média - Importante', color: 'yellow' },
            { value: 'baixo', label: 'Baixa - Preventivo', color: 'green' }
        ],
        subcategories: {
            inspeção: [
                {
                    value: 'Vistoria',
                    label: 'Vistoria de rotina'
                }
            ],
            epi: [
                {
                    value: 'solicitar',
                    label: 'Preciso de EPI novo'
                },
                {
                    value: 'defeito',
                    label: 'EPI com defeito/estragou',
                    requiresDescription: true
                }
            ],
            acidente: [
                {
                    value: 'registrar',
                    label: 'Registrar acidente',
                    requiresDescription: true
                }
            ],
            saúde: [
                {
                    value: 'exames médicos',
                    label: 'Exames Médicos'
                }
            ]
        }
    },
}