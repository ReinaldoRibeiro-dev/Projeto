function validarEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
} // // Defini o modelo digitação do email

function validarSenha(senha) {
  var senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
  return senhaRegex.test(senha);
} // Defini o modelo digitação da senha

function cadastrar() {
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;
  var confirmSenha = document.getElementById("confirmSenha").value;

  if (!validarEmail(email)) {
      exibirMensagemErro("Formato de email inválido.");
      return;
  } // Verifica se o formato do email está correto

  if (!validarSenha(senha)) {
      exibirMensagemErro("Formato de senha inválido. A senha deve ter pelo menos 8 caracteres, incluindo uma letra minúscula, uma letra maiúscula e um número.");
      return;
  } // Verifica se o formato de senha é igual ao estipulado na function validarSenha

  if (senha !== confirmSenha) {
      exibirMensagemErro("As senhas não coincidem.");
      return;
  } // Verificar se as senhas são semelhantes

  // Armazenar os dados no localStorage
  localStorage.setItem("cadastro_email", email);
  localStorage.setItem("cadastro_senha", senha);

 
  exibirMensagemSucesso("Cadastro realizado com sucesso!");

  // Temporizador para esconder a mensagem de sucesso após 2 seg e redirecionar para a tela de login.html
  setTimeout(function() {
      ocultarMensagemSucesso();
      window.location.href = "login.html";
  }, 2000);
}

// Temporizador para caso erre alguma parte do cadastro aparecer o alerta e depois dos 3 seg desaparecer
function exibirMensagemErro(mensagem) {
  var msgError = document.getElementById("msgError");
  msgError.innerText = mensagem;
  msgError.style.display = "block";
  setTimeout(function() {
      ocultarMensagemErro();
  }, 3000); 
}

function ocultarMensagemErro() {
  var msgError = document.getElementById("msgError");
  msgError.style.display = "none";
}

function exibirMensagemSucesso(mensagem) {
  var msgSuccess = document.getElementById("msgSuccess");
  msgSuccess.innerText = mensagem;
  msgSuccess.style.display = "block";
  setTimeout(function() {
      ocultarMensagemSucesso();
  }, 3000);
}

function ocultarMensagemSucesso() {
  var msgSuccess = document.getElementById("msgSuccess");
  msgSuccess.style.display = "none";
}