const form = document.querySelector(".form-section form");
const message = document.querySelector("#form-message");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    message.textContent = "You're on the grid! Welcome to F1 Race Hub.";

});