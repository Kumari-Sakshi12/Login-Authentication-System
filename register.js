function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value; 
    if(username=== "" || password=== "" ) {
        alert("Please fill in all fields.");
        return;
    }
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert("Registration successful! You can now log in.");
    window.location.href = 'login.html';
}