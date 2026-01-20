import styles from './homepage.module.css'

import Layout from '../../layout/layout'
import CardHome from '../../components/cards/cardsHome'

function HomePage() {

    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h3 className={styles.title_home}>
                        CENTRAL DE SERVIÇOS
                    </h3>
                    <ul className={styles.list_tickets}>
                        <CardHome
                            title='Suporte de TI'
                            description='Utilize este canal para solicitar apoio técnico relacionado à tecnologia da informação. Aqui você pode registrar chamados para problemas em computadores, notebooks, sistemas, e-mail, internet, acessos, senhas, softwares, equipamentos de TI, além de solicitações de novos recursos tecnológicos.'
                            path='/ticket/ti'
                        />
                        <CardHome
                            title='Recursos Humanos'
                            description='Use este canal para tratar de assuntos relacionados à vida funcional do colaborador. Aqui você pode solicitar informações ou suporte sobre folha de pagamento, benefícios, férias, ponto eletrônico, admissões, desligamentos, treinamentos, documentos, afastamentos e políticas internas.'
                            path='/ticket/rh'
                        />
                        <CardHome
                            title='Segurança do Trabalho'
                            description='Direcione para este setor todas as solicitações relacionadas à segurança, saúde e bem-estar no ambiente laboral. Inclui inspeções de segurança, análise de riscos, treinamentos de EPI/EPC, investigação de acidentes, programas de prevenção, monitoramento ambiental, ergonomia, saúde ocupacional e compliance com normas regulatórias.'
                            path='/ticket/sesmt'
                        />
                    </ul>
                </div>
            </div >
        </Layout >
    )
}

export default HomePage;