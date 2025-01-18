document.addEventListener("DOMContentLoaded", function () {
    // Toggle Navbar in Mobile View
    const navbar = document.querySelector('.navbar ul');

   
    });

    // Toggle Dropdown Menus
    document.querySelectorAll('.navbar > ul > li').forEach((item) => {
        item.addEventListener('click', function (e) {
            const dropdown = this.querySelector('.dropdown');
            if (dropdown) {
                e.preventDefault();
                dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
            }
        });
    });

    document.addEventListener("DOMContentLoaded", () => {
        const signInForm = document.getElementById("signInForm");
        const signUpForm = document.getElementById("signUpForm");

        // Switch to Sign Up Form
        window.switchToSignUp = function () {
            signInForm.classList.add("hidden");
            signUpForm.classList.remove("hidden");
        };

        // Switch to Sign In Form
        window.switchToSignIn = function () {
            signUpForm.classList.add("hidden");
            signInForm.classList.remove("hidden");
        };

        // Handle Sign In
        document.getElementById("signIn").addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("signInEmail").value;
            const password = document.getElementById("signInPassword").value;

            // Mock Sign-In Logic
            if (email === "test@example.com" && password === "password") {
                alert("Sign In Successful!");
            } else {
                alert("Invalid email or password!");
            }
        });

        // Handle Sign Up
        document.getElementById("signUp").addEventListener("submit", (e) => {
            e.preventDefault();
            const firstName = document.getElementById("firstName").value;
            const lastName = document.getElementById("lastName").value;
            const email = document.getElementById("signUpEmail").value;
            const password = document.getElementById("signUpPassword").value;
            const confirmPassword = document.getElementById("confirmPassword").value;

            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }

            // Mock Sign-Up Logic
            alert(`Account created for ${firstName} ${lastName}!`);
            switchToSignIn();
        });
    });
      