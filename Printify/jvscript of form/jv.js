document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("signupForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            
            let name = document.getElementById("name");
            let location = document.getElementById("location");
            let email = document.getElementById("email");
            let isValid = true;

            name.style.border = "";
            location.style.border = "";
            email.style.border = "";

            if (name.value.trim() === "") {
                alert("Please enter your name.");
                name.style.border = "5px solid red";
                isValid = false;
            }

            if (email.value.trim() === "") {
                alert("Please enter your email.");
                email.style.border = "5px solid red";
                isValid = false;
            }

            if (location.value.trim() === "") {
                alert("Please enter your location.");
                location.style.border = "5px solid red";
                isValid = false;
            }

            if (!isValid) return;

            alert("Press Ok!");

            setTimeout(function () {
                window.location.href = "../Printify/Main.html";
            }, 1000);
        });
    } else {
        console.error("Error: signupForm not found!");
    }
});
