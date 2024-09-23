const validCredentials = {
    username: 'Logical',
    password: 'Legacy1978'
};

function togglePassword() {
    const passwordInput = document.getElementById('password');
    const togglePasswordText = document.getElementById('togglePassword');
    
    // Toggle between password and text input type
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePasswordText.textContent = 'Hide'; // Change text to "Hide"
    } else {
        passwordInput.type = 'password';
        togglePasswordText.textContent = 'Show'; // Change text back to "Show"
    }
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === validCredentials.username && password === validCredentials.password) {
        alert('Login successful! Redirecting...');
        window.location.href = "Dashboard.html";
    } else {
        alert('Invalid username or password. Please try again.');
    }
});

