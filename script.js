function validateForm() {
  const form = document.getElementById('registrationForm');

  // Step 1: Built-in validation (required fields, email format)
  if (!form.checkValidity()) {
    form.reportValidity();
    return false;
  }

  // Step 2: Custom validation
  const phone = form.elements["phone"].value.trim();
  const email = form.elements["email"].value.trim();

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (!/^\d{10}$/.test(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return false;
  }

  // Step 3: Success
  alert("Form submitted successfully!");
  return true;
}
// Added simple validation code
