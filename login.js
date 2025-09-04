document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // In real application, send details to server
    console.log(`Attempting login with Email: ${email}, Password: ${password}`);

    loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const loginEmail = document.getElementById('loginEmail').value.trim();
    const loginPassword = document.getElementById('loginPassword').value;


    if (loginEmail === registeredUser.email && loginPassword === registeredUser.password) {
      alert(`Login successful! 🎉\nWelcome back, ${registeredUser.name}`);
      console.log("User logged in:", registeredUser);
      //Redirect to book ticket
      
    } else {
      alert("Invalid email or password ❌. Please register first.");
    }
  });
  
  if (email && password) {
      alert('Login successful! 🎉');
      console.log('User has been successfully signed in.');
      window.location.href = "Book_Ticket.html";
    } else {
      alert('Please enter valid email and password.');
    }
  });

});
