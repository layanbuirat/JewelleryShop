document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signinForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email.trim() === "" || password.trim() === "") {
            alert("Please fill in all fields.");
        } else {
            alert("Sign In Successful!");
            // Redirect to home page or dashboard
            window.location.href = "index.html";
        }
    });
});