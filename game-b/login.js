// Hardcoded credentials
const USERS = {
    "prat": "prat",
    "admin": "admin"
  };
  
  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
  
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value;
  
    if (USERS[user] && USERS[user] === pass) {
      // Save session and redirect
      sessionStorage.setItem("user", user);
      window.location.href = "home.html";
    } else {
      document.getElementById("error").innerText = "Invalid credentials!";
    }
  });
  