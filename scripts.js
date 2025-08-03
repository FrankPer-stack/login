// Mostrar formulario de login
function showLogin() {
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('register-form').classList.add('hidden');
}

// Mostrar formulario de registro
function showRegister() {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('register-form').classList.remove('hidden');
}

// Lógica del registro (simulado)
function register() {
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    if (username && email && password) {
        alert(`Usuario ${username} registrado con éxito.`);
        // Aquí puedes implementar el envío de datos a un servidor
        showLogin();
    } else {
        alert('Por favor, complete todos los campos.');
    }
}

// Lógica del login (simulado)
function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (username === 'admin' && password === '1234') {
        alert('Inicio de sesión exitoso.');
        // Aquí puedes redirigir al usuario a otra página
    } else {
        alert('Usuario o contraseña incorrectos.');
    }
}
