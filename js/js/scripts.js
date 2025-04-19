// Verifica se está logado, se não redireciona
if (localStorage.getItem("loggedIn") !== "true") {
  window.location.href = "index.html";
}

// Função para sair
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}
