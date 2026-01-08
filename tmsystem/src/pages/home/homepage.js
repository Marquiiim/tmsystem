import styles from './homepage.module.css'

import Layout from '../../layout/layout'

function Homepage() {

    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.content}>
                    <ul className={styles.list_tickets}>
                        <li>
                            <h3>
                                Suporte de TI
                            </h3>
                            <p>
                                Utilize este canal para solicitar apoio técnico relacionado à tecnologia da informação.
                                Aqui você pode registrar chamados para problemas em computadores, notebooks, sistemas, e-mail, internet, acessos, senhas, softwares, equipamentos de TI, além de solicitações de novos recursos tecnológicos.
                            </p>
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
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export default Homepage;