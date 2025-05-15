// External JavaScript File: script.js

// Gallery image cycling
let currentImg = 0;
const images = document.querySelectorAll("#gallery img");

function nextImage() {
  images[currentImg].classList.remove("active");
  currentImg = (currentImg + 1) % images.length;
  images[currentImg].classList.add("active");
}

// Form validation
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passError = document.getElementById("passError");
const form = document.getElementById("signupForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;
  emailError.textContent = "";
  passError.textContent = "";

  if (!emailInput.value.includes("@")) {
    emailError.textContent = "Please enter a valid email address.";
    valid = false;
  }

  if (passInput.value.length < 8) {
    passError.textContent = "Password must be at least 8 characters.";
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully!");
    form.reset();
  }
});

// Real-time feedback
emailInput.addEventListener("input", () => {
  emailError.textContent = emailInput.value.includes("@")
    ? ""
    : "Invalid email format";
});

passInput.addEventListener("input", () => {
  passError.textContent = passInput.value.length >= 8 ? "" : "Min 8 characters";
});
