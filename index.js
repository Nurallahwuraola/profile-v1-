document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let message = document.getElementById("message").value.trim();

  let isValid = true;

  // Name validation
  if (name.length < 5) {
    document.getElementById("nameError").textContent = "Name must be at least 5 characters";
    isValid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email validation
  if (!email.includes("@") || email.length < 6) {
    document.getElementById("emailError").textContent = "Enter a valid email";
    isValid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Phone validation
  if (phone.length !== 10 || isNaN(phone)) {
    document.getElementById("phoneError").textContent = "Phone must be exactly 10 digits";
    isValid = false;
  } else {
    document.getElementById("phoneError").textContent = "";
  }

  // Message validation
  if (message.length < 10) {
    document.getElementById("messageError").textContent = "Message must be at least 10 characters";
    isValid = false;
  } else {
    document.getElementById("messageError").textContent = "";
  }

  if (isValid) {
    document.getElementById("successMsg").textContent = "Form submitted successfully!";
    document.getElementById("contactForm").reset();
  }
});