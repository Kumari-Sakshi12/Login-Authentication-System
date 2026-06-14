if(localStorage.getItem("LoggedIn") !== "true") {
    window.location.href = "login.html";
}
function logout() {
    localStorage.removeItem("LoggedIn");
    window.location.href = "login.html";
}