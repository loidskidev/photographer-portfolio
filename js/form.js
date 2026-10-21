// Contact Form: finds the fields, the button and the message line
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const sendBtn = document.getElementById("send-btn");
const formMessage = document.getElementById("form-message");

// Send Message: checks the fields when the button is clicked
sendBtn.addEventListener("click", function (e) {
  // Stops the form from sending and reloading the page
  e.preventDefault();

  if (nameInput.value == "") {
    formMessage.textContent = "Please enter your name.";
    formMessage.style.color = "red";
  } else if (emailInput.value.indexOf("@") == -1) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.style.color = "red";
  } else if (emailInput.value.indexOf(".") == -1) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.style.color = "red";
  } else if (messageInput.value == "") {
    formMessage.textContent = "Please write a short message.";
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = `Thank you ${nameInput.value}! I'll get back to you within two business days.`;
    formMessage.style.color = "green";

    // Empties the fields after sending
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  }
});
