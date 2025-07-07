document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("message").textContent = "Thank you! We'll contact you shortly.";
  this.reset();
});

function openCalculator() {
  alert("Estimate: 5kW system = ₹2.5 Lakh (after subsidy)");
}

function bookRepair() {
  let name = prompt("Enter your name:");
  let date = prompt("Preferred service date:");
  if (name && date) {
    alert(`Thanks ${name}, your repair is booked for ${date}.`);
  }
}

function showLiveOutput() {
  alert("Live Output: 3.2 kW currently generating");
}

function comparePanels() {
  alert("Mono: 22% efficient | Poly: 17% efficient | Bifacial: 24% efficient");
}

function redirectToWhatsApp() {
  window.open("https://wa.me/91XXXXXXXXXX", "_blank");
}

function openPayment() {
  alert("Redirecting to payment gateway (mock).");
}

function sendEmail(form) {
  alert("Thanks for contacting us! We’ll reply by email shortly.");
  form.reset();
  return false;
}
