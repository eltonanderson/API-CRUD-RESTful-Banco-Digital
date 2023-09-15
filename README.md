# CRUD - RESTFul - API de Banco Digital

**API de Banco Digital** é um projeto desenvolvido como parte do desafio do Módulo 02 da Cubos Academy. Esta API oferece funcionalidades para criação, gerenciamento e realização de operações bancárias em contas bancárias virtuais.

## Principais Funcionalidades

A **API de Banco Digital** oferece um conjunto abrangente de funcionalidades para atender às necessidades do sistema bancário virtual:

- **Criação de Conta Bancária:** Esta funcionalidade permite criar uma nova conta bancária associada a um usuário, gerando um número de conta único para identificação.

- **Listagem de Contas Bancárias:** Recupere a lista completa de todas as contas bancárias registradas no sistema, facilitando a visualização e o gerenciamento.

- **Atualização de Dados do Usuário:** Atualize os dados do usuário associado a uma conta bancária, incluindo nome, CPF, data de nascimento, telefone, e-mail e senha, proporcionando controle total sobre as informações pessoais.

- **Exclusão de Conta Bancária:** Remova uma conta bancária específica e todos os seus dados do sistema com facilidade.

- **Depósito de Fundos:** Realize depósitos em uma conta bancária especificada, adicionando fundos à conta de forma simples e segura.

- **Saque de Fundos:** Permita o saque de fundos de uma conta bancária, desde que haja saldo disponível, oferecendo flexibilidade nas operações financeiras.

- **Transferência de Fundos:** Facilite a transferência de fundos entre duas contas bancárias, possibilitando transações eficientes entre contas de diferentes titulares.

- **Consulta de Saldo:** Obtenha o saldo atual disponível em uma conta bancária de maneira rápida e conveniente.

- **Emissão de Extrato Bancário:** Gere um extrato detalhado das transações realizadas em uma conta bancária, fornecendo um histórico completo das operações financeiras.

## Rotas da API

A **API de Banco Digital** oferece um conjunto de rotas para atender às diversas operações bancárias e consultas disponíveis:

- **POST /contas:** Utilize esta rota para criar uma nova conta bancária no sistema.

- **GET /contas:** Acesse esta rota para obter a lista completa de todas as contas bancárias registradas.

- **PUT /contas/:numero/usuario:** Atualize os dados do usuário associado a uma conta bancária por meio desta rota, permitindo a atualização de informações como nome, CPF, data de nascimento, telefone, e-mail e senha.

- **DELETE /contas/:numero:** Esta rota permite a exclusão de uma conta bancária específica do sistema.

- **POST /transacoes/depositar:** Realize um depósito em uma conta bancária utilizando esta rota para adicionar fundos à conta desejada.

- **POST /transacoes/sacar:** Utilize esta rota para efetuar o saque de fundos de uma conta bancária, desde que haja saldo disponível para a operação.

- **POST /transacoes/transferir:** Realize a transferência de fundos entre duas contas bancárias por meio desta rota, facilitando transações entre contas de diferentes titulares.

- **GET /contas/saldo:** Consulte o saldo disponível em uma conta bancária acessando esta rota para verificar o valor atual da conta.

- **GET /contas/extrato:** Gere um extrato bancário detalhado das transações realizadas em uma conta bancária através desta rota, permitindo uma visão completa do histórico de operações.

## Como Executar

Para executar este projeto localmente, siga os passos abaixo:

1. Clone este repositório:

   ```bash
   git@github.com:eltonanderson/API-CRUD-RESTful-Banco-Digital.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd API-CRUD-RESTful-Banco-Digital/src/
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor:

   ```bash
   npm start
   ```

A API estará disponível em [http://localhost:3000](http://localhost:3000) por padrão.

Divirta-se explorando as funcionalidades desta API de Banco Digital! 😊🏦

**Nota:** Certifique-se de ter o Node.js instalado em seu sistema antes de seguir os passos acima.
