let loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let storedPassword = localStorage.getItem(email);
    if (storedPassword === null) {
        alert("Email not found. Please sign up first.");
    }else{
        if(storedPassword === password){
            alert("Login successful!");
            location.href = "Home.html";
        }else{
            alert("Incorrect password.");
        }
    }
});