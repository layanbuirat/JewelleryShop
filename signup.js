document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signupForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const fullName = document.getElementById("fullName").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (fullName.trim() === "" || email.trim() === "" || password.trim() === "" || confirmPassword.trim() === "") {
            alert("Please fill in all fields.");
        } else if (password !== confirmPassword) {
            alert("Passwords do not match.");
        } else {
            alert("Sign Up Successful!");
            // Redirect to sign-in page
            window.location.href = "signin.html";
        }
    });
});