const emailInput = document.getElementById("email-input");
const sendButton = document.getElementById("send-button");

emailInput.addEventListener("input", function () {
  if (this.value.includes("@")) {
    sendButton.style.display = "inline-block";
  } else {
    sendButton.style.display = "none";
  }
});