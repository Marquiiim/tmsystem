import styles from './homepage.module.css'

import { Link } from 'react-router-dom';

import Layout from '../../layout/layout'

function Homepage() {

    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.content}>
                    <ul className={styles.list_tickets}>
                        <li>
                            <Link to='/ti-tickets'>
                                <h3>
                                    Suporte de TI
                                </h3>
                                <p>
                                    Utilize este canal para solicitar apoio técnico relacionado à tecnologia da informação.
                                    Aqui você pode registrar chamados para problemas em computadores, notebooks, sistemas, e-mail, internet, acessos, senhas, softwares, equipamentos de TI, além de solicitações de novos recursos tecnológicos.
                                </p>
                            </Link>
                        </li>
                        <li>
                            <h3>
                                Administrativo
                            </h3>
                            <p>
                                Este canal atende demandas administrativas e corporativas da empresa.
                                Abra tickets para compras, contratos, financeiro, contas a pagar/receber, documentos, patrimônio, almoxarifado, notas fiscais, processos internos e solicitações administrativas em geral.
                            </p>
                        </li>
                        <li>
                            <h3>
                                Recursos Humanos
                            </h3>
                            <p>
                                Use este canal para tratar de assuntos relacionados à vida funcional do colaborador.
                                Aqui você pode solicitar informações ou suporte sobre folha de pagamento, benefícios, férias, ponto eletrônico, admissões, desligamentos, treinamentos, documentos, afastamentos e políticas internas.
                            </p>
                        </li>
                        <li>
                            <h3>
                                Manutenção Predial
                            </h3>

                            <p>
                                Este setor é responsável por manter a estrutura física da empresa em pleno funcionamento.
                                Abra um ticket para problemas elétricos, hidráulicos, ar-condicionado, iluminação, portas, fechaduras, mobiliário, pintura, elevadores, áreas comuns ou qualquer necessidade de manutenção corretiva ou preventiva nas instalações.
                            </p>
                        </li>
                        <li>
                            <h3>
                                Serviços e Apoio
                            </h3>
                            <p>
                                Utilize este setor para solicitar serviços de apoio ao funcionamento diário da empresa.
                                Inclui limpeza, conservação, copa, portaria, vigilância, controle de acesso, jardinagem, coleta de resíduos, organização de ambientes e outros serviços essenciais ao bem-estar e à operação do espaço físico.
                            </p>
                        </li>
                        <li>
                            <h3>
                                Segurança do Trabalho
                            </h3>
                            <p>
                                Direcione para este setor todas as solicitações relacionadas à segurança, saúde e bem-estar no ambiente laboral.
                                Inclui inspeções de segurança, análise de riscos, treinamentos de EPI/EPC, investigação de acidentes, programas de prevenção,
                                monitoramento ambiental, ergonomia, saúde ocupacional e compliance com normas regulatórias                            </p>
                        </li>
                        <li>
                            <h3>
                                Gerência
                            </h3>
                            <p>
                                Utilize este canal para demandas estratégicas, decisões administrativas de alto nível e direcionamento organizacional.
                                Inclui aprovação de orçamentos, definição de políticas, planejamento estratégico, gestão de resultados,
                                tomada de decisões corporativas, alinhamento de metas e supervisão geral das operações da empresa.
                            </p>
                        </li>
                        <li>
                            <h3>
                                Supervisão
                            </h3>
                            <p>
                                Encaminhe para este setor questões operacionais, acompanhamento de equipes e controle de processos diários.
                                Inclui coordenação de atividades, monitoramento de desempenho, solução de problemas operacionais,
                                orientação técnica, fiscalização de normas, avaliação de produtividade e garantia da qualidade dos serviços executados.                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export default Homepage;