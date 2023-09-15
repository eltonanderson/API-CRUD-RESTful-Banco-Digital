const {
  contas,
  saques,
  depositos,
  transferencias,
} = require("../bancodedados");

function consultarSaldo(req, res) {
  const { numero_conta, senha } = req.query;

  if (!numero_conta || !senha)
    return res
      .status(400)
      .json({ Mensagem: "Número da conta e Senhas devem ser enviados" });

  const contaDoUsuario = contas.find((elemento) => {
    return elemento.numero === numero_conta;
  });

  if (!contaDoUsuario)
    return res.status(404).json({ Mensagem: "Conta bancária não encontada!" });

  if (contaDoUsuario.usuario.senha !== senha)
    return res.status(403).json({ Mensagem: "Senha inválida" });

  const saldo = { saldo: contaDoUsuario.saldo };

  res.status(200).json(saldo);
}

function consultarExtrato(req, res) {
  const { numero_conta, senha } = req.query;

  if (!numero_conta || !senha)
    return res
      .status(400)
      .json({ Mensagem: "Número da conta e Senhas devem ser enviados" });

  const contaDoUsuario = contas.find((elemento) => {
    return elemento.numero === numero_conta;
  });

  if (!contaDoUsuario)
    return res.status(404).json({ Mensagem: "Conta bancária não encontada!" });

  if (contaDoUsuario.usuario.senha !== senha)
    return res.status(403).json({ Mensagem: "Senha inválida" });

  const deposito = [],
    saque = [],
    transferenciasEnviadas = [],
    transferenciasRecebidas = [];

  for (let i of saques) {
    if (i.numero_conta === numero_conta) {
      saque.push(i);
    }
  }

  for (let i of depositos) {
    if (i.numero_conta === numero_conta) {
      depositos.push(i);
    }
  }

  for (let i of transferencias) {
    if (i.numero_conta_origem === numero_conta) {
      transferenciasEnviadas.push(i);
    }
    if (i.numero_conta_destino === numero_conta) {
      transferenciasRecebidas.push(i);
    }
  }

  const extrato = {
    depositos: deposito,
    saques: saque,
    transferenciasEnviadas,
    transferenciasRecebidas,
  };

  return res.status(200).json(extrato);
}

module.exports = { consultarSaldo, consultarExtrato };
