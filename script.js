document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("message").textContent = "Thank you! We'll contact you shortly.";
  this.reset();
});
