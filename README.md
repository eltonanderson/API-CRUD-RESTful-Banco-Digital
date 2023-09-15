# CRUD - RESTFul - Banco Digital API

**Banco Digital API** é um projeto desenvolvido como parte do desafio do Módulo 02 da Cubos Academy. Esta API oferece funcionalidades para criação, gerenciamento e realização de operações bancárias em contas bancárias virtuais.

## Funcionalidades Principais

A API inclui as seguintes funcionalidades:

- **Criar Conta Bancária:** Permite a criação de uma nova conta bancária associada a um usuário, gerando um número de conta único.

- **Listar Contas Bancárias:** Recupera a lista de todas as contas bancárias registradas no sistema.

- **Atualizar Dados do Usuário:** Permite a atualização dos dados do usuário associado a uma conta bancária, como nome, CPF, data de nascimento, telefone, e-mail e senha.

- **Excluir Conta Bancária:** Remove uma conta bancária e seus dados do sistema.

- **Depositar:** Realiza um depósito em uma conta bancária especificada.

- **Sacar:** Permite o saque de fundos de uma conta bancária, desde que haja saldo disponível.

- **Transferir:** Realiza a transferência de fundos entre duas contas bancárias.

- **Consultar Saldo:** Retorna o saldo atual disponível em uma conta bancária.

- **Emitir Extrato Bancário:** Gera um extrato detalhado das transações realizadas em uma conta bancária.

## Rotas da API

A API disponibiliza as seguintes rotas:

- `POST /contas`: Cria uma nova conta bancária.
- `GET /contas`: Retorna a lista de todas as contas bancárias.
- `PUT /contas/:numero/usuario`: Atualiza os dados do usuário associado a uma conta bancária.
- `DELETE /contas/:numero`: Exclui uma conta bancária.
- `POST /transacoes/depositar`: Realiza um depósito em uma conta bancária.
- `POST /transacoes/sacar`: Permite o saque de fundos de uma conta bancária.
- `POST /transacoes/transferir`: Realiza a transferência de fundos entre duas contas bancárias.
- `GET /contas/saldo`: Consulta o saldo disponível em uma conta bancária.
- `GET /contas/extrato`: Emite um extrato bancário das transações realizadas em uma conta.

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
