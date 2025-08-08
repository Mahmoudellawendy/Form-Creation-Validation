document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener(Submit, function (event) {
        event.preventDefault();


        const username = document.getElementById("username").Value.trim();
        const email = document.getElementById("email").Value.trim();
        const password = document.getElementById("password").Value.trim();


        let isValid = true;
        const messages = [];


        if (username.lenght < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters.");
        }

        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        if (password.lenght < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters.");
        }

        feedbackDiv.style.display = "block";


        if (isValid) {
            feedbackDiv.textContent = "Registraion successful!";
            feedbackDiv.style.color = "#28a745"
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545"
        }    
    });
});