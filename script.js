
  <script>
document.getElementById("registrationForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent page reload

  // Run validation first
  if (!validateForm()) {
    return; // stop if validation fails
  }

  // Collect values from form
  const formData = new FormData(this);
  let details = `
    <h3>Submitted Details</h3>
    <table border="1" cellpadding="8" style="border-collapse: collapse; margin-top: 10px;">
      <tr><td><b>First Name</b></td><td>${formData.get("firstName")}</td></tr>
      <tr><td><b>Last Name</b></td><td>${formData.get("lastName")}</td></tr>
      <tr><td><b>Father's Name</b></td><td>${formData.get("fatherName")}</td></tr>
      <tr><td><b>Mother's Name</b></td><td>${formData.get("motherName")}</td></tr>
      <tr><td><b>Date of Birth</b></td><td>${formData.get("dob")}</td></tr>
      <tr><td><b>Gender</b></td><td>${formData.get("gender")}</td></tr>
      <tr><td><b>Address</b></td><td>${formData.get("address")}</td></tr>
      <tr><td><b>Education 1</b></td><td>${formData.get("qual1")} - ${formData.get("inst1")} (${formData.get("year1")})</td></tr>
      <tr><td><b>Education 2</b></td><td>${formData.get("qual2")} - ${formData.get("inst2")} (${formData.get("year2")})</td></tr>
      <tr><td><b>Email</b></td><td>${formData.get("email")}</td></tr>
      <tr><td><b>Phone</b></td><td>${formData.get("phone")}</td></tr>
    </table>
  `;

  // Show details in message area
  document.getElementById("message").innerHTML = details;
});

function validateForm() {
  const form = document.getElementById('registrationForm');

  // Step 1: Built-in validation
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
</script>

