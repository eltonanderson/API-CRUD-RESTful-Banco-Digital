const express = require("express");
const {
  listasTodasAsContas,
  addNovaConta,
  atualizarUsuario,
  deletarConta,
} = require("./controller/contas");
const {
  depositarDinheiro,
  sacarDinheiro,
  transferirDinheiro,
} = require("./controller/transacoes");
const { consultarSaldo, consultarExtrato } = require("./controller/consultas");

const route = express();

route.get("/", (req, res) => res.send("Hello World!"));

// Listar todas as contas
route.get("/contas", listasTodasAsContas);

//Adicionar nova conta
route.post("/contas", addNovaConta);

//Atualizar usuário da conta bancária
route.put("/contas/:numeroConta/usuario", atualizarUsuario);

//Deletar conta de usuário
route.delete("/contas/:numeroConta", deletarConta);

//Depositar
route.post("/transacoes/depositar", depositarDinheiro);

//Sacar
route.post("/transacoes/sacar", sacarDinheiro);

//Transferir
route.post("/transacoes/transferir", transferirDinheiro);

//Consultar Saldo
route.get("/contas/saldo", consultarSaldo);

//Consultar Extrato
route.get("/contas/extrato", consultarExtrato);

module.exports = route;
