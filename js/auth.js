async function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  const response = await fetch('data/users.json');
  const users = await response.json();

  const validUser = users.find(user => user.username === username && user.password === password);

  if (validUser) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    errorMessage.textContent = "Usuário ou senha inválidos.";
  }
}
