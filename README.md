Plataforma interna completa para abertura, acompanhamento e resolução de chamados/tickets entre colaboradores de uma empresa. Facilita a comunicação estruturada para reportar e resolver problemas relacionados a diferentes setores (TI, RH, SESMT, etc.), com controle de acesso por perfil e rastreabilidade total.

## Funcionalidades principais

- Autenticação segura com login + refresh token
- Criação, visualização, atualização e encerramento de chamados/tickets
- Atribuição de responsáveis + status workflow (Aberto, Em andamento, Pendente, (Cancelado, Fechado, Resolvido, Aguardando Validação))
- Comentários e histórico de alterações por ticket
- Proteção de rotas privadas com verificação em tempo real de token e permissões
- Validação de dados e tratamento centralizado de erros

## Frontend

- React (componentização e reutilização)
- SASS (estilização modular e organizada)
- Axios (consumo de API com interceptors)
- Protected Routes customizadas (verificação constante de autenticação e autorização)

## Backend

- Node.js + Express (API RESTful)
- Autenticação: JWT + Refresh Tokens
- Hash de senhas: bcrypt
- Banco de dados: MySQL (com mysql2)
- Gerenciamento de cookies: cookie-parser
- Variáveis de ambiente: dotenv
- Segurança: rate-limit (proteção contra brute-force e abuso em login/requisições)
- Boas práticas: middlewares dedicados, separação de responsabilidades

## Destaques técnicos

- Implementação de refresh token rotation para maior segurança
- Rotas protegidas com verificação em cada navegação (evita acesso indevido)
- API com limitação de taxa (rate limiting) em endpoints sensíveis
- Armazenamento seguro de segredos via .env
- Foco em UX: interface limpa e responsiva para uso diário interno

Projeto pessoal desenvolvido para simular um sistema corporativo real, com ênfase em segurança, escalabilidade e boas práticas de autenticação moderna.
