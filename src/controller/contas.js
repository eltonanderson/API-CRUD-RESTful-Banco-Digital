const { banco, contas } = require("../bancodedados");

function listasTodasAsContas(req, res) {
  const senha = req.query.senha_banco;

  if (senha === banco.senha) {
    return res.json(contas);
  }

  return res
    .status(401)
    .json({ mensagem: "A senha do banco informada é inválida!" });
}

function addNovaConta(req, res) {
  const { nome, cpf, data_nascimento, telefone, email } = req.body;

  let usuario = contas.find((elemento) => {
    return elemento.usuario.cpf === cpf || elemento.usuario.email === email;
  });

  if (usuario) {
    return res
      .status(400)
      .json({ mensagem: "Já existe uma conta com o cpf ou e-mail informado!" });
  } else {
    usuario = req.body;
  }

  if (!nome || !cpf || !data_nascimento || !telefone || !email) {
    return res
      .status(400)
      .json({ mensagem: "Todos os campos devem estar preenchidos!" });
  }

  const numero = Number(contas[contas.length - 1].numero) + 1;

  const novaConta = {
    numero: numero.toString(),
    saldo: 0,
    usuario,
  };

  contas.push(novaConta);

  return res
    .status(204)
    .json({ mensagem: "Nova conta adicionada com sucesso" });
}

function atualizarUsuario(req, res) {
  const numeroConta = req.params.numeroConta;

  const contaDoUsuario = contas.find((elemento) => {
    return elemento.numero === numeroConta;
  });

  if (!contaDoUsuario) {
    return res.status(404).json({ Mensagem: "Número de conta não encontrado" });
  }

  const indiceDaConta = contas.indexOf(contaDoUsuario);

  const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

  if (!nome || !cpf || !data_nascimento || !telefone || !email || !senha) {
    return res
      .status(400)
      .json({ Mensagem: "Corpo da requisição com dados incompletos" });
  }

  if (contaDoUsuario.usuario.cpf !== cpf) {
    return res
      .status(400)
      .json({ Mensagem: "CPF informado diferente do cadastro do cliente" });
  }

  const usuariosFiltrado = contas.filter((elemento) => {
    return elemento !== contas[indiceDaConta];
  });

  const checarEmail = usuariosFiltrado.find((elemento) => {
    return elemento.usuario.email === email;
  });

  if (checarEmail) {
    return res
      .status(400)
      .json({ Mensagem: "E-mail informado Pertence a outro usuário" });
  }

  contaDoUsuario.usuario = {
    nome,
    cpf,
    data_nascimento,
    telefone,
    email,
    senha,
  };

  return res.status(200).json({ Mensagem: "Dados do usuário atualizados" });
}

function deletarConta(req, res) {
  const numeroConta = req.params.numeroConta;

  const contaDoUsuario = contas.find((elemento) => {
    return elemento.numero === numeroConta;
  });

  if (!contaDoUsuario)
    return res.status(404).json({ Mensagem: "Número de conta não existe" });

  const indiceDaConta = contas.indexOf(contaDoUsuario);

  if (contaDoUsuario.saldo === 0) {
    contas.splice(indiceDaConta, 1);
    res
      .status(200)
      .json({ Mensagem: `Conta número: ${numeroConta} excluída com sucesso` });
  } else {
    res.status(200).json({
      Mensagem: `Conta número: ${numeroConta} possui um Saldo de R$${(
        contaDoUsuario.saldo / 100
      ).toFixed(2)}, faça o saque de todo o saldo antes de excluir a conta`,
    });
  }
}

module.exports = {
  listasTodasAsContas,
  addNovaConta,
  atualizarUsuario,
  deletarConta,
};
