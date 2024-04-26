function autenticar() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    // Vai pegar os dados inseridos no localStorage
    var cadastrado_email = localStorage.getItem("cadastro_email");
    var cadastrado_senha = localStorage.getItem("cadastro_senha");

    // Verificar se os dados de login estão corretos
    if (email === cadastrado_email && senha === cadastrado_senha) {
        // Login bem sucedido
        window.location.href = "main.html";
    } else {
        // Login falhou
        exibirMensagemErro("E-mail ou senha incorretos.");
    }
}

// Função definirá um temporizador para caso tenha algum erro 
function exibirMensagemErro(mensagem) {
    var msgError = document.getElementById("msgError");
    msgError.innerText = mensagem;
    msgError.style.display = "block";
    setTimeout(function() {
        ocultarMensagemErro();
    }, 5000);
}

function ocultarMensagemErro() {
    var msgError = document.getElementById("msgError");
    msgError.style.display = "none";
}