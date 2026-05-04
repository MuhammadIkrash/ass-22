let signupForm = document.getElementById("signupForm");
signupForm.addEventListener("submit", function (e) {
   e.preventDefault();
   let username = document.getElementById("username").value;
   let email = document.getElementById("email").value;
   let password = document.getElementById("password").value;
   if(localStorage.getItem(email)){
      alert("Email already exists. Please use a different email.");
      return;
   }
   if(password.length < 6){
      alert("Password must be at least 6 characters long.");
      return;
   }
   localStorage.setItem('username', username);
   localStorage.setItem(email, password);
   alert("Signup successful!");
   location.href = "login.html";
});