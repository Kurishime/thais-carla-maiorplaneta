// Função para exibir a tela após o login
function showAfterLogin() {
    document.getElementById("afterLogin").style.display = "block";
}

// Funções para as opções
function bypass() {
    alert("BYPAAS ativado");
}

// Event listener para o formulário de login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    showAfterLogin(); // Exibe a tela após o login
});
