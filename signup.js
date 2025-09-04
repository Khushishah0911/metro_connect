document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('registerForm');
  const loginForm = document.getElementById('loginForm');

  // Temporary storage for registered user
  let registeredUser = {};

  // Handle Registration
  registerForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('regName').value.trim();
    const dob = document.getElementById('regDob').value;
    const phone = document.getElementById('regPhone').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;

    // Validate password match
    if (password !== confirmPassword) {
      alert("Passwords do not match ❌");
      return;
    }

    // Save user info (in memory for demo)
    registeredUser = { name, dob, phone, email, password };

    alert(`Registration successful! ✅\nWelcome, ${name}`);
    console.log("User registered:", registeredUser);
    window.location.href = "signin.html";
  });

  // Handle Login
  
});
