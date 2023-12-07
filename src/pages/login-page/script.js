function validateLogin() {
  // Obtemos os valores inseridos pelo usuário
  var user = document.getElementById('usernameInput').value;
  var password = document.getElementById('passwordInput').value;

  // Obtendo o modelo do aluno do banco de dados
  const AlunosModel = require('../../database/alunosModel');

  // Realizando a consulta para verificar o usuário e senha
  AlunosModel.findOne({ user: user, password: password })
    .then((userEncontrado) => {
      if (userEncontrado || userEncontrado.password == password) {
        alert('Usuário e senha válidos. Dados do usuário:', userEncontrado);
      } else {
        alert('Usuário ou senha incorretos.');
      }
    }).catch((err) => {
      console.error('Erro durante a verificação:', err.message);
    });
}