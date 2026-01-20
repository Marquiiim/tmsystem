export const departmentOptions = {
    ti: {
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
                value: 'network',
                label: 'Internet e Rede',
                description: 'Sem internet, Wi-Fi fraco ou problemas para acessar a rede da empresa'
            },
            {
                value: 'access',
                label: 'Acesso e Senhas',
                description: 'Esqueci minha senha, não consigo entrar ou preciso de um novo acesso'
            },
            {
                value: 'system',
                label: 'Sistemas da Empresa',
                description: 'Problemas com sistemas como ERP, CRM ou outros programas da empresa'
            }
        ],
        priorities: [
            { value: 'urgent', label: 'Urgente - Não consigo trabalhar', color: 'red' },
            { value: 'high', label: 'Alta - Problema importante', color: 'orange' },
            { value: 'medium', label: 'Média - Problema que atrapalha', color: 'yellow' },
            { value: 'low', label: 'Baixa - Dúvida ou problema leve', color: 'green' }
        ],
        subcategories: {
            hardware: [
                {
                    value: 'computer',
                    label: 'Computador/Notebook',
                    requiresDescription: true,
                    requireAnyDesk: true,
                    dynamicFields: [
                        {
                            type: 'select',
                            name: 'problem',
                            label: 'O que está acontecendo?',
                            required: true,
                            options: [
                                { value: 'notTurningOn', label: 'Não liga' },
                                { value: 'verySlow', label: 'Está muito lento' },
                                { value: 'blueScreen', label: 'Aparece tela azul' },
                                { value: 'noImage', label: 'Liga mas não mostra imagem' },
                                { value: 'strangeNoise', label: 'Faz barulho estranho' },
                                { value: 'other', label: 'Outro problema' }
                            ]
                        },
                        {
                            type: 'text',
                            name: 'computerLocation',
                            label: 'Onde está o computador?',
                            placeholder: 'Ex: Sala 2, Mesa do João'
                        },
                        {
                            type: 'checkbox',
                            name: 'tried',
                            label: 'O que já tentou fazer?',
                            options: [
                                { value: 'restart', label: 'Reiniciar o computador' },
                                { value: 'checkCables', label: 'Verificar cabos' },
                                { value: 'differentOutlet', label: 'Trocar de tomada' },
                                { value: 'nothing', label: 'Nada ainda' }
                            ]
                        }
                    ]
                },
                {
                    value: 'printer',
                    label: 'Impressora',
                    requiresDescription: true,
                    dynamicFields: [
                        {
                            type: 'select',
                            name: 'problem',
                            label: 'Qual o problema?',
                            required: true,
                            options: [
                                { value: 'paperJam', label: 'Papel preso' },
                                { value: 'noInk', label: 'Acabou a tinta' },
                                { value: 'notPrinting', label: 'Não imprime nada' },
                                { value: 'poorQuality', label: 'Imprime tudo borrado' },
                                { value: 'notConnecting', label: 'Não aparece no computador' }
                            ]
                        },
                        {
                            type: 'text',
                            name: 'printerLocation',
                            label: 'Onde está a impressora?',
                            placeholder: 'Ex: Perto da recepção, Sala de reuniões'
                        },
                        {
                            type: 'text',
                            name: 'printerModel',
                            label: 'Qual o modelo? (se souber)',
                            placeholder: 'Ex: HP, Epson, Brother...'
                        }
                    ]
                },
                {
                    value: 'monitor',
                    label: 'Monitor/Tela',
                    requiresDescription: true,
                    dynamicFields: [
                        {
                            type: 'select',
                            name: 'problem',
                            label: 'O que acontece?',
                            required: true,
                            options: [
                                { value: 'noImage', label: 'Não mostra imagem' },
                                { value: 'flickering', label: 'Fica piscando' },
                                { value: 'lines', label: 'Aparecem listras/linhas' },
                                { value: 'spots', label: 'Tem manchas/pontos' },
                                { value: 'broken', label: 'Está quebrado/trincado' }
                            ]
                        },
                        {
                            type: 'select',
                            name: 'size',
                            label: 'Qual o tamanho?',
                            options: [
                                { value: 'small', label: 'Pequeno (até 20")' },
                                { value: 'medium', label: 'Médio (21" a 24")' },
                                { value: 'large', label: 'Grande (mais de 24")' },
                                { value: 'dontKnow', label: 'Não sei' }
                            ]
                        }
                    ]
                },
                {
                    value: 'peripheral',
                    label: 'Mouse, Teclado ou Outros',
                    dynamicFields: [
                        {
                            type: 'select',
                            name: 'device',
                            label: 'O que não funciona?',
                            required: true,
                            options: [
                                { value: 'mouse', label: 'Mouse' },
                                { value: 'keyboard', label: 'Teclado' },
                                { value: 'headset', label: 'Fone de ouvido' },
                                { value: 'webcam', label: 'Câmera' },
                                { value: 'speakers', label: 'Caixa de som' },
                                { value: 'other', label: 'Outro dispositivo' }
                            ]
                        },
                        {
                            type: 'text',
                            name: 'problemDescription',
                            label: 'O que está acontecendo?',
                            placeholder: 'Ex: O mouse para de funcionar, Teclado não digita...'
                        }
                    ]
                }
            ],
            software: [
                {
                    value: 'os',
                    label: 'Windows/Computador',
                    requiresDescription: true,
                    dynamicFields: [
                        {
                            type: 'select',
                            name: 'problem',
                            label: 'O que acontece?',
                            required: true,
                            options: [
                                { value: 'notStarting', label: 'Não liga/não inicia' },
                                { value: 'verySlow', label: 'Está extremamente lento' },
                                { value: 'updateProblem', label: 'Problema com atualização' },
                                { value: 'errorMessages', label: 'Aparecem mensagens de erro' },
                                { value: 'restarting', label: 'Reinicia sozinho' }
                            ]
                        },
                        {
                            type: 'checkbox',
                            name: 'whenHappens',
                            label: 'Quando acontece?',
                            options: [
                                { value: 'always', label: 'Sempre' },
                                { value: 'sometimes', label: 'Às vezes' },
                                { value: 'specificAction', label: 'Quando faço algo específico' },
                                { value: 'recently', label: 'Começou recentemente' }
                            ]
                        }
                    ]
                },
                {
                    value: 'office',
                    label: 'Word, Excel ou Outlook',
                    requireAnyDesk: true,
                    dynamicFields: [
                        {
                            type: 'select',
                            name: 'program',
                            label: 'Qual programa?',
                            required: true,
                            options: [
                                { value: 'word', label: 'Word' },
                                { value: 'excel', label: 'Excel' },
                                { value: 'outlook', label: 'Outlook (E-mail)' },
                                { value: 'powerpoint', label: 'PowerPoint' },
                                { value: 'all', label: 'Todos' }
                            ]
                        },
                        {
                            type: 'select',
                            name: 'problem',
                            label: 'Qual o problema?',
                            options: [
                                { value: 'notOpening', label: 'Não abre' },
                                { value: 'crashing', label: 'Fecha sozinho' },
                                { value: 'slow', label: 'Está lento' },
                                { value: 'saving', label: 'Não salva os arquivos' },
                                { value: 'license', label: 'Pedindo licença/ativação' }
                            ]
                        }
                    ]
                },
                {
                    value: 'antivirus',
                    label: 'Antivírus/Segurança',
                    requireAnyDesk: true,
                    dynamicFields: [
                        {
                            type: 'select',
                            name: 'problem',
                            label: 'O que acontece?',
                            required: true,
                            options: [
                                { value: 'notUpdating', label: 'Não atualiza' },
                                { value: 'blocking', label: 'Bloqueia programas que uso' },
                                { value: 'warning', label: 'Mostra avisos de vírus' },
                                { value: 'expired', label: 'Diz que expirou' },
                                { value: 'notWorking', label: 'Não funciona/não abre' }
                            ]
                        }
                    ]
                },
                {
                    value: 'specific',
                    label: 'Outro Programa',
                    requiresDescription: true,
                    requireAnyDesk: true,
                    dynamicFields: [
                        {
                            type: 'text',
                            name: 'programName',
                            label: 'Qual o nome do programa?',
                            required: true,
                            placeholder: 'Ex: AutoCAD, Photoshop, Sistema da empresa...'
                        },
                        {
                            type: 'text',
                            name: 'problemDescription',
                            label: 'O que acontece?',
                            placeholder: 'Ex: Não abre, Travou, Não salva...'
                        }
                    ]
                }
            ],
            network: [
                {
                    value: 'internet',
                    label: 'Internet',
                    requiresDescription: true,
                    dynamicFields: [
                        {
                            type: 'select',
                            name: 'problem',
                            label: 'Como está a internet?',
                            required: true,
                            options: [
                                { value: 'noInternet', label: 'Sem internet nenhuma' },
                                { value: 'verySlow', label: 'Está muito lenta' },
                                { value: 'onAndOff', label: 'Vai e volta (instável)' },
                                { value: 'specificSites', label: 'Alguns sites não abrem' }
                            ]
                        },
                        {
                            type: 'checkbox',
                            name: 'whoAffected',
                            label: 'Quem está com problema?',
                            options: [
                                { value: 'justMe', label: 'Só eu' },
                                { value: 'myTeam', label: 'Minha equipe' },
                                { value: 'entireOffice', label: 'Todo o escritório' },
                                { value: 'dontKnow', label: 'Não sei' }
                            ]
                        }
                    ]
                },
                {
                    value: 'wifi',
                    label: 'Wi-Fi',
                    requiresDescription: true,
                    dynamicFields: [
                        {
                            type: 'select',
                            name: 'problem',
                            label: 'Problema com Wi-Fi',
                            required: true,
                            options: [
                                { value: 'noSignal', label: 'Não pega sinal' },
                                { value: 'weakSignal', label: 'Sinal muito fraco' },
                                { value: 'password', label: 'Não aceita a senha' },
                                { value: 'drops', label: 'Conecta mas cai toda hora' }
                            ]
                        },
                        {
                            type: 'text',
                            name: 'location',
                            label: 'Onde está com problema?',
                            placeholder: 'Ex: Sala de reuniões, Copa, Meu posto...'
                        }
                    ]
                },
                {
                    value: 'vpn',
                    label: 'VPN (Trabalhar de casa)',
                    dynamicFields: [
                        {
                            type: 'select',
                            name: 'problem',
                            label: 'O que acontece?',
                            options: [
                                { value: 'notConnecting', label: 'Não conecta' },
                                { value: 'slow', label: 'Conecta mas fica lento' },
                                { value: 'dropping', label: 'Cai toda hora' },
                                { value: 'password', label: 'Esqueci a senha' }
                            ]
                        },
                        {
                            type: 'checkbox',
                            name: 'workLocation',
                            label: 'Onde está tentando conectar?',
                            options: [
                                { value: 'home', label: 'De casa' },
                                { value: 'travel', label: 'Em viagem' },
                                { value: 'otherOffice', label: 'Outra filial' }
                            ]
                        }
                    ]
                }
            ],
            access: [
                {
                    value: 'password',
                    label: 'Esqueci minha senha',
                    dynamicFields: [
                        {
                            type: 'select',
                            name: 'whatPassword',
                            label: 'Qual senha esqueceu?',
                            required: true,
                            options: [
                                { value: 'computer', label: 'Senha do computador' },
                                { value: 'email', label: 'Senha do e-mail' },
                                { value: 'system', label: 'Senha de algum sistema' },
                                { value: 'vpn', label: 'Senha da VPN' },
                                { value: 'multiple', label: 'Mais de uma senha' }
                            ]
                        },
                        {
                            type: 'text',
                            name: 'username',
                            label: 'Qual seu usuário?',
                            placeholder: 'Ex: joao.silva, 12345'
                        }
                    ]
                },
                {
                    value: 'account',
                    label: 'Preciso de um novo acesso',
                    dynamicFields: [
                        {
                            type: 'select',
                            name: 'forWho',
                            label: 'Para quem é o acesso?',
                            required: true,
                            options: [
                                { value: 'myself', label: 'Para mim (novo funcionário)' },
                                { value: 'newEmployee', label: 'Para novo funcionário' },
                                { value: 'temporary', label: 'Acesso temporário' }
                            ]
                        },
                        {
                            type: 'text',
                            name: 'personName',
                            label: 'Nome da pessoa',
                            required: true,
                            placeholder: 'Ex: Maria Santos, Carlos Oliveira'
                        }
                    ]
                },
                {
                    value: 'email',
                    label: 'Problema com E-mail',
                    dynamicFields: [
                        {
                            type: 'select',
                            name: 'problem',
                            label: 'O que acontece?',
                            required: true,
                            options: [
                                { value: 'notSending', label: 'Não consigo enviar e-mails' },
                                { value: 'notReceiving', label: 'Não chegam e-mails' },
                                { value: 'full', label: 'Caixa de entrada cheia' },
                                { value: 'spam', label: 'Meus e-mails vão para spam' },
                                { value: 'outlook', label: 'Outlook não funciona' }
                            ]
                        }
                    ]
                },
                {
                    value: 'block',
                    label: 'Minha conta está bloqueada',
                    dynamicFields: [
                        {
                            type: 'text',
                            name: 'username',
                            label: 'Qual seu usuário?',
                            required: true,
                            placeholder: 'Ex: maria.santos'
                        },
                        {
                            type: 'text',
                            name: 'whatHappened',
                            label: 'O que estava fazendo quando bloqueou?',
                            placeholder: 'Ex: Digitando senha, Tentando acessar VPN...'
                        }
                    ]
                }
            ],
            system: [
                {
                    value: 'tmsys',
                    label: 'Atualizar meu cargo/função',
                    dynamicFields: [
                        {
                            type: 'text',
                            name: 'employeeName',
                            label: 'Nome do funcionário',
                            required: true,
                            placeholder: 'Ex: Ana Paula Rodrigues'
                        },
                        {
                            type: 'text',
                            name: 'newPosition',
                            label: 'Novo cargo/função',
                            required: true,
                            placeholder: 'Ex: Analista Sênior, Gerente...'
                        }
                    ]
                },
                {
                    value: 'erp',
                    label: 'ERP (Sistema principal)',
                    requiresDescription: true,
                    dynamicFields: [
                        {
                            type: 'select',
                            name: 'problem',
                            label: 'O que acontece?',
                            options: [
                                { value: 'notOpening', label: 'Não abre' },
                                { value: 'slow', label: 'Está lento' },
                                { value: 'error', label: 'Mostra erro' },
                                { value: 'missingData', label: 'Dados sumiram' },
                                { value: 'feature', label: 'Preciso de nova funcionalidade' }
                            ]
                        }
                    ]
                },
                {
                    value: 'crm',
                    label: 'CRM (Clientes)',
                    requiresDescription: true,
                    dynamicFields: [
                        {
                            type: 'select',
                            name: 'problem',
                            label: 'Qual problema?',
                            options: [
                                { value: 'notOpening', label: 'Não abre' },
                                { value: 'cantSave', label: 'Não salva clientes' },
                                { value: 'noData', label: 'Não mostra informações' },
                                { value: 'report', label: 'Relatórios não funcionam' }
                            ]
                        }
                    ]
                }
            ]
        }
    },

    rh: {
        name: "Recursos Humanos",
        categories: [
            {
                value: 'payroll',
                label: 'Salário e Pagamento',
                description: 'Problemas com salário, horas extras, adiantamentos ou pagamento errado'
            },
            {
                value: 'benefits',
                label: 'Benefícios',
                description: 'Plano de saúde, vale-refeição, vale-transporte ou outros benefícios'
            },
            {
                value: 'documentation',
                label: 'Documentos',
                description: 'Preciso de carteira de trabalho, certidões, contrato ou declarações'
            },
            {
                value: 'vacation',
                label: 'Férias e Licenças',
                description: 'Agendar férias, atestado médico, licença maternidade/paternidade'
            },
            {
                value: 'admission',
                label: 'Entrada/Saída da Empresa',
                description: 'Sou novo na empresa ou estou me desligando'
            }
        ],
        priorities: [
            { value: 'high', label: 'Alta - Resolver logo', color: 'orange' },
            { value: 'medium', label: 'Média - Pode esperar um pouco', color: 'yellow' },
            { value: 'low', label: 'Baixa - Sem pressa', color: 'green' }
        ],
        subcategories: {
            payroll: [
                {
                    value: 'salary',
                    label: 'Salário errado/atrasado',
                    requiresDescription: true,
                    dynamicFields: [
                        {
                            type: 'select',
                            name: 'problem',
                            label: 'Qual o problema?',
                            required: true,
                            options: [
                                { value: 'wrongAmount', label: 'Valor errado' },
                                { value: 'late', label: 'Atrasou' },
                                { value: 'missing', label: 'Não caiu' },
                                { value: 'deduction', label: 'Desconto errado' }
                            ]
                        },
                        {
                            type: 'text',
                            name: 'month',
                            label: 'De qual mês?',
                            placeholder: 'Ex: Novembro, Dezembro/2024'
                        }
                    ]
                },
                {
                    value: 'overtime',
                    label: 'Horas extras',
                    requiresDescription: true,
                    dynamicFields: [
                        {
                            type: 'select',
                            name: 'need',
                            label: 'O que precisa?',
                            options: [
                                { value: 'calculate', label: 'Calcular horas' },
                                { value: 'pay', label: 'Receber horas extras' },
                                { value: 'missing', label: 'Horas não pagas' },
                                { value: 'approve', label: 'Aprovar horas' }
                            ]
                        }
                    ]
                }
            ],
            benefits: [
                {
                    value: 'health',
                    label: 'Plano de Saúde',
                    requiresDescription: true,
                    dynamicFields: [
                        {
                            type: 'select',
                            name: 'need',
                            label: 'O que precisa?',
                            options: [
                                { value: 'include', label: 'Incluir dependente' },
                                { value: 'card', label: 'Emitir carteirinha' },
                                { value: 'reimburse', label: 'Reembolso' },
                                { value: 'change', label: 'Mudar plano' }
                            ]
                        }
                    ]
                },
                {
                    value: 'meal',
                    label: 'Vale Refeição/Alimentação',
                    dynamicFields: [
                        {
                            type: 'select',
                            name: 'problem',
                            label: 'Qual problema?',
                            options: [
                                { value: 'notReceived', label: 'Não recebi' },
                                { value: 'notWorking', label: 'Cartão não funciona' },
                                { value: 'lost', label: 'Perdi o cartão' },
                                { value: 'balance', label: 'Saldo errado' }
                            ]
                        }
                    ]
                }
            ],
            documentation: [
                {
                    value: 'workcard',
                    label: 'Carteira de Trabalho',
                    dynamicFields: [
                        {
                            type: 'select',
                            name: 'need',
                            label: 'O que precisa?',
                            options: [
                                { value: 'first', label: 'Primeira via' },
                                { value: 'renew', label: 'Renovar' },
                                { value: 'annotation', label: 'Fazer anotação' },
                                { value: 'copy', label: 'Cópia/segunda via' }
                            ]
                        }
                    ]
                }
            ],
            vacation: [
                {
                    value: 'schedule',
                    label: 'Agendar férias',
                    dynamicFields: [
                        {
                            type: 'text',
                            name: 'preferredPeriod',
                            label: 'Quando quer tirar férias?',
                            placeholder: 'Ex: Janeiro/2025, entre 10 e 25 de março'
                        }
                    ]
                },
                {
                    value: 'sick',
                    label: 'Atestado Médico',
                    dynamicFields: [
                        {
                            type: 'select',
                            name: 'action',
                            label: 'O que fazer?',
                            options: [
                                { value: 'deliver', label: 'Entregar atestado' },
                                { value: 'justify', label: 'Justificar falta' },
                                { value: 'doubt', label: 'Dúvida sobre atestado' }
                            ]
                        }
                    ]
                }
            ],
            admission: [
                {
                    value: 'onboarding',
                    label: 'Sou novo na empresa',
                    requiresDescription: true,
                    dynamicFields: [
                        {
                            type: 'text',
                            name: 'startDate',
                            label: 'Quando começou?',
                            placeholder: 'Ex: 15/01/2025'
                        },
                        {
                            type: 'text',
                            name: 'position',
                            label: 'Qual seu cargo?',
                            placeholder: 'Ex: Analista, Assistente...'
                        }
                    ]
                }
            ]
        }
    },

    sesmt: {
        name: "Segurança do Trabalho",
        categories: [
            {
                value: 'inspection',
                label: 'Vistoria/Inspeção',
                description: 'Preciso que verifiquem algum local ou equipamento de segurança'
            },
            {
                value: 'epi',
                label: 'EPI (Equipamento de Proteção)',
                description: 'Preciso de EPI novo, tamanho errado ou equipamento com defeito'
            },
            {
                value: 'accident',
                label: 'Acidente ou Incidente',
                description: 'Ocorreu um acidente, quase acidente ou situação de risco'
            },
            {
                value: 'health',
                label: 'Saúde no Trabalho',
                description: 'Exames médicos, problema ergonômico ou questão de saúde'
            }
        ],
        priorities: [
            { value: 'high', label: 'Alta - Risco/Urgente', color: 'orange' },
            { value: 'medium', label: 'Média - Importante', color: 'yellow' },
            { value: 'low', label: 'Baixa - Preventivo', color: 'green' }
        ],
        subcategories: {
            inspection: [
                {
                    value: 'routine',
                    label: 'Vistoria de rotina',
                    dynamicFields: [
                        {
                            type: 'text',
                            name: 'location',
                            label: 'Onde precisa vistoriar?',
                            placeholder: 'Ex: Almoxarifado, Galpão 3, Escada do 2º andar'
                        }
                    ]
                }
            ],
            epi: [
                {
                    value: 'request',
                    label: 'Preciso de EPI novo',
                    dynamicFields: [
                        {
                            type: 'select',
                            name: 'epiType',
                            label: 'Qual EPI precisa?',
                            required: true,
                            options: [
                                { value: 'helmet', label: 'Capacete' },
                                { value: 'gloves', label: 'Luvas' },
                                { value: 'glasses', label: 'Óculos de proteção' },
                                { value: 'boots', label: 'Botas' },
                                { value: 'earProtection', label: 'Protetor auricular' },
                                { value: 'mask', label: 'Máscara/respirador' }
                            ]
                        },
                        {
                            type: 'text',
                            name: 'size',
                            label: 'Qual tamanho? (se souber)',
                            placeholder: 'Ex: M, 42, P'
                        }
                    ]
                },
                {
                    value: 'defective',
                    label: 'EPI com defeito/estragou',
                    requiresDescription: true,
                    dynamicFields: [
                        {
                            type: 'text',
                            name: 'whatHappened',
                            label: 'O que aconteceu?',
                            placeholder: 'Ex: A alça quebrou, O plástico rachou...'
                        }
                    ]
                }
            ],
            accident: [
                {
                    value: 'register',
                    label: 'Registrar acidente',
                    requiresDescription: true,
                    dynamicFields: [
                        {
                            type: 'select',
                            name: 'accidentType',
                            label: 'Tipo de ocorrência',
                            options: [
                                { value: 'withInjury', label: 'Com ferimento/lesão' },
                                { value: 'noInjury', label: 'Sem ferimento (quase acidente)' },
                                { value: 'material', label: 'Só dano material' }
                            ]
                        }
                    ]
                }
            ],
            health: [
                {
                    value: 'medical',
                    label: 'Exames Médicos',
                    dynamicFields: [
                        {
                            type: 'select',
                            name: 'examType',
                            label: 'Qual exame?',
                            options: [
                                { value: 'admission', label: 'Admissional' },
                                { value: 'periodic', label: 'Periódico' },
                                { value: 'return', label: 'Retorno ao trabalho' },
                                { value: 'dismissal', label: 'Demissional' }
                            ]
                        }
                    ]
                }
            ]
        }
    },
}