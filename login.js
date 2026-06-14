function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    if(username === storedUsername && password === storedPassword) {
        localStorage.setItem("LoggedIn", "true");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password.");
    }
}