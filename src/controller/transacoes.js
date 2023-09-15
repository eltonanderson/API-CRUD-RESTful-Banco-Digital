const { format } = require("date-fns");
const {
  banco,
  contas,
  depositos,
  saques,
  transferencias,
} = require("../bancodedados");

function depositarDinheiro(req, res) {
  const { numero_conta, valor } = req.body;

  if (!numero_conta || valor === undefined)
    return res.status(400).json({
      Mensagem: "Número da conta e Valor a depositar são campos obrigatórios",
    });

  const contaDoUsuario = contas.find((elemento) => {
    return elemento.numero === numero_conta;
  });

  if (!contaDoUsuario) {
    return res.status(404).json({ Mensagem: "Número de conta não encontrado" });
  }

  const indiceDaConta = contas.indexOf(contaDoUsuario);

  if (valor > 0) {
    const data = new Date();

    depositos.push({
      data: format(data, "yyyy-MM-dd HH:mm:ss"),
      numero_conta,
      valor,
    });

    contas[indiceDaConta].saldo += valor;

    res.status(200).json({
      Mensagem: `Número da conta ${numero_conta} Deposito de R$${(
        valor / 100
      ).toFixed(2)}. Seu saldo atual é de R$${(
        contas[indiceDaConta].saldo / 100
      ).toFixed(2)}`,
    });
  } else {
    res
      .status(400)
      .json({ Mensagem: "Valor a ser depositado deve ser maior que zero" });
  }
}

function sacarDinheiro(req, res) {
  const { numero_conta, valor, senha } = req.body;

  if (!numero_conta || valor === undefined || !senha) {
    return res
      .status(400)
      .json({ Mensagem: "Todos os campos da requisição de ser preenchidos" });
  }

  const contaDoUsuario = contas.find((elemento) => {
    return elemento.numero === numero_conta;
  });

  if (!contaDoUsuario)
    return res.status(404).json({ Mensagem: "Conta não localizada" });

  if (contaDoUsuario.usuario.senha !== senha)
    return res.status(403).json({ Mensagem: "Senha inválida" });

  if (contaDoUsuario.saldo < valor)
    return res.status(400).json({ Mensagem: "Saldo insuficiente" });

  const indiceDaConta = contas.indexOf(contaDoUsuario);

  if (valor > 0) {
    const data = new Date();

    saques.push({
      data: format(data, "yyyy-MM-dd HH:mm:ss"),
      numero_conta,
      valor,
    });

    contas[indiceDaConta].saldo -= valor;

    res.status(200).json({
      Mensagem: `Número da conta ${numero_conta} Saque de R$${(
        valor / 100
      ).toFixed(2)}. Seu saldo atual é de R$${(
        contas[indiceDaConta].saldo / 100
      ).toFixed(2)}`,
    });
  } else {
    res
      .status(400)
      .json({ Mensagem: "Valor a ser sacado deve ser maior que zero" });
  }
}

function transferirDinheiro(req, res) {
  const { numero_conta_origem, numero_conta_destino, valor, senha } = req.body;

  if (
    !numero_conta_origem ||
    !numero_conta_destino ||
    valor === undefined ||
    !senha
  )
    return res.status(400).json({
      Mensagem: "Todos os campos da requisição devem ser preenchidos",
    });

  const contaDeOrigem = contas.find((elemento) => {
    return elemento.numero === numero_conta_origem;
  });

  if (!contaDeOrigem)
    return res.status(404).json({ Mensagem: "Conte de origem não existe." });

  const contaDeDestino = contas.find((elemento) => {
    return elemento.numero === numero_conta_destino;
  });

  if (!contaDeDestino)
    return res.status(404).json({ Mensagem: "Conte de destino não existe." });

  if (contaDeOrigem.usuario.senha !== senha)
    return res.status(403).json({ Mensagem: "Senha inválida" });

  const indiceOrigem = contas.indexOf(contaDeOrigem);
  const indiceDestino = contas.indexOf(contaDeDestino);

  if (contas[indiceOrigem].saldo < valor)
    return res.status(400).json({ Mensagem: "Saldo insuficiente" });

  if (valor > 0) {
    const data = new Date();

    transferencias.push({
      data: format(data, "yyyy-MM-dd HH:mm:ss"),
      numero_conta_origem,
      numero_conta_destino,
      valor,
    });

    contas[indiceOrigem].saldo -= valor;
    contas[indiceDestino].saldo += valor;

    res.status(200).json({
      Mensagem: "Transferência realizada com sucesso",
    });
  } else {
    res
      .status(400)
      .json({ Mensagem: "Valor a ser transferido deve ser maior que zero" });
  }
}

module.exports = { depositarDinheiro, sacarDinheiro, transferirDinheiro };
